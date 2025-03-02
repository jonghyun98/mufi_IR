import React, { useState, useEffect, useRef } from 'react';
import { Container, Header, Title, Subtitle, Content, Section } from './styles';
import { RelationshipGraph } from './RelationshipGraph';
import { BusinessAreas } from './BusinessAreas';
import { MarketAnalysis } from './MarketAnalysis';
import { BusinessModel } from './BusinessModel';
import { ExpansionStrategy } from './ExpansionStrategy';
import { FinancialPlan } from './FinancialPlan';
import { TeamComposition } from './TeamComposition';
import { InvestmentPlan } from './InvestmentPlan';
import { Contact } from './Contact';
import { AIAgentCaseStudy } from './AIAgentCaseStudy';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

// 각 섹션별 정보 (ID, 제목, 색상)
const SECTIONS = [
  { id: 'market-analysis', title: '시장 분석', color: COLORS.BLUE },
  { id: 'business-areas', title: '사업 영역', color: COLORS.RED },
  { id: 'business-model', title: '비즈니스 모델', color: COLORS.GREEN },
  { id: 'ai-agent', title: 'AI 에이전트', color: COLORS.RED },
  { id: 'relationship', title: '사업 구조도', color: COLORS.BLUE },
  { id: 'expansion', title: '확장 전략', color: COLORS.GREEN },
  { id: 'financial', title: '재무 계획', color: COLORS.YELLOW },
  { id: 'investment', title: '투자 계획', color: COLORS.RED },
  { id: 'team', title: '팀 구성', color: COLORS.BLUE },
  { id: 'contact', title: '문의하기', color: COLORS.RED },
];

export const IR: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].id);
  const sectionRefs = useRef<{[key: string]: React.RefObject<HTMLDivElement>}>({});

  // 각 섹션에 대한 ref 초기화
  useEffect(() => {
    SECTIONS.forEach(section => {
      sectionRefs.current[section.id] = React.createRef<HTMLDivElement>();
    });
  }, []);

  // 스크롤 이벤트 처리 및 활성 섹션 설정
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 헤더 높이를 고려한 offset
      
      // 각 섹션을 확인하고 현재 보이는 섹션을 활성화
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = sectionRefs.current[SECTIONS[i].id]?.current;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };
    
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
    
    // 초기 실행
    setTimeout(handleScroll, 300); // 페이지 로드 후 약간의 지연을 두고 실행
    
    // 클린업 함수
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 특정 섹션으로 스크롤 이동 함수
  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current[sectionId]?.current;
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: offsetTop - 80, // 네비게이션 바 높이 고려
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };

  // 현재 활성 섹션의 색상 가져오기
  const getActiveColor = () => {
    const activeItem = SECTIONS.find(section => section.id === activeSection);
    return activeItem ? activeItem.color : COLORS.RED;
  };

  return (
    <Section>
      <Container>
        <Header>
          <Title>MUFI 사업 IR</Title>
          <Subtitle>투자자 및 파트너를 위한 정보</Subtitle>
        </Header>
        
        <IRNavigationBar activeColor={getActiveColor()}>
          {SECTIONS.map((section) => (
            <NavItem 
              key={section.id} 
              onClick={() => scrollToSection(section.id)}
              active={activeSection === section.id}
              activeColor={getActiveColor()}
            >
              {section.title}
            </NavItem>
          ))}
        </IRNavigationBar>
        
        <Content ref={sectionRefs.current['market-analysis']}>
          <MarketAnalysis />
        </Content>
        
        <Content ref={sectionRefs.current['business-areas']}>
          <BusinessAreas />
        </Content>
        
        <Content ref={sectionRefs.current['business-model']}>
          <BusinessModel />
        </Content>
        
        <Content ref={sectionRefs.current['ai-agent']}>
          <AIAgentCaseStudy />
        </Content>
        
        <Content ref={sectionRefs.current['relationship']}>
          <RelationshipGraph />
        </Content>
        
        <Content ref={sectionRefs.current['expansion']}>
          <ExpansionStrategy />
        </Content>
        
        <Content ref={sectionRefs.current['financial']}>
          <FinancialPlan />
        </Content>
        
        <Content ref={sectionRefs.current['investment']}>
          <InvestmentPlan />
        </Content>
        
        <Content ref={sectionRefs.current['team']}>
          <TeamComposition />
        </Content>
        
        <Content ref={sectionRefs.current['contact']}>
          <Contact />
        </Content>
      </Container>
    </Section>
  );
};

// 네비게이션 바 스타일
interface NavigationBarProps {
  activeColor: string;
}

const IRNavigationBar = styled.div<NavigationBarProps>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 70px; /* 메인 네비게이션 바 아래에 오도록 위치 조정 */
  z-index: 50; /* 메인 네비게이션 바(z-index: 1000) 보다 낮게 설정 */
  transition: all 0.3s ease;
  overflow-x: auto;
  border-top: 3px solid ${props => props.activeColor};
  
  &::-webkit-scrollbar {
    height: 3px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.activeColor};
    border-radius: 10px;
  }
  
  ${MEDIA_QUERIES.MOBILE} {
    justify-content: flex-start;
    padding: 0.75rem;
    top: 60px; /* 모바일에서는 더 작은 위치 */
  }
`;

interface NavItemProps {
  active: boolean;
  activeColor: string;
}

const NavItem = styled.div<NavItemProps>`
  display: inline-block;
  padding: 0.75rem 1rem;
  background-color: ${props => props.active ? props.activeColor : COLORS.WHITE};
  color: ${props => props.active ? COLORS.WHITE : COLORS.BLACK};
  border: 1px solid ${props => props.active ? props.activeColor : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  flex-shrink: 0;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? props.activeColor : `${props.activeColor}20`};
    color: ${props => props.active ? COLORS.WHITE : props.activeColor};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  ${MEDIA_QUERIES.MOBILE} {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
    white-space: nowrap;
  }
`; 