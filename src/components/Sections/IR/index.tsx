import React, { useState, useEffect, useRef } from 'react';
import { Container, Header, Title, Subtitle, Section } from './styles';
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
  const [mainNavVisible, setMainNavVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 각 섹션 참조 설정 후 Observer 초기화 및 스크롤 이벤트 추가
  useEffect(() => {
    // 스크롤 이벤트 처리 함수
    const handleScroll = () => {
      // 스크롤 진행률 계산 (0-1 사이의 값)
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = Math.max(0, Math.min(1, window.scrollY / windowHeight));
      setScrollProgress(scrolled);

      // 메인 네비게이션 바 표시 여부 감지 (window 객체로부터 직접 계산)
      const mainNav = document.querySelector('nav');
      if (mainNav) {
        const mainNavVisible = window.getComputedStyle(mainNav).transform !== 'matrix(1, 0, 0, 1, 0, -60)' && 
                               window.getComputedStyle(mainNav).opacity !== '0';
        setMainNavVisible(mainNavVisible);
      }

      // 각 섹션 보임 여부 직접 계산
      const currentPosition = window.scrollY + 100;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = sectionRefs.current[SECTIONS[i].id];
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    console.log('섹션 참조:', Object.keys(sectionRefs.current));
    
    // 약간 지연시켜 모든 요소가 DOM에 렌더링되도록 함
    const timer = setTimeout(() => {
      initializeObserver();
      handleScroll(); // 초기 상태 설정
    }, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // IntersectionObserver 초기화 함수
  const initializeObserver = () => {
    // 이전 observer 제거
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // 새 observer 생성
    const observer = new IntersectionObserver(
      (entries) => {
        // visibility가 가장 높은 섹션 찾기
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const targetId = visibleSections[0].target.id;
          if (targetId) {
            console.log('섹션 변경 (Observer):', targetId);
            setActiveSection(targetId);
          }
        }
      },
      {
        root: null, // viewport 기준
        rootMargin: '-20px 0px -20px 0px', // 여백 최소화
        threshold: [0.01, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5] // 매우 낮은 threshold 추가
      }
    );

    // 모든 섹션 관찰하기
    Object.entries(sectionRefs.current).forEach(([id, element]) => {
      if (element) {
        observer.observe(element);
        console.log(`섹션 관찰 시작: ${id}`);
      }
    });

    observerRef.current = observer;
  };

  // 특정 섹션으로 스크롤 이동 함수
  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      const offsetTop = section.offsetTop;
      
      // 먼저 활성 섹션을 설정하여 네비게이션 바가 즉시 업데이트되도록 함
      setActiveSection(sectionId);
      
      window.scrollTo({
        top: offsetTop - 100, // 네비게이션 바 높이 고려
        behavior: 'smooth'
      });
    }
  };

  // 현재 활성 섹션의 색상 가져오기
  const getActiveColor = () => {
    const activeItem = SECTIONS.find(section => section.id === activeSection);
    return activeItem ? activeItem.color : COLORS.RED;
  };

  // 이전/다음 섹션으로 이동하는 함수
  const navigateToNextSection = () => {
    const currentIndex = SECTIONS.findIndex(section => section.id === activeSection);
    if (currentIndex < SECTIONS.length - 1) {
      scrollToSection(SECTIONS[currentIndex + 1].id);
    }
  };

  const navigateToPrevSection = () => {
    const currentIndex = SECTIONS.findIndex(section => section.id === activeSection);
    if (currentIndex > 0) {
      scrollToSection(SECTIONS[currentIndex - 1].id);
    }
  };

  // 현재 활성 섹션의 제목 가져오기
  const getActiveSectionTitle = () => {
    const activeItem = SECTIONS.find(section => section.id === activeSection);
    return activeItem ? activeItem.title : '';
  };

  // 현재 활성 섹션의 인덱스 가져오기
  const getActiveSectionIndex = () => {
    return SECTIONS.findIndex(section => section.id === activeSection) + 1;
  };

  // 화면에 표시되는 진행 상태 콘솔에 출력 (디버깅용)
  useEffect(() => {
    console.log('활성 섹션 변경:', activeSection, '인덱스:', getActiveSectionIndex(), '진행률:', scrollProgress.toFixed(2));
  }, [activeSection, scrollProgress]);

  return (
    <Section>
      <Container>
        <Header>
          <Title>MUFI 사업 IR</Title>
          <Subtitle>투자자 및 파트너를 위한 정보</Subtitle>
        </Header>
        
        <IRNavigationBar 
          activeColor={getActiveColor()}
          mainNavVisible={mainNavVisible}
        >
          <NavigationArrow 
            onClick={navigateToPrevSection} 
            disabled={getActiveSectionIndex() === 1}
            activeColor={getActiveColor()}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
            </svg>
          </NavigationArrow>
          
          <SectionIndicator>
            <SectionNumber activeColor={getActiveColor()}>
              {getActiveSectionIndex()} / {SECTIONS.length}
            </SectionNumber>
            <SectionTitle>{getActiveSectionTitle()}</SectionTitle>
            <ProgressBar>
              <ProgressIndicator 
                progress={scrollProgress}
                activeColor={getActiveColor()}
              />
            </ProgressBar>
          </SectionIndicator>
          
          <NavigationArrow 
            onClick={navigateToNextSection} 
            disabled={getActiveSectionIndex() === SECTIONS.length}
            activeColor={getActiveColor()}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
            </svg>
          </NavigationArrow>
        </IRNavigationBar>
        
        <SectionContainer
          id="market-analysis"
          ref={el => sectionRefs.current['market-analysis'] = el}
          className="section-container"
          data-index="1"
        >
          <MarketAnalysis />
        </SectionContainer>
        
        <SectionContainer
          id="business-areas"
          ref={el => sectionRefs.current['business-areas'] = el}
          className="section-container"
          data-index="2"
        >
          <BusinessAreas />
        </SectionContainer>
        
        <SectionContainer
          id="business-model"
          ref={el => sectionRefs.current['business-model'] = el}
          className="section-container"
          data-index="3"
        >
          <BusinessModel />
        </SectionContainer>
        
        <SectionContainer
          id="ai-agent"
          ref={el => sectionRefs.current['ai-agent'] = el}
          className="section-container ai-agent-section"
          data-index="4"
        >
          <AIAgentCaseStudy mainNavVisible={mainNavVisible} />
        </SectionContainer>
        
        <SectionContainer
          id="relationship"
          ref={el => sectionRefs.current['relationship'] = el}
          className="section-container"
          data-index="5"
        >
          <RelationshipGraph />
        </SectionContainer>
        
        <SectionContainer
          id="expansion"
          ref={el => sectionRefs.current['expansion'] = el}
          className="section-container"
          data-index="6"
        >
          <ExpansionStrategy />
        </SectionContainer>
        
        <SectionContainer
          id="financial"
          ref={el => sectionRefs.current['financial'] = el}
          className="section-container"
          data-index="7"
        >
          <FinancialPlan />
        </SectionContainer>
        
        <SectionContainer
          id="investment"
          ref={el => sectionRefs.current['investment'] = el}
          className="section-container"
          data-index="8"
        >
          <InvestmentPlan />
        </SectionContainer>
        
        <SectionContainer
          id="team"
          ref={el => sectionRefs.current['team'] = el}
          className="section-container"
          data-index="9"
        >
          <TeamComposition />
        </SectionContainer>
        
        <SectionContainer
          id="contact"
          ref={el => sectionRefs.current['contact'] = el}
          className="section-container"
          data-index="10"
        >
          <Contact />
        </SectionContainer>
      </Container>
    </Section>
  );
};

// 섹션 컨테이너 스타일
const SectionContainer = styled.div`
  margin-bottom: 4rem;
  scroll-margin-top: 140px;
  min-height: 300px; /* 최소 높이 설정하여 작은 컨텐츠도 감지되도록 함 */
  padding-top: 1.5rem;
  position: relative;
  
  /* 섹션 번호 표시 (디버깅용) */
  &::before {
    content: attr(data-index);
    position: absolute;
    top: 0;
    left: -30px;
    width: 24px;
    height: 24px;
    background-color: rgba(0,0,0,0.1);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 12px;
    opacity: 0.5;
  }
`;

// 네비게이션 바 스타일
interface NavigationBarProps {
  activeColor: string;
  mainNavVisible: boolean;
}

const IRNavigationBar = styled.div<NavigationBarProps>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background-color: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: ${props => props.mainNavVisible ? '70px' : '0'}; /* 메인 네비게이션 바 표시 여부에 따라 위치 조정 */
  z-index: 60; /* AI 에이전트 네비게이션 바보다 높게 설정 */
  transition: all 0.3s ease;
  border-top: 3px solid ${props => props.activeColor};
  
  ${MEDIA_QUERIES.MOBILE} {
    padding: 0.75rem 1rem;
    top: ${props => props.mainNavVisible ? '60px' : '0'}; /* 모바일에서는 더 작은 위치 */
  }
`;

// 진행 상태 표시 바
const ProgressBar = styled.div`
  width: 80%;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

interface ProgressIndicatorProps {
  progress: number;
  activeColor: string;
}

const ProgressIndicator = styled.div<ProgressIndicatorProps>`
  height: 100%;
  width: ${props => props.progress * 100}%;
  background-color: ${props => props.activeColor};
  border-radius: 3px;
  transition: width 0.3s ease;
`;

interface ArrowProps {
  disabled: boolean;
  activeColor: string;
}

const NavigationArrow = styled.div<ArrowProps>`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props => props.disabled ? 'rgba(0, 0, 0, 0.05)' : `${props.activeColor}10`};
  color: ${props => props.disabled ? 'rgba(0, 0, 0, 0.2)' : props.activeColor};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.disabled ? 'rgba(0, 0, 0, 0.05)' : `${props.activeColor}20`};
    transform: ${props => props.disabled ? 'none' : 'scale(1.1)'};
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  ${MEDIA_QUERIES.MOBILE} {
    width: 30px;
    height: 30px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const SectionIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
`;

interface SectionNumberProps {
  activeColor: string;
}

const SectionNumber = styled.div<SectionNumberProps>`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.activeColor};
  margin-bottom: 0.25rem;
`;

const SectionTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${COLORS.BLACK};
  margin-bottom: 0.5rem;
  
  ${MEDIA_QUERIES.MOBILE} {
    font-size: 1rem;
  }
`; 