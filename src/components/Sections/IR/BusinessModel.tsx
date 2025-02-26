import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

export const BusinessModel: React.FC = () => {
  // 각 비즈니스 모델 수익 기여도 데이터 (2025-2027)
  const revenueContributionData = [
    {
      year: 2025,
      photobooth: 84, // 84%
      aiAgent: 16,    // 16%
      social: 0,      // 0%
      dataAsset: 0    // 0%
    },
    {
      year: 2026,
      photobooth: 60, // 60%
      aiAgent: 24,    // 24%
      social: 13,     // 13%
      dataAsset: 3    // 3% 
    },
    {
      year: 2027,
      photobooth: 48, // 48%
      aiAgent: 28,    // 28%
      social: 14,     // 14%
      dataAsset: 10   // 10%
    }
  ];

  return (
    <SectionContent>
      <SectionHeading>
        <HeadingLine />
        <HeadingText>통합 데이터 에코시스템 <HighlightText>비즈니스 모델</HighlightText></HeadingText>
        <HeadingLine />
      </SectionHeading>
      
      <BusinessOverview>
        <OverviewText>
          MUFI는 AI 기술을 활용한 <HighlightText>포토부스 운영</HighlightText>, <HighlightText>AI 에이전트 개발</HighlightText>, <HighlightText>대학생 소셜 플랫폼</HighlightText> 구축을 통해 
          다양한 수익 모델을 구축하고 있습니다. 특히 각 사업 영역에서 수집된 데이터가 순환하는 <HighlightText>통합 데이터 에코시스템</HighlightText>을 
          구축하여 지속적인 경쟁 우위와 비즈니스 확장성을 확보하고 있습니다.
        </OverviewText>
      </BusinessOverview>
      
      <RevenueModelVisual>
        <RevenueModelTitle>사업 분야별 매출 기여도 변화 (2025-2027)</RevenueModelTitle>
        <RevenueModelChart>
          {revenueContributionData.map((yearData, index) => (
            <YearColumn key={index}>
              <YearLabel>{yearData.year}년</YearLabel>
              <StackedBar>
                <BarSegment 
                  height={`${yearData.photobooth}%`} 
                  color={COLORS.RED} 
                  tooltip={`포토부스 사업: ${yearData.photobooth}%`}
                />
                <BarSegment 
                  height={`${yearData.aiAgent}%`} 
                  color={COLORS.BLUE} 
                  tooltip={`AI 에이전트: ${yearData.aiAgent}%`}
                />
                <BarSegment 
                  height={`${yearData.social}%`} 
                  color={COLORS.GREEN} 
                  tooltip={`소셜 플랫폼: ${yearData.social}%`}
                />
                <BarSegment 
                  height={`${yearData.dataAsset}%`} 
                  color={COLORS.YELLOW} 
                  tooltip={`데이터 자산: ${yearData.dataAsset}%`}
                />
              </StackedBar>
            </YearColumn>
          ))}
        </RevenueModelChart>
        <ChartLegend>
          <LegendItem>
            <LegendColor color={COLORS.RED} />
            <LegendText>포토부스 사업</LegendText>
          </LegendItem>
          <LegendItem>
            <LegendColor color={COLORS.BLUE} />
            <LegendText>AI 에이전트</LegendText>
          </LegendItem>
          <LegendItem>
            <LegendColor color={COLORS.GREEN} />
            <LegendText>소셜 플랫폼</LegendText>
          </LegendItem>
          <LegendItem>
            <LegendColor color={COLORS.YELLOW} />
            <LegendText>데이터 자산</LegendText>
          </LegendItem>
        </ChartLegend>
      </RevenueModelVisual>
      
      <BusinessModelGrid>
        <ModelCard>
          <ModelHeader>
            <ModelIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="currentColor"/>
              </svg>
            </ModelIcon>
            <ModelTitle>포토부스 사업 모델</ModelTitle>
          </ModelHeader>
          
          <ModelContent>
            <ModelMetrics>
              <MetricItem>
                <MetricLabel>초기 투자 비용</MetricLabel>
                <MetricValue>1,200만 원/대</MetricValue>
              </MetricItem>
              <MetricItem>
                <MetricLabel>월 평균 매출</MetricLabel>
                <MetricValue>180만 원/대</MetricValue>
              </MetricItem>
              <MetricItem>
                <MetricLabel>월 평균 운영비</MetricLabel>
                <MetricValue>45만 원/대</MetricValue>
              </MetricItem>
              <MetricItem>
                <MetricLabel>월 순이익</MetricLabel>
                <MetricValue>85만 원/대</MetricValue>
              </MetricItem>
              <MetricItem>
                <MetricLabel>ROI 회수 기간</MetricLabel>
                <MetricValue>14개월</MetricValue>
              </MetricItem>
            </ModelMetrics>
            
            <ModelDivider />
            
            <ModelList>
              <ModelListItem>
                <strong>임대 수익:</strong> 소규모 사업자(카페, 소매점)에 월 70만 원 기준 포토부스 임대 (시중 80-100만원 대비 경쟁력)
              </ModelListItem>
              <ModelListItem>
                <strong>매출 공유:</strong> 포토부스 매출의 30% 공유 모델 (월 평균 50-60만 원 추가 수익)
              </ModelListItem>
              <ModelListItem>
                <strong>이벤트 수익:</strong> 축제, 행사 등에 임시 설치 (일 50-100만 원, 주말 행사 기준 월 4회, 200-400만 원)
              </ModelListItem>
              <ModelListItem>
                <strong>콘텐츠 판매:</strong> 프리미엄 필터, 특수 효과 등 인앱 구매 (사용자당
                평균 2,500원, 전환율 18%)
              </ModelListItem>
              <ModelListItem>
                <strong>광고 수익:</strong> 포토부스 대기 화면 및 결과물 프레임에 로컬 비즈니스 광고 노출 (월 15-30만 원/대)
              </ModelListItem>
            </ModelList>
            
            <USPBox>
              <USPTitle>경쟁 차별화 포인트</USPTitle>
              <USPContent>
                타 포토부스 대비 AI 자율 운영으로 인건비 52% 절감, 원격 모니터링 시스템으로 가동률 97% 이상 유지 (업계 평균 82%)
              </USPContent>
            </USPBox>
          </ModelContent>
        </ModelCard>
        
        <ModelCard>
          <ModelHeader>
            <ModelIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
              </svg>
            </ModelIcon>
            <ModelTitle>AI 에이전트 사업 모델</ModelTitle>
          </ModelHeader>
          
          <ModelContent>
            <ModelMetrics>
              <MetricItem>
                <MetricLabel>고객 획득 비용</MetricLabel>
                <MetricValue>120만 원/기업</MetricValue>
              </MetricItem>
              <MetricItem>
                <MetricLabel>고객 생애 가치</MetricLabel>
                <MetricValue>5,670만 원</MetricValue>
              </MetricItem>
              <MetricItem>
                <MetricLabel>서비스 마진율</MetricLabel>
                <MetricValue>68%</MetricValue>
              </MetricItem>
              <MetricItem>
                <MetricLabel>구독 유지율</MetricLabel>
                <MetricValue>92%</MetricValue>
              </MetricItem>
              <MetricItem>
                <MetricLabel>계약 갱신률</MetricLabel>
                <MetricValue>78%</MetricValue>
              </MetricItem>
            </ModelMetrics>
            
            <ModelDivider />
            
            <ModelList>
              <ModelListItem>
                <strong>맞춤형 개발:</strong> 기업용 AI 에이전트 맞춤 개발 (건당 500-2,000만 원, 개발 기간 3-6개월)
              </ModelListItem>
              <ModelListItem>
                <strong>SaaS 구독:</strong> 월 구독 모델 (사용자당 월 5-15만 원, 최소 계약 기간 12개월)
              </ModelListItem>
              <ModelListItem>
                <strong>API 사용료:</strong> API 호출 기반 과금 (1,000회 호출당 1-3만 원, 월 평균 호출량 10만회)
              </ModelListItem>
              <ModelListItem>
                <strong>유지보수:</strong> 연간 계약 기반 유지보수 (초기 개발비의 15-20%, 평균 계약 기간 3년)
              </ModelListItem>
              <ModelListItem>
                <strong>확장 모듈:</strong> 추가 기능 및 분석 도구 (모듈당 100-300만 원, 평균 도입 모듈 수 2.5개)
              </ModelListItem>
            </ModelList>
            
            <USPBox>
              <USPTitle>경쟁 차별화 포인트</USPTitle>
              <USPContent>
                독자적 실세계 데이터 기반 학습으로 경쟁사 대비 정확도 23% 향상, 산업 특화 모듈로 구현 시간 68% 단축
              </USPContent>
            </USPBox>
          </ModelContent>
        </ModelCard>
        
        <ModelCard>
          <ModelHeader>
            <ModelIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
              </svg>
            </ModelIcon>
            <ModelTitle>소셜 플랫폼 사업 모델</ModelTitle>
          </ModelHeader>
          
          <ModelContent>
            <ModelMetrics>
              <MetricItem>
                <MetricLabel>사용자 획득 비용</MetricLabel>
                <MetricValue>2,500원/명</MetricValue>
              </MetricItem>
              <MetricItem>
                <MetricLabel>사용자 생애 가치</MetricLabel>
                <MetricValue>28,000원</MetricValue>
              </MetricItem>
              <MetricItem>
                <MetricLabel>월 활성 사용자</MetricLabel>
                <MetricValue>12.2만명(2027)</MetricValue>
              </MetricItem>
              <MetricItem>
                <MetricLabel>DAU/MAU 비율</MetricLabel>
                <MetricValue>68%</MetricValue>
              </MetricItem>
              <MetricItem>
                <MetricLabel>프리미엄 전환율</MetricLabel>
                <MetricValue>8.3%</MetricValue>
              </MetricItem>
            </ModelMetrics>
            
            <ModelDivider />
            
            <ModelList>
              <ModelListItem>
                <strong>프리미엄 멤버십:</strong> 월 9,900원의 구독료로 고급 기능 제공 (전환율 8.3%, 산업 평균 2-5%)
              </ModelListItem>
              <ModelListItem>
                <strong>타겟 광고:</strong> 대학생 특화 광고 (CPM 기준 8,000원, 업계 평균 5,000원 대비 60% 프리미엄)
              </ModelListItem>
              <ModelListItem>
                <strong>파트너십:</strong> 대학, 기업과의 협력 프로그램 (건당 500-1,000만 원, 연 계약 15-20건)
              </ModelListItem>
              <ModelListItem>
                <strong>이벤트 홍보:</strong> 대학 축제, 기업 채용 등 이벤트 홍보 (건당 200-500만 원, 월 평균 12건)
              </ModelListItem>
              <ModelListItem>
                <strong>데이터 수익화:</strong> 익명화된 집계 데이터 판매 (연간 계약 기준, 2027년부터 본격화)
              </ModelListItem>
            </ModelList>
            
            <USPBox>
              <USPTitle>경쟁 차별화 포인트</USPTitle>
              <USPContent>
                네컷사진으로 물리적 연결 경험과 디지털 연결 통합, 실명 기반 대학 인증 시스템으로 타 SNS 대비 신뢰도 87% 상승
              </USPContent>
            </USPBox>
          </ModelContent>
        </ModelCard>
      </BusinessModelGrid>
      
      <DataStrategySection>
        <SectionHeading>
          <HeadingLine />
          <HeadingText>데이터 기반 <HighlightText>비즈니스 전략</HighlightText></HeadingText>
          <HeadingLine />
        </SectionHeading>
        
        <DataStrategyIntro>
          MUFI는 포토부스와 소셜 플랫폼을 통해 수집된 데이터를 활용하여 추가적인 수익 창출 및 
          AI 기술 발전에 기여하는 데이터 기반 비즈니스 모델을 구축하고 있습니다. 실세계 데이터 수집과 
          B2B 데이터 파이프라인은 장기적으로 MUFI의 핵심 경쟁력이자 새로운 수익원이 될 것입니다.
        </DataStrategyIntro>
        
        <DataFlowDiagram>
          <DataFlowImage src="/images/data-flow-diagram.png" alt="데이터 흐름도" />
          <DataFlowCaption>MUFI의 통합 데이터 에코시스템 흐름도</DataFlowCaption>
        </DataFlowDiagram>
        
        <DataStrategyGrid>
          <DataStrategyCard>
            <DataStrategyCardTitle>실세계 데이터 수집 인프라</DataStrategyCardTitle>
            <DataStrategyCardContent>
              <p>
                포토부스와 소셜 플랫폼에서 수집된 20여 종의 데이터 포인트(사진 메타데이터, 사용자 패턴, 선호도 등)를
                익명화하여 AI 모델 훈련 및 개선에 활용합니다.
              </p>
              <DataMetricsBox>
                <DataMetric>
                  <DataMetricValue>일 5.2TB</DataMetricValue>
                  <DataMetricLabel>데이터 수집량</DataMetricLabel>
                </DataMetric>
                <DataMetric>
                  <DataMetricValue>27종</DataMetricValue>
                  <DataMetricLabel>데이터 포인트</DataMetricLabel>
                </DataMetric>
                <DataMetric>
                  <DataMetricValue>4단계</DataMetricValue>
                  <DataMetricLabel>익명화 프로세스</DataMetricLabel>
                </DataMetric>
              </DataMetricsBox>
            </DataStrategyCardContent>
          </DataStrategyCard>
          
          <DataStrategyCard>
            <DataStrategyCardTitle>B2B 데이터 파이프라인</DataStrategyCardTitle>
            <DataStrategyCardContent>
              <p>
                집계 및 익명화된 데이터를 AI 연구 기관, 마케팅 회사 등에 라이선스 형태로 제공하여 
                2027년부터 연간 <HighlightText>18억 원 이상</HighlightText>의 추가 수익을 창출할 계획입니다.
              </p>
              <DataMetricsBox>
                <DataMetric>
                  <DataMetricValue>94%</DataMetricValue>
                  <DataMetricLabel>마진율</DataMetricLabel>
                </DataMetric>
                <DataMetric>
                  <DataMetricValue>12개</DataMetricValue>
                  <DataMetricLabel>초기 B2B 계약</DataMetricLabel>
                </DataMetric>
                <DataMetric>
                  <DataMetricValue>3.2억 원</DataMetricValue>
                  <DataMetricLabel>계약당 평균가</DataMetricLabel>
                </DataMetric>
              </DataMetricsBox>
            </DataStrategyCardContent>
          </DataStrategyCard>
          
          <DataStrategyCard>
            <DataStrategyCardTitle>데이터 윤리 및 보안 체계</DataStrategyCardTitle>
            <DataStrategyCardContent>
              <p>
                글로벌 데이터 보호 표준(GDPR, CCPA 등)을 준수하는 강력한 데이터 윤리 및 보안 체계를 구축하여 
                사용자 신뢰를 확보하고 규제 리스크를 최소화합니다.
              </p>
              <DataMetricsBox>
                <DataMetric>
                  <DataMetricValue>ISO 27001</DataMetricValue>
                  <DataMetricLabel>보안 인증</DataMetricLabel>
                </DataMetric>
                <DataMetric>
                  <DataMetricValue>분기별</DataMetricValue>
                  <DataMetricLabel>외부 보안 감사</DataMetricLabel>
                </DataMetric>
                <DataMetric>
                  <DataMetricValue>데이터 윤리 위원회</DataMetricValue>
                  <DataMetricLabel>거버넌스</DataMetricLabel>
                </DataMetric>
              </DataMetricsBox>
            </DataStrategyCardContent>
          </DataStrategyCard>
          
          <DataStrategyCard>
            <DataStrategyCardTitle>AI 모델 훈련 및 개선 시스템</DataStrategyCardTitle>
            <DataStrategyCardContent>
              <p>
                수집된 데이터를 활용한 자체 AI 모델 개발과 지속적 개선을 통해 서비스 품질을 향상시키고, 
                모델 라이선싱을 통한 추가 수익원을 확보합니다.
              </p>
              <DataMetricsBox>
                <DataMetric>
                  <DataMetricValue>31%</DataMetricValue>
                  <DataMetricLabel>정확도 향상</DataMetricLabel>
                </DataMetric>
                <DataMetric>
                  <DataMetricValue>12.4억 원</DataMetricValue>
                  <DataMetricLabel>연간 개발 비용 절감</DataMetricLabel>
                </DataMetric>
                <DataMetric>
                  <DataMetricValue>7.5억 원</DataMetricValue>
                  <DataMetricLabel>모델 라이선싱 예상 수익</DataMetricLabel>
                </DataMetric>
              </DataMetricsBox>
            </DataStrategyCardContent>
          </DataStrategyCard>
        </DataStrategyGrid>
      </DataStrategySection>
    </SectionContent>
  );
};

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SectionHeading = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const HeadingLine = styled.div`
  height: 2px;
  background-color: ${COLORS.RED};
  width: 80px;
`;

const HeadingText = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  white-space: nowrap;
`;

const HighlightText = styled.span`
  color: ${COLORS.RED};
  font-weight: 700;
`;

const BusinessOverview = styled.div`
  margin-bottom: 1rem;
`;

const OverviewText = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const RevenueModelVisual = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const RevenueModelTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: ${COLORS.BLACK};
`;

const RevenueModelChart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 250px;
  margin-bottom: 2rem;
`;

const YearColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
`;

const YearLabel = styled.div`
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const StackedBar = styled.div`
  width: 60px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

interface BarSegmentProps {
  height: string;
  color: string;
  tooltip: string;
}

const BarSegment = styled.div<BarSegmentProps>`
  width: 100%;
  height: ${props => props.height};
  background-color: ${props => props.color};
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:hover::after {
    content: '${props => props.tooltip}';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    white-space: nowrap;
    z-index: 10;
  }
`;

const ChartLegend = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LegendColor = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  background-color: ${props => props.color};
  border-radius: 4px;
`;

const LegendText = styled.span`
  font-size: 0.875rem;
  color: ${COLORS.BLACK};
`;

const BusinessModelGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ModelCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const ModelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(to right, rgba(110, 124, 243, 0.05), rgba(255, 255, 255, 0.8));
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const ModelIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ModelTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  margin: 0;
`;

const ModelContent = styled.div`
  padding: 1.5rem;
`;

const ModelMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const MetricItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MetricLabel = styled.span`
  font-size: 0.75rem;
  color: ${COLORS.BLACK};
  opacity: 0.6;
`;

const MetricValue = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
`;

const ModelDivider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.05);
  margin: 1.5rem 0;
`;

const ModelList = styled.ul`
  padding-left: 1.25rem;
  margin: 0 0 1.5rem;
`;

const ModelListItem = styled.li`
  font-size: 0.938rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  strong {
    font-weight: 600;
    opacity: 1;
    color: ${COLORS.RED};
  }
`;

const USPBox = styled.div`
  background-color: rgba(110, 124, 243, 0.05);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
`;

const USPTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${COLORS.BLACK};
`;

const USPContent = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${COLORS.BLACK};
  margin: 0;
`;

const DataStrategySection = styled.div`
  margin-top: 3rem;
`;

const DataStrategyIntro = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const DataFlowDiagram = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const DataFlowImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const DataFlowCaption = styled.p`
  font-size: 0.875rem;
  opacity: 0.7;
  margin-top: 1rem;
`;

const DataStrategyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DataStrategyCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const DataStrategyCardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
  position: relative;
  padding-bottom: 0.75rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${COLORS.RED};
    border-radius: 1.5px;
  }
`;

const DataStrategyCardContent = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  
  p {
    opacity: 0.8;
    margin-bottom: 1.5rem;
  }
`;

const DataMetricsBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const DataMetric = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const DataMetricValue = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${COLORS.RED};
  margin-bottom: 0.25rem;
  text-align: center;
`;

const DataMetricLabel = styled.div`
  font-size: 0.75rem;
  color: ${COLORS.BLACK};
  opacity: 0.7;
  text-align: center;
`; 