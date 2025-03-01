import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';

// Highlight 컴포넌트 정의
interface HighlightProps {
  color: 'primary' | 'secondary' | 'tertiary';
  inverted?: boolean;
  children: React.ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({ color, inverted = false, children }) => {
  const getColor = () => {
    // 반전 모드일 경우 (어두운 배경에 밝은 글자)
    if (inverted) {
      switch (color) {
        case 'primary':
          return COLORS.WHITE;
        case 'secondary':
          return '#A5B0FF'; // 더 밝은 파란색
        case 'tertiary':
          return '#8FD9A3'; // 더 밝은 초록색
        default:
          return COLORS.WHITE;
      }
    }
    // 일반 모드 (밝은 배경에 어두운 글자)
    else {
      switch (color) {
        case 'primary':
          return COLORS.RED;
        case 'secondary':
          return COLORS.BLUE;
        case 'tertiary':
          return COLORS.GREEN;
        default:
          return COLORS.RED;
      }
    }
  };
  
  return <HighlightSpan color={getColor()}>{children}</HighlightSpan>;
};

// HighlightSpan 정의 후 추가
const HighlightSpan = styled.span`
  color: ${props => props.color};
  position: relative;
  font-weight: 700;
`;

// MarketBar 컴포넌트의 props 정의
interface MarketBarProps {
  height: string;
  label: string;
  type: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
}

const MarketBar: React.FC<MarketBarProps> = ({ height, label, type, children }) => {
  const getColor = () => {
    switch (type) {
      case 'primary':
        return COLORS.RED;
      case 'secondary':
        return COLORS.BLUE;
      case 'tertiary':
        return COLORS.GREEN;
      default:
        return COLORS.RED;
    }
  };
  
  return (
    <MarketBarWrapper>
      <BarValue>{label}</BarValue>
      <BarColumn color={getColor()} height={height}>
        <BarLabel>{children}</BarLabel>
      </BarColumn>
    </MarketBarWrapper>
  );
};

export const MarketAnalysis: React.FC = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

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
      
      return () => {
        // cleanup 함수에서 현재 ref 값을 변수에 저장하여 사용
        if (current) {
          (current as HTMLElement).style.opacity = '0';
        }
      };
    }
  }, []);

  useEffect(() => {
    // 차트 애니메이션 처리
    if (chartRef.current) {
      const bars = chartRef.current.querySelectorAll('.market-bar');
      bars.forEach((bar, index) => {
        // 애니메이션 삭제하여 처음부터 올바른 높이로 표시
        const height = bar.getAttribute('data-height');
        if (height) {
          (bar as HTMLElement).style.height = height;
        }
      });
    }

    return () => {
      if (chartRef.current) {
        const bars = chartRef.current.querySelectorAll('.market-bar');
        bars.forEach((bar) => {
          (bar as HTMLElement).style.height = ''; // 클린업
        });
      }
    };
  }, []);

  return (
    <SectionContent>
      <HeroSection>
        <VisualBackground />
        <HeroContent>
          <SloganContainer>
            <SloganMainText>
              <Highlight color="primary">AI 기술력</Highlight>으로 혁신하는 <br />
              <Highlight color="secondary">데이터 기반</Highlight> 비즈니스
            </SloganMainText>
            <SloganSubText>AI-Powered Innovation & Data-Driven Business Solutions</SloganSubText>
          </SloganContainer>
        </HeroContent>
      </HeroSection>
      
      <MarketOverview>
        <SectionHeading>
          <HeadingLine />
          <HeadingText>시장 개요 및 <Highlight color="primary">성장성</Highlight></HeadingText>
          <HeadingLine />
        </SectionHeading>
        
        <OverviewContent>
          <OverviewText>
            글로벌 AI 솔루션 시장은 2023년 기준 약 <HighlightText>1,500억 달러</HighlightText>로 평가되며, 
            2030년까지 <HighlightText>연평균 성장률(CAGR) 36.8%</HighlightText>로 급성장하여 
            <HighlightText>1조 3,000억 달러</HighlightText> 규모에 이를 것으로 전망됩니다. 
            특히 한국의 AI 기술 도입율은 높은 IT 인프라와 정부 지원으로 인해
            글로벌 평균을 상회하는 <HighlightText>연간 26.8%</HighlightText>의 성장률을 보이고 있습니다.
            이러한 시장 성장률에 맞춰 MUFI는 2027년까지 <HighlightText>연간 168억 원</HighlightText>의 매출 달성을 목표로 하고 있습니다.
          </OverviewText>
          
          <MarketInsightCards>
            <InsightCard>
              <InsightIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" fill="currentColor"/>
                </svg>
              </InsightIcon>
              <InsightTitle>AI 솔루션 시장</InsightTitle>
              <InsightValue>연간 36.8% 성장</InsightValue>
              <InsightDescription>글로벌 AI 시장 급성장 및 B2B AI 솔루션 수요 증가</InsightDescription>
            </InsightCard>
            
            <InsightCard>
              <InsightIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 7h3V5h-3v5zm-4 0h3V5H8v5zm-3 4h10v5H5v-5z" fill="currentColor"/>
                </svg>
              </InsightIcon>
              <InsightTitle>데이터 수집 채널</InsightTitle>
              <InsightValue>포토부스 14,500대</InsightValue>
              <InsightDescription>국내 포토부스 시장의 97%가 데이터 활용 미흡</InsightDescription>
            </InsightCard>
            
            <InsightCard>
              <InsightIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                </svg>
              </InsightIcon>
              <InsightTitle>B2B AI 솔루션 수요</InsightTitle>
              <InsightValue>87% 기업 도입 의향</InsightValue>
              <InsightDescription>중소기업 AI 기술 실제 도입률은 23%에 불과</InsightDescription>
            </InsightCard>
          </MarketInsightCards>
        </OverviewContent>
      </MarketOverview>
      
      <ProductsSection ref={animationRef}>
        <SectionHeading>
          <HeadingLine />
          <HeadingText>혁신적인 <Highlight color="primary">3대 솔루션</Highlight></HeadingText>
          <HeadingLine />
        </SectionHeading>
        
        <ProductCards>
          <ProductCard className="product-item">
            <ProductIconWrapper>
              <ProductIconSvg>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
                </svg>
              </ProductIconSvg>
            </ProductIconWrapper>
            <ProductNameBadge>
              <ProductNameText>
                <Highlight color="primary" inverted={true}>기업용</Highlight> AI 에이전트
              </ProductNameText>
            </ProductNameBadge>
            <ProductDescriptionBox>
              <KeyFeatureList>
                <KeyFeature><FeatureAccent>물류 최적화</FeatureAccent> 알고리즘 (ROI 평균 310%)</KeyFeature>
                <KeyFeature><FeatureAccent>데이터 자산화</FeatureAccent> 파이프라인 (운영 효율성 93% 달성)</KeyFeature>
                <KeyFeature><FeatureAccent>예측형 분석</FeatureAccent> 엔진으로 지속적 비용 절감</KeyFeature>
              </KeyFeatureList>
              <MarketShare>
                <MarketShareLabel>B2B AI 솔루션 시장 목표 점유율 (2027년)</MarketShareLabel>
                <MarketShareValue>15%</MarketShareValue>
              </MarketShare>
            </ProductDescriptionBox>
          </ProductCard>
          
          <ProductCard className="product-item">
            <ProductIconWrapper>
              <ProductIconSvg>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 7h3V5h-3v5zm-4 0h3V5H8v5zm-3 4h10v5H5v-5z" fill="currentColor"/>
                </svg>
              </ProductIconSvg>
            </ProductIconWrapper>
            <ProductNameBadge>
              <ProductNameText>
                <Highlight color="primary" inverted={true}>AI 데이터 수집용</Highlight> 포토부스
              </ProductNameText>
            </ProductNameBadge>
            <ProductDescriptionBox>
              <KeyFeatureList>
                <KeyFeature><FeatureAccent>AI 기반</FeatureAccent> 물류/유통 최적화 (운송비 62% 절감)</KeyFeature>
                <KeyFeature><FeatureAccent>데이터 수집</FeatureAccent> 인프라 (월 12TB 운영 데이터 확보)</KeyFeature>
                <KeyFeature><FeatureAccent>예측형</FeatureAccent> 장애 대응 및 유지보수 시스템</KeyFeature>
              </KeyFeatureList>
              <MarketShare>
                <MarketShareLabel>데이터 수집 채널로서의 역할</MarketShareLabel>
                <MarketShareValue>안정적 캐시카우</MarketShareValue>
              </MarketShare>
            </ProductDescriptionBox>
          </ProductCard>
          
          <ProductCard className="product-item">
            <ProductIconWrapper>
              <ProductIconSvg>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" fill="currentColor"/>
                </svg>
              </ProductIconSvg>
            </ProductIconWrapper>
            <ProductNameBadge>
              <ProductNameText>
                <Highlight color="primary" inverted={true}>AI 추천</Highlight> 소셜 플랫폼
              </ProductNameText>
            </ProductNameBadge>
            <ProductDescriptionBox>
              <KeyFeatureList>
                <KeyFeature><FeatureAccent>네컷사진 기반</FeatureAccent> 프로필 (친구 추가율 142% 증가)</KeyFeature>
                <KeyFeature><FeatureAccent>AI 추천</FeatureAccent> 시스템으로 인게이지먼트 최적화</KeyFeature>
                <KeyFeature><FeatureAccent>데이터 기반</FeatureAccent> 사용자 행동 패턴 분석</KeyFeature>
              </KeyFeatureList>
              <MarketShare>
                <MarketShareLabel>B2C 고객 데이터 확보 채널로서의 가치</MarketShareLabel>
                <MarketShareValue>MAU 50만+</MarketShareValue>
              </MarketShare>
            </ProductDescriptionBox>
          </ProductCard>
        </ProductCards>
        
        <MarketPotentialBanner ref={chartRef}>
          <MarketPotentialTitle>
            <Highlight color="primary">솔루션별 연간 성장률</Highlight>
          </MarketPotentialTitle>
          
          <GrowthChartContainer>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={[
                  { name: '2023', 포토부스: 11.2, AI에이전트: 26.8, 소셜플랫폼: 18.5 },
                  { name: '2024', 포토부스: 11.7, AI에이전트: 28.1, 소셜플랫폼: 19.2 },
                  { name: '2025', 포토부스: 12.3, AI에이전트: 29.5, 소셜플랫폼: 20.0 },
                  { name: '2026', 포토부스: 12.9, AI에이전트: 31.0, 소셜플랫폼: 20.8 },
                  { name: '2027', 포토부스: 13.5, AI에이전트: 32.6, 소셜플랫폼: 21.7 },
                ]}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="name" stroke={COLORS.BLACK} />
                <YAxis stroke={COLORS.BLACK} tickFormatter={(value) => `${value}%`} />
                <Tooltip 
                  formatter={(value) => [`${value}%`, '']} 
                  labelFormatter={(label) => `${label}년`}
                  contentStyle={{ backgroundColor: COLORS.WHITE, borderColor: '#DDDDDD' }}
                />
                <Legend verticalAlign="top" height={36} />
                <Line 
                  type="monotone" 
                  dataKey="포토부스" 
                  stroke={COLORS.RED} 
                  strokeWidth={3} 
                  dot={{ stroke: COLORS.RED, strokeWidth: 2, r: 4, fill: COLORS.WHITE }}
                  activeDot={{ r: 6 }}
                  name="포토부스 (대학생 데이터 수집)"
                />
                <Line 
                  type="monotone" 
                  dataKey="AI에이전트" 
                  stroke={COLORS.BLUE} 
                  strokeWidth={3}
                  dot={{ stroke: COLORS.BLUE, strokeWidth: 2, r: 4, fill: COLORS.WHITE }}
                  activeDot={{ r: 6 }}
                  name="AI 에이전트 (데이터 기반 학습)"
                />
                <Line 
                  type="monotone" 
                  dataKey="소셜플랫폼" 
                  stroke={COLORS.GREEN} 
                  strokeWidth={3}
                  dot={{ stroke: COLORS.GREEN, strokeWidth: 2, r: 4, fill: COLORS.WHITE }}
                  activeDot={{ r: 6 }}
                  name="소셜 플랫폼 (사용자 경험 향상)"
                />
              </LineChart>
            </ResponsiveContainer>
            <GrowthRateLegend>
              <LegendItem>
                <LegendColor color={COLORS.RED} />
                <LegendText>포토부스: 시작 11.2%</LegendText>
              </LegendItem>
              <LegendItem>
                <LegendColor color={COLORS.BLUE} />
                <LegendText>AI 에이전트: 시작 26.8%</LegendText>
              </LegendItem>
              <LegendItem>
                <LegendColor color={COLORS.GREEN} />
                <LegendText>소셜 플랫폼: 시작 18.5%</LegendText>
              </LegendItem>
            </GrowthRateLegend>
          </GrowthChartContainer>
        </MarketPotentialBanner>
      </ProductsSection>
      
      <MarketResearchSection>
        <SectionHeading>
          <HeadingLine />
          <HeadingText>시장 조사 <Highlight color="primary">핵심 데이터</Highlight></HeadingText>
          <HeadingLine />
        </SectionHeading>
        
        <Paragraph>
          포토부스, AI 솔루션, 소셜 플랫폼 시장에 대한 심층 분석을 통해 
          MUFI의 사업 영역별 성장 잠재력과 경쟁 환경을 평가하였습니다:
        </Paragraph>
        
        <MarketTable>
          <thead>
            <tr>
              <TableHeader>사업 영역</TableHeader>
              <TableHeader>현재 시장 규모 (2023)</TableHeader>
              <TableHeader>예상 시장 규모 (2027)</TableHeader>
              <TableHeader>연평균 성장률</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>AI 자율 운영 포토부스</TableCell>
              <TableCell>6,720억 원</TableCell>
              <TableCell>1조 2,800억 원</TableCell>
              <TableCell>11.2% 이상</TableCell>
            </tr>
            <tr>
              <TableCell>기업용 AI 솔루션</TableCell>
              <TableCell>2조 1,300억 원</TableCell>
              <TableCell>5조 4,800억 원</TableCell>
              <TableCell>26.8% 이상</TableCell>
            </tr>
            <tr>
              <TableCell>대학생 소셜 플랫폼</TableCell>
              <TableCell>3,650억 원</TableCell>
              <TableCell>7,230억 원</TableCell>
              <TableCell>18.5% 이상</TableCell>
            </tr>
            <tr>
              <TableCell>MUFI 총 매출 목표</TableCell>
              <TableCell>(2025년) 10억 원</TableCell>
              <TableCell>(2027년) 168억 원</TableCell>
              <TableCell>연간 310% 이상</TableCell>
            </tr>
          </tbody>
        </MarketTable>
        
        <MarketDetails>
          <MarketCard>
            <MarketCardTitle>AI 자율 운영 포토부스 시장 분석</MarketCardTitle>
            <MarketCardContent>
              <p>
                한국 내 포토부스 시장은 지속적인 성장세를 보이고 있으며, 자율 운영 AI 도입은 초기 단계입니다. 
                현재 한국의 포토부스 수는 약 <HighlightText>14,500대</HighlightText>로 추정되며, 
                이 중 AI 자율 관리 시스템을 갖춘 포토부스는 <HighlightText>3% 미만</HighlightText>입니다.
              </p>
              <p>
                특히 서울 내 약 4,000개 카페, 소매점에서 포토부스 설치 수요가 있으나, 
                인력 관리 문제로 도입을 주저하는 사례가 <HighlightText>42%</HighlightText>에 달합니다. 
                MUFI의 AI 자율 운영 시스템은 이 시장 간극을 정확히 공략하며, 2027년까지 포토부스 매출 
                <HighlightText>100.8억 원(전체 매출의 60%)</HighlightText>을 달성할 계획입니다.
              </p>
            </MarketCardContent>
          </MarketCard>
          
          <MarketCard>
            <MarketCardTitle>기업용 AI 솔루션 시장 기회</MarketCardTitle>
            <MarketCardContent>
              <p>
                글로벌 AI 시장은 2023년부터 2030년까지 <HighlightText>연평균 36.8% 성장</HighlightText>이 예상되며,
                특히 한국의 중소기업 대상 AI 솔루션 시장은 정부 지원으로 성장이 가속화되고 있습니다.
              </p>
              <p>
                2023년 국내 중소기업 중 <HighlightText>87%</HighlightText>가 AI 기술 도입 필요성을 인식하고 있으나,
                실제 도입률은 <HighlightText>23%</HighlightText>에 불과하여 시장 침투 기회가 상당합니다.
                MUFI는 2027년까지 이 시장에서 <HighlightText>42억 원(전체 매출의 25%)</HighlightText>의 매출을 달성하여
                시장 점유율을 <HighlightText>3.1%</HighlightText>까지 확대할 계획입니다.
              </p>
            </MarketCardContent>
          </MarketCard>
          
          <MarketCard>
            <MarketCardTitle>대학생 소셜 플랫폼 시장 인사이트</MarketCardTitle>
            <MarketCardContent>
              <p>
                한국의 대학생 인구는 약 <HighlightText>270만명</HighlightText>으로, 연간 소비 시장 규모는 
                <HighlightText>3.7조원</HighlightText>으로 추정됩니다. 대학생 특화 소셜 미디어 사용 비율은
                <HighlightText>92%</HighlightText>이나, 캠퍼스 특화 플랫폼은 부재합니다.
              </p>
              <p>
                시장 설문조사 결과, 대학생의 <HighlightText>78%</HighlightText>가 캠퍼스 내 네트워킹에
                특화된 플랫폼 필요성을 인식하고 있어, 침투 기회가 높은 블루오션 시장입니다.
                MUFI는 2027년까지 이 시장에서 <HighlightText>19.2억 원(전체 매출의 12%)</HighlightText>의 매출과
                <HighlightText>20만 명의 사용자</HighlightText>를 확보할 계획입니다.
              </p>
            </MarketCardContent>
          </MarketCard>
        </MarketDetails>
      </MarketResearchSection>
      
      <CompetitiveAnalysis>
        <CompetitiveTitle>경쟁 분석 및 시장 차별화 전략</CompetitiveTitle>
        <CompetitiveGrid>
          <CompetitiveCard>
            <CompetitiveCardTitle>경쟁 환경 분석</CompetitiveCardTitle>
            <CompetitiveCardContent>
              <ul>
                <li><strong>AI 솔루션 시장:</strong> 글로벌 IT 기업들이 범용 AI 솔루션 제공 중이나, 산업 특화 AI 솔루션은 부재하며 특히 물류/유통 최적화와 데이터 자산화에 특화된 솔루션은 희소</li>
                <li><strong>포토부스 데이터 활용:</strong> 국내 약 40개 브랜드, 14,500대의 포토부스 중 93%가 데이터 수집과 AI 분석 역량 부재</li>
                <li><strong>AI 데이터 통합:</strong> 오프라인 데이터(포토부스)와 온라인 플랫폼 데이터를 통합 분석하는 기업은 전무한 상태로 MUFI만의 독보적 영역</li>
              </ul>
            </CompetitiveCardContent>
          </CompetitiveCard>
          
          <CompetitiveAdvantageCard>
            <CompetitiveCardTitle>MUFI의 핵심 경쟁 우위</CompetitiveCardTitle>
            <AdvantageList>
              <AdvantageItem>
                <AdvantageIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                  </svg>
                </AdvantageIcon>
                <AdvantageText>
                  <strong>독보적 AI 기술력:</strong> K-means 클러스터링 기반 물류 최적화 알고리즘, 자연어 처리 기술, 이미지 인식 AI 등 폭넓은 기술 스택 보유
                </AdvantageText>
              </AdvantageItem>
              
              <AdvantageItem>
                <AdvantageIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                  </svg>
                </AdvantageIcon>
                <AdvantageText>
                  <strong>실시간 데이터 파이프라인:</strong> 월 12TB 운영 데이터 수집 및 분석으로 운영 효율성 지속 향상, 초기 투자 대비 4.3개월 ROI 실현
                </AdvantageText>
              </AdvantageItem>
              
              <AdvantageItem>
                <AdvantageIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                  </svg>
                </AdvantageIcon>
                <AdvantageText>
                  <strong>예측형 AI 시스템:</strong> 수요 예측 정확도 97.3%로 업무 효율성 최적화, AI 알고리즘의 지속적 자기 개선으로 후발주자 대비 데이터 우위 확보
                </AdvantageText>
              </AdvantageItem>
              
              <AdvantageItem>
                <AdvantageIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                  </svg>
                </AdvantageIcon>
                <AdvantageText>
                  <strong>온/오프라인 데이터 통합:</strong> 포토부스(오프라인)와 소셜 플랫폼(온라인)의 데이터를 통합 분석하는 유일한 기업으로, 다차원적 인사이트 제공
                </AdvantageText>
              </AdvantageItem>
            </AdvantageList>
          </CompetitiveAdvantageCard>
          
          <CompetitiveCard>
            <CompetitiveCardTitle>진입 장벽 구축 전략</CompetitiveCardTitle>
            <CompetitiveCardContent>
              <ul>
                <li><strong>AI 알고리즘 특허 출원:</strong> 물류 최적화 및 데이터 처리 알고리즘 3건 특허 출원 (2024년 2분기 내 승인 예정)</li>
                <li><strong>독점적 데이터 확보:</strong> 포토부스와 소셜 플랫폼 통한 광범위한 데이터 수집으로 AI 학습 데이터셋 확보, 후발주자 대비 예측 정확도 30% 이상 우위</li>
                <li><strong>B2B 전략적 계약:</strong> 5개 기업과 독점적 AI 솔루션 및 데이터 분석 서비스 제공 계약 체결 (초기 3년)</li>
                <li><strong>규모의 경제:</strong> 대량 데이터 처리 인프라 구축으로 단위 처리 비용 절감, 신규 진입자 대비 30% 이상 원가 우위 확보</li>
              </ul>
            </CompetitiveCardContent>
          </CompetitiveCard>
        </CompetitiveGrid>
      </CompetitiveAnalysis>
      
      {/* 대학교 제휴 현황 및 전망 섹션 추가 */}
      <UniversityPartnershipSection>
        <SectionHeading>
          <HeadingLine />
          <HeadingText>대학교 <Highlight color="primary">제휴 현황</Highlight> 및 전망</HeadingText>
          <HeadingLine />
        </SectionHeading>
        
        <Paragraph>
          MUFI는 현재 11개 주요 대학교와 전략적 제휴를 맺고, 캠퍼스 내 포토부스 설치 및 
          축제/이벤트 참여를 통해 학생들과의 접점을 확대하고 있습니다. 
          이를 통해 포토부스 매출 창출과 함께 소셜 플랫폼으로의 사용자 전환을 추진하고 있습니다.
        </Paragraph>
        
        <UniversityDataContainer>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={[
                { name: '서울대', 학생수: 16500, 축제규모: 5, 전환율: 8.5, 매출: 4200 },
                { name: '연세대', 학생수: 18700, 축제규모: 5, 전환율: 7.8, 매출: 3800 },
                { name: '고려대', 학생수: 19200, 축제규모: 5, 전환율: 7.2, 매출: 3600 },
                { name: '성균관대', 학생수: 15800, 축제규모: 4, 전환율: 6.9, 매출: 3100 },
                { name: '경희대', 학생수: 17200, 축제규모: 4, 전환율: 6.5, 매출: 2900 },
                { name: '건국대', 학생수: 14500, 축제규모: 4, 전환율: 6.2, 매출: 2700 },
                { name: '동국대', 학생수: 13800, 축제규모: 3, 전환율: 5.8, 매출: 2300 },
                { name: '삼육대', 학생수: 7200, 축제규모: 3, 전환율: 5.5, 매출: 1800 },
                { name: '충북대', 학생수: 12500, 축제규모: 3, 전환율: 5.2, 매출: 2000 },
                { name: '서원대', 학생수: 8300, 축제규모: 2, 전환율: 4.9, 매출: 1500 },
                { name: '청주대', 학생수: 9200, 축제규모: 2, 전환율: 4.7, 매출: 1600 },
              ]}
              margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis 
                dataKey="name" 
                stroke={COLORS.BLACK} 
                angle={-45} 
                textAnchor="end" 
                height={80} 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                yAxisId="left" 
                orientation="left" 
                stroke={COLORS.BLACK} 
                tickFormatter={(value) => `${value}명`} 
                width={80}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke={COLORS.RED} 
                tickFormatter={(value) => `${value}%`} 
                width={50}
              />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === '학생수') return [`${value}명`, '학생 수'];
                  if (name === '축제규모') return [` ${value} (1-5)`, '축제 규모'];
                  if (name === '전환율') return [`${value}%`, '소개팅 서비스 전환율'];
                  if (name === '매출') return [`${value}만원`, '예상 연간 매출'];
                  return [value, name];
                }}
                labelFormatter={(label) => `${label}`}
                contentStyle={{ backgroundColor: COLORS.WHITE, borderColor: '#DDDDDD' }}
              />
              <Legend verticalAlign="top" height={50} />
              <Bar 
                dataKey="학생수" 
                fill={COLORS.BLUE} 
                yAxisId="left" 
                barSize={30} 
                name="학생 수"
                radius={[4, 4, 0, 0]}
              />
              <Line 
                type="monotone" 
                dataKey="전환율" 
                stroke={COLORS.RED} 
                yAxisId="right" 
                strokeWidth={3}
                dot={{ stroke: COLORS.RED, strokeWidth: 2, r: 4, fill: COLORS.WHITE }}
                activeDot={{ r: 6 }}
                name="소개팅 서비스 전환율"
              />
            </BarChart>
          </ResponsiveContainer>
        </UniversityDataContainer>
        
        <UniversityPartnerTable>
          <thead>
            <tr>
              <TableHeader>대학교</TableHeader>
              <TableHeader>학생 수</TableHeader>
              <TableHeader>축제 규모 (1-5)</TableHeader>
              <TableHeader>소개팅 서비스 전환율</TableHeader>
              <TableHeader>예상 연간 매출</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>서울대학교</TableCell>
              <TableCell>16,500명</TableCell>
              <TableCell>5 (대규모)</TableCell>
              <TableCell>8.5%</TableCell>
              <TableCell>4,200만원</TableCell>
            </tr>
            <tr>
              <TableCell>연세대학교</TableCell>
              <TableCell>18,700명</TableCell>
              <TableCell>5 (대규모)</TableCell>
              <TableCell>7.8%</TableCell>
              <TableCell>3,800만원</TableCell>
            </tr>
            <tr>
              <TableCell>고려대학교</TableCell>
              <TableCell>19,200명</TableCell>
              <TableCell>5 (대규모)</TableCell>
              <TableCell>7.2%</TableCell>
              <TableCell>3,600만원</TableCell>
            </tr>
            <tr>
              <TableCell>성균관대학교</TableCell>
              <TableCell>15,800명</TableCell>
              <TableCell>4 (대중규모)</TableCell>
              <TableCell>6.9%</TableCell>
              <TableCell>3,100만원</TableCell>
            </tr>
            <tr>
              <TableCell>경희대학교</TableCell>
              <TableCell>17,200명</TableCell>
              <TableCell>4 (대중규모)</TableCell>
              <TableCell>6.5%</TableCell>
              <TableCell>2,900만원</TableCell>
            </tr>
            <tr>
              <TableCell>건국대학교</TableCell>
              <TableCell>14,500명</TableCell>
              <TableCell>4 (대중규모)</TableCell>
              <TableCell>6.2%</TableCell>
              <TableCell>2,700만원</TableCell>
            </tr>
            <tr>
              <TableCell>동국대학교</TableCell>
              <TableCell>13,800명</TableCell>
              <TableCell>3 (중규모)</TableCell>
              <TableCell>5.8%</TableCell>
              <TableCell>2,300만원</TableCell>
            </tr>
            <tr>
              <TableCell>삼육대학교</TableCell>
              <TableCell>7,200명</TableCell>
              <TableCell>3 (중규모)</TableCell>
              <TableCell>5.5%</TableCell>
              <TableCell>1,800만원</TableCell>
            </tr>
            <tr>
              <TableCell>충북대학교</TableCell>
              <TableCell>12,500명</TableCell>
              <TableCell>3 (중규모)</TableCell>
              <TableCell>5.2%</TableCell>
              <TableCell>2,000만원</TableCell>
            </tr>
            <tr>
              <TableCell>서원대학교</TableCell>
              <TableCell>8,300명</TableCell>
              <TableCell>2 (소규모)</TableCell>
              <TableCell>4.9%</TableCell>
              <TableCell>1,500만원</TableCell>
            </tr>
            <tr>
              <TableCell>청주대학교</TableCell>
              <TableCell>9,200명</TableCell>
              <TableCell>2 (소규모)</TableCell>
              <TableCell>4.7%</TableCell>
              <TableCell>1,600만원</TableCell>
            </tr>
            <tr className="total-row">
              <TableCell><strong>합계</strong></TableCell>
              <TableCell><strong>152,900명</strong></TableCell>
              <TableCell>-</TableCell>
              <TableCell><strong>평균 6.3%</strong></TableCell>
              <TableCell><strong>2억 9,500만원</strong></TableCell>
            </tr>
          </tbody>
        </UniversityPartnerTable>
        
        <UniversityInsightGrid>
          <UniversityInsightCard>
            <UniversityInsightTitle>포토부스 운영 전략</UniversityInsightTitle>
            <UniversityInsightContent>
              <ul>
                <li>축제 기간 중 <strong>평균 가동률 95%</strong> 달성</li>
                <li>대규모 대학 축제 시 <strong>최대 5대</strong> 포토부스 동시 운영</li>
                <li>대학 내 고정 포토부스 설치로 <strong>연중 안정적 수익원</strong> 확보</li>
                <li>학생회 및 동아리 제휴를 통한 <strong>마케팅 비용 최소화</strong></li>
              </ul>
            </UniversityInsightContent>
          </UniversityInsightCard>
          
          <UniversityInsightCard>
            <UniversityInsightTitle>소셜 플랫폼 전환 전략</UniversityInsightTitle>
            <UniversityInsightContent>
              <ul>
                <li>포토부스 이용 시 <strong>앱 설치자 30% 할인</strong> 프로모션</li>
                <li>대학별 특화 <strong>소개팅 이벤트</strong> 정기 개최</li>
                <li>학생회 협업 <strong>캠퍼스 커플 매칭</strong> 프로그램 운영</li>
                <li>휴학생/졸업생 대상 <strong>동문 네트워킹</strong> 기능 강화</li>
              </ul>
            </UniversityInsightContent>
          </UniversityInsightCard>
          
          <UniversityInsightCard>
            <UniversityInsightTitle>데이터 수집 및 활용 계획</UniversityInsightTitle>
            <UniversityInsightContent>
              <ul>
                <li>대학별 <strong>학생 사용 패턴</strong> 분석으로 서비스 최적화</li>
                <li>축제 기간 별도 <strong>이벤트 데이터</strong> 수집으로 트렌드 파악</li>
                <li>대학생 <strong>소비 트렌드</strong> 분석하여 B2B 데이터 상품화</li>
                <li><strong>익명화 처리</strong>를 통한 안전한 데이터 활용 체계 구축</li>
              </ul>
            </UniversityInsightContent>
          </UniversityInsightCard>
        </UniversityInsightGrid>
        
        <UniversityExpansionPlan>
          <ExpansionPlanTitle>대학교 제휴 확장 계획 (2025-2027)</ExpansionPlanTitle>
          <ExpansionPlanContent>
            <p>
              현재 11개 대학을 시작으로, 향후 3년간 전국 주요 대학으로 제휴를 확대할 계획입니다.
              2025년 30개교, 2026년 50개교, 2027년 100개교 이상으로 네트워크를 확장하여
              대학생 타겟 플랫폼으로서의 시장 지배력을 강화할 것입니다.
            </p>
            <ExpansionPlanChart>
              <ExpansionYearItem>
                <ExpansionYear>2024</ExpansionYear>
                <ExpansionValue>11개교</ExpansionValue>
                <ExpansionBar value={11}/>
                <ExpansionRevenue>2.95억원</ExpansionRevenue>
              </ExpansionYearItem>
              <ExpansionYearItem>
                <ExpansionYear>2025</ExpansionYear>
                <ExpansionValue>30개교</ExpansionValue>
                <ExpansionBar value={30}/>
                <ExpansionRevenue>8.2억원</ExpansionRevenue>
              </ExpansionYearItem>
              <ExpansionYearItem>
                <ExpansionYear>2026</ExpansionYear>
                <ExpansionValue>50개교</ExpansionValue>
                <ExpansionBar value={50}/>
                <ExpansionRevenue>15.4억원</ExpansionRevenue>
              </ExpansionYearItem>
              <ExpansionYearItem>
                <ExpansionYear>2027</ExpansionYear>
                <ExpansionValue>100개교</ExpansionValue>
                <ExpansionBar value={100}/>
                <ExpansionRevenue>37.2억원</ExpansionRevenue>
              </ExpansionYearItem>
            </ExpansionPlanChart>
          </ExpansionPlanContent>
        </UniversityExpansionPlan>
      </UniversityPartnershipSection>
      
      <GlobalMarketOpportunity>
        <GlobalMarketTitle>글로벌 AI 솔루션 시장 기회 분석</GlobalMarketTitle>
        <GlobalMarketContent>
          MUFI의 AI 기술과 데이터 분석 역량은 글로벌 시장에서도 높은 성장 가능성을 갖고 있습니다.
          각 주요 지역별 AI 솔루션 시장 기회와 맞춤형 진출 전략을 수립했습니다:
        </GlobalMarketContent>
        
        <GlobalMarketGrid>
          <GlobalMarketCard>
            <GlobalMarketFlag>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/>
              </svg>
            </GlobalMarketFlag>
            <GlobalMarketRegion>동남아시아</GlobalMarketRegion>
            <GlobalMarketSize>AI 시장 연간 32% 성장</GlobalMarketSize>
            <GlobalMarketStrategyList>
              <GlobalMarketStrategyItem>물류/유통 최적화 AI 솔루션 우선 진출</GlobalMarketStrategyItem>
              <GlobalMarketStrategyItem>현지 물류 기업과 전략적 파트너십 체결</GlobalMarketStrategyItem>
              <GlobalMarketStrategyItem>포토부스는 데이터 수집 채널로 2차 진출</GlobalMarketStrategyItem>
            </GlobalMarketStrategyList>
            <GlobalMarketTarget>5년 내 B2B 고객 30개 기업 확보</GlobalMarketTarget>
          </GlobalMarketCard>
          
          <GlobalMarketCard>
            <GlobalMarketFlag>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/>
              </svg>
            </GlobalMarketFlag>
            <GlobalMarketRegion>일본</GlobalMarketRegion>
            <GlobalMarketSize>B2B AI 시장 25.8% 성장</GlobalMarketSize>
            <GlobalMarketStrategyList>
              <GlobalMarketStrategyItem>인력 부족 해결을 위한 AI 자동화 솔루션 제공</GlobalMarketStrategyItem>
              <GlobalMarketStrategyItem>일본 IT 기업과 기술 제휴로 현지화 가속</GlobalMarketStrategyItem>
              <GlobalMarketStrategyItem>푸리쿠라 등 기존 포토부스와 AI 통합 제안</GlobalMarketStrategyItem>
            </GlobalMarketStrategyList>
            <GlobalMarketTarget>5년 내 매출 50억원 달성 (AI 라이선싱)</GlobalMarketTarget>
          </GlobalMarketCard>
          
          <GlobalMarketCard>
            <GlobalMarketFlag>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/>
              </svg>
            </GlobalMarketFlag>
            <GlobalMarketRegion>북미</GlobalMarketRegion>
            <GlobalMarketSize>최대 AI 시장, 40.2% 성장</GlobalMarketSize>
            <GlobalMarketStrategyList>
              <GlobalMarketStrategyItem>SaaS 형태의 AI 솔루션 구독 모델 출시</GlobalMarketStrategyItem>
              <GlobalMarketStrategyItem>현지 SI 기업과 파트너십으로 고객 확보</GlobalMarketStrategyItem>
              <GlobalMarketStrategyItem>ROI 310% 기반 B2B 마케팅 전략 수립</GlobalMarketStrategyItem>
            </GlobalMarketStrategyList>
            <GlobalMarketTarget>5년 내 월 구독 매출 50만 달러 (MRR) 달성</GlobalMarketTarget>
          </GlobalMarketCard>
        </GlobalMarketGrid>
        
        <GlobalMarketProjection>
          <GlobalProjectionTitle>글로벌 AI 사업 5개년 매출 전망</GlobalProjectionTitle>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={[
                { year: '1년차', value: 5, label: '5억원' },
                { year: '2년차', value: 19, label: '19억원' },
                { year: '3년차', value: 45, label: '45억원' },
                { year: '4년차', value: 90, label: '90억원' },
                { year: '5년차', value: 168, label: '168억원' },
              ]}
              margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
              <XAxis dataKey="year" tick={{ fill: '#333', fontSize: 12 }} />
              <YAxis 
                tick={{ fill: '#333', fontSize: 12 }} 
                tickFormatter={(value) => `${value}억`}
                width={50}
              />
              <Tooltip
                formatter={(value) => [`${value}억원`, '매출액']}
                labelFormatter={(label) => `${label}`}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '6px',
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  fontSize: '12px'
                }}
              />
              <Bar 
                dataKey="value" 
                name="매출액" 
                fill={COLORS.RED}
                fillOpacity={0.8}
                radius={[4, 4, 0, 0]}
                barSize={35}
                label={{ 
                  position: 'top', 
                  fill: "#333", 
                  fontSize: 12,
                  fontWeight: 600,
                  formatter: (value: any) => `${value}억원`
                }}
              />
            </BarChart>
          </ResponsiveContainer>
          <GlobalProjectionNote>* 5년차 매출의 60%는 포토부스 임대, 25%는 AI 솔루션, 12%는 소셜 플랫폼, 3%는 데이터 판매</GlobalProjectionNote>
        </GlobalMarketProjection>
      </GlobalMarketOpportunity>
      
      <TargetMarket>
        <TargetMarketTitle>AI 중심 비즈니스로의 단계별 발전 전략</TargetMarketTitle>
        <TargetMarketContent>
          MUFI는 AI 기술력을 핵심으로 하는 기업으로, 포토부스 사업은 데이터 확보와 시장 검증을 위한 
          첫 단계입니다. 피터 틸의 전략적 접근법에 따라, 다음과 같은 단계별 발전 전략을 수립했습니다:
        </TargetMarketContent>
        
        <TargetMarketPhases>
          <TargetMarketPhase>
            <TargetMarketPhaseTitle>1단계: 포토부스 통한 AI 데이터 확보 (2024-2025)</TargetMarketPhaseTitle>
            <TargetMarketMeter value={30} />
            <TargetMarketPhaseContent>
              <TargetMarketPhaseList>
                <TargetMarketPhaseItem>포토부스 50대 운영으로 월 12TB 운영 데이터 축적</TargetMarketPhaseItem>
                <TargetMarketPhaseItem>AI 알고리즘 개발 및 초기 물류 최적화 62% 달성</TargetMarketPhaseItem>
                <TargetMarketPhaseItem>포토부스는 안정적 캐시카우 역할(월 300팀 촬영)</TargetMarketPhaseItem>
              </TargetMarketPhaseList>
            </TargetMarketPhaseContent>
          </TargetMarketPhase>
          
          <TargetMarketPhase>
            <TargetMarketPhaseTitle>2단계: B2B AI 솔루션 확장 (2025-2026)</TargetMarketPhaseTitle>
            <TargetMarketMeter value={70} />
            <TargetMarketPhaseContent>
              <TargetMarketPhaseList>
                <TargetMarketPhaseItem>포토부스에서 검증된 AI 기술을 B2B 솔루션으로 확장</TargetMarketPhaseItem>
                <TargetMarketPhaseItem>국내 50개 기업 고객 확보, 월 구독형 AI 서비스 제공</TargetMarketPhaseItem>
                <TargetMarketPhaseItem>기업 데이터 분석을 통한 AI 알고리즘 고도화 (정확도 97.3%)</TargetMarketPhaseItem>
              </TargetMarketPhaseList>
            </TargetMarketPhaseContent>
          </TargetMarketPhase>
          
          <TargetMarketPhase>
            <TargetMarketPhaseTitle>3단계: 글로벌 AI 기업으로 도약 (2027-)</TargetMarketPhaseTitle>
            <TargetMarketMeter value={100} />
            <TargetMarketPhaseContent>
              <TargetMarketPhaseList>
                <TargetMarketPhaseItem>3대 핵심 해외 시장에 AI 솔루션 진출 (SaaS 모델)</TargetMarketPhaseItem>
                <TargetMarketPhaseItem>포토부스와 소셜 플랫폼은 데이터 수집 채널로 활용</TargetMarketPhaseItem>
                <TargetMarketPhaseItem>매출 중 AI 솔루션 비중 70% 이상으로 확대</TargetMarketPhaseItem>
              </TargetMarketPhaseList>
            </TargetMarketPhaseContent>
          </TargetMarketPhase>
        </TargetMarketPhases>
      </TargetMarket>
      
      {/* 비전미션 섹션 추가 */}
      <VisionMissionBlock />
    </SectionContent>
  );
};

// 스타일 컴포넌트
const growUp = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HeroSection = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const VisualBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.RED};
  opacity: 0.1;
  border-radius: 12px;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 12px;
`;

const SloganContainer = styled.div`
  text-align: center;
`;

const SloganMainText = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${COLORS.BLACK};
  margin-bottom: 0.5rem;
  line-height: 1.3;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  ${MEDIA_QUERIES.TABLET} {
    font-size: 3.5rem;
  }
`;

const SloganSubText = styled.p`
  font-size: 1.25rem;
  color: ${COLORS.RED};
  opacity: 0.9;
  font-weight: 500;
`;

const ProductsSection = styled.div`
  margin-bottom: 3rem;
  text-align: center;
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

const ProductCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProductCard = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  }
`;

const ProductIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
`;

const ProductIconSvg = styled.div`
  width: 100%;
  height: 100%;
  color: ${COLORS.RED};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ProductNameBadge = styled.div`
  background-color: ${COLORS.RED};
  border-radius: 12px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  display: inline-block;
`;

const ProductNameText = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.WHITE};
  margin: 0;
`;

const ProductDescriptionBox = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const KeyFeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const KeyFeature = styled.li`
  margin-bottom: 0.5rem;
  opacity: 0.8;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureAccent = styled.span`
  font-weight: 700;
  color: ${COLORS.RED};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${COLORS.RED};
    opacity: 0.3;
  }
`;

const MarketPotentialBanner = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(to bottom right, ${COLORS.WHITE}, rgba(110, 124, 243, 0.05));
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(110, 124, 243, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, ${COLORS.RED}, ${COLORS.BLUE});
  }
`;

const MarketPotentialTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${COLORS.BLACK};
  
  span {
    padding: 0 8px;
    border-radius: 8px;
    background-color: rgba(110, 124, 243, 0.1);
  }
`;

const SolutionCards = styled.div`
  display: grid;
  grid-template-columns: auto 30px auto 30px auto;
  gap: 0;
  margin-top: 2rem;
  align-items: center;
  
  ${MEDIA_QUERIES.MOBILE} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SolutionCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const SolutionIcon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  color: ${COLORS.RED};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const SolutionTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${COLORS.BLACK};
`;

const SolutionDescription = styled.p`
  font-size: 0.9375rem;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const GrowthIndicator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const GrowthCircle = styled.div<{ primary?: boolean; secondary?: boolean }>`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const GrowthValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${props => props.color || COLORS.RED};
`;

const GrowthLabel = styled.div`
  font-size: 0.875rem;
  opacity: 0.8;
  margin-top: 0.25rem;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const MarketTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 1rem 0 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  background-color: ${COLORS.RED};
  color: white;
  padding: 1.2rem 1rem;
  text-align: left;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
  
  &:first-child {
    width: 40%;
  }
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 25%;
    height: 50%;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.875rem;
  }
`;

const TableCell = styled.td`
  padding: 1.2rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.875rem;
  }
  
  &:nth-child(2), &:nth-child(3) {
    text-align: center;
    font-weight: 500;
  }
  
  &:nth-child(3) {
    color: ${COLORS.RED};
    font-weight: 600;
  }
  
  tr:last-child & {
    border-bottom: none;
  }
  
  tr:hover & {
    background-color: rgba(110, 124, 243, 0.05);
  }
`;

const MarketDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MarketCard = styled.div`
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

const MarketCardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${COLORS.BLACK};
`;

const MarketCardContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const CompetitiveAnalysis = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const CompetitiveTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const CompetitiveGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CompetitiveCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  height: 100%;
`;

const CompetitiveCardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${COLORS.RED};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: ${COLORS.BLACK};
  }
`;

const CompetitiveCardContent = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  
  ul {
    padding-left: 1.25rem;
    margin: 0;
    
    li {
      margin-bottom: 0.75rem;
      opacity: 0.8;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const TargetMarket = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const TargetMarketTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const TargetMarketContent = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  margin-bottom: 1.5rem;
`;

const TargetMarketPhases = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  ${MEDIA_QUERIES.TABLET} {
    flex-direction: row;
  }
`;

const TargetMarketPhase = styled.div`
  flex: 1;
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const TargetMarketPhaseTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${COLORS.RED};
`;

const TargetMarketPhaseContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const MarketOverview = styled.div`
  margin-bottom: 3rem;
`;

const OverviewContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: 1fr 1fr;
  }
`;

const OverviewText = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  margin-bottom: 1rem;
`;

const HighlightText = styled.span`
  font-weight: 700;
  color: ${COLORS.RED};
  background-color: rgba(110, 124, 243, 0.08);
  padding: 0 5px;
  border-radius: 4px;
`;

const MarketInsightCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  
  ${MEDIA_QUERIES.MOBILE} {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

const InsightCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(110, 124, 243, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const InsightIcon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  color: ${COLORS.RED};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const InsightTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${COLORS.BLACK};
`;

const InsightValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${COLORS.RED};
  margin-bottom: 0.75rem;
`;

const InsightDescription = styled.p`
  font-size: 0.9375rem;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const MarketShare = styled.div`
  margin-top: 1.5rem;
  background-color: rgba(110, 124, 243, 0.08);
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
`;

const MarketShareLabel = styled.div`
  font-size: 0.875rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;

const MarketShareValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLORS.RED};
`;

const MarketResearchSection = styled.div`
  margin-top: 4rem;
  margin-bottom: 3rem;
`;

const TargetMarketPhaseList = styled.ul`
  padding-left: 1.25rem;
  margin: 0.5rem 0 0;
`;

const TargetMarketPhaseItem = styled.li`
  font-size: 0.9375rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TargetMarketMeter = styled.div<{value: number}>`
  height: 8px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 0.75rem 0;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.value}%;
    background-color: ${COLORS.RED};
    border-radius: 4px;
  }
`;

const CompetitiveAdvantageCard = styled(CompetitiveCard)`
  grid-column: span 2;
  background: linear-gradient(to bottom right, rgba(110, 124, 243, 0.08), rgba(255, 255, 255, 0.8));
  border: 1px solid rgba(110, 124, 243, 0.15);
  
  ${MEDIA_QUERIES.MOBILE} {
    grid-column: span 1;
  }
`;

const AdvantageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.MOBILE} {
    grid-template-columns: 1fr;
  }
`;

const AdvantageItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const AdvantageIcon = styled.div`
  width: 24px;
  height: 24px;
  color: ${COLORS.RED};
  flex-shrink: 0;
  margin-top: 0.25rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const AdvantageText = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  
  strong {
    display: block;
    margin-bottom: 0.25rem;
  }
`;

const GlobalMarketOpportunity = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const GlobalMarketTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: ${COLORS.RED};
    border-radius: 2px;
  }
`;

const GlobalMarketContent = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  text-align: center;
  max-width: 800px;
  margin: 2rem auto;
`;

const GlobalMarketGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GlobalMarketCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const GlobalMarketFlag = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  margin-bottom: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const GlobalMarketRegion = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${COLORS.BLACK};
`;

const GlobalMarketSize = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${COLORS.RED};
  margin-bottom: 1rem;
  padding: 0.25rem 0.5rem;
  background-color: rgba(110, 124, 243, 0.08);
  border-radius: 4px;
  display: inline-block;
`;

const GlobalMarketStrategyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
`;

const GlobalMarketStrategyItem = styled.li`
  font-size: 0.9375rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  padding-left: 1.25rem;
  position: relative;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${COLORS.RED};
    font-weight: bold;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const GlobalMarketTarget = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.1);
`;

const GlobalMarketProjection = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: rgba(110, 124, 243, 0.05);
  border-radius: 12px;
  text-align: center;
`;

const GlobalProjectionTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const GlobalProjectionNote = styled.p`
  font-size: 0.875rem;
  font-style: italic;
  margin-top: 1rem;
  color: ${COLORS.BLACK};
  opacity: 0.7;
`;

// 비전미션 섹션 스타일 컴포넌트
const VisionMissionSection = styled.div`
  margin-top: 4rem;
  padding: 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const VisionMissionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: ${COLORS.BLACK};
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: ${COLORS.RED};
    margin: 0.75rem auto 0;
  }
`;

const VisionMissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-top: 1rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  color: ${COLORS.RED};
  margin-bottom: 1.5rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Card = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: ${COLORS.BLACK};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${COLORS.RED};
    border-radius: 2px;
  }
`;

const CardContent = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  margin-bottom: 1.5rem;
`;

const FeatureCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeatureCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(110, 124, 243, 0.1);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    border-color: rgba(110, 124, 243, 0.3);
  }
`;

const FeatureIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  min-width: 32px;
  color: ${COLORS.RED};
  background-color: rgba(110, 124, 243, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 6px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const FeatureContent = styled.p`
  font-size: 1.0625rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  margin: 0;
`;

// 비전미션 섹션 컴포넌트
const VisionMissionBlock = () => {
  return (
    <VisionMissionSection>
      <VisionMissionTitle>MUFI 비전과 미션</VisionMissionTitle>
      <VisionMissionGrid>
        <Card>
          <CardIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="currentColor"/>
              <path d="M12 10c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
              <path d="M2.9 12c0-.4.1-.8.2-1.2.1-.3.5-.4.8-.3.3.1.4.5.3.8-.1.3-.2.5-.2.7 0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-1 0-2 .2-2.9.5-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 1.1-.4 2.2-.6 3.3-.6 5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12z" fill="currentColor"/>
            </svg>
          </CardIcon>
          <CardTitle>비전</CardTitle>
          <CardContent>
            AI 기술을 활용해 사진 경험과 소셜 연결을 혁신하며, 하드웨어 제조부터 소프트웨어 서비스, 데이터 분석까지 전 가치 사슬을 통합해 글로벌 AI 리더로 자리 잡는 것입니다.
          </CardContent>
          
          <FeatureCardGrid>
            <FeatureCard>
              <FeatureIconWrapper>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="currentColor"/>
                  <path d="M2.9 12c0-.4.1-.8.2-1.2.1-.3.5-.4.8-.3.3.1.4.5.3.8-.1.3-.2.5-.2.7 0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-1 0-2 .2-2.9.5-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 1.1-.4 2.2-.6 3.3-.6 5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12z" fill="currentColor"/>
                </svg>
              </FeatureIconWrapper>
              <FeatureContent>예측형 AI 시스템을 통한 물류/유통 최적화 및 운영 효율성 향상</FeatureContent>
            </FeatureCard>
            <FeatureCard>
              <FeatureIconWrapper>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9z" fill="currentColor"/>
                  <path d="M18.1 15.6c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z" fill="currentColor"/>
                </svg>
              </FeatureIconWrapper>
              <FeatureContent>실시간 데이터 수집 및 분석으로 운영 효율성 지속 향상, 초기 투자 대비 4.3개월 ROI 실현</FeatureContent>
            </FeatureCard>
            <FeatureCard>
              <FeatureIconWrapper>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="currentColor"/>
                  <path d="M2.9 12c0-.4.1-.8.2-1.2.1-.3.5-.4.8-.3.3.1.4.5.3.8-.1.3-.2.5-.2.7 0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-1 0-2 .2-2.9.5-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 1.1-.4 2.2-.6 3.3-.6 5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12z" fill="currentColor"/>
                </svg>
              </FeatureIconWrapper>
              <FeatureContent>실세계 데이터 수집을 통한 서비스 최적화 및 AI 발전 기여</FeatureContent>
            </FeatureCard>
            <FeatureCard>
              <FeatureIconWrapper>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9z" fill="currentColor"/>
                  <path d="M18.1 15.6c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z" fill="currentColor"/>
                </svg>
              </FeatureIconWrapper>
              <FeatureContent>실세계 데이터 수집을 통한 서비스 최적화 및 AI 발전 기여</FeatureContent>
            </FeatureCard>
            <FeatureCard>
              <FeatureIconWrapper>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9z" fill="currentColor"/>
                  <path d="M18.1 15.6c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z" fill="currentColor"/>
                </svg>
              </FeatureIconWrapper>
              <FeatureContent>물류 최적화와 데이터 기반 의사결정으로 지속 가능한 비즈니스 모델 확립</FeatureContent>
            </FeatureCard>
          </FeatureCardGrid>
        </Card>
        
        <Card>
          <CardIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9z" fill="currentColor"/>
              <path d="M18.1 15.6c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z" fill="currentColor"/>
            </svg>
          </CardIcon>
          <CardTitle>사명</CardTitle>
          <CardContent>
            MUFI는 AI 기술을 활용해 사진 경험과 소셜 연결을 혁신하는 미래 지향적 기술 회사입니다. 
            우리는 포토부스를 통해 축제 시장에서 미디어 콘텐츠와 융합해 서비스를 확장하며, 사용자 데이터와 운영 데이터를 수집해 
            실세계 데이터 수집 인프라를 구축하고 있습니다. 이 데이터를 기반으로 물류/유통 최적화 솔루션과 B2B 데이터 파이프라인을 
            공급해 추가 수익을 창출하고 AI 연구 발전에 기여할 계획입니다.
          </CardContent>
          
          <FeatureCardGrid>
            <FeatureCard>
              <FeatureIconWrapper>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 7h3V5h-3v5zm-4 0h3V5H8v5zm-3 4h10v5H5v-5z" fill="currentColor"/>
                </svg>
              </FeatureIconWrapper>
              <FeatureContent>AI 기반 물류/유통 최적화 포토부스 서비스</FeatureContent>
            </FeatureCard>
            <FeatureCard>
              <FeatureIconWrapper>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
                </svg>
              </FeatureIconWrapper>
              <FeatureContent>기업용 데이터 수집 및 분석 AI 에이전트 개발/공급</FeatureContent>
            </FeatureCard>
            <FeatureCard>
              <FeatureIconWrapper>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" fill="currentColor"/>
                </svg>
              </FeatureIconWrapper>
              <FeatureContent>대학생 특화 소셜 플랫폼 운영</FeatureContent>
            </FeatureCard>
            <FeatureCard>
              <FeatureIconWrapper>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9z" fill="currentColor"/>
                  <path d="M18.1 15.6c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z" fill="currentColor"/>
                </svg>
              </FeatureIconWrapper>
              <FeatureContent>실시간 데이터 수집 및 분석으로 운영 효율성 최적화, AI 발전 기여</FeatureContent>
            </FeatureCard>
          </FeatureCardGrid>
        </Card>
      </VisionMissionGrid>
    </VisionMissionSection>
  );
};

const CircleIcon = styled.span`
  font-size: 1rem;
  display: inline-block;
  margin-right: 4px;
  transform: translateY(-2px);
`;

const ArrowConnector = styled.div`
  color: ${COLORS.BLUE};
  width: 100%;
  height: 24px;
  opacity: 0.6;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  ${MEDIA_QUERIES.MOBILE} {
    display: none;
  }
`;

const GrowthChartContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-top: 2rem;
`;

const GrowthRateLegend = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  
  ${MEDIA_QUERIES.MOBILE} {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LegendColor = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${props => props.color};
`;

const LegendText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
`;

const MarketBarWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${COLORS.WHITE};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
`;

const BarValue = styled.div`
  position: absolute;
  top: -30px;
  width: 100%;
  text-align: center;
  color: ${COLORS.BLACK};
  font-weight: 700;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 2px 8px;
  width: auto;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
`;

const BarColumn = styled.div<{ color: string; height: string }>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 8px;
  position: relative;
  height: 100%;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.color};
    border-radius: 8px 8px 0 0;
    height: ${props => props.height};
    min-height: 40px;
    transition: height 0.3s ease;
  }
`;

const BarLabel = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  color: ${COLORS.WHITE};
  font-weight: 600;
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  padding: 0 5px;
`;

const UniversityPartnershipSection = styled.div`
  margin-top: 4rem;
  margin-bottom: 3rem;
`;

const UniversityDataContainer = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin: 2rem 0;
`;

const UniversityPartnerTable = styled(MarketTable)`
  margin: 2rem 0;
  
  .total-row {
    background-color: rgba(110, 124, 243, 0.08);
    
    ${TableCell} {
      font-weight: 700;
    }
  }
`;

const UniversityInsightGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const UniversityInsightCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const UniversityInsightTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${COLORS.RED};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: ${COLORS.BLACK};
  }
`;

const UniversityInsightContent = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  
  ul {
    padding-left: 1.25rem;
    margin: 0;
    
    li {
      margin-bottom: 0.75rem;
      opacity: 0.8;
      
      &:last-child {
        margin-bottom: 0;
      }
      
      strong {
        color: ${COLORS.RED};
      }
    }
  }
`;

const UniversityExpansionPlan = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(to bottom right, ${COLORS.WHITE}, rgba(110, 124, 243, 0.05));
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(110, 124, 243, 0.1);
`;

const ExpansionPlanTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const ExpansionPlanContent = styled.div`
  p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: ${COLORS.BLACK};
    opacity: 0.85;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const ExpansionPlanChart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;

const ExpansionYearItem = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 1fr 100px;
  align-items: center;
  gap: 1rem;
  
  ${MEDIA_QUERIES.MOBILE} {
    grid-template-columns: 70px 70px 1fr 90px;
    gap: 0.5rem;
  }
`;

const ExpansionYear = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
`;

const ExpansionValue = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${COLORS.RED};
`;

const ExpansionBar = styled.div<{value: number}>`
  height: 24px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => Math.min(props.value, 100)}%;
    background-color: ${COLORS.RED};
    border-radius: 12px;
  }
`;

const ExpansionRevenue = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${COLORS.BLUE};
  text-align: right;
`;

export default MarketAnalysis; 