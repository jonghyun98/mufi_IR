import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

export const FinancialPlan: React.FC = () => {
  return (
    <SectionContent>
      <Paragraph>
        MUFI는 현실적인 재무 목표를 설정하고 단계적인 성장을 계획하고 있습니다. 
        초기에는 포토부스 임대 수익을 기반으로 안정적인 현금 흐름을 확보하고, 
        점차 소셜 플랫폼의 구독 모델과 데이터 판매 수익으로 확장할 예정입니다.
      </Paragraph>
      
      <FinancialProjections>
        <ProjectionTitle>연도별 재무 목표</ProjectionTitle>
        <ProjectionChart>
          <svg width="100%" height="300" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
            {/* 축 */}
            <line x1="50" y1="250" x2="750" y2="250" stroke={COLORS.BLACK} strokeWidth="2" />
            <line x1="50" y1="50" x2="50" y2="250" stroke={COLORS.BLACK} strokeWidth="2" />
            
            {/* X축 레이블 */}
            <text x="150" y="280" textAnchor="middle" fill={COLORS.BLACK}>2025년</text>
            <text x="350" y="280" textAnchor="middle" fill={COLORS.BLACK}>2026년</text>
            <text x="550" y="280" textAnchor="middle" fill={COLORS.BLACK}>2027년</text>
            
            {/* Y축 레이블 */}
            <text x="30" y="250" textAnchor="end" fill={COLORS.BLACK}>0</text>
            <text x="30" y="200" textAnchor="end" fill={COLORS.BLACK}>50억</text>
            <text x="30" y="150" textAnchor="end" fill={COLORS.BLACK}>100억</text>
            <text x="30" y="100" textAnchor="end" fill={COLORS.BLACK}>150억</text>
            <text x="30" y="50" textAnchor="end" fill={COLORS.BLACK}>200억</text>
            
            {/* 그리드 라인 */}
            <line x1="50" y1="200" x2="750" y2="200" stroke={COLORS.BLACK} strokeWidth="0.5" strokeDasharray="5,5" />
            <line x1="50" y1="150" x2="750" y2="150" stroke={COLORS.BLACK} strokeWidth="0.5" strokeDasharray="5,5" />
            <line x1="50" y1="100" x2="750" y2="100" stroke={COLORS.BLACK} strokeWidth="0.5" strokeDasharray="5,5" />
            <line x1="50" y1="50" x2="750" y2="50" stroke={COLORS.BLACK} strokeWidth="0.5" strokeDasharray="5,5" />
            
            {/* 매출 바 */}
            <rect x="100" y="245" width="100" height="5" fill={COLORS.RED} />
            <rect x="300" y="229" width="100" height="21" fill={COLORS.RED} />
            <rect x="500" y="166" width="100" height="84" fill={COLORS.RED} />
            
            {/* 매출 레이블 */}
            <text x="150" y="240" textAnchor="middle" fill={COLORS.BLACK} fontWeight="bold">10억</text>
            <text x="350" y="220" textAnchor="middle" fill={COLORS.BLACK} fontWeight="bold">42억</text>
            <text x="550" y="160" textAnchor="middle" fill={COLORS.BLACK} fontWeight="bold">168억</text>
            
            {/* 범례 */}
            <rect x="600" y="30" width="20" height="10" fill={COLORS.RED} />
            <text x="630" y="38" fill={COLORS.BLACK}>연간 매출</text>
          </svg>
        </ProjectionChart>
      </FinancialProjections>
      
      <FinancialDetails>
        <FinancialCard>
          <FinancialYear>2025년</FinancialYear>
          <FinancialMetrics>
            <Metric>
              <MetricLabel>매출</MetricLabel>
              <MetricValue>10억 원</MetricValue>
            </Metric>
            <Metric>
              <MetricLabel>포토부스 설치</MetricLabel>
              <MetricValue>10개</MetricValue>
            </Metric>
            <Metric>
              <MetricLabel>월 임대료</MetricLabel>
              <MetricValue>70만 원</MetricValue>
            </Metric>
            <Metric>
              <MetricLabel>손익분기점</MetricLabel>
              <MetricValue>달성</MetricValue>
            </Metric>
          </FinancialMetrics>
          <FinancialDescription>
            초기 시장 진입 단계로, 서울 내 소규모 사업자 10개와 포토부스 임대 계약을 체결하고 
            안정적인 현금 흐름을 확보하여 손익분기점 달성을 목표로 합니다.
          </FinancialDescription>
        </FinancialCard>
        
        <FinancialCard>
          <FinancialYear>2026년</FinancialYear>
          <FinancialMetrics>
            <Metric>
              <MetricLabel>매출</MetricLabel>
              <MetricValue>42억 원</MetricValue>
            </Metric>
            <Metric>
              <MetricLabel>포토부스 설치</MetricLabel>
              <MetricValue>50개</MetricValue>
            </Metric>
            <Metric>
              <MetricLabel>영업이익</MetricLabel>
              <MetricValue>5억 원</MetricValue>
            </Metric>
            <Metric>
              <MetricLabel>소셜 플랫폼 사용자</MetricLabel>
              <MetricValue>5만 명</MetricValue>
            </Metric>
          </FinancialMetrics>
          <FinancialDescription>
            시장 확대 단계로, 포토부스 설치 지점을 50개로 확대하고 소셜 플랫폼 사용자를 
            5만 명까지 확보하여 영업이익 5억 원 달성을 목표로 합니다.
          </FinancialDescription>
        </FinancialCard>
        
        <FinancialCard>
          <FinancialYear>2027년</FinancialYear>
          <FinancialMetrics>
            <Metric>
              <MetricLabel>매출</MetricLabel>
              <MetricValue>168억 원</MetricValue>
            </Metric>
            <Metric>
              <MetricLabel>포토부스 설치</MetricLabel>
              <MetricValue>200개</MetricValue>
            </Metric>
            <Metric>
              <MetricLabel>시장 점유율</MetricLabel>
              <MetricValue>20%</MetricValue>
            </Metric>
            <Metric>
              <MetricLabel>B2B 데이터 판매</MetricLabel>
              <MetricValue>5억 원+</MetricValue>
            </Metric>
          </FinancialMetrics>
          <FinancialDescription>
            본격적인 성장 단계로, 포토부스 설치 지점을 200개 이상으로 확대하고 
            B2B 데이터 판매를 통해 연간 5억 원 이상의 추가 수익을 창출하며, 
            시장 점유율 20% 달성을 목표로 합니다.
          </FinancialDescription>
        </FinancialCard>
      </FinancialDetails>
      
      <RevenueStreams>
        <RevenueStreamsTitle>수익원 다각화 전략</RevenueStreamsTitle>
        <RevenueStreamsGrid>
          <RevenueStreamCard>
            <RevenueStreamIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" fill="currentColor"/>
              </svg>
            </RevenueStreamIcon>
            <RevenueStreamTitle>포토부스 임대 수익</RevenueStreamTitle>
            <RevenueStreamContent>
              <RevenueStreamList>
                <RevenueStreamItem>월 70만 원 기준 임대료</RevenueStreamItem>
                <RevenueStreamItem>2025년: 10개 설치 (연 8.4억 원)</RevenueStreamItem>
                <RevenueStreamItem>2026년: 50개 설치 (연 42억 원)</RevenueStreamItem>
                <RevenueStreamItem>2027년: 200개 설치 (연 168억 원)</RevenueStreamItem>
              </RevenueStreamList>
            </RevenueStreamContent>
          </RevenueStreamCard>
          
          <RevenueStreamCard>
            <RevenueStreamIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
              </svg>
            </RevenueStreamIcon>
            <RevenueStreamTitle>소셜 플랫폼 수익</RevenueStreamTitle>
            <RevenueStreamContent>
              <RevenueStreamList>
                <RevenueStreamItem>프리미엄 멤버십: 월 9,900원</RevenueStreamItem>
                <RevenueStreamItem>2026년: 5만 사용자 중 5% 구독 (연 3억 원)</RevenueStreamItem>
                <RevenueStreamItem>2027년: 20만 사용자 중 8% 구독 (연 19억 원)</RevenueStreamItem>
                <RevenueStreamItem>광고 수익: CPM 기준 5,000-10,000원</RevenueStreamItem>
              </RevenueStreamList>
            </RevenueStreamContent>
          </RevenueStreamCard>
          
          <RevenueStreamCard>
            <RevenueStreamIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/>
              </svg>
            </RevenueStreamIcon>
            <RevenueStreamTitle>데이터 판매 수익</RevenueStreamTitle>
            <RevenueStreamContent>
              <RevenueStreamList>
                <RevenueStreamItem>2027년부터 본격화</RevenueStreamItem>
                <RevenueStreamItem>익명화된 집계 데이터 라이선스</RevenueStreamItem>
                <RevenueStreamItem>AI 연구 기관, 마케팅 회사 대상</RevenueStreamItem>
                <RevenueStreamItem>연간 5억 원 이상 추가 수익 창출</RevenueStreamItem>
              </RevenueStreamList>
            </RevenueStreamContent>
          </RevenueStreamCard>
        </RevenueStreamsGrid>
      </RevenueStreams>
    </SectionContent>
  );
};

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const FinancialProjections = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const ProjectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const ProjectionChart = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  
  svg {
    overflow: visible;
    
    text {
      font-family: 'Pretendard', sans-serif;
      font-size: 12px;
      
      @media (max-width: 768px) {
        font-size: 10px;
      }
    }
  }
`;

const FinancialDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FinancialCard = styled.div`
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

const FinancialYear = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const FinancialMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetricLabel = styled.span`
  font-size: 0.875rem;
  color: ${COLORS.BLACK};
  opacity: 0.6;
  margin-bottom: 0.25rem;
`;

const MetricValue = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
`;

const FinancialDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const RevenueStreams = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const RevenueStreamsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const RevenueStreamsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const RevenueStreamCard = styled.div`
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

const RevenueStreamIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const RevenueStreamTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${COLORS.BLACK};
`;

const RevenueStreamContent = styled.div`
  color: ${COLORS.BLACK};
`;

const RevenueStreamList = styled.ul`
  padding-left: 1.25rem;
  margin: 0;
`;

const RevenueStreamItem = styled.li`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  opacity: 0.8;
  
  &:last-child {
    margin-bottom: 0;
  }
`; 