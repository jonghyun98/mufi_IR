import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

export const AIAgentCaseStudy: React.FC = () => {
  return (
    <SectionContent>
      <SectionHeading>
        <HeadingLine />
        <HeadingText>AI 에이전트 <HighlightText>활용 사례</HighlightText></HeadingText>
        <HeadingLine />
      </SectionHeading>
      
      <CaseStudyIntro>
        <OverviewText>
          MUFI의 AI 에이전트 기술은 포토부스 운영의 여러 측면을 <HighlightText>자동화하고 최적화</HighlightText>하여 
          운영 비용 절감과 사용자 경험 향상을 동시에 실현했습니다. 아래는 실제 적용 사례와 그 결과를 보여줍니다.
        </OverviewText>
      </CaseStudyIntro>

      <RelationButtonContainer>
        <RelationButton href="#relationship-graph">
          <RelationButtonIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7h-4c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9h-4c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" fill="currentColor"/>
            </svg>
          </RelationButtonIcon>
          AI 에이전트, 포토부스, 소셜 플랫폼 간의 연관성 보기
        </RelationButton>
        
        <RelationButton href="#recursive-system" style={{ marginLeft: '1rem' }}>
          <RelationButtonIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" fill="currentColor"/>
            </svg>
          </RelationButtonIcon>
          자동화 시스템의 재귀적 개선 프로세스 알아보기
        </RelationButton>
      </RelationButtonContainer>

      <KeyMetricsContainer>
        <MetricCard>
          <MetricIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2 0v8.99h7c-.53-4.12-3.28-7.79-7-8.99zm0 11.01V22c3.72-1.2 6.47-4.87 7-8.99h-7z" fill="currentColor"/>
            </svg>
          </MetricIcon>
          <MetricValue>52%</MetricValue>
          <MetricLabel>운영 비용 절감</MetricLabel>
        </MetricCard>

        <MetricCard>
          <MetricIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9zm-1.7 4.9c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z" fill="currentColor"/>
            </svg>
          </MetricIcon>
          <MetricValue>97%</MetricValue>
          <MetricLabel>포토부스 가동률</MetricLabel>
        </MetricCard>

        <MetricCard>
          <MetricIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" fill="currentColor"/>
            </svg>
          </MetricIcon>
          <MetricValue>4.2분</MetricValue>
          <MetricLabel>문제 대응 시간</MetricLabel>
        </MetricCard>

        <MetricCard>
          <MetricIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12V5zM7 7.25h2.5V6.5H7V5h4v3.75H8.5v.75H11V11H7V7.25zM19 13l-6 6-4-4-4 4v-2.5l4-4 4 4 6-6V13z" fill="currentColor"/>
            </svg>
          </MetricIcon>
          <MetricValue>94%</MetricValue>
          <MetricLabel>고객 만족도</MetricLabel>
        </MetricCard>
      </KeyMetricsContainer>

      <ChallengeContainer>
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

      <SolutionContainer>
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

      <CaseStudyShowcase>
        <CaseStudyTitle>
          <span>실제 적용 사례:</span> 서울 강남 카페 10개점 AI 에이전트 도입
        </CaseStudyTitle>
        
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
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.41-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" fill="currentColor"/>
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
                    <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" fill="currentColor"/>
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
              <StageDescription>문제 발생 시 사전 정의된 프로토콜에 따라 대응</StageDescription>
            </LearningStage>
            
            <LearningStage current={true}>
              <StageNumber>2단계</StageNumber>
              <StageLine />
              <StageTitle>예측형 자동화</StageTitle>
              <StageDescription>데이터 분석을 통해 미래 문제를 예측하고 선제적 대응</StageDescription>
              <CurrentStageMarker>현재 단계</CurrentStageMarker>
            </LearningStage>
            
            <LearningStage current={false}>
              <StageNumber>3단계</StageNumber>
              <StageLine />
              <StageTitle>자기 최적화</StageTitle>
              <StageDescription>운영 환경과 조건에 따라 자율적으로 시스템 매개변수 최적화</StageDescription>
            </LearningStage>
            
            <LearningStage current={false}>
              <StageNumber>4단계</StageNumber>
              <StageLine />
              <StageTitle>자기 진화</StageTitle>
              <StageDescription>새로운 기능과 알고리즘을 스스로 개발하고 적용</StageDescription>
            </LearningStage>
          </LearningStages>
        </AILearningPath>
      </RecursiveImprovementSystem>

      <CustomerTestimonials>
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