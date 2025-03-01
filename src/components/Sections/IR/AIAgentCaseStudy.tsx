import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

export const AIAgentCaseStudy: React.FC = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  // 애니메이션과 차트 처리를 위한 useEffect
  useEffect(() => {
    // 애니메이션 효과를 위한 초기 설정
    if (animationRef.current) {
      const current = animationRef.current;
      (current as HTMLElement).style.opacity = '0';
      (current as HTMLElement).style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        (current as HTMLElement).style.opacity = '1';
        (current as HTMLElement).style.transform = 'translateY(0)';
      }, 300);
    }
    
    // 차트 애니메이션 처리
    if (chartRef.current) {
      const bars = chartRef.current.querySelectorAll('.market-bar');
      bars.forEach((bar) => {
        // 애니메이션 삭제하여 처음부터 올바른 높이로 표시
        const height = bar.getAttribute('data-height');
        if (height) {
          (bar as HTMLElement).style.height = height;
        }
      });
    }
    
    return () => {
      // 클린업 함수
      if (animationRef.current) {
        (animationRef.current as HTMLElement).style.opacity = '0';
      }
      
      if (chartRef.current) {
        const bars = chartRef.current.querySelectorAll('.market-bar');
        bars.forEach((bar) => {
          (bar as HTMLElement).style.height = ''; 
        });
      }
    };
  }, []);

  // 스크롤 이벤트 처리 및 활성 섹션 설정
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 헤더 높이를 고려한 offset
      
      // 각 섹션 요소 가져오기
      const sections = [
        'introduction',
        'key-metrics',
        'challenges',
        'solutions',
        'case-study',
        'recursive-system',
        'testimonials',
        'mbc-partnership'
      ];
      
      // 현재 스크롤 위치에 따라 활성 섹션 설정
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
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
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: offsetTop - 80, // 네비게이션 바 높이 고려
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };

  return (
    <SectionContent>
      <SectionHeading>
        <HeadingLine />
        <HeadingText>AI 에이전트 <HighlightText>활용 사례</HighlightText></HeadingText>
        <HeadingLine />
      </SectionHeading>
      
      <NavigationBar>
        <NavItem 
          href="#introduction" 
          onClick={(e) => { e.preventDefault(); scrollToSection('introduction'); }}
          active={activeSection === 'introduction'}
        >
          소개
        </NavItem>
        <NavItem 
          href="#key-metrics" 
          onClick={(e) => { e.preventDefault(); scrollToSection('key-metrics'); }}
          active={activeSection === 'key-metrics'}
        >
          핵심 지표
        </NavItem>
        <NavItem 
          href="#challenges" 
          onClick={(e) => { e.preventDefault(); scrollToSection('challenges'); }}
          active={activeSection === 'challenges'}
        >
          문제점
        </NavItem>
        <NavItem 
          href="#solutions" 
          onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}
          active={activeSection === 'solutions'}
        >
          솔루션
        </NavItem>
        <NavItem 
          href="#case-study" 
          onClick={(e) => { e.preventDefault(); scrollToSection('case-study'); }}
          active={activeSection === 'case-study'}
        >
          적용 사례
        </NavItem>
        <NavItem 
          href="#recursive-system" 
          onClick={(e) => { e.preventDefault(); scrollToSection('recursive-system'); }}
          active={activeSection === 'recursive-system'}
        >
          자동화 개선
        </NavItem>
        <NavItem 
          href="#testimonials" 
          onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
          active={activeSection === 'testimonials'}
        >
          파트너 피드백
        </NavItem>
        <NavItem 
          href="#mbc-partnership" 
          onClick={(e) => { e.preventDefault(); scrollToSection('mbc-partnership'); }}
          active={activeSection === 'mbc-partnership'}
        >
          MBC 협력
        </NavItem>
      </NavigationBar>
      
      <CaseStudyIntro id="introduction">
        <OverviewText>
          MUFI의 AI 에이전트 기술은 포토부스 운영의 여러 측면을 <HighlightText>자동화하고 최적화</HighlightText>하여 
          운영 비용 절감과 사용자 경험 향상을 동시에 실현했습니다. 아래는 실제 적용 사례와 그 결과를 보여줍니다.
        </OverviewText>
      </CaseStudyIntro>

      <RelationButtonContainer>
        <RelationButton href="#recursive-system">
          <RelationButtonIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" fill="currentColor"/>
            </svg>
          </RelationButtonIcon>
          자동화 시스템의 재귀적 개선 프로세스 알아보기
        </RelationButton>
        
        <RelationButton href="#mbc-partnership" style={{ marginLeft: '1rem' }}>
          <RelationButtonIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" fill="currentColor"/>
            </svg>
          </RelationButtonIcon>
          MBC와의 전략적 협력 알아보기
        </RelationButton>
      </RelationButtonContainer>

      <KeyMetricsContainer id="key-metrics">
        <MetricCard>
          <MetricIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2 0v8.99h7c-.53-4.12-3.28-7.79-7-8.99zm0 11.01V22c3.72-1.2 6.47-4.87 7-8.99h-7z" fill="currentColor"/>
            </svg>
          </MetricIcon>
          <MetricValue>52%</MetricValue>
          <MetricLabel>운영 비용 절감</MetricLabel>
          <MetricSubtext>인건비와 자재비 포함 전체 운영 비용 절감률</MetricSubtext>
        </MetricCard>

        <MetricCard>
          <MetricIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9zm-1.7 4.9c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z" fill="currentColor"/>
            </svg>
          </MetricIcon>
          <MetricValue>97%</MetricValue>
          <MetricLabel>포토부스 가동률</MetricLabel>
          <MetricSubtext>업계 평균 82% 대비 15% 향상된 수치</MetricSubtext>
        </MetricCard>

        <MetricCard>
          <MetricIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" fill="currentColor"/>
            </svg>
          </MetricIcon>
          <MetricValue>4.2분</MetricValue>
          <MetricLabel>문제 대응 시간</MetricLabel>
          <MetricSubtext>기존 대응 시간 36.8분에서 대폭 감소</MetricSubtext>
        </MetricCard>

        <MetricCard>
          <MetricIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12V5zM7 7.25h2.5V6.5H7V5h4v3.75H8.5v.75H11V11H7V7.25zM19 13l-6 6-4-4-4 4v-2.5l4-4 4 4 6-6V13z" fill="currentColor"/>
            </svg>
          </MetricIcon>
          <MetricValue>94%</MetricValue>
          <MetricLabel>고객 만족도</MetricLabel>
          <MetricSubtext>이전 만족도 67%에서 대폭 개선</MetricSubtext>
        </MetricCard>
      </KeyMetricsContainer>

      <ChallengeContainer id="challenges">
        <ChallengeTitle>기존 운영 방식의 문제점</ChallengeTitle>
        <ChallengeDescription>
          MUFI가 AI 에이전트를 개발하기 전, 포토부스 물류/유통 및 운영은 다음과 같은 문제점을 가지고 있었습니다:
        </ChallengeDescription>
        <ChallengeList>
          <ChallengeItem>
            <ChallengeIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8 0 4.42-3.58 8-8 8zm4-9.5h-3v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3h-3c-.28 0-.5.22-.5.5s.22.5.5.5h3v3c0 .28.22.5.5.5s.5-.22.5-.5v-3h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z" fill="currentColor"/>
              </svg>
            </ChallengeIcon>
            <ChallengeText>비효율적인 물류 시스템으로 인한 높은 운송 비용 (평균 월 68만원/대)</ChallengeText>
          </ChallengeItem>
          <ChallengeItem>
            <ChallengeIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8 0 4.42-3.58 8-8 8zm4-9.5h-3v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3h-3c-.28 0-.5.22-.5.5s.22.5.5.5h3v3c0 .28.22.5.5.5s.5-.22.5-.5v-3h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z" fill="currentColor"/>
              </svg>
            </ChallengeIcon>
            <ChallengeText>업무 시간 배정 체계 부재로 인한 비효율적 인력 운용 (업무 효율성 54%)</ChallengeText>
          </ChallengeItem>
          <ChallengeItem>
            <ChallengeIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8 0 4.42-3.58 8-8 8zm4-9.5h-3v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3h-3c-.28 0-.5.22-.5.5s.22.5.5.5h3v3c0 .28.22.5.5.5s.5-.22.5-.5v-3h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z" fill="currentColor"/>
              </svg>
            </ChallengeIcon>
            <ChallengeText>유통망 최적화 부재로 인한 포토부스 배치 비효율성 (설치 적합성 62%)</ChallengeText>
          </ChallengeItem>
          <ChallengeItem>
            <ChallengeIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8 0 4.42-3.58 8-8 8zm4-9.5h-3v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3h-3c-.28 0-.5.22-.5.5s.22.5.5.5h3v3c0 .28.22.5.5.5s.5-.22.5-.5v-3h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z" fill="currentColor"/>
              </svg>
            </ChallengeIcon>
            <ChallengeText>데이터 수집 및 분석 체계 부재로 인한 운영 최적화 어려움</ChallengeText>
          </ChallengeItem>
        </ChallengeList>
      </ChallengeContainer>

      <SolutionContainer id="solutions">
        <SolutionTitle>MUFI AI 에이전트 솔루션</SolutionTitle>
        <SolutionDescription>
          MUFI의 AI 에이전트 솔루션은 포토부스 물류/유통 최적화와 운영 효율성을 극대화하기 위해 다음과 같은 혁신적인 기능을 제공합니다:
        </SolutionDescription>
        <SolutionList>
          <SolutionItem>
            <SolutionIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
              </svg>
            </SolutionIcon>
            <SolutionText>
              <strong>AI 기반 물류 최적화 시스템:</strong> 수요 예측과 경로 최적화를 통한 운송 비용 62% 절감 (월 26만원/대)
            </SolutionText>
          </SolutionItem>
          <SolutionItem>
            <SolutionIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
              </svg>
            </SolutionIcon>
            <SolutionText>
              <strong>지능형 업무 시간 배정 체계:</strong> 수요 패턴 기반 최적 업무 시간 자동 배정으로 효율성 93%로 향상
            </SolutionText>
          </SolutionItem>
          <SolutionItem>
            <SolutionIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
              </svg>
            </SolutionIcon>
            <SolutionText>
              <strong>유통망 최적화 엔진:</strong> 위치 기반 데이터 분석을 통한 최적 포토부스 배치로 설치 적합성 95%로 향상
            </SolutionText>
          </SolutionItem>
          <SolutionItem>
            <SolutionIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
              </svg>
            </SolutionIcon>
            <SolutionText>
              <strong>자동화된 데이터 수집 파이프라인:</strong> 실시간 운영 데이터 축적 및 분석으로 지속적인 시스템 최적화 실현
            </SolutionText>
          </SolutionItem>
        </SolutionList>
      </SolutionContainer>

      <CaseStudyShowcase id="case-study">
        <CaseStudyTitle>
          <span>실제 적용 사례:</span> 서울 강남 카페 10개점 AI 에이전트 도입
        </CaseStudyTitle>
        
        <ImplementationTimetable>
          <ImplementationTitle>물류/데이터 시스템 구현 일정</ImplementationTitle>
          <ImplementationPhases>
            <ImplementationPhase completed={true}>
              <PhaseDate>2025.02</PhaseDate>
              <PhaseDot />
              <PhaseLabel>초기 AI 설계</PhaseLabel>
              <PhaseDescription>물류 최적화 알고리즘 개발 및 데이터 수집 파이프라인 설계</PhaseDescription>
            </ImplementationPhase>
            <PhaseConnector completed={true} />
            <ImplementationPhase completed={true}>
              <PhaseDate>2025.05</PhaseDate>
              <PhaseDot />
              <PhaseLabel>파일럿 테스트</PhaseLabel>
              <PhaseDescription>강남 3개 지점 대상 초기 시스템 테스트 (38% 물류비 절감 확인)</PhaseDescription>
            </ImplementationPhase>
            <PhaseConnector completed={true} />
            <ImplementationPhase completed={true}>
              <PhaseDate>2025.08</PhaseDate>
              <PhaseDot />
              <PhaseLabel>확장 적용</PhaseLabel>
              <PhaseDescription>10개 지점 전체 적용 및 시스템 안정화 (월 8TB 데이터 수집 시작)</PhaseDescription>
            </ImplementationPhase>
            <PhaseConnector completed={false} />
            <ImplementationPhase completed={false}>
              <PhaseDate>2026.01</PhaseDate>
              <PhaseDot />
              <PhaseLabel>고도화</PhaseLabel>
              <PhaseDescription>예측 정확도 향상 및 데이터 분석 자동화 (진행 중)</PhaseDescription>
            </ImplementationPhase>
          </ImplementationPhases>
        </ImplementationTimetable>
        
        <TimelineDiagram>
          <TimelinePoint>
            <TimelineDate>Before</TimelineDate>
            <TimelineContent>
              <TimelineMetric>물류 운송 비용: 월 68만원/대</TimelineMetric>
              <TimelineMetric>유통망 효율성: 62% (위치 최적화)</TimelineMetric>
              <TimelineMetric>업무 시간 효율성: 54%</TimelineMetric>
              <TimelineMetric>데이터 수집 범위: 기본 판매 데이터만</TimelineMetric>
            </TimelineContent>
          </TimelinePoint>
          
          <TimelineArrow>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" fill="currentColor"/>
            </svg>
          </TimelineArrow>
          
          <TimelinePoint>
            <TimelineDate>After (3개월)</TimelineDate>
            <TimelineContent>
              <TimelineMetric>물류 운송 비용: 월 26만원/대 (↓62%)</TimelineMetric>
              <TimelineMetric>유통망 효율성: 95% (↑33%)</TimelineMetric>
              <TimelineMetric>업무 시간 효율성: 93% (↑39%)</TimelineMetric>
              <TimelineMetric>데이터 수집 범위: 17개 운영 지표 자동 수집</TimelineMetric>
            </TimelineContent>
          </TimelinePoint>
        </TimelineDiagram>
        
        <TechnicalImplementation>
          <TechImplementTitle>기술적 구현 방법</TechImplementTitle>
          <TechImplementDetails>
            <TechItem>
              <TechIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58z" fill="currentColor"/>
                </svg>
              </TechIcon>
              <TechTitle>물류 최적화 알고리즘</TechTitle>
              <TechDescription>
                유클리드 거리와 시간 변수를 고려한 K-means 클러스터링 기반 경로 최적화 알고리즘을 구현했습니다. 
                Python과 scikit-learn을 활용하여 지역별 수요예측 모델을 구축했으며, 실시간 교통 API와 연동해 
                운송 경로를 동적으로 최적화합니다.
              </TechDescription>
            </TechItem>
            
            <TechItem>
              <TechIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.44 16c-1.81 0-3.28-1.54-3.28-3.43 0-1.89 1.47-3.43 3.28-3.43s3.28 1.54 3.28 3.43c0 1.9-1.47 3.43-3.28 3.43zm7.18-9.92c-2.05 1.06-4.85 1.06-6.9 0-2.07-1.07-2.07-2.79 0-3.86 2.05-1.06 4.85-1.06 6.9 0 2.08 1.08 2.08 2.8 0 3.86z" fill="currentColor"/>
                </svg>
              </TechIcon>
              <TechTitle>데이터 수집 파이프라인</TechTitle>
              <TechDescription>
                각 포토부스에 센서와 IoT 장치를 설치하여 운영 데이터를 실시간으로 수집합니다. 
                AWS IoT Core와 Kinesis를 활용한 데이터 스트리밍 파이프라인을 구축하고, 
                S3와 Redshift를 통해 데이터 웨어하우스를 운영합니다. 데이터 분석은 자체 개발한 
                Python 라이브러리를 통해 자동화되어 있습니다.
              </TechDescription>
            </TechItem>
          </TechImplementDetails>
        </TechnicalImplementation>

        <ROICalculation>
          <ROITitle>투자 수익률 (ROI) 분석</ROITitle>
          <ROIContent>
            <ROIItem>
              <ROILabel>AI 에이전트 도입 비용</ROILabel>
              <ROIValue>대당 480만원 (일회성)</ROIValue>
            </ROIItem>
            <ROIItem>
              <ROILabel>물류 비용 절감액</ROILabel>
              <ROIValue>대당 42만원/월</ROIValue>
            </ROIItem>
            <ROIItem>
              <ROILabel>업무 효율성 향상 가치</ROILabel>
              <ROIValue>대당 31만원/월</ROIValue>
            </ROIItem>
            <ROIItem>
              <ROILabel>추가 수집 데이터 가치</ROILabel>
              <ROIValue>대당 월 38만원</ROIValue>
            </ROIItem>
            <ROIItem>
              <ROILabel>투자 회수 기간</ROILabel>
              <ROIValue>4.3개월</ROIValue>
            </ROIItem>
            <ROIItem>
              <ROILabel>연간 순이익 증가</ROILabel>
              <ROIValue>대당 1,332만원</ROIValue>
            </ROIItem>
          </ROIContent>
        </ROICalculation>

        <DataValueSection>
          <DataValueTitle>수집 데이터의 추가 가치</DataValueTitle>
          <DataValueDescription>
            AI 에이전트를 통해 MUFI는 포토부스 운영의 다양한 측면에서 귀중한 데이터를 자동으로 수집하게 되었습니다. 
            이 데이터는 운영 최적화뿐만 아니라 새로운 비즈니스 인사이트를 제공합니다.
          </DataValueDescription>
          <DataValueGrid>
            <DataValueCard>
              <DataValueIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="currentColor"/>
                  <path d="M7 12h2v5H7v-5zm8-5h2v10h-2V7zm-4 7h2v3h-2v-3zm0-4h2v2h-2v-2z" fill="currentColor"/>
                </svg>
              </DataValueIcon>
              <DataValueLabel>고객 행동 패턴</DataValueLabel>
              <DataValueMetric>일 15,400개 데이터 포인트</DataValueMetric>
              <DataValueText>위치별, 시간별 사용자 활동 패턴을 분석하여 마케팅 전략 및 제품 개발에 활용</DataValueText>
            </DataValueCard>
            <DataValueCard>
              <DataValueIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" fill="currentColor"/>
                </svg>
              </DataValueIcon>
              <DataValueLabel>물류 효율성 지표</DataValueLabel>
              <DataValueMetric>97.3% 예측 정확도</DataValueMetric>
              <DataValueText>최적 배송 경로, 수요 예측, 장비 활용도 데이터를 통한 지속적 물류 시스템 개선</DataValueText>
            </DataValueCard>
            <DataValueCard>
              <DataValueIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58z" fill="currentColor"/>
                </svg>
              </DataValueIcon>
              <DataValueLabel>운영 최적화 인사이트</DataValueLabel>
              <DataValueMetric>월 32개 개선 기회 감지</DataValueMetric>
              <DataValueText>운영 패턴 분석으로 인력 배치, 유지보수, 소모품 관리 최적화를 위한 지속적 인사이트 제공</DataValueText>
            </DataValueCard>
          </DataValueGrid>
        </DataValueSection>
      </CaseStudyShowcase>

      <RecursiveImprovementSystem id="recursive-system">
        <RecursiveSystemTitle>
          <RecursiveSystemIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" fill="currentColor"/>
            </svg>
          </RecursiveSystemIcon>
          자동화 시스템의 <HighlightText>재귀적 개선</HighlightText> 프로세스
        </RecursiveSystemTitle>

        <RecursiveSystemDescription>
          MUFI의 AI 에이전트는 단순한 자동화 도구를 넘어, 스스로 학습하고 개선하는 재귀적 시스템을 구현합니다. 
          축적된 물류/유통 데이터와 운영 효율성 지표를 지속적으로 분석하여 AI 모델을 재훈련함으로써 시간이 지날수록 
          더 효율적인 물류 시스템 최적화와 업무 시간 배정 능력이 향상됩니다.
        </RecursiveSystemDescription>

        <RecursiveCycleContainer>
          <RecursiveCycle>
            <CycleStep>
              <CycleIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/>
                </svg>
              </CycleIcon>
              <CycleStepNumber>01</CycleStepNumber>
              <CycleTitle>데이터 수집</CycleTitle>
              <CycleDescription>
                물류 비용, 배송 경로, 업무 시간 효율성, 유통망 최적화 지표 등 17개 핵심 운영 데이터를 자동으로 수집합니다.
              </CycleDescription>
            </CycleStep>

            <CycleArrow>→</CycleArrow>

            <CycleStep>
              <CycleIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" fill="currentColor"/>
                </svg>
              </CycleIcon>
              <CycleStepNumber>02</CycleStepNumber>
              <CycleTitle>분석 및 패턴 감지</CycleTitle>
              <CycleDescription>
                AI 알고리즘이 축적된 데이터를 분석하여 최적의 운영 패턴과 개선이 필요한 문제점을 자동으로 감지합니다.
              </CycleDescription>
            </CycleStep>

            <CycleArrow>→</CycleArrow>

            <CycleStep>
              <CycleIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5zm-5-3c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-3zm-7 2H3v3h2v-3zm12 0h2v3h-2v-3zM8 5v2h8V5H8zm5 14h-2v2h2v-2zm-4 0H7v2h2v-2zm8 0h-2v2h2v-2z" fill="currentColor"/>
                </svg>
              </CycleIcon>
              <CycleStepNumber>03</CycleStepNumber>
              <CycleTitle>모델 재훈련</CycleTitle>
              <CycleDescription>
                새로운 데이터와 패턴을 바탕으로 AI 모델을 재훈련하여 예측 정확도와 문제 해결 능력을 향상시킵니다.
              </CycleDescription>
            </CycleStep>

            <CycleArrow>→</CycleArrow>

            <CycleStep>
              <CycleIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor"/>
                </svg>
              </CycleIcon>
              <CycleStepNumber>04</CycleStepNumber>
              <CycleTitle>자동 업데이트</CycleTitle>
              <CycleDescription>
                개선된 AI 모델을 모든 포토부스에 자동으로 배포하여 시스템 전체의 성능을 지속적으로 향상시킵니다.
              </CycleDescription>
            </CycleStep>
          </RecursiveCycle>

          <CycleResult>
            <ResultTitle>개선 효과</ResultTitle>
            <ResultGrid>
              <ResultCard>
                <ResultIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" fill="currentColor"/>
                  </svg>
                </ResultIcon>
                <ResultValue>94%</ResultValue>
                <ResultLabel>물류 비용 예측 정확도</ResultLabel>
                <ResultDescription>
                  수요 패턴과 최적 경로 분석을 통해 물류 비용 예측 정확도가 초기 67%에서 94%로 향상되었습니다.
                </ResultDescription>
              </ResultCard>

              <ResultCard>
                <ResultIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" fill="currentColor"/>
                  </svg>
                </ResultIcon>
                <ResultValue>12TB</ResultValue>
                <ResultLabel>월간 축적 데이터량</ResultLabel>
                <ResultDescription>
                  다양한 운영 측면에서 수집된 데이터가 MUFI의 새로운 비즈니스 자산으로 가치를 창출합니다.
                </ResultDescription>
              </ResultCard>

              <ResultCard>
                <ResultIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" fill="currentColor"/>
                  </svg>
                </ResultIcon>
                <ResultValue>93%</ResultValue>
                <ResultLabel>업무 시간 최적화율</ResultLabel>
                <ResultDescription>
                  수요 패턴과 업무 효율성 데이터를 기반으로 한 시간 배정 체계가 초기 54%에서 93%로 개선되었습니다.
                </ResultDescription>
              </ResultCard>
            </ResultGrid>
          </CycleResult>
        </RecursiveCycleContainer>

        <AILearningPath>
          <LearningPathTitle>AI 자율 학습 진화 단계</LearningPathTitle>
          <LearningStages>
            <LearningStage current={false}>
              <StageNumber>1단계</StageNumber>
              <StageLine />
              <StageTitle>반응형 자동화</StageTitle>
              <StageDescription>문제 발생 시 사전 정의된 프로토콜에 따라 대응 (기 구현)</StageDescription>
            </LearningStage>
            
            <LearningStage current={true}>
              <StageNumber>2단계</StageNumber>
              <StageLine />
              <StageTitle>예측형 최적화</StageTitle>
              <StageDescription>데이터 분석을 통해 물류 비용과 운영 효율성 최적화 (현재 단계)</StageDescription>
              <CurrentStageMarker>현재 단계</CurrentStageMarker>
            </LearningStage>
            
            <LearningStage current={false}>
              <StageNumber>3단계</StageNumber>
              <StageLine />
              <StageTitle>지능형 조정</StageTitle>
              <StageDescription>시장 환경과 비즈니스 조건에 따라 자율적으로 운영 매개변수 조정 (2024년 목표)</StageDescription>
            </LearningStage>
            
            <LearningStage current={false}>
              <StageNumber>4단계</StageNumber>
              <StageLine />
              <StageTitle>제한적 자기진화</StageTitle>
              <StageDescription>정해진 파라미터 내에서 최적화 알고리즘 자체를 개선 (2025년 이후 개발 계획)</StageDescription>
            </LearningStage>
          </LearningStages>
          <LearningPathNote>
            * AI 자율 운영은 항상 인간 전문가의 감독 하에 이루어지며, 중요 의사결정과 비즈니스 전략은 인간에 의해 결정됩니다.
          </LearningPathNote>
        </AILearningPath>
      </RecursiveImprovementSystem>

      <CustomerTestimonials id="testimonials">
        <TestimonialsTitle>파트너 피드백</TestimonialsTitle>
        <TestimonialCards>
          <TestimonialCard>
            <TestimonialQuote>
              "MUFI의 AI 에이전트 솔루션 도입 후, 물류 비용이 놀랍게 감소했습니다. 이전에는 포토부스 이동과 설치에 많은 비용이 들었지만, AI가 최적화된 배송 경로와 일정을 제안해 비용을 60% 이상 절감했습니다. 또한 내부 업무 시간 배정 체계가 최적화되어 인력 효율성이 크게 향상되었습니다."
            </TestimonialQuote>
            <TestimonialAuthor>김민지 - 카페 히어로우 대표</TestimonialAuthor>
          </TestimonialCard>
          
          <TestimonialCard>
            <TestimonialQuote>
              "MUFI AI 에이전트의 가장 큰 장점은 단순히 비용 절감뿐만 아니라 운영 데이터를 지속적으로 축적하고 분석한다는 점입니다. 이를 통해 소비자 트렌드를 파악하고 사업 방향을 결정하는데 큰 도움이 되었습니다. 물류 체계가 최적화되면서 우리는 핵심 비즈니스에 더 집중할 수 있게 되었습니다."
            </TestimonialQuote>
            <TestimonialAuthor>이준호 - 스테이 카페 운영자</TestimonialAuthor>
          </TestimonialCard>
        </TestimonialCards>
      </CustomerTestimonials>

      <StrategicPartnershipSection id="mbc-partnership">
        <PartnershipTitle>
          <PartnershipTitleIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" fill="currentColor"/>
            </svg>
          </PartnershipTitleIcon>
          MBC와의 <HighlightText>전략적 협력</HighlightText> 추진
        </PartnershipTitle>

        <PartnershipDescription>
          MUFI는 한국의 대표 방송사인 MBC와 전략적 협력을 추진하여 AI 기술과 미디어 데이터를 결합한 혁신적인 비즈니스 모델을 구축하고 있습니다. 
          방송사의 방대한 데이터와 인프라, MUFI의 AI 기술력이 만나 새로운 미디어 서비스 생태계를 조성할 예정입니다.
        </PartnershipDescription>

        <PartnershipGrid>
          <PartnershipCard>
            <PartnershipCardIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z" fill="currentColor"/>
              </svg>
            </PartnershipCardIcon>
            <PartnershipCardTitle>MBC 대형 창고 입주</PartnershipCardTitle>
            <PartnershipCardContent>
              <p>MBC 신성장전략국이 보유한 넓은 창고 공간을 활용하여 MUFI의 AI 솔루션 개발 및 테스트 환경을 구축합니다. 물리적 인프라를 확보함으로써 실증 기반 R&D와 실험이 가능해집니다.</p>
              <PartnershipHighlight>신속한 의사결정으로 빠른 입주 가능</PartnershipHighlight>
            </PartnershipCardContent>
          </PartnershipCard>

          <PartnershipCard>
            <PartnershipCardIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" fill="currentColor"/>
              </svg>
            </PartnershipCardIcon>
            <PartnershipCardTitle>방대한 미디어 데이터 활용</PartnershipCardTitle>
            <PartnershipCardContent>
              <p>MBC가 보유한 뉴스 영상, 취재 자료, 아카이브 등 방대한 미디어 데이터를 AI 학습 및 시스템 개발에 활용합니다. 언론사 데이터는 AI 모델 개발에 매우 가치 있는 자산입니다.</p>
              <PartnershipHighlight>일반적으로 접근 어려운 고품질 데이터 확보</PartnershipHighlight>
            </PartnershipCardContent>
          </PartnershipCard>

          <PartnershipCard>
            <PartnershipCardIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="currentColor"/>
              </svg>
            </PartnershipCardIcon>
            <PartnershipCardTitle>AI 시스템 파일럿 개발</PartnershipCardTitle>
            <PartnershipCardContent>
              <p>MBC 신성장전략국의 직속 프로젝트로 AI 기반 미디어 자산 관리, 콘텐츠 자동화, 데이터 분석 시스템 등을 파일럿으로 개발합니다. 복잡한 내부 승인 없이 빠른 실행이 가능합니다.</p>
              <PartnershipHighlight>성공 시 타 방송사·언론사 확장 판매 가능</PartnershipHighlight>
            </PartnershipCardContent>
          </PartnershipCard>

          <PartnershipCard>
            <PartnershipCardIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" fill="currentColor"/>
              </svg>
            </PartnershipCardIcon>
            <PartnershipCardTitle>미디어 비즈니스 확장</PartnershipCardTitle>
            <PartnershipCardContent>
              <p>개발된 솔루션을 바탕으로 지역 축제, 공공행사, 문화산업 프로젝트 등으로 사업 영역을 확장합니다. MBC의 네트워크를 활용해 MUFI의 포토부스와 AI 솔루션의 판로를 넓힐 수 있습니다.</p>
              <PartnershipHighlight>대기업 방송사 레퍼런스로 신뢰도 상승</PartnershipHighlight>
            </PartnershipCardContent>
          </PartnershipCard>
        </PartnershipGrid>

        <ImplementationRoadmap>
          <RoadmapTitle>협력 로드맵</RoadmapTitle>
          <RoadmapStages>
            <RoadmapStage>
              <RoadmapStageIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/>
                </svg>
              </RoadmapStageIcon>
              <RoadmapStageNumber>01</RoadmapStageNumber>
              <RoadmapStageTitle>단기: 입주 및 R&D</RoadmapStageTitle>
              <RoadmapStageDescription>
                MBC 창고 공간에 입주하여 공동 R&D 환경을 구축하고, 초기 데이터 분석 및 협력 과제를 발굴합니다.
              </RoadmapStageDescription>
            </RoadmapStage>

            <RoadmapArrow>→</RoadmapArrow>

            <RoadmapStage>
              <RoadmapStageIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" fill="currentColor"/>
                </svg>
              </RoadmapStageIcon>
              <RoadmapStageNumber>02</RoadmapStageNumber>
              <RoadmapStageTitle>중기: 파일럿 프로젝트</RoadmapStageTitle>
              <RoadmapStageDescription>
                1-2개의 우선순위 높은 파일럿 프로젝트(데이터 기반 자동화, AI 보도 시스템 등)를 개발하여 성과를 창출합니다.
              </RoadmapStageDescription>
            </RoadmapStage>

            <RoadmapArrow>→</RoadmapArrow>

            <RoadmapStage>
              <RoadmapStageIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" fill="currentColor"/>
                </svg>
              </RoadmapStageIcon>
              <RoadmapStageNumber>03</RoadmapStageNumber>
              <RoadmapStageTitle>장기: 사업 확장</RoadmapStageTitle>
              <RoadmapStageDescription>
                개발된 솔루션을 타 방송사 및 언론계로 확장하고, 지역행사와 문화산업 연계 솔루션으로 본격적인 사업을 전개합니다.
              </RoadmapStageDescription>
            </RoadmapStage>
          </RoadmapStages>
        </ImplementationRoadmap>

        <SynergyAnalysis>
          <SynergyTitle>협력 시너지 분석</SynergyTitle>
          <SynergyGrid>
            <SynergyCard className="advantage">
              <SynergyCardTitle>기대 효과</SynergyCardTitle>
              <SynergyItemList>
                <SynergyItem>
                  <SynergyItemIcon positive={true}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                    </svg>
                  </SynergyItemIcon>
                  <SynergyItemText>방송사의 방대한 데이터와 MUFI의 AI 기술의 명확한 시너지 창출</SynergyItemText>
                </SynergyItem>
                <SynergyItem>
                  <SynergyItemIcon positive={true}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                    </svg>
                  </SynergyItemIcon>
                  <SynergyItemText>국장 직속 의사결정으로 빠른 실행과 스타트업의 민첩성 유지 가능</SynergyItemText>
                </SynergyItem>
                <SynergyItem>
                  <SynergyItemIcon positive={true}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                    </svg>
                  </SynergyItemIcon>
                  <SynergyItemText>MBC라는 명문 방송사 레퍼런스 확보로 신뢰도 상승 및 영업력 강화</SynergyItemText>
                </SynergyItem>
                <SynergyItem>
                  <SynergyItemIcon positive={true}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                    </svg>
                  </SynergyItemIcon>
                  <SynergyItemText>타 언론사, 케이블TV, 지역방송 등으로 확장 가능한 대규모 시장 접근</SynergyItemText>
                </SynergyItem>
              </SynergyItemList>
            </SynergyCard>

            <SynergyCard className="risk">
              <SynergyCardTitle>리스크 관리</SynergyCardTitle>
              <SynergyItemList>
                <SynergyItem>
                  <SynergyItemIcon positive={false}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
                    </svg>
                  </SynergyItemIcon>
                  <SynergyItemText>현금 투자보다는 공간/인프라/기회 제공 형태로, 단기 운전자금으로는 부족할 수 있음</SynergyItemText>
                </SynergyItem>
                <SynergyItem>
                  <SynergyItemIcon positive={false}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
                    </svg>
                  </SynergyItemIcon>
                  <SynergyItemText>방송국 내부 구조와 절차에 따른 확장 단계에서의 의사결정 지연 가능성</SynergyItemText>
                </SynergyItem>
                <SynergyItem>
                  <SynergyItemIcon positive={false}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
                    </svg>
                  </SynergyItemIcon>
                  <SynergyItemText>초기 미디어 데이터 사업의 성공 불확실성과 언론 환경 변동성 존재</SynergyItemText>
                </SynergyItem>
                <SynergyItem>
                  <SynergyItemIcon positive={false}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
                    </svg>
                  </SynergyItemIcon>
                  <SynergyItemText>기존 MUFI 사업(포토부스, AI 에이전트 등)과의 리소스 충돌 가능성</SynergyItemText>
                </SynergyItem>
              </SynergyItemList>
            </SynergyCard>
          </SynergyGrid>
        </SynergyAnalysis>

        <PartnershipVision>
          <VisionTitle>미디어와 AI의 미래 비전</VisionTitle>
          <VisionContent>
            MUFI와 MBC의 전략적 협력은 단순한 기술 개발을 넘어, 미디어 산업의 미래를 선도하는 새로운 패러다임을 제시합니다. 
            방송국과 언론사가 보유한 막대한 정보수집/관리 시스템에 AI 기술이 결합되면, 데이터 분석, 자동 요약·편집, 해외 영상판매 자동화, 
            AI 기반 콘텐츠 추천 등 언론의 미래형 서비스로 확장이 가능합니다. 이 협력을 통해 MUFI는 AI 기술력을 검증받고 
            대규모 실제 데이터에 기반한 경험을 쌓을 수 있으며, MBC는 데이터 기반 혁신을 주도하는 선도적 미디어 기업으로 자리매김할 수 있습니다.
          </VisionContent>
          <VisionQuote>
            "방송국과 AI 기술의 결합은 단순한 기술 적용을 넘어, 미디어 산업의 새로운 가치 창출 방식을 완전히 재정의할 것입니다."
          </VisionQuote>
        </PartnershipVision>
      </StrategicPartnershipSection>

      <CTASection>
        <CTATitle>MUFI AI 에이전트로 물류 시스템을 최적화하고 데이터 자산을 구축하세요</CTATitle>
        <CTADescription>
          AI 기반 물류/유통 최적화, 업무 시간 배정 체계 개선, 그리고 자동화된 데이터 수집을 통해 
          포토부스 비즈니스의 운영 효율성을 극대화하고 새로운 데이터 자산을 구축할 수 있습니다.
        </CTADescription>
        <CTAButton>물류 최적화 솔루션 상담 신청</CTAButton>
      </CTASection>
    </SectionContent>
  );
};

// 스타일 컴포넌트 정의
const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const HeadingLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const HeadingText = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 1rem;
  color: ${COLORS.BLACK};
`;

const HighlightText = styled.span`
  color: ${COLORS.RED};
`;

const CaseStudyIntro = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const OverviewText = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.9;
`;

const RelationButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const RelationButton = styled.a`
  display: flex;
  align-items: center;
  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.RED};
  color: ${COLORS.RED};
  border-radius: 30px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  
  &:hover {
    background-color: ${COLORS.RED};
    color: ${COLORS.WHITE};
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const RelationButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const KeyMetricsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MetricCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

const MetricIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  margin: 0 auto 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${COLORS.RED};
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
`;

const MetricSubtext = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const ChallengeContainer = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`;

const ChallengeTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const ChallengeDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.9;
  margin-bottom: 1.5rem;
`;

const ChallengeList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ChallengeItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const ChallengeIcon = styled.div`
  width: 24px;
  height: 24px;
  color: ${COLORS.RED};
  margin-right: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ChallengeText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${COLORS.BLACK};
  opacity: 0.9;
`;

const SolutionContainer = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`;

const SolutionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const SolutionDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.9;
  margin-bottom: 1.5rem;
`;

const SolutionList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const SolutionItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const SolutionIcon = styled.div`
  width: 24px;
  height: 24px;
  color: ${COLORS.RED};
  margin-right: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const SolutionText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${COLORS.BLACK};
  opacity: 0.9;
`;

const CaseStudyShowcase = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`;

const CaseStudyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const TimelineDiagram = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  
  ${MEDIA_QUERIES.TABLET} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const TimelinePoint = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  margin-bottom: 2rem;
  
  ${MEDIA_QUERIES.TABLET} {
    width: 42%;
    margin-bottom: 0;
  }
`;

const TimelineArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  
  svg {
    width: 40px;
    height: 40px;
    color: ${COLORS.RED};
    transform: rotate(90deg);
    
    ${MEDIA_QUERIES.TABLET} {
      transform: rotate(0);
    }
  }
  
  ${MEDIA_QUERIES.TABLET} {
    margin-bottom: 0;
  }
`;

const TimelineDate = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${COLORS.RED};
  color: white;
  border-radius: 20px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TimelineMetric = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${COLORS.BLACK};
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.02);
  
  &:nth-child(even) {
    background-color: rgba(110, 124, 243, 0.05);
  }
`;

const ROICalculation = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`;

const ROITitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const ROIContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${MEDIA_QUERIES.DESKTOP} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ROIItem = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.06);
  }
`;

const ROILabel = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const ROIValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${COLORS.RED};
  text-align: center;
`;

const CustomerTestimonials = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`;

const TestimonialsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const TestimonialCards = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const TestimonialCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

const TestimonialQuote = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${COLORS.BLACK};
  opacity: 0.9;
  margin-bottom: 0.75rem;
`;

const TestimonialAuthor = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
  opacity: 0.9;
`;

const CTASection = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`;

const CTATitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const CTADescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.9;
  margin-bottom: 1.5rem;
`;

const CTAButton = styled.button`
  background-color: ${COLORS.RED};
  color: ${COLORS.WHITE};
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${COLORS.RED};
    opacity: 0.9;
  }
`;

const RecursiveImprovementSystem = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
  scroll-margin-top: 80px;
`;

const RecursiveSystemTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecursiveSystemIcon = styled.div`
  width: 48px;
  height: 48px;
  color: ${COLORS.RED};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const RecursiveSystemDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.9;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const RecursiveCycleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const RecursiveCycle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const CycleStep = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const CycleIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  margin-bottom: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const CycleStepNumber = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${COLORS.RED};
  margin-bottom: 0.5rem;
`;

const CycleTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${COLORS.BLACK};
`;

const CycleDescription = styled.p`
  font-size: 0.938rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const CycleArrow = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLORS.RED};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  
  ${MEDIA_QUERIES.TABLET} {
    transform: rotate(0);
  }
`;

const CycleResult = styled.div`
  margin-top: 1rem;
`;

const ResultTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const ResultGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ResultCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const ResultIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  margin-bottom: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ResultValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${COLORS.RED};
  margin-bottom: 0.5rem;
`;

const ResultLabel = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  margin-bottom: 1rem;
`;

const ResultDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const AILearningPath = styled.div`
  margin-top: 3rem;
`;

const LearningPathTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const LearningStages = styled.div`
  display: flex;
  flex-direction: column;
  
  ${MEDIA_QUERIES.TABLET} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

interface LearningStageProps {
  current: boolean;
}

const LearningStage = styled.div<LearningStageProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 1rem;
  flex: 1;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  ${props => props.current && `
    background-color: rgba(110, 124, 243, 0.08);
    border: 1px solid rgba(110, 124, 243, 0.2);
  `}
  
  &:not(:last-child) {
    margin-bottom: 1.5rem;
    
    ${MEDIA_QUERIES.TABLET} {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
`;

const StageNumber = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${COLORS.RED};
  margin-bottom: 0.5rem;
`;

const StageLine = styled.div`
  width: 40px;
  height: 4px;
  background-color: ${COLORS.RED};
  margin-bottom: 1rem;
  border-radius: 2px;
`;

const StageTitle = styled.h5`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const StageDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const CurrentStageMarker = styled.div`
  margin-top: 1rem;
  padding: 0.25rem 0.75rem;
  background-color: ${COLORS.RED};
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const DataValueSection = styled.div`
  margin-top: 3rem;
`;

const DataValueTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const DataValueDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.9;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const DataValueGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const DataValueCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const DataValueIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  margin-bottom: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const DataValueLabel = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  margin-bottom: 1rem;
`;

const DataValueMetric = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${COLORS.RED};
  margin-bottom: 0.5rem;
`;

const DataValueText = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const LearningPathNote = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  text-align: center;
  margin-top: 1rem;
`;

const ImplementationTimetable = styled.div`
  margin-top: 3rem;
`;

const ImplementationTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const ImplementationPhases = styled.div`
  display: flex;
  flex-direction: column;
  
  ${MEDIA_QUERIES.TABLET} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

interface ImplementationPhaseProps {
  completed: boolean;
}

const ImplementationPhase = styled.div<ImplementationPhaseProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 1rem;
  flex: 1;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  ${props => props.completed && `
    background-color: rgba(110, 124, 243, 0.08);
    border: 1px solid rgba(110, 124, 243, 0.2);
  `}
  
  &:not(:last-child) {
    margin-bottom: 1.5rem;
    
    ${MEDIA_QUERIES.TABLET} {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
`;

const PhaseDate = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${COLORS.RED};
  margin-bottom: 0.5rem;
`;

const PhaseDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${COLORS.RED};
  margin-bottom: 0.5rem;
`;

const PhaseLabel = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  margin-bottom: 0.5rem;
`;

const PhaseDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const PhaseConnector = styled.div<ImplementationPhaseProps>`
  width: 40px;
  height: 4px;
  background-color: ${COLORS.RED};
  margin-bottom: 1.5rem;
  border-radius: 2px;
  
  ${props => props.completed && `
    background-color: rgba(110, 124, 243, 0.2);
  `}
`;

const TechnicalImplementation = styled.div`
  margin-top: 3rem;
`;

const TechImplementTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const TechImplementDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TechIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  margin-bottom: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const TechTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  margin-bottom: 0.5rem;
`;

const TechDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`; 

// MBC 전략적 협력 관련 스타일 컴포넌트
const StrategicPartnershipSection = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`;

const PartnershipTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PartnershipTitleIcon = styled.div`
  width: 48px;
  height: 48px;
  color: ${COLORS.RED};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const PartnershipDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.9;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const PartnershipGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PartnershipCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const PartnershipCardIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  margin-bottom: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const PartnershipCardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${COLORS.BLACK};
`;

const PartnershipCardContent = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.9;
  
  p {
    margin-bottom: 1rem;
  }
`;

const PartnershipHighlight = styled.div`
  background-color: rgba(110, 124, 243, 0.08);
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  color: ${COLORS.RED};
  font-size: 0.875rem;
  text-align: center;
`;

const ImplementationRoadmap = styled.div`
  margin-top: 3rem;
`;

const RoadmapTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const RoadmapStages = styled.div`
  display: flex;
  flex-direction: column;
  
  ${MEDIA_QUERIES.TABLET} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const RoadmapStage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 1rem;
  flex: 1;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color: rgba(110, 124, 243, 0.05);
  border: 1px solid rgba(110, 124, 243, 0.1);
  
  &:not(:last-child) {
    margin-bottom: 1.5rem;
    
    ${MEDIA_QUERIES.TABLET} {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
`;

const RoadmapStageIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  margin-bottom: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const RoadmapStageNumber = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${COLORS.RED};
  margin-bottom: 0.5rem;
`;

const RoadmapStageTitle = styled.h5`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const RoadmapStageDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  text-align: center;
`;

const RoadmapArrow = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLORS.RED};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  
  ${MEDIA_QUERIES.TABLET} {
    transform: rotate(0);
  }
`;

const SynergyAnalysis = styled.div`
  margin-top: 3rem;
`;

const SynergyTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const SynergyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SynergyCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  
  &.advantage {
    background-color: rgba(110, 124, 243, 0.05);
    border-color: rgba(110, 124, 243, 0.1);
  }
  
  &.risk {
    background-color: rgba(255, 126, 126, 0.05);
    border-color: rgba(255, 126, 126, 0.1);
  }
`;

const SynergyCardTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const SynergyItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface SynergyItemIconProps {
  positive: boolean;
}

const SynergyItemIcon = styled.div<SynergyItemIconProps>`
  width: 24px;
  height: 24px;
  color: ${props => props.positive ? COLORS.RED : '#FF7E7E'};
  margin-right: 0.75rem;
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const SynergyItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SynergyItemText = styled.p`
  font-size: 0.9375rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  margin: 0;
`;

const PartnershipVision = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const VisionTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const VisionContent = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.9;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 1.5rem;
`;

const VisionQuote = styled.blockquote`
  font-size: 1.25rem;
  font-weight: 500;
  font-style: italic;
  line-height: 1.6;
  color: ${COLORS.RED};
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 0 2rem;
  
  &::before, &::after {
    content: '"';
    font-size: 2rem;
    position: absolute;
    opacity: 0.3;
  }
  
  &::before {
    left: 0;
    top: -0.5rem;
  }
  
  &::after {
    right: 0;
    bottom: -1.5rem;
  }
`;

// 네비게이션 관련 스타일 컴포넌트
const NavigationBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 3px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${COLORS.RED};
    border-radius: 10px;
  }
  
  ${MEDIA_QUERIES.MOBILE} {
    justify-content: flex-start;
    padding: 0.75rem;
  }
`;

const NavItem = styled.a<{ active?: boolean }>`
  display: inline-block;
  padding: 0.75rem 1rem;
  background-color: ${props => props.active ? COLORS.RED : COLORS.WHITE};
  color: ${props => props.active ? COLORS.WHITE : COLORS.BLACK};
  border: 1px solid ${props => props.active ? COLORS.RED : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  &:hover {
    background-color: ${props => props.active ? COLORS.RED : 'rgba(110, 124, 243, 0.1)'};
    color: ${props => props.active ? COLORS.WHITE : COLORS.RED};
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