import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { COLORS } from '../../constants/colors';
import { MEDIA_QUERIES } from '../../constants/breakpoints';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'photobooth', label: '포토부스' },
  { id: 'ai-agent', label: 'AI Agent' },
  { id: 'platform', label: '소셜 플랫폼' },
  { id: 'contact', label: 'Contact' },
] as const;

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isIrPage = location.pathname === '/ir';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // IR 페이지에서만 네비게이션 바 숨김 처리
      if (isIrPage) {
        // 스크롤 방향 감지
        if (currentScrollY > lastScrollY) {
          // 아래로 스크롤할 때
          if (currentScrollY > 100) { // 어느 정도 스크롤된 후에만 숨김
            setIsNavVisible(false);
          }
        } else {
          // 위로 스크롤할 때
          setIsNavVisible(true);
        }
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);

      if (isHomePage) {
        // 현재 보이는 섹션 감지
        const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
        const scrollPosition = currentScrollY + window.innerHeight / 3;

        sections.forEach(section => {
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              setActiveSection(section.id);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, isIrPage, lastScrollY]);

  const handleNavClick = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <NavContainer 
      isScrolled={isScrolled} 
      isIrPage={isIrPage} 
      isVisible={isNavVisible}
    >
      <NavLogo as={Link} to="/">
        MUFI
      </NavLogo>
      <NavItems>
        {isHomePage && NAV_ITEMS.map(item => (
          <NavItem
            key={item.id}
            isActive={activeSection === item.id}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </NavItem>
        ))}
        {!isIrPage && <NavLink to="/ir">IR</NavLink>}
        {isIrPage && <NavLink to="/">홈으로</NavLink>}
      </NavItems>
    </NavContainer>
  );
};

const NavContainer = styled.nav<{ isScrolled: boolean; isIrPage: boolean; isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.isIrPage ? '60px' : '80px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: ${props => {
    if (props.isIrPage) {
      return props.isScrolled ? 'rgba(31, 31, 31, 0.85)' : 'rgba(31, 31, 31, 0.7)';
    } else {
      return props.isScrolled ? 'rgba(31, 31, 31, 0.95)' : 'transparent';
    }
  }};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: ${props => props.isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transform: translateY(${props => (props.isIrPage && !props.isVisible) ? '-100%' : '0'});
  opacity: ${props => (props.isIrPage && !props.isVisible) ? '0' : '1'};
`;

const NavLogo = styled.div`
  font-family: 'Pretendard';
  font-size: 1.75rem;
  font-weight: 700;
  color: ${COLORS.WHITE};
  cursor: pointer;
  transition: opacity 0.2s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  ${MEDIA_QUERIES.TABLET} {
    gap: 3rem;
  }
`;

const NavItem = styled.div<{ isActive: boolean }>`
  font-family: 'Pretendard';
  font-size: 1rem;
  color: ${COLORS.WHITE};
  opacity: ${props => props.isActive ? 1 : 0.7};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.isActive ? '100%' : '0'};
    height: 2px;
    background: ${COLORS.RED};
    transition: all 0.2s ease;
  }

  &:hover {
    opacity: 1;
    
    &::after {
      width: 100%;
    }
  }

  ${MEDIA_QUERIES.TABLET} {
    font-size: 1.125rem;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Pretendard';
  font-size: 1rem;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.RED};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  ${MEDIA_QUERIES.TABLET} {
    font-size: 1.125rem;
  }
`; 