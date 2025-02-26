import React, { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

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
    <MarketBarContainer style={{ height }} color={getColor()} className="market-bar">
      <BarLabelContainer>{children}</BarLabelContainer>
      <BarPercentage>{label}</BarPercentage>
    </MarketBarContainer>
  );
};

export const MarketAnalysis: React.FC = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }
    
    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
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
              <Highlight color="primary">AI</Highlight>로 연결되는 <br />
              <Highlight color="secondary">새로운 사진 경험</Highlight>의 시장
            </SloganMainText>
            <SloganSubText>Expanding Market of AI-Powered Photo Experiences</SloganSubText>
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
            글로벌 포토부스 시장은 2023년 기준 약 <HighlightText>38억 달러</HighlightText>로 평가되며, 
            2030년까지 <HighlightText>연평균 성장률(CAGR) 9.7%</HighlightText>로 확대되어 
            <HighlightText>78억 달러</HighlightText> 규모에 이를 것으로 전망됩니다. 
            특히 한국의 포토부스 시장은 높은 문화적 친화성과 MZ세대의 강력한 수요로 인해 
            글로벌 평균을 상회하는 <HighlightText>연간 11.2%</HighlightText>의 성장률을 보이고 있습니다.
          </OverviewText>
          
          <MarketInsightCards>
            <InsightCard>
              <InsightIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" fill="currentColor"/>
                </svg>
              </InsightIcon>
              <InsightTitle>포토부스 시장</InsightTitle>
              <InsightValue>연간 11.2% 성장</InsightValue>
              <InsightDescription>한국 내 문화적 트렌드와 MZ세대 수요 증가</InsightDescription>
            </InsightCard>
            
            <InsightCard>
              <InsightIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 7h3V5h-3v5zm-4 0h3V5H8v5zm-3 4h10v5H5v-5z" fill="currentColor"/>
                </svg>
              </InsightIcon>
              <InsightTitle>AI 솔루션 시장</InsightTitle>
              <InsightValue>연간 26.8% 성장</InsightValue>
              <InsightDescription>B2B AI 솔루션 수요 급증 및 기술 혁신 가속화</InsightDescription>
            </InsightCard>
            
            <InsightCard>
              <InsightIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                </svg>
              </InsightIcon>
              <InsightTitle>대학생 시장 규모</InsightTitle>
              <InsightValue>약 270만 명</InsightValue>
              <InsightDescription>한국 내 대학생 인구 및 연간 약 3.7조원 소비시장</InsightDescription>
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
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="currentColor"/>
                </svg>
              </ProductIconSvg>
            </ProductIconWrapper>
            <ProductNameBadge>
              <ProductNameText>
                <Highlight color="primary" inverted={true}>AI 자율 운영</Highlight> 포토부스
              </ProductNameText>
            </ProductNameBadge>
            <ProductDescriptionBox>
              <KeyFeatureList>
                <KeyFeature><FeatureAccent>무인 관리</FeatureAccent> 시스템 (월 운영비 52% 절감)</KeyFeature>
                <KeyFeature><FeatureAccent>AI 기반</FeatureAccent> 사진 품질 최적화 (만족도 37% 상승)</KeyFeature>
                <KeyFeature><FeatureAccent>실시간</FeatureAccent> 원격 모니터링 및 유지보수</KeyFeature>
              </KeyFeatureList>
              <MarketShare>
                <MarketShareLabel>시장 점유율 목표 (2027년)</MarketShareLabel>
                <MarketShareValue>20%</MarketShareValue>
              </MarketShare>
            </ProductDescriptionBox>
          </ProductCard>
          
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
                <Highlight color="primary" inverted={true}>AI</Highlight> 에이전트 솔루션
              </ProductNameText>
            </ProductNameBadge>
            <ProductDescriptionBox>
              <KeyFeatureList>
                <KeyFeature><FeatureAccent>기업 맞춤형</FeatureAccent> AI 솔루션 (ROI 평균 148%)</KeyFeature>
                <KeyFeature><FeatureAccent>산업별 특화</FeatureAccent> 에이전트 (작업 효율성 35% 향상)</KeyFeature>
                <KeyFeature><FeatureAccent>실시간 학습</FeatureAccent> 기능으로 지속적 성능 개선</KeyFeature>
              </KeyFeatureList>
              <MarketShare>
                <MarketShareLabel>특화 AI 솔루션 시장 내 목표 점유율</MarketShareLabel>
                <MarketShareValue>7%</MarketShareValue>
              </MarketShare>
            </ProductDescriptionBox>
          </ProductCard>
          
          <ProductCard className="product-item">
            <ProductIconWrapper>
              <ProductIconSvg>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
                </svg>
              </ProductIconSvg>
            </ProductIconWrapper>
            <ProductNameBadge>
              <ProductNameText>
                <Highlight color="primary" inverted={true}>대학생</Highlight> 소셜 플랫폼
              </ProductNameText>
            </ProductNameBadge>
            <ProductDescriptionBox>
              <KeyFeatureList>
                <KeyFeature><FeatureAccent>네컷사진 기반</FeatureAccent> 프로필 (친구 추가율 142% 증가)</KeyFeature>
                <KeyFeature><FeatureAccent>캠퍼스별</FeatureAccent> 커뮤니티 (DAU/MAU 비율 83%)</KeyFeature>
                <KeyFeature><FeatureAccent>AI 추천</FeatureAccent> 시스템으로 인게이지먼트 최적화</KeyFeature>
              </KeyFeatureList>
              <MarketShare>
                <MarketShareLabel>대학생 타겟 플랫폼 목표 사용자 수 (2027년)</MarketShareLabel>
                <MarketShareValue>50만+</MarketShareValue>
              </MarketShare>
            </ProductDescriptionBox>
          </ProductCard>
        </ProductCards>
        
        <MarketPotentialBanner ref={chartRef}>
          <MarketPotentialTitle>
            <Highlight color="primary">솔루션별 연간 성장률</Highlight>
          </MarketPotentialTitle>
          <MarketPotentialChart className="chart-animation">
            <MarketBar height="70%" label="11.2%" type="primary">
              AI 자율 운영<br/>포토부스
            </MarketBar>
            <MarketBar height="85%" label="26.8%" type="secondary">
              기업용<br/>AI 솔루션
            </MarketBar>
            <MarketBar height="60%" label="18.5%" type="tertiary">
              대학생<br/>소셜 플랫폼
            </MarketBar>
          </MarketPotentialChart>
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
                MUFI의 AI 자율 운영 시스템은 이 시장 간극을 정확히 공략합니다.
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
                <li><strong>포토부스 시장:</strong> 약 87개의 업체가 경쟁 중이나, 93%가 단순 하드웨어 포토부스 제공 업체로 기술적 차별화 부재</li>
                <li><strong>AI 에이전트:</strong> 대형 IT 기업 중심으로 솔루션 제공, 중소기업 맞춤형은 7개 업체만 활동 중</li>
                <li><strong>대학생 플랫폼:</strong> 종합 SNS(인스타그램, 페이스북 등)이 점유, 대학생 특화는 에브리타임(학업 중심)</li>
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
                  <strong>통합 데이터 에코시스템:</strong> 포토부스, AI 솔루션, 소셜 플랫폼을 연결하는 유일한 통합 데이터 파이프라인 구축
                </AdvantageText>
              </AdvantageItem>
              
              <AdvantageItem>
                <AdvantageIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                  </svg>
                </AdvantageIcon>
                <AdvantageText>
                  <strong>AI 자율 운영 시스템:</strong> 운영비 52% 절감 및 가동률 97% 이상 달성 (업계 평균 82% 대비 우위)
                </AdvantageText>
              </AdvantageItem>
              
              <AdvantageItem>
                <AdvantageIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                  </svg>
                </AdvantageIcon>
                <AdvantageText>
                  <strong>대학생 특화 온/오프라인 연계:</strong> 네컷사진을 통한 물리적 접점과 디지털 플랫폼을 연결하는 독자적 전략
                </AdvantageText>
              </AdvantageItem>
              
              <AdvantageItem>
                <AdvantageIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                  </svg>
                </AdvantageIcon>
                <AdvantageText>
                  <strong>독점 실세계 데이터:</strong> 포토부스에서 수집되는 트렌드, 사용자 패턴 데이터를 독점적으로 확보
                </AdvantageText>
              </AdvantageItem>
            </AdvantageList>
          </CompetitiveAdvantageCard>
          
          <CompetitiveCard>
            <CompetitiveCardTitle>진입 장벽 구축 전략</CompetitiveCardTitle>
            <CompetitiveCardContent>
              <ul>
                <li><strong>IP 보호:</strong> AI 자율 운영 시스템 특허 3건 출원 진행 중 (2024년 2분기 내 승인 예상)</li>
                <li><strong>독점 계약:</strong> 서울 주요 5개 대학과 캠퍼스 내 독점적 마케팅 및 설치 계약 체결 (3년간)</li>
                <li><strong>데이터 네트워크 효과:</strong> 초기 데이터 확보를 통한 AI 학습으로 후발주자 대비 기술적 우위 확립</li>
                <li><strong>수직적 통합:</strong> 하드웨어부터 소프트웨어, 데이터까지 수직 통합된 솔루션으로 진입장벽 강화</li>
              </ul>
            </CompetitiveCardContent>
          </CompetitiveCard>
        </CompetitiveGrid>
      </CompetitiveAnalysis>
      
      <TargetMarket>
        <TargetMarketTitle>타겟 시장 진입 전략</TargetMarketTitle>
        <TargetMarketContent>
          피터 틸의 전략적 접근법에 따라, MUFI는 경쟁이 덜 치열한 틈새 시장에서 시작하여 
          단계적 확장을 통해 시장 지배력을 확립하는 전략을 구사합니다:
        </TargetMarketContent>
        
        <TargetMarketPhases>
          <TargetMarketPhase>
            <TargetMarketPhaseTitle>1단계: 대학가 중심 초기 침투 (2025)</TargetMarketPhaseTitle>
            <TargetMarketMeter value={30} />
            <TargetMarketPhaseContent>
              <TargetMarketPhaseList>
                <TargetMarketPhaseItem>5개 주요 대학 캠퍼스 주변 50개 상점에 우선 설치</TargetMarketPhaseItem>
                <TargetMarketPhaseItem>서울 대학가 카페 대상 직접 영업 (방문율이 높은 상위 20% 타겟)</TargetMarketPhaseItem>
                <TargetMarketPhaseItem>베타 테스터 5,000명 모집 및 초기 피드백 수집</TargetMarketPhaseItem>
              </TargetMarketPhaseList>
            </TargetMarketPhaseContent>
          </TargetMarketPhase>
          
          <TargetMarketPhase>
            <TargetMarketPhaseTitle>2단계: 도시 중심 확장 (2026)</TargetMarketPhaseTitle>
            <TargetMarketMeter value={70} />
            <TargetMarketPhaseContent>
              <TargetMarketPhaseList>
                <TargetMarketPhaseItem>서울 전역 및 부산, 대구, 광주 주요 대학가로 확장</TargetMarketPhaseItem>
                <TargetMarketPhaseItem>프랜차이즈 카페 체인과 전략적 파트너십 구축 (5개 체인, 50개 지점)</TargetMarketPhaseItem>
                <TargetMarketPhaseItem>소셜 플랫폼 정식 출시 및 대학별 앰배서더 프로그램 운영</TargetMarketPhaseItem>
              </TargetMarketPhaseList>
            </TargetMarketPhaseContent>
          </TargetMarketPhase>
          
          <TargetMarketPhase>
            <TargetMarketPhaseTitle>3단계: 전국 및 아시아 진출 (2027-)</TargetMarketPhaseTitle>
            <TargetMarketMeter value={100} />
            <TargetMarketPhaseContent>
              <TargetMarketPhaseList>
                <TargetMarketPhaseItem>전국 200개 이상 지점으로 포토부스 확장</TargetMarketPhaseItem>
                <TargetMarketPhaseItem>일본(도쿄, 오사카), 대만(타이페이), 싱가포르 시장 진출</TargetMarketPhaseItem>
                <TargetMarketPhaseItem>현지 파트너십을 통한 문화적 현지화 및 마케팅 전략 수립</TargetMarketPhaseItem>
              </TargetMarketPhaseList>
            </TargetMarketPhaseContent>
          </TargetMarketPhase>
        </TargetMarketPhases>
      </TargetMarket>
    </SectionContent>
  );
};

// 스타일 컴포넌트
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const growUp = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
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

const MarketPotentialChart = styled.div`
  height: 250px;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  &.animate .market-bar {
    animation: ${growUp} 1.5s ease-out forwards;
  }
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
  opacity: 0.8;
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

// Highlight 관련 스타일
const HighlightSpan = styled.span<{ color: string }>`
  color: ${props => props.color};
  font-weight: 700;
  position: relative;
  padding: 0 2px;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
`;

// MarketBar 관련 스타일
const MarketBarContainer = styled.div<{ color: string }>`
  position: relative;
  width: 30%;
  background-color: ${props => props.color};
  display: inline-block;
  margin: 0 1%;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: height 1.5s ease-out;
  height: 0;
  
  &.animate {
    height: 100%;
  }
  
  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
`;

const BarLabelContainer = styled.div`
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

const BarPercentage = styled.div`
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