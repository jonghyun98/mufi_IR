import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

export const BusinessModel: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // 컴포넌트가 마운트되면 애니메이션 활성화
    setAnimate(true);
  }, []);

  // 각 비즈니스 모델 수익 기여도 데이터 (2025-2027)
  const revenueContributionData = [
    {
      year: 2025,
      photobooth: 80, // 80% - 포토부스 중심의 초기 사업
      aiAgent: 20,    // 20% - 초기 AI 솔루션 
      social: 0,      // 0% - 아직 소셜 플랫폼 미운영
      dataAsset: 0    // 0% - 아직 데이터 판매 미운영
    },
    {
      year: 2026,
      photobooth: 70, // 70% - 포토부스 사업 확대
      aiAgent: 22,    // 22% - AI 솔루션 확장
      social: 7,      // 7% - 소셜 플랫폼 초기 단계
      dataAsset: 1    // 1% - 데이터 활용 시작
    },
    {
      year: 2027,
      photobooth: 60, // 60% - 포토부스 임대 주력
      aiAgent: 25,    // 25% - AI 솔루션 본격화
      social: 12,     // 12% - 소셜 플랫폼 정착
      dataAsset: 3    // 3% - 데이터 판매 시작
    }
  ];

  // 시장 규모 데이터
  const marketSizeData = [
    { 
      sector: '포토부스 시장', 
      size2023: 5800, 
      size2027: 8900, 
      cagr: 11.2,
      color: COLORS.RED,
      icon: '📸'
    },
    { 
      sector: 'AI 에이전트 시장', 
      size2023: 1200, 
      size2027: 3100, 
      cagr: 26.8,
      color: COLORS.BLUE,
      icon: '🤖'
    },
    { 
      sector: '소셜 플랫폼 시장', 
      size2023: 7500, 
      size2027: 14900, 
      cagr: 18.5,
      color: COLORS.GREEN,
      icon: '👥'
    },
    { 
      sector: '데이터 자산 시장', 
      size2023: 1800, 
      size2027: 4200, 
      cagr: 23.6,
      color: COLORS.YELLOW,
      icon: '📊'
    }
  ];

  return (
    <SectionContent>
      <MarketOverviewSection animate={animate}>
        <SectionHeading>
          <HeadingLine />
          <HeadingText><HighlightText>시장 개요</HighlightText> 및 성장성</HeadingText>
          <HeadingLine />
        </SectionHeading>
        
        <MarketSummary>
          MUFI는 <HighlightText>포토부스</HighlightText>, <HighlightText>AI 에이전트</HighlightText>, <HighlightText>소셜 플랫폼</HighlightText>, <HighlightText>데이터 자산</HighlightText> 네 가지 핵심 분야에서 
          사업을 전개하고 있으며, 각 시장은 2023년부터 2027년까지 연평균 11.2~26.8%의 높은 성장률을 보일 것으로 전망됩니다.
          특히 AI 에이전트 시장과 데이터 자산 시장의 성장세가 두드러지며, 이는 MUFI의 중장기 성장 전략과 완벽히 일치합니다.
        </MarketSummary>
        
        <MarketSizeVisual>
          <MarketSizeTitle>분야별 시장 규모 및 성장률 (2023-2027)</MarketSizeTitle>
          
          <MarketSizeGrid>
            {marketSizeData.map((market, index) => (
              <MarketSizeCard key={index} color={market.color} delay={index * 0.15} animate={animate}>
                <MarketIconCircle color={market.color}>
                  <MarketIcon>{market.icon}</MarketIcon>
                </MarketIconCircle>
                <MarketName>{market.sector}</MarketName>
                <MarketGrowthBar>
                  <MarketSizeIndicator 
                    width="30%" 
                    color={market.color} 
                    opacity={0.4}
                    animate={animate}
                    delay={index * 0.15 + 0.3}
                  >
                    <MarketValue>{market.size2023}억 원</MarketValue>
                    <MarketYear>2023</MarketYear>
                  </MarketSizeIndicator>
                  <MarketSizeIndicator 
                    width="70%" 
                    color={market.color} 
                    opacity={0.8}
                    animate={animate}
                    delay={index * 0.15 + 0.5}
                  >
                    <MarketValue>{market.size2027}억 원</MarketValue>
                    <MarketYear>2027</MarketYear>
                  </MarketSizeIndicator>
                </MarketGrowthBar>
                <MarketCagr animate={animate} delay={index * 0.15 + 0.7}>
                  <CagrLabel>CAGR</CagrLabel>
                  <CagrValue color={market.color}>{market.cagr}%</CagrValue>
                </MarketCagr>
              </MarketSizeCard>
            ))}
          </MarketSizeGrid>
        </MarketSizeVisual>
        
        <MarketTrends>
          <MarketTrendsTitle>핵심 시장 트렌드 및 기회</MarketTrendsTitle>
          <MarketTrendsGrid>
            <TrendCard animate={animate} delay={0.2}>
              <TrendIcon>🔍</TrendIcon>
              <TrendTitle>개인화 경험 중시</TrendTitle>
              <TrendDescription>
                MZ세대 중심으로 개인화된 경험에 대한 수요가 증가하며, AI 기술을 활용한 
                맞춤형 서비스 시장이 연 28% 성장 중
              </TrendDescription>
            </TrendCard>
            
            <TrendCard animate={animate} delay={0.4}>
              <TrendIcon>📱</TrendIcon>
              <TrendTitle>디지털-물리적 연결성</TrendTitle>
              <TrendDescription>
                오프라인과 온라인을 연결하는 O2O 서비스 가치 상승, 
                포토부스와 소셜 플랫폼의 결합으로 사용자 참여도 42% 증가
              </TrendDescription>
            </TrendCard>
            
            <TrendCard animate={animate} delay={0.6}>
              <TrendIcon>🎯</TrendIcon>
              <TrendTitle>타겟 마케팅 효율화</TrendTitle>
              <TrendDescription>
                대학생 맞춤형 마케팅 채널 확보의 중요성 증대, 
                정확한 타겟팅으로 광고 효율 68% 향상 및 프리미엄 가격 책정 가능
              </TrendDescription>
            </TrendCard>
            
            <TrendCard animate={animate} delay={0.8}>
              <TrendIcon>💾</TrendIcon>
              <TrendTitle>데이터 자산 가치화</TrendTitle>
              <TrendDescription>
                실제 사용자 행동 기반 데이터 수집 인프라의 중요성 증가, 
                AI 학습용 데이터셋 가치 연 23.6% 상승 추세
              </TrendDescription>
            </TrendCard>
          </MarketTrendsGrid>
        </MarketTrends>
        
        <MarketCompetition>
          <MarketCompetitionTitle>경쟁 환경 분석</MarketCompetitionTitle>
          <CompetitionGrid>
            <CompetitionSegment>
              <CompetitionHeader>포토부스 시장</CompetitionHeader>
              <CompetitionContent>
                <CompetitionMetric>
                  <MetricName>시장 경쟁 강도</MetricName>
                  <MetricBar>
                    <MetricFill width="65%" color={COLORS.RED} animate={animate} delay={0.3} />
                  </MetricBar>
                  <MetricValue>중간</MetricValue>
                </CompetitionMetric>
                
                <CompetitionMetric>
                  <MetricName>진입 장벽</MetricName>
                  <MetricBar>
                    <MetricFill width="45%" color={COLORS.RED} animate={animate} delay={0.4} />
                  </MetricBar>
                  <MetricValue>낮음-중간</MetricValue>
                </CompetitionMetric>
                
                <CompetitionMetric>
                  <MetricName>MUFI 경쟁 우위</MetricName>
                  <MetricBar>
                    <MetricFill width="75%" color={COLORS.RED} animate={animate} delay={0.5} />
                  </MetricBar>
                  <MetricValue>높음</MetricValue>
                </CompetitionMetric>
                
                <CompetitionInsight>
                  AI 자율 관리로 인건비 52% 절감, 운영 효율화로 가격 경쟁력 확보
                </CompetitionInsight>
              </CompetitionContent>
            </CompetitionSegment>
            
            <CompetitionSegment>
              <CompetitionHeader>AI 에이전트 시장</CompetitionHeader>
              <CompetitionContent>
                <CompetitionMetric>
                  <MetricName>시장 경쟁 강도</MetricName>
                  <MetricBar>
                    <MetricFill width="85%" color={COLORS.BLUE} animate={animate} delay={0.6} />
                  </MetricBar>
                  <MetricValue>높음</MetricValue>
                </CompetitionMetric>
                
                <CompetitionMetric>
                  <MetricName>진입 장벽</MetricName>
                  <MetricBar>
                    <MetricFill width="80%" color={COLORS.BLUE} animate={animate} delay={0.7} />
                  </MetricBar>
                  <MetricValue>높음</MetricValue>
                </CompetitionMetric>
                
                <CompetitionMetric>
                  <MetricName>MUFI 경쟁 우위</MetricName>
                  <MetricBar>
                    <MetricFill width="70%" color={COLORS.BLUE} animate={animate} delay={0.8} />
                  </MetricBar>
                  <MetricValue>중간-높음</MetricValue>
                </CompetitionMetric>
                
                <CompetitionInsight>
                  독자적 실세계 데이터로 AI 정확도 23% 향상, 구현 시간 68% 단축
                </CompetitionInsight>
              </CompetitionContent>
            </CompetitionSegment>
            
            <CompetitionSegment>
              <CompetitionHeader>소셜 플랫폼 시장</CompetitionHeader>
              <CompetitionContent>
                <CompetitionMetric>
                  <MetricName>시장 경쟁 강도</MetricName>
                  <MetricBar>
                    <MetricFill width="95%" color={COLORS.GREEN} animate={animate} delay={0.9} />
                  </MetricBar>
                  <MetricValue>매우 높음</MetricValue>
                </CompetitionMetric>
                
                <CompetitionMetric>
                  <MetricName>진입 장벽</MetricName>
                  <MetricBar>
                    <MetricFill width="90%" color={COLORS.GREEN} animate={animate} delay={1.0} />
                  </MetricBar>
                  <MetricValue>매우 높음</MetricValue>
                </CompetitionMetric>
                
                <CompetitionMetric>
                  <MetricName>MUFI 경쟁 우위</MetricName>
                  <MetricBar>
                    <MetricFill width="65%" color={COLORS.GREEN} animate={animate} delay={1.1} />
                  </MetricBar>
                  <MetricValue>중간</MetricValue>
                </CompetitionMetric>
                
                <CompetitionInsight>
                  물리적 연결 경험과 디지털 결합, 대학 인증으로 신뢰도 87% 상승
                </CompetitionInsight>
              </CompetitionContent>
            </CompetitionSegment>
            
            <CompetitionSegment>
              <CompetitionHeader>데이터 자산 시장</CompetitionHeader>
              <CompetitionContent>
                <CompetitionMetric>
                  <MetricName>시장 경쟁 강도</MetricName>
                  <MetricBar>
                    <MetricFill width="75%" color={COLORS.YELLOW} animate={animate} delay={1.2} />
                  </MetricBar>
                  <MetricValue>중간-높음</MetricValue>
                </CompetitionMetric>
                
                <CompetitionMetric>
                  <MetricName>진입 장벽</MetricName>
                  <MetricBar>
                    <MetricFill width="85%" color={COLORS.YELLOW} animate={animate} delay={1.3} />
                  </MetricBar>
                  <MetricValue>높음</MetricValue>
                </CompetitionMetric>
                
                <CompetitionMetric>
                  <MetricName>MUFI 경쟁 우위</MetricName>
                  <MetricBar>
                    <MetricFill width="80%" color={COLORS.YELLOW} animate={animate} delay={1.4} />
                  </MetricBar>
                  <MetricValue>높음</MetricValue>
                </CompetitionMetric>
                
                <CompetitionInsight>
                  독자적 데이터 수집 인프라로 차별화된 데이터셋 구축, 94% 마진율
                </CompetitionInsight>
              </CompetitionContent>
            </CompetitionSegment>
          </CompetitionGrid>
        </MarketCompetition>
        
        <MarketPosition>
          <PositionTitle>MUFI의 시장 포지셔닝</PositionTitle>
          
          <WordCloudAndStatement>
            <VisualWrapper>
              <WordCloudContainer animate={animate}>
                <WordCloudItem size="large" color={COLORS.RED} top="25%" left="40%" delay={0.1}>물리적 포토부스</WordCloudItem>
                <WordCloudItem size="large" color={COLORS.BLUE} top="45%" left="70%" delay={0.2}>디지털 소셜 플랫폼</WordCloudItem>
                <WordCloudItem size="large" color={COLORS.GREEN} top="65%" left="45%" delay={0.3}>실세계 데이터</WordCloudItem>
                <WordCloudItem size="large" color={COLORS.RED} top="70%" left="20%" delay={0.4}>AI 기술 역량</WordCloudItem>
                <WordCloudItem size="medium" color={COLORS.BLACK} top="15%" left="20%" delay={0.5}>O2O 융합</WordCloudItem>
                <WordCloudItem size="medium" color={COLORS.BLACK} top="30%" left="65%" delay={0.6}>통합 데이터</WordCloudItem>
                <WordCloudItem size="medium" color={COLORS.BLACK} top="85%" left="65%" delay={0.7}>에코시스템</WordCloudItem>
                <WordCloudItem size="small" color={COLORS.BLACK} top="10%" left="65%" delay={0.8}>MZ세대</WordCloudItem>
                <WordCloudItem size="small" color={COLORS.BLACK} top="85%" left="25%" delay={0.9}>대학생 시장</WordCloudItem>
                <WordCloudItem size="small" color={COLORS.BLACK} top="35%" left="85%" delay={1.0}>차별화</WordCloudItem>
                
                <MufiBubble animate={animate} delay={1.2}>
                  <MufiLogo>M</MufiLogo>
                </MufiBubble>
              </WordCloudContainer>
            </VisualWrapper>

            <StatementWrapper animate={animate}>
              <StatementText>
                MUFI는 <HighlightText>물리적 포토부스와 디지털 소셜 플랫폼을 연결</HighlightText>하는 독보적인 O2O 융합 모델과
                <HighlightText> 실세계 데이터 기반 AI 기술 역량</HighlightText>을 바탕으로, 
                기존 사업자들이 제공하지 못하는 <HighlightText>통합 데이터 에코시스템</HighlightText>을 구축하여
                MZ세대 대학생 시장에서 차별화된 가치를 제공합니다.
              </StatementText>
            </StatementWrapper>
          </WordCloudAndStatement>
          
          <QuadrantSection>
            <QuadrantTitle>경쟁사 대비 MUFI 포지셔닝</QuadrantTitle>
            <QuadrantWrapper animate={animate}>
              <QuadrantBox>
                <QuadrantLabel top left>
                  <span>기술 혁신</span>
                </QuadrantLabel>
                <QuadrantLabel top right>
                  <span>통합 서비스</span>
                </QuadrantLabel>
                <QuadrantLabel bottom left>
                  <span>단일 서비스</span>
                </QuadrantLabel>
                <QuadrantLabel bottom right>
                  <span>대중 접근성</span>
                </QuadrantLabel>
                
                <AxisLabel horizontal>사용자 경험</AxisLabel>
                <AxisLabel vertical>기술 역량</AxisLabel>
                
                <CompetitorBubble top="25%" left="20%" size="50px" color="#EEEEEE" animate={animate} delay={0.2}>
                  <BubbleIcon>📸</BubbleIcon>
                  <BubbleLabel>일반<br/>포토부스</BubbleLabel>
                </CompetitorBubble>
                
                <CompetitorBubble top="30%" left="75%" size="45px" color="#EEEEEE" animate={animate} delay={0.4}>
                  <BubbleIcon>📱</BubbleIcon>
                  <BubbleLabel>SNS 앱</BubbleLabel>
                </CompetitorBubble>
                
                <CompetitorBubble top="65%" left="30%" size="40px" color="#EEEEEE" animate={animate} delay={0.6}>
                  <BubbleIcon>🤖</BubbleIcon>
                  <BubbleLabel>AI<br/>솔루션</BubbleLabel>
                </CompetitorBubble>
                
                <CompetitorBubble top="20%" left="60%" size="60px" color={`${COLORS.RED}20`} borderColor={COLORS.RED} animate={animate} delay={0.8}>
                  <MufiQuadrantLogo>M</MufiQuadrantLogo>
                  <BubbleLabel>MUFI</BubbleLabel>
                </CompetitorBubble>
              </QuadrantBox>
            </QuadrantWrapper>
          </QuadrantSection>
        </MarketPosition>
      </MarketOverviewSection>
      
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
                  animate={true}
                >
                  <BarLabel>{yearData.photobooth}%</BarLabel>
                </BarSegment>
                <BarSegment 
                  height={`${yearData.aiAgent}%`} 
                  color={COLORS.BLUE} 
                  tooltip={`AI 에이전트: ${yearData.aiAgent}%`}
                  animate={true}
                >
                  <BarLabel>{yearData.aiAgent}%</BarLabel>
                </BarSegment>
                <BarSegment 
                  height={`${yearData.social}%`} 
                  color={COLORS.GREEN} 
                  tooltip={`소셜 플랫폼: ${yearData.social}%`}
                  animate={true}
                >
                  {yearData.social > 0 && <BarLabel>{yearData.social}%</BarLabel>}
                </BarSegment>
                <BarSegment 
                  height={`${yearData.dataAsset}%`} 
                  color={COLORS.YELLOW} 
                  tooltip={`데이터 자산: ${yearData.dataAsset}%`}
                  animate={true}
                >
                  {yearData.dataAsset > 0 && <BarLabel>{yearData.dataAsset}%</BarLabel>}
                </BarSegment>
              </StackedBar>
            </YearColumn>
          ))}
        </RevenueModelChart>
        <ChartLegend>
          <LegendItem>
            <LegendColor color={COLORS.RED} />
            <LegendText><strong>포토부스 사업</strong></LegendText>
          </LegendItem>
          <LegendItem>
            <LegendColor color={COLORS.BLUE} />
            <LegendText><strong>AI 에이전트</strong></LegendText>
          </LegendItem>
          <LegendItem>
            <LegendColor color={COLORS.GREEN} />
            <LegendText><strong>소셜 플랫폼</strong></LegendText>
          </LegendItem>
          <LegendItem>
            <LegendColor color={COLORS.YELLOW} />
            <LegendText><strong>데이터 자산</strong></LegendText>
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
  text-align: center;
  margin-bottom: 2rem;
`;

const OverviewText = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.9;
  
  ${MEDIA_QUERIES.TABLET} {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const RevenueModelVisual = styled.div`
  margin: 3rem 0;
`;

const RevenueModelTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const RevenueModelChart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 350px;
  margin-bottom: 2rem;
`;

const YearColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;

const YearLabel = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const StackedBar = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 60px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

interface BarSegmentProps {
  height: string;
  color: string;
  animate?: boolean;
  tooltip?: string;
}

const BarSegment = styled.div<BarSegmentProps>`
  width: 100%;
  height: ${props => props.height};
  background-color: ${props => props.color};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.8s ease-out;
  
  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
  
  ${props => props.animate && `
    @keyframes growIn {
      from { height: 0; }
      to { height: ${props.height}; }
    }
    animation: growIn 1.5s ease-out;
  `}
`;

const BarLabel = styled.div`
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
`;

const ChartLegend = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

interface LegendColorProps {
  color: string;
}

const LegendColor = styled.div<LegendColorProps>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${props => props.color};
`;

const LegendText = styled.div`
  font-size: 1rem;
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

const MetricValue = styled.div`
  font-size: 0.875rem;
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

const growWidth = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const growBar = (width: string) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${width};
  }
`;

interface AnimateProps {
  animate?: boolean;
  delay?: number;
}

const MarketOverviewSection = styled.div<AnimateProps>`
  margin-bottom: 4rem;
  opacity: ${props => (props.animate ? 1 : 0)};
  transform: translateY(${props => (props.animate ? 0 : '20px')});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const MarketSummary = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 3rem;
`;

const MarketSizeVisual = styled.div`
  margin: 3rem 0 4rem;
`;

const MarketSizeTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const MarketSizeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface ColorProps {
  color: string;
  delay?: number;
  animate?: boolean;
}

const MarketSizeCard = styled.div<ColorProps>`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  border-top: 4px solid ${props => props.color};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  opacity: ${props => (props.animate ? 1 : 0)};
  transform: translateY(${props => (props.animate ? 0 : '30px')});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: ${props => (props.delay ? `${props.delay}s` : '0s')};
`;

const MarketIconCircle = styled.div<{ color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.color}20;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const MarketIcon = styled.div`
  font-size: 2rem;
`;

const MarketName = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  margin-bottom: 0.5rem;
`;

const MarketGrowthBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0.5rem 0;
`;

interface IndicatorProps {
  width: string;
  color: string;
  opacity: number;
  animate?: boolean;
  delay?: number;
}

const MarketSizeIndicator = styled.div<IndicatorProps>`
  background-color: ${props => `${props.color}${props.opacity * 100}`};
  height: 40px;
  border-radius: 8px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.width};
  position: relative;
  
  width: ${props => (props.animate ? props.width : '0')};
  transition: width 1.2s ease-out;
  transition-delay: ${props => (props.delay ? `${props.delay}s` : '0s')};
`;

const MarketValue = styled.div`
  font-weight: 700;
  color: ${COLORS.BLACK};
  z-index: 1;
`;

const MarketYear = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  z-index: 1;
`;

const MarketCagr = styled.div<AnimateProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  
  opacity: ${props => (props.animate ? 1 : 0)};
  transform: scale(${props => (props.animate ? 1 : 0.8)});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: ${props => (props.delay ? `${props.delay}s` : '0s')};
`;

const CagrLabel = styled.span`
  font-size: 0.875rem;
  color: ${COLORS.BLACK};
  opacity: 0.7;
`;

const CagrValue = styled.span<{ color: string }>`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.color};
  background-color: ${props => `${props.color}10`};
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
`;

const MarketTrends = styled.div`
  margin: 4rem 0;
`;

const MarketTrendsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const MarketTrendsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TrendCard = styled.div<AnimateProps>`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  opacity: ${props => (props.animate ? 1 : 0)};
  transform: translateY(${props => (props.animate ? 0 : '30px')});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${props => (props.delay ? `${props.delay}s` : '0s')};
`;

const TrendIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const TrendTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  margin-bottom: 1rem;
`;

const TrendDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const MarketCompetition = styled.div`
  margin: 4rem 0;
`;

const MarketCompetitionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const CompetitionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CompetitionSegment = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const CompetitionHeader = styled.div`
  background-color: ${COLORS.BLACK}05;
  padding: 1rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-bottom: 1px solid ${COLORS.BLACK}10;
`;

const CompetitionContent = styled.div`
  padding: 1.5rem;
`;

const CompetitionMetric = styled.div`
  margin-bottom: 1.25rem;
`;

const MetricName = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.BLACK};
  opacity: 0.7;
  margin-bottom: 0.5rem;
`;

const MetricBar = styled.div`
  height: 10px;
  background-color: ${COLORS.BLACK}10;
  border-radius: 5px;
  position: relative;
  margin-bottom: 0.5rem;
`;

interface MetricFillProps {
  width: string;
  color: string;
  animate?: boolean;
  delay?: number;
}

const MetricFill = styled.div<MetricFillProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${props => props.color};
  border-radius: 5px;
  width: ${props => (props.animate ? props.width : '0')};
  transition: width 1.2s ease-out;
  transition-delay: ${props => (props.delay ? `${props.delay}s` : '0s')};
`;

const MarketMetricValue = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
`;

const CompetitionInsight = styled.div`
  background-color: ${COLORS.BLACK}05;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-top: 1rem;
`;

const MarketPosition = styled.div`
  margin: 4rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const PositionTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
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
    width: 80px;
    height: 3px;
    background-color: ${COLORS.RED};
    border-radius: 1.5px;
  }
`;

const WordCloudAndStatement = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 1rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: 1fr 1fr;
  }
`;

const VisualWrapper = styled.div`
  height: 400px;
  position: relative;
  background-color: ${COLORS.WHITE}; 
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  order: 2;
  
  ${MEDIA_QUERIES.TABLET} {
    order: 1;
  }
  
  ${MEDIA_QUERIES.MOBILE} {
    height: 350px;
  }
`;

const WordCloudContainer = styled.div<AnimateProps>`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.animate ? 1 : 0)};
  transition: opacity 1s ease-out;
`;

interface WordCloudItemProps {
  size: 'small' | 'medium' | 'large';
  color: string;
  top: string;
  left: string;
  delay: number;
}

const WordCloudItem = styled.div<WordCloudItemProps>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: translate(-50%, -50%) scale(0);
  color: ${props => props.color};
  font-weight: ${props => props.size === 'large' ? 700 : props.size === 'medium' ? 600 : 500};
  font-size: ${props => props.size === 'large' ? '1.25rem' : props.size === 'medium' ? '1rem' : '0.875rem'};
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  z-index: 2;
  animation: wordCloudAppear 0.8s forwards;
  animation-delay: ${props => props.delay}s;
  
  @keyframes wordCloudAppear {
    from {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 3;
  }
`;

const MufiBubble = styled.div<AnimateProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  background: linear-gradient(135deg, ${COLORS.RED}, #FF6B8B);
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(110, 124, 243, 0.3);
  z-index: 1;
  animation: mufiBubbleAppear 1s forwards;
  animation-delay: ${props => props.delay}s;
  
  @keyframes mufiBubbleAppear {
    from {
      transform: translate(-50%, -50%) scale(0);
    }
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  &:hover {
    box-shadow: 0 6px 20px rgba(110, 124, 243, 0.4);
  }
`;

const MufiLogo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.RED};
  font-weight: 900;
  font-size: 2.5rem;
  font-family: 'Montserrat', sans-serif;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const StatementWrapper = styled.div<AnimateProps>`
  background: white;
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  order: 1;
  
  ${MEDIA_QUERIES.TABLET} {
    order: 2;
  }
  
  opacity: ${props => (props.animate ? 1 : 0)};
  transform: translateX(${props => (props.animate ? 0 : '-30px')});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

const StatementText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${COLORS.BLACK};
  margin: 0;
  word-break: keep-all;
  text-align: left;
  
  ${MEDIA_QUERIES.TABLET} {
    font-size: 1.25rem;
  }
`;

const QuadrantSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const QuadrantTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  position: relative;
  margin: 0 0 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 15%;
    right: 15%;
    height: 2px;
    background-color: ${COLORS.RED}40;
  }
`;

const QuadrantWrapper = styled.div<AnimateProps>`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 500px;
  
  opacity: ${props => (props.animate ? 1 : 0)};
  transform: translateY(${props => (props.animate ? 0 : '30px')});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

const QuadrantBox = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border: 1px solid ${COLORS.BLACK}15;
  border-radius: 12px;
  background-color: white;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${COLORS.BLACK}15;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: ${COLORS.BLACK}15;
  }
`;

interface QuadrantLabelProps {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}

const QuadrantLabel = styled.div<QuadrantLabelProps>`
  position: absolute;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
  opacity: 0.7;
  z-index: 2;
  
  ${props => props.top && `top: 10px;`}
  ${props => props.bottom && `bottom: 10px;`}
  ${props => props.left && `left: 10px;`}
  ${props => props.right && `right: 10px;`}
  
  span {
    background-color: white;
    padding: 4px 8px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
  }
`;

interface AxisLabelProps {
  horizontal?: boolean;
  vertical?: boolean;
}

const AxisLabel = styled.div<AxisLabelProps>`
  position: absolute;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  z-index: 2;
  
  ${props => props.horizontal && `
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: 4px 8px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  `}
  
  ${props => props.vertical && `
    top: 50%;
    left: -40px;
    transform: translateY(-50%) rotate(-90deg);
    background-color: white;
    padding: 4px 8px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    width: max-content;
  `}
`;

interface BubbleProps {
  top: string;
  left: string;
  size: string;
  color: string;
  borderColor?: string;
  animate?: boolean;
  delay?: number;
}

const CompetitorBubble = styled.div<BubbleProps>`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  background-color: ${props => props.color};
  border: ${props => props.borderColor ? `2px solid ${props.borderColor}` : 'none'};
  top: ${props => props.top};
  left: ${props => props.left};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  z-index: 3;
  transform: translate(-50%, -50%) scale(${props => (props.animate ? 1 : 0)});
  transition: transform 0.6s ease-out, box-shadow 0.3s ease;
  transition-delay: ${props => (props.delay ? `${props.delay}s` : '0s')};
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    transform: translate(-50%, -50%) scale(1.05);
    z-index: 4;
  }
`;

const BubbleIcon = styled.div`
  font-size: 1.25rem;
  margin-bottom: 2px;
`;

const BubbleLabel = styled.div`
  line-height: 1.2;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
`;

const MufiQuadrantLogo = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${COLORS.RED};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 2px;
`; 