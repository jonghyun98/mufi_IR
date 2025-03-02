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
  const sectionRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

  // 스크롤 이벤트 처리 및 활성 섹션 설정
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 헤더 높이를 고려한 offset
      
      // 각 섹션을 확인하고 현재 보이는 섹션을 활성화
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = sectionRefs.current[SECTIONS[i].id];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };
    
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
    
    // 초기 실행
    setTimeout(handleScroll, 500); // 페이지 로드 후 약간의 지연을 두고 실행
    
    // 클린업 함수
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 특정 섹션으로 스크롤 이동 함수
  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      const offsetTop = section.offsetTop;
      
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
    console.log('현재 섹션:', activeSection, '인덱스:', getActiveSectionIndex());
  }, [activeSection]);

  return (
    <Section>
      <Container>
        <Header>
          <Title>MUFI 사업 IR</Title>
          <Subtitle>투자자 및 파트너를 위한 정보</Subtitle>
        </Header>
        
        <IRNavigationBar activeColor={getActiveColor()}>
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
        >
          <MarketAnalysis />
        </SectionContainer>
        
        <SectionContainer
          id="business-areas"
          ref={el => sectionRefs.current['business-areas'] = el}
        >
          <BusinessAreas />
        </SectionContainer>
        
        <SectionContainer
          id="business-model"
          ref={el => sectionRefs.current['business-model'] = el}
        >
          <BusinessModel />
        </SectionContainer>
        
        <SectionContainer
          id="ai-agent"
          ref={el => sectionRefs.current['ai-agent'] = el}
        >
          <AIAgentCaseStudy />
        </SectionContainer>
        
        <SectionContainer
          id="relationship"
          ref={el => sectionRefs.current['relationship'] = el}
        >
          <RelationshipGraph />
        </SectionContainer>
        
        <SectionContainer
          id="expansion"
          ref={el => sectionRefs.current['expansion'] = el}
        >
          <ExpansionStrategy />
        </SectionContainer>
        
        <SectionContainer
          id="financial"
          ref={el => sectionRefs.current['financial'] = el}
        >
          <FinancialPlan />
        </SectionContainer>
        
        <SectionContainer
          id="investment"
          ref={el => sectionRefs.current['investment'] = el}
        >
          <InvestmentPlan />
        </SectionContainer>
        
        <SectionContainer
          id="team"
          ref={el => sectionRefs.current['team'] = el}
        >
          <TeamComposition />
        </SectionContainer>
        
        <SectionContainer
          id="contact"
          ref={el => sectionRefs.current['contact'] = el}
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
`;

// 네비게이션 바 스타일
interface NavigationBarProps {
  activeColor: string;
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
  top: 70px; /* 메인 네비게이션 바 아래에 오도록 위치 조정 */
  z-index: 50; /* 메인 네비게이션 바(z-index: 1000) 보다 낮게 설정 */
  transition: all 0.3s ease;
  border-top: 3px solid ${props => props.activeColor};
  
  ${MEDIA_QUERIES.MOBILE} {
    padding: 0.75rem 1rem;
    top: 60px; /* 모바일에서는 더 작은 위치 */
  }
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
  
  ${MEDIA_QUERIES.MOBILE} {
    font-size: 1rem;
  }
`; 