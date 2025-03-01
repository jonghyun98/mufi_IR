import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export const FinancialPlan: React.FC = () => {
  // 재무 계획 데이터
  const financialData = [
    {
      year: '2025년',
      revenue: 10,
      label: '10억 원'
    },
    {
      year: '2026년',
      revenue: 42,
      label: '42억 원'
    },
    {
      year: '2027년',
      revenue: 168,
      label: '168억 원'
    },
  ];

  // 2027년 사업 영역별 매출 기여도
  const revenueContributionData = [
    { name: '포토부스 임대', value: 100.8, percent: '60%', fill: COLORS.RED },
    { name: 'AI 솔루션', value: 42, percent: '25%', fill: COLORS.BLUE },
    { name: '소셜 플랫폼', value: 19.2, percent: '12%', fill: COLORS.GREEN },
    { name: '데이터 판매', value: 5, percent: '3%', fill: '#FFB347' }
  ];

  return (
    <SectionContent>
      <Paragraph>
        MUFI는 현실적인 재무 목표를 설정하고 단계적인 성장을 계획하고 있습니다. 
        초기에는 포토부스 임대 수익을 기반으로 안정적인 현금 흐름을 확보하고, 
        점차 소셜 플랫폼의 구독 모델과 데이터 판매 수익으로 확장할 예정입니다.
        포토부스 시장(연 11.2% 성장)과 AI 솔루션 시장(연 26.8% 성장), 소셜 플랫폼 시장(연 18.5% 성장)의 
        성장세에 맞추어 단계적 확장을 계획합니다.
      </Paragraph>
      
      <FinancialProjections>
        <ProjectionTitle>연도별 재무 목표</ProjectionTitle>
        <ProjectionChart>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={financialData}
              margin={{
                top: 25,
                right: 30,
                left: 20,
                bottom: 15,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" tick={{ fontWeight: 'bold' }} />
              <YAxis 
                label={{ value: '매출 (억 원)', angle: -90, position: 'insideLeft', fontWeight: 'bold' }} 
                tickFormatter={(value: number) => `${value}억`}
                tick={{ fontWeight: 'bold' }}
              />
              <Tooltip formatter={(value: number) => [`${value}억 원`, '매출']} />
              <Legend wrapperStyle={{ paddingTop: 10 }} />
              <Bar 
                dataKey="revenue" 
                name="연간 매출" 
                fill={COLORS.RED} 
                radius={[8, 8, 0, 0]}
                label={{ 
                  position: 'top', 
                  formatter: (value: number) => `${value}억 원`,
                  fill: COLORS.BLACK,
                  fontWeight: 'bold',
                  fontSize: 14 
                }} 
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </ProjectionChart>
      </FinancialProjections>

      <RevenueContribution>
        <RevenueContributionTitle>2027년 사업 영역별 매출 기여도</RevenueContributionTitle>
        <RevenueContributionContent>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={revenueContributionData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={130}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent, value }) => `${name}: ${percent} (${value}억)`}
                paddingAngle={2}
              >
                {revenueContributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} strokeWidth={2} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}억 원`} />
            </PieChart>
          </ResponsiveContainer>
        </RevenueContributionContent>
        <RevenueContributionDescription>
          2027년에는 포토부스 임대 매출이 전체의 60%를 차지하고, AI 솔루션과 소셜 플랫폼이 각각 25%, 12%를 기여할 것으로 예상합니다.
          데이터 판매는 초기 단계로 3%를 차지하지만, 이후 높은 성장률을 보일 것입니다.
        </RevenueContributionDescription>
      </RevenueContribution>
      
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
            현재 약 14,500대인 국내 포토부스 시장에서 AI 자율 관리 시스템 장착 비율이 3%에서 10%로 증가할 것으로 예상됩니다.
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
            대학생 특화 소셜 플랫폼으로 전체 270만 대학생 인구의 약 1.9%를 확보하고,
            기업용 AI 솔루션을 통해 B2B 시장에 본격 진출합니다.
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
            국내 기업용 AI 솔루션 시장의 3.1%(42억 원)와 대학생 소셜 플랫폼 시장의 2.7%(19억 원)를 
            확보하여 시장 입지를 견고히 합니다.
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
                <RevenueStreamItem>시장 성장률: 연 11.2%</RevenueStreamItem>
              </RevenueStreamList>
            </RevenueStreamContent>
          </RevenueStreamCard>
          
          <RevenueStreamCard>
            <RevenueStreamIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
              </svg>
            </RevenueStreamIcon>
            <RevenueStreamTitle>소셜 플랫폼 & AI 솔루션</RevenueStreamTitle>
            <RevenueStreamContent>
              <RevenueStreamList>
                <RevenueStreamItem>프리미엄 멤버십: 월 9,900원</RevenueStreamItem>
                <RevenueStreamItem>2026년: 5만 사용자 중 5% 구독 (연 3억 원)</RevenueStreamItem>
                <RevenueStreamItem>2027년: 20만 사용자 중 8% 구독 (연 19억 원)</RevenueStreamItem>
                <RevenueStreamItem>B2B AI 솔루션: 2027년 42억 원</RevenueStreamItem>
                <RevenueStreamItem>시장 성장률: 소셜 18.5%, AI 26.8%</RevenueStreamItem>
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
                <RevenueStreamItem>전체 시장 규모: 약 2,500억 원</RevenueStreamItem>
              </RevenueStreamList>
            </RevenueStreamContent>
          </RevenueStreamCard>
        </RevenueStreamsGrid>
      </RevenueStreams>

      <InvestmentPlan>
        <InvestmentPlanTitle>사업 영역별 투자 계획</InvestmentPlanTitle>
        <InvestmentPlanGrid>
          <InvestmentPlanCard>
            <InvestmentPlanCardTitle>2024-2025</InvestmentPlanCardTitle>
            <InvestmentPlanItems>
              <InvestmentPlanItem>
                <InvestmentPlanItemLabel>포토부스 초기 개발</InvestmentPlanItemLabel>
                <InvestmentPlanItemValue>3억 원</InvestmentPlanItemValue>
              </InvestmentPlanItem>
              <InvestmentPlanItem>
                <InvestmentPlanItemLabel>AI 시스템 개발</InvestmentPlanItemLabel>
                <InvestmentPlanItemValue>2억 원</InvestmentPlanItemValue>
              </InvestmentPlanItem>
              <InvestmentPlanItem>
                <InvestmentPlanItemLabel>데이터 인프라 구축</InvestmentPlanItemLabel>
                <InvestmentPlanItemValue>1억 원</InvestmentPlanItemValue>
              </InvestmentPlanItem>
            </InvestmentPlanItems>
            <InvestmentPlanFocus>
              포토부스 사업 중심 초기 투자로 안정적 현금흐름 확보
            </InvestmentPlanFocus>
          </InvestmentPlanCard>
          
          <InvestmentPlanCard>
            <InvestmentPlanCardTitle>2026</InvestmentPlanCardTitle>
            <InvestmentPlanItems>
              <InvestmentPlanItem>
                <InvestmentPlanItemLabel>소셜 플랫폼 개발</InvestmentPlanItemLabel>
                <InvestmentPlanItemValue>4억 원</InvestmentPlanItemValue>
              </InvestmentPlanItem>
              <InvestmentPlanItem>
                <InvestmentPlanItemLabel>포토부스 확장</InvestmentPlanItemLabel>
                <InvestmentPlanItemValue>6억 원</InvestmentPlanItemValue>
              </InvestmentPlanItem>
              <InvestmentPlanItem>
                <InvestmentPlanItemLabel>AI 기술 고도화</InvestmentPlanItemLabel>
                <InvestmentPlanItemValue>3억 원</InvestmentPlanItemValue>
              </InvestmentPlanItem>
            </InvestmentPlanItems>
            <InvestmentPlanFocus>
              소셜 플랫폼과 포토부스 확장에 중점 투자
            </InvestmentPlanFocus>
          </InvestmentPlanCard>
          
          <InvestmentPlanCard>
            <InvestmentPlanCardTitle>2027</InvestmentPlanCardTitle>
            <InvestmentPlanItems>
              <InvestmentPlanItem>
                <InvestmentPlanItemLabel>B2B AI 솔루션 확장</InvestmentPlanItemLabel>
                <InvestmentPlanItemValue>10억 원</InvestmentPlanItemValue>
              </InvestmentPlanItem>
              <InvestmentPlanItem>
                <InvestmentPlanItemLabel>포토부스 대량 생산</InvestmentPlanItemLabel>
                <InvestmentPlanItemValue>15억 원</InvestmentPlanItemValue>
              </InvestmentPlanItem>
              <InvestmentPlanItem>
                <InvestmentPlanItemLabel>데이터 분석 플랫폼</InvestmentPlanItemLabel>
                <InvestmentPlanItemValue>8억 원</InvestmentPlanItemValue>
              </InvestmentPlanItem>
            </InvestmentPlanItems>
            <InvestmentPlanFocus>
              AI 중심 기업으로의 확장과 B2B 시장 진출 강화
            </InvestmentPlanFocus>
          </InvestmentPlanCard>
        </InvestmentPlanGrid>
      </InvestmentPlan>
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

const RevenueContribution = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const RevenueContributionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const RevenueContributionContent = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const RevenueContributionDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  text-align: center;
  margin-top: 1.5rem;
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

const InvestmentPlan = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const InvestmentPlanTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const InvestmentPlanGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const InvestmentPlanCard = styled.div`
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

const InvestmentPlanCardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const InvestmentPlanItems = styled.div`
  margin-bottom: 1.5rem;
`;

const InvestmentPlanItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InvestmentPlanItemLabel = styled.span`
  font-size: 0.9375rem;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const InvestmentPlanItemValue = styled.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${COLORS.RED};
`;

const InvestmentPlanFocus = styled.div`
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
  background-color: rgba(110, 124, 243, 0.08);
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
`; 