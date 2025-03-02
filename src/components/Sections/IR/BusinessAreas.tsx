import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar as RechartsBar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line
} from 'recharts';

export const BusinessAreas: React.FC = () => {
  // 경쟁 우위 비교 데이터
  const competitiveData = [
    { subject: 'AI 기술', MUFI: 9, 일반포토부스: 3, 온라인앱: 6, fullMark: 10 },
    { subject: '데이터 수집', MUFI: 8, 일반포토부스: 2, 온라인앱: 5, fullMark: 10 },
    { subject: '소셜 연계', MUFI: 10, 일반포토부스: 1, 온라인앱: 8, fullMark: 10 },
    { subject: '시장 확장성', MUFI: 8, 일반포토부스: 5, 온라인앱: 6, fullMark: 10 },
    { subject: '수익 다변화', MUFI: 9, 일반포토부스: 3, 온라인앱: 5, fullMark: 10 },
    { subject: '고객 충성도', MUFI: 8, 일반포토부스: 6, 온라인앱: 7, fullMark: 10 },
  ];

  // 연간 성장률 예측 데이터
  const growthData = [
    { name: '2025', 포토부스: 40, AI에이전트: 55, 소셜플랫폼: 30 },
    { name: '2026', 포토부스: 60, AI에이전트: 75, 소셜플랫폼: 60 },
    { name: '2027', 포토부스: 80, AI에이전트: 100, 소셜플랫폼: 85 },
    { name: '2028', 포토부스: 110, AI에이전트: 135, 소셜플랫폼: 120 },
  ];

  return (
    <StrategySection>
      <StrategyTitle>현재 사업 영역</StrategyTitle>
      
      <StrategyIntro>
        MUFI는 <HighlightSpan>포토부스</HighlightSpan>, <HighlightSpan>AI 에이전트</HighlightSpan>, <HighlightSpan>소셜 플랫폼</HighlightSpan>의 삼위일체 시너지를 통해 
        하드웨어와 소프트웨어, 데이터 기반의 종합 비즈니스 모델을 구축하고 있습니다. 
        각 사업 영역은 독립적인 수익 모델을 갖추면서도 상호 보완적으로 작용하여 강력한 경쟁 우위를 창출합니다.
      </StrategyIntro>
      
      <StrategyGrid>
        <StrategyCard>
          <StrategyIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="currentColor"/>
            </svg>
          </StrategyIcon>
          <StrategyCardTitle>포토부스 사업</StrategyCardTitle>
          <StrategyCardContent>
            차별화된 AI 기술로 운영하는 자율 운영 스마트 포토부스입니다. 촬영 가이드 AI, 개인화 필터 제공, 실시간 인화 품질 최적화 등을 통해 MZ세대의 사진 경험을 혁신합니다.
          </StrategyCardContent>
          
          <FeatureList>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureText><Strong>수익 모델:</Strong> 직접 운영, 매출공유형, 이벤트 임대, 프랜차이즈 등 다양한 비즈니스 모델 운영</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureText><Strong>투자회수:</Strong> 한 대당 월 매출 120만 원 기준, 초기투자 1천만 원 8~10개월 내 회수 가능</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureText><Strong>마진율:</Strong> 무인 운영과 낮은 고정비로 60~70% 이상의 높은 영업이익률 달성</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureText><Strong>성장전략:</Strong> 초기 매출공유 모델로 빠르게 거점 확보 후, 안정적 수익 창출</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>📊</FeatureIcon>
              <FeatureText><Strong>시장 규모:</Strong> 글로벌 포토부스 시장은 2023년 5억 9345만 달러에서 2032년 12억 3423만 달러로 연평균 9.6% 성장 전망, 한국 내 대학가 중심으로 꾸준한 수요 확보</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>↗</FeatureIcon>
              <FeatureText><Strong>연계 효과:</Strong> 축적된 사용자 데이터는 AI 에이전트 성능 향상에 활용되며, 소셜 플랫폼을 통해 사용자 재방문 유도</FeatureText>
            </FeatureItem>
          </FeatureList>
          
          <ROIContainer>
            <ROITitle>투자 회수 기간</ROITitle>
            <ROIBar>
              <ROIProgress width={90} />
              <ROILabel>8-10개월</ROILabel>
            </ROIBar>
          </ROIContainer>
        </StrategyCard>
        
        <StrategyCard>
          <StrategyIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
            </svg>
          </StrategyIcon>
          <StrategyCardTitle>AI 에이전트 사업</StrategyCardTitle>
          <StrategyCardContent>
            포토부스에서 축적된 <HighlightSpan>이미지 인식 및 인터랙션 기술</HighlightSpan>을 기반으로 개발된 인공지능 서비스입니다. 
            사진 촬영 보조 AI부터 챗봇 형태의 가상 비서까지 다양한 형태로 활용되며, B2B 영역에서는 고객 응대 챗봇, 
            매장 안내 키오스크 AI, 이벤트 진행 도우미 AI 등 맞춤형 에이전트 솔루션을 제공합니다.
          </StrategyCardContent>
          
          <FeatureList>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureText><Strong>수익 모델:</Strong> 클라우드 SaaS 구독형(월 50만원 내외 표준 플랜, 연간 수천만 원대 엔터프라이즈 플랜), API 사용량 기반 과금, 맞춤형 개발 프로젝트, 유지보수 및 지원 계약</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureText><Strong>타겟 고객:</Strong> 기업 고객(B2B) 중심, 초기에는 MUFI 포토부스 가맹점/제휴처에 업셀링, 중소기업용 홈페이지 챗봇부터 대기업 맞춤형 솔루션까지 계층화된 접근</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureText><Strong>마진율:</Strong> 소프트웨어 기반으로 초기 개발 후 규모의 경제 달성, 70~80%의 매출총이익률, 추가 인건비 최소화로 높은 영업이익률 유지</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureText><Strong>성장전략:</Strong> 도메인 특화 AI로 차별화(이미지 인식 강점), 기존 포토부스/플랫폼으로 크로스 마케팅, 국내 중소기업 타겟 후 글로벌 확장</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>📊</FeatureIcon>
              <FeatureText><Strong>시장 전망:</Strong> 글로벌 AI 소프트웨어 시장은 2024년 980억 달러에서 2030년 3914억 달러로 연 30% 성장 전망. 특히 생성형 AI는 연 49.7%의 높은 성장률이 예상되어 MUFI의 핵심 성장동력으로 발전</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>↗</FeatureIcon>
              <FeatureText><Strong>연계 효과:</Strong> 포토부스의 실제 사용자 데이터로 학습하며, 소셜 플랫폼에 지능형 서비스 제공으로 사용자 경험 향상</FeatureText>
            </FeatureItem>
          </FeatureList>
          
          <ROIContainer>
            <ROITitle>예상 매출총이익률</ROITitle>
            <ROIBar>
              <ROIProgress width={75} />
              <ROILabel>70-80%</ROILabel>
            </ROIBar>
          </ROIContainer>
          
          <PricingContainer>
            <PricingTitle>가격 전략</PricingTitle>
            <PricingList>
              <PricingItem>
                <PricingName>표준 플랜</PricingName>
                <PricingValue>월 50만원</PricingValue>
                <PricingDescription>중소기업용, 일정 건수 응답 제공</PricingDescription>
              </PricingItem>
              <PricingItem>
                <PricingName>엔터프라이즈 플랜</PricingName>
                <PricingValue>연간 수천만원</PricingValue>
                <PricingDescription>전용 서버 및 맞춤형 AI 튜닝 제공</PricingDescription>
              </PricingItem>
              <PricingItem>
                <PricingName>API 사용료</PricingName>
                <PricingValue>건당 과금</PricingValue>
                <PricingDescription>사용량 기반 티어드 가격 제공</PricingDescription>
              </PricingItem>
            </PricingList>
          </PricingContainer>
        </StrategyCard>
        
        <StrategyCard>
          <StrategyIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
            </svg>
          </StrategyIcon>
          <StrategyCardTitle>대학생 소셜 플랫폼</StrategyCardTitle>
          <StrategyCardContent>
            포토부스와 AI 에이전트 서비스를 연결하는 허브로, 사용자들이 촬영한 사진을 공유하고 커뮤니티를 형성하는 모바일 앱 기반 소셜 네트워크입니다. <HighlightSpan>대학생 특화형 소셜 미디어</HighlightSpan>로, 포토부스에서 촬영한 이미지를 즉시 공유하고 같은 학교 구성원들과 실시간 소통하는 폐쇄형 커뮤니티 서비스를 제공합니다. 포토부스와 온라인 플랫폼의 연결고리 역할을 하며 MUFI의 디지털 생태계를 완성합니다.
          </StrategyCardContent>
          
          <FeatureList>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureText><Strong>수익 모델:</Strong> 광고 수익(타겟 광고 및 브랜드 협업), 프리미엄 멤버십(월 4,900원, 추가 기능 제공), 데이터 인사이트 제공(대학생 트렌드 리포트), 커머스 연계 수수료(대학생 할인 프로그램)</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureText><Strong>사용자 목표:</Strong> 출시 1년 내 MAU 100만 명, 2년 차 국내 대학생 점유율 50% 이상, 3~4년 차 글로벌 1,000만 MAU</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureText><Strong>확보 전략:</Strong> MUFI 포토부스 이용자의 자연스러운 플랫폼 전환 유도, 대학 캠퍼스 대상 집중 마케팅(대학축제 및 오리엔테이션 연계), 교내 홍보대사 프로그램 운영</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureText><Strong>차별화:</Strong> 사진 중심의 특화된 소셜 경험, AI 기반 개인화 추천 서비스, 대학교별 폐쇄형 커뮤니티 제공, 학생증 연동 신원 인증으로 안전한 환경 조성</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>📊</FeatureIcon>
              <FeatureText><Strong>시장 잠재력:</Strong> 한국 내 소셜 미디어 사용자는 전체 인구의 92%인 4,787만 명으로, 일평균 1시간 11분을 4.5개 플랫폼에서 활용. 인스타그램(48.6%)이 주요 플랫폼이며, SNS 기반 커뮤니티 수요 지속적 증가 추세</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>✓</FeatureIcon>
              <FeatureText><Strong>핵심 기능:</Strong> AI 기반 이미지 필터 및 편집 도구, 캠퍼스별 실시간 이벤트 알림, 익명 소통 공간, 학과/동아리별 그룹 기능, 포토부스 위치 및 예약 서비스 통합</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>↗</FeatureIcon>
              <FeatureText><Strong>연계 효과:</Strong> 포토부스 사용자의 디지털 활동 공간으로 온-오프라인 경험 연결, AI 에이전트 활용으로 개인화된 콘텐츠 경험 제공</FeatureText>
            </FeatureItem>
          </FeatureList>
          
          <ROIContainer>
            <ROITitle>목표 MAU (1년 차)</ROITitle>
            <ROIBar>
              <ROIProgress width={65} />
              <ROILabel>100만 명</ROILabel>
            </ROIBar>
          </ROIContainer>
        </StrategyCard>
      </StrategyGrid>
      
      <SynergySection>
        <SynergyTitle>사업 간 시너지 효과 및 시장 검증</SynergyTitle>
        
        <CompetitiveAnalysisSection>
          <CompetitiveAnalysisTitle>경쟁 우위 분석</CompetitiveAnalysisTitle>
          <CompetitiveAnalysisDescription>
            MUFI는 기존 포토부스 사업자와 온라인 앱 서비스 대비 AI 기술, 데이터 수집, 소셜 연계, 시장 확장성, 수익 다변화, 고객 충성도 측면에서 차별화된 경쟁 우위를 보유하고 있습니다.
          </CompetitiveAnalysisDescription>
          
          <RadarChartContainer>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart outerRadius={150} data={competitiveData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={{ fill: COLORS.BLACK, fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 10]} tick={{ fill: COLORS.BLACK, fontSize: 10 }} />
                <Radar name="MUFI" dataKey="MUFI" stroke={COLORS.RED} fill={COLORS.RED} fillOpacity={0.5} />
                <Radar name="일반포토부스" dataKey="일반포토부스" stroke={COLORS.BLUE} fill={COLORS.BLUE} fillOpacity={0.5} />
                <Radar name="온라인앱" dataKey="온라인앱" stroke={COLORS.GREEN} fill={COLORS.GREEN} fillOpacity={0.5} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </RadarChartContainer>
          
          <CompetitiveAdvantages>
            <CompetitiveAdvantage>
              <CompetitiveAdvantageTitle>AI 기술 강점</CompetitiveAdvantageTitle>
              <CompetitiveAdvantageContent>
                독자 개발된 이미지 인식 및 처리 알고리즘으로 사용자 경험을 획기적으로 개선합니다. 포즈 추천, 자동 보정, 개인화 필터 등 고급 AI 기능을 통해 사용자의 만족도와 부가가치를 높입니다.
              </CompetitiveAdvantageContent>
            </CompetitiveAdvantage>
            
            <CompetitiveAdvantage>
              <CompetitiveAdvantageTitle>데이터 기반 비즈니스</CompetitiveAdvantageTitle>
              <CompetitiveAdvantageContent>
                포토부스의 사용자 행동 데이터, 소셜 플랫폼의 상호작용 데이터를 활용한 머신러닝 기반 서비스 최적화가 가능합니다. 이를 통해 지속적인 서비스 개선 및 신규 비즈니스 기회를 발굴합니다.
              </CompetitiveAdvantageContent>
            </CompetitiveAdvantage>
            
            <CompetitiveAdvantage>
              <CompetitiveAdvantageTitle>통합 생태계 구축</CompetitiveAdvantageTitle>
              <CompetitiveAdvantageContent>
                오프라인(포토부스)과 온라인(소셜 플랫폼)을 AI로 연결하는 통합 생태계를 구축하여 경쟁사가 쉽게 모방할 수 없는 비즈니스 모델을 완성합니다. 이 통합 접근법은 사용자 락인(Lock-in) 효과와 크로스셀링 기회를 극대화합니다.
              </CompetitiveAdvantageContent>
            </CompetitiveAdvantage>
          </CompetitiveAdvantages>
        </CompetitiveAnalysisSection>
        
        <GrowthForecastSection>
          <GrowthForecastTitle>연간 성장률 예측</GrowthForecastTitle>
          <GrowthForecastDescription>
            MUFI의 세 가지 핵심 사업 영역은 향후 4년간 지속적인 성장이 예상됩니다. 특히 AI 에이전트 사업은 급성장하는 생성형 AI 시장과 함께 가장 높은 성장률을 보일 것으로 전망됩니다.
          </GrowthForecastDescription>
          
          <LineChartContainer>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={growthData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fill: COLORS.BLACK }} />
                <YAxis tick={{ fill: COLORS.BLACK }} />
                <Tooltip formatter={(value) => [`${value}%`, '']} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="포토부스" stroke={COLORS.RED} strokeWidth={2} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="AI에이전트" stroke={COLORS.BLUE} strokeWidth={2} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="소셜플랫폼" stroke={COLORS.GREEN} strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </LineChartContainer>
          
          <GrowthStrategies>
            <GrowthStrategy>
              <GrowthStrategyTitle>포토부스 성장 전략</GrowthStrategyTitle>
              <GrowthStrategyContent>
                대학 파트너십을 통한 캠퍼스 내 설치 확대, 대형 유통 및 엔터테인먼트 기업과의 전략적 제휴를 통한 거점 확보, 프랜차이즈 모델 도입을 통한 빠른 확장을 추진합니다.
              </GrowthStrategyContent>
            </GrowthStrategy>
            
            <GrowthStrategy>
              <GrowthStrategyTitle>AI 에이전트 성장 전략</GrowthStrategyTitle>
              <GrowthStrategyContent>
                포토부스에서 검증된 기술을 B2B 솔루션으로 확장하고, 도메인 특화 AI로 전문성을 강화하며, API 접근성 제공을 통한 개발자 생태계 활성화를 통해 급성장하는 AI 시장을 선점합니다.
              </GrowthStrategyContent>
            </GrowthStrategy>
            
            <GrowthStrategy>
              <GrowthStrategyTitle>소셜 플랫폼 성장 전략</GrowthStrategyTitle>
              <GrowthStrategyContent>
                포토부스 이용자의 자연스러운 유입 유도, 대학별 특화 콘텐츠 제공, 프리미엄 멤버십 모델 도입으로 사용자 락인(Lock-in) 효과를 극대화하고 지속적인 수익을 창출합니다.
              </GrowthStrategyContent>
            </GrowthStrategy>
          </GrowthStrategies>
        </GrowthForecastSection>
        
        <SynergyDescription>
          MUFI의 세 가지 사업 영역은 개별적으로도 높은 수익성을 갖추고 있지만, 통합되었을 때 더욱 강력한 경쟁 우위를 창출합니다.
          <br/><br/>
          <Strong>데이터 순환 생태계:</Strong> 포토부스를 통해 수집된 대학생 행동 데이터와 이미지 데이터는 AI 에이전트 학습에 활용되며, 향상된 AI는 소셜 플랫폼의 개인화 기능을 강화합니다. 소셜 플랫폼에서 생성된 사용자 활동 데이터는 다시 포토부스와 AI 개선에 활용되는 선순환 구조를 형성합니다. 이러한 데이터 기반 접근법은 글로벌 AI 소프트웨어 시장의 주요 성장 동력과 일치합니다.
          <br/><br/>
          <Strong>사용자 경험 통합:</Strong> 사용자는 포토부스에서 촬영한 사진을 AI 처리를 통해 최적화하고, 바로 소셜 플랫폼에 공유하는 끊김 없는 경험을 누립니다. 온-오프라인을 아우르는 이 통합 경험은 경쟁사가 쉽게 모방할 수 없는 MUFI만의 독보적인 비즈니스 모델입니다. 한국의 높은 소셜 미디어 사용률(92%)과 포토부스 시장의 꾸준한 성장(9.6%)을 연결하는 전략적 접근법입니다.
          <br/><br/>
          <Strong>시장 검증:</Strong> 실제 시장 데이터를 통한 사업 모델 검증 결과, MUFI의 세 가지 사업 영역은 모두 성장하는 시장에 포지셔닝되어 있습니다. 글로벌 포토부스 시장은 연 9.6%의 안정적 성장이 예상되며, AI 소프트웨어 시장은 연 30%의 높은 성장률을 보이고 있습니다. 특히 생성형 AI 분야는 연 49.7%의 폭발적 성장이 전망되어 MUFI의, AI 에이전트 사업의 잠재력을 뒷받침합니다.
        </SynergyDescription>
        
        <SynergyDiagram>
          <SynergyNode>
            <SynergyNodeIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="currentColor"/>
              </svg>
            </SynergyNodeIcon>
            <SynergyNodeLabel>포토부스</SynergyNodeLabel>
            <SynergyText>대학생 데이터 수집</SynergyText>
            <SynergyBenefit>⟳ 연 11.2% 성장 시장</SynergyBenefit>
            <SynergyArrow direction="right">→</SynergyArrow>
          </SynergyNode>
          
          <SynergyNode>
            <SynergyNodeIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
              </svg>
            </SynergyNodeIcon>
            <SynergyNodeLabel>AI 에이전트</SynergyNodeLabel>
            <SynergyText>데이터 기반 학습</SynergyText>
            <SynergyBenefit>⟳ 연 26.8% 성장 시장</SynergyBenefit>
            <SynergyArrow direction="right">→</SynergyArrow>
          </SynergyNode>
          
          <SynergyNode>
            <SynergyNodeIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
              </svg>
            </SynergyNodeIcon>
            <SynergyNodeLabel>소셜 플랫폼</SynergyNodeLabel>
            <SynergyText>사용자 경험 향상</SynergyText>
            <SynergyBenefit>⟳ 연 18.5% 성장 시장</SynergyBenefit>
            <SynergyArrow direction="up">↑</SynergyArrow>
          </SynergyNode>
        </SynergyDiagram>
        
        <SynergyMetrics>
          <SynergyMetricsTitle>핵심 시너지 지표</SynergyMetricsTitle>
          <SynergyMetricsList>
            <SynergyMetricsItem>
              <MetricsIcon>📈</MetricsIcon>
              <MetricsContent>
                <MetricsTitle>고객 획득 비용 30% 절감</MetricsTitle>
                <MetricsDescription>통합 마케팅을 통한 효율적 사용자 확보</MetricsDescription>
              </MetricsContent>
            </SynergyMetricsItem>
            <SynergyMetricsItem>
              <MetricsIcon>🔄</MetricsIcon>
              <MetricsContent>
                <MetricsTitle>AI 정확도 25% 향상</MetricsTitle>
                <MetricsDescription>포토부스 데이터 활용한 AI 학습으로 경쟁우위 확보</MetricsDescription>
              </MetricsContent>
            </SynergyMetricsItem>
            <SynergyMetricsItem>
              <MetricsIcon>💼</MetricsIcon>
              <MetricsContent>
                <MetricsTitle>플랫폼 사용자 전환율 40%</MetricsTitle>
                <MetricsDescription>포토부스 이용자의 소셜 플랫폼 가입 비율</MetricsDescription>
              </MetricsContent>
            </SynergyMetricsItem>
            <SynergyMetricsItem>
              <MetricsIcon>🌐</MetricsIcon>
              <MetricsContent>
                <MetricsTitle>복합 성장률 38%</MetricsTitle>
                <MetricsDescription>단일 사업 대비 8% 이상 추가 성장 효과</MetricsDescription>
              </MetricsContent>
            </SynergyMetricsItem>
            <SynergyMetricsItem>
              <MetricsIcon>📊</MetricsIcon>
              <MetricsContent>
                <MetricsTitle>시장 검증된 성장성</MetricsTitle>
                <MetricsDescription>포토부스(11.2%), AI(26.8%), 소셜 플랫폼(18.5% 성장)의 검증된 시장 잠재력</MetricsDescription>
              </MetricsContent>
            </SynergyMetricsItem>
          </SynergyMetricsList>
        </SynergyMetrics>
      </SynergySection>
      
      <MarketValidationSection>
        <ValidationTitle>시장 검증 데이터 요약</ValidationTitle>
        <ValidationDescription>
          MUFI의 사업 모델은 각 영역별 실제 시장 데이터를 기반으로 검증되었으며, 이를 통해 도출된 성장 전략은 현실적인 시장 트렌드를 반영합니다.
        </ValidationDescription>
        
        <ValidationGrid>
          <ValidationCard>
            <ValidationIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="currentColor"/>
              </svg>
            </ValidationIcon>
            <ValidationCardTitle>포토부스 시장</ValidationCardTitle>
            <ValidationStats>
              <ValidationStat>
                <ValidationStatValue>6,720억 원</ValidationStatValue>
                <ValidationStatLabel>2023년 국내 시장 규모</ValidationStatLabel>
              </ValidationStat>
              <ValidationStat>
                <ValidationStatValue>1조 2,800억 원</ValidationStatValue>
                <ValidationStatLabel>2027년 예상 시장 규모</ValidationStatLabel>
              </ValidationStat>
              <ValidationStat>
                <ValidationStatValue>11.2%</ValidationStatValue>
                <ValidationStatLabel>연평균 성장률(CAGR)</ValidationStatLabel>
              </ValidationStat>
              <ValidationStat>
                <ValidationStatValue>8-10개월</ValidationStatValue>
                <ValidationStatLabel>단일 기기 투자 회수 기간</ValidationStatLabel>
              </ValidationStat>
            </ValidationStats>
          </ValidationCard>
          
          <ValidationCard>
            <ValidationIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
              </svg>
            </ValidationIcon>
            <ValidationCardTitle>AI 에이전트 시장</ValidationCardTitle>
            <ValidationStats>
              <ValidationStat>
                <ValidationStatValue>2조 1,300억 원</ValidationStatValue>
                <ValidationStatLabel>2023년 국내 시장 규모</ValidationStatLabel>
              </ValidationStat>
              <ValidationStat>
                <ValidationStatValue>5조 4,800억 원</ValidationStatValue>
                <ValidationStatLabel>2027년 예상 시장 규모</ValidationStatLabel>
              </ValidationStat>
              <ValidationStat>
                <ValidationStatValue>26.8%</ValidationStatValue>
                <ValidationStatLabel>연평균 성장률(CAGR)</ValidationStatLabel>
              </ValidationStat>
              <ValidationStat>
                <ValidationStatValue>36.8%</ValidationStatValue>
                <ValidationStatLabel>글로벌 성장률(CAGR)</ValidationStatLabel>
              </ValidationStat>
            </ValidationStats>
          </ValidationCard>
          
          <ValidationCard>
            <ValidationIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
              </svg>
            </ValidationIcon>
            <ValidationCardTitle>소셜 플랫폼 시장</ValidationCardTitle>
            <ValidationStats>
              <ValidationStat>
                <ValidationStatValue>3,650억 원</ValidationStatValue>
                <ValidationStatLabel>2023년 국내 시장 규모</ValidationStatLabel>
              </ValidationStat>
              <ValidationStat>
                <ValidationStatValue>7,230억 원</ValidationStatValue>
                <ValidationStatLabel>2027년 예상 시장 규모</ValidationStatLabel>
              </ValidationStat>
              <ValidationStat>
                <ValidationStatValue>18.5%</ValidationStatValue>
                <ValidationStatLabel>연평균 성장률(CAGR)</ValidationStatLabel>
              </ValidationStat>
              <ValidationStat>
                <ValidationStatValue>4,787만 명</ValidationStatValue>
                <ValidationStatLabel>국내 소셜 미디어 사용자</ValidationStatLabel>
              </ValidationStat>
            </ValidationStats>
          </ValidationCard>
        </ValidationGrid>
        
        <ValidationConclusion>
          위 시장 데이터는 MUFI의 세 가지 사업 영역이 모두 성장하는 시장에 위치하고 있음을 보여줍니다. 특히 AI 솔루션 시장(26.8%)과 소셜 플랫폼 시장(18.5%)은 높은 성장성을 보이며, 이는 MUFI의 장기적 수익성과 지속가능성을 뒷받침합니다. 포토부스 사업(11.2%)의 안정적인 성장과 높은 수익성은 초기 현금흐름을 확보하는 기반이 되며, 이를 통해 AI와 소셜 플랫폼 사업의 성장 투자를 진행할 수 있습니다. 2027년까지 포토부스 100.8억 원(60%), AI 솔루션 42억 원(25%), 소셜 플랫폼 19.2억 원(12%), 데이터 판매 5억 원(3%)의 균형 있는 수익 구조를 목표로 합니다.
        </ValidationConclusion>
      </MarketValidationSection>
      
      <ProjectionSection>
        <ProjectionTitle>5년 사업 매출 시뮬레이션</ProjectionTitle>
        
        <GraphContainer>
          <AIGrowthTitle>글로벌 AI 사업 5개년 매출 전망</AIGrowthTitle>
          
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={[
                { year: '01년', value: 5, label: '5억원' },
                { year: '02년', value: 19, label: '19억원' },
                { year: '03년', value: 45, label: '45억원' },
                { year: '04년', value: 90, label: '90억원' },
                { year: '05년', value: 168, label: '168억원' },
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
                labelFormatter={(label) => `${label} 차`}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '6px',
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  fontSize: '12px'
                }}
              />
              <RechartsBar 
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
                  formatter: (value: number) => `${value}억원`
                }}
              />
            </BarChart>
          </ResponsiveContainer>
          
          <GrowthLegend>
            <GrowthLegendItem>
              <GrowthLegendIcon type="bar" />
              <GrowthLegendText>연간 매출액</GrowthLegendText>
            </GrowthLegendItem>
            <GrowthLegendItem>
              <GrowthLegendIcon type="line" />
              <GrowthLegendText>성장 곡선 (연 평균 120% 성장)</GrowthLegendText>
            </GrowthLegendItem>
          </GrowthLegend>
          
          <GrowthNote>
            * AI 에이전트 사업은 초기 2억원에서 5년차 60억원으로 급성장 예상
            <br />
            * 목표 CAGR 120%로 글로벌 AI 시장 성장률(30%)의 4배 성장
            <br />
            * 글로벌 AI 소프트웨어 시장은 2024년 980억 달러에서 2030년 3914억 달러로 연 30% 성장 전망
          </GrowthNote>
        </GraphContainer>
        
        <ProjectionTable>
          <thead>
            <tr>
              <th>연차</th>
              <th>포토부스 사업</th>
              <th>AI 에이전트</th>
              <th>소셜 플랫폼</th>
              <th>총 매출</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1년차</td>
              <td>8억원</td>
              <td>2억원</td>
              <td>-</td>
              <td>10억원</td>
            </tr>
            <tr>
              <td>2년차</td>
              <td>18억원</td>
              <td>5억원</td>
              <td>2억원</td>
              <td>25억원</td>
            </tr>
            <tr>
              <td>3년차</td>
              <td>35억원</td>
              <td>15억원</td>
              <td>8억원</td>
              <td>58억원</td>
            </tr>
            <tr>
              <td>4년차</td>
              <td>60억원</td>
              <td>30억원</td>
              <td>20억원</td>
              <td>110억원</td>
            </tr>
            <tr>
              <td>5년차</td>
              <td>90억원</td>
              <td>60억원</td>
              <td>50억원</td>
              <td>200억원</td>
            </tr>
          </tbody>
        </ProjectionTable>
        <ProjectionNote>
          * 초기에는 포토부스 사업이 주요 매출원이나, 점차 AI 에이전트와 소셜 플랫폼 비중이 증가하여 안정적이고 균형 잡힌 수익 구조 형성
          * 5년 후에는 총 매출 200억원 규모로 성장하며 AI 에이전트와 소셜 플랫폼이 전체 매출의 55% 차지
          * 글로벌 포토부스 시장(연 9.6% 성장)과 AI 소프트웨어 시장(연 30% 성장) 트렌드를 반영한 현실적 성장 모델
        </ProjectionNote>
      </ProjectionSection>
      
      <RoadmapSection>
        <RoadmapTitle>통합 사업 로드맵</RoadmapTitle>
        <RoadmapDescription>
          MUFI의 세 가지 사업 영역은 유기적으로 연결되어 단계별로 확장되며, 각 단계에서 명확한 성과 목표를 가지고 있습니다.
          아래 로드맵은 향후 5년간의 주요 이정표와 사업 확장 계획을 시각화합니다.
        </RoadmapDescription>
        
        <RoadmapContainer>
          <RoadmapHeader>
            <RoadmapYear>1년차</RoadmapYear>
            <RoadmapYear>2년차</RoadmapYear>
            <RoadmapYear>3년차</RoadmapYear>
            <RoadmapYear>4년차</RoadmapYear>
            <RoadmapYear>5년차</RoadmapYear>
          </RoadmapHeader>
          
          <RoadmapTimeline>
            <RoadmapLegend>
              <RoadmapLegendItem color={COLORS.RED}>포토부스</RoadmapLegendItem>
              <RoadmapLegendItem color="#4A6FFF">AI 에이전트</RoadmapLegendItem>
              <RoadmapLegendItem color="#36B37E">소셜 플랫폼</RoadmapLegendItem>
            </RoadmapLegend>
            
            <RoadmapTrack>
              <RoadmapTrackLabel>포토부스</RoadmapTrackLabel>
              <RoadmapProgressBar>
                <RoadmapPhase color={COLORS.RED} width="20%" left="0%">
                  <RoadmapPhaseTitle>초기 구축</RoadmapPhaseTitle>
                  <RoadmapMilestone>5개 거점 확보</RoadmapMilestone>
                  <RoadmapMetric>8억원 매출</RoadmapMetric>
                </RoadmapPhase>
                <RoadmapPhase color={COLORS.RED} width="20%" left="20%">
                  <RoadmapPhaseTitle>확장</RoadmapPhaseTitle>
                  <RoadmapMilestone>15개 거점 운영</RoadmapMilestone>
                  <RoadmapMetric>18억원 매출</RoadmapMetric>
                </RoadmapPhase>
                <RoadmapPhase color={COLORS.RED} width="20%" left="40%">
                  <RoadmapPhaseTitle>프랜차이즈화</RoadmapPhaseTitle>
                  <RoadmapMilestone>30개 거점 확보</RoadmapMilestone>
                  <RoadmapMetric>35억원 매출</RoadmapMetric>
                </RoadmapPhase>
                <RoadmapPhase color={COLORS.RED} width="20%" left="60%">
                  <RoadmapPhaseTitle>글로벌 진출</RoadmapPhaseTitle>
                  <RoadmapMilestone>해외 첫 진출</RoadmapMilestone>
                  <RoadmapMetric>60억원 매출</RoadmapMetric>
                </RoadmapPhase>
                <RoadmapPhase color={COLORS.RED} width="20%" left="80%">
                  <RoadmapPhaseTitle>글로벌 확장</RoadmapPhaseTitle>
                  <RoadmapMilestone>글로벌 50개 거점</RoadmapMilestone>
                  <RoadmapMetric>90억원 매출</RoadmapMetric>
                </RoadmapPhase>
              </RoadmapProgressBar>
            </RoadmapTrack>
            
            <RoadmapTrack>
              <RoadmapTrackLabel>AI 에이전트</RoadmapTrackLabel>
              <RoadmapProgressBar>
                <RoadmapPhase color="#4A6FFF" width="20%" left="0%">
                  <RoadmapPhaseTitle>MVP 출시</RoadmapPhaseTitle>
                  <RoadmapMilestone>베타 서비스 런칭</RoadmapMilestone>
                  <RoadmapMetric>2억원 매출</RoadmapMetric>
                </RoadmapPhase>
                <RoadmapPhase color="#4A6FFF" width="20%" left="20%">
                  <RoadmapPhaseTitle>B2B 확장</RoadmapPhaseTitle>
                  <RoadmapMilestone>첫 10개 기업 고객</RoadmapMilestone>
                  <RoadmapMetric>5억원 매출</RoadmapMetric>
                </RoadmapPhase>
                <RoadmapPhase color="#4A6FFF" width="20%" left="40%">
                  <RoadmapPhaseTitle>산업 특화</RoadmapPhaseTitle>
                  <RoadmapMilestone>3개 산업군 솔루션</RoadmapMilestone>
                  <RoadmapMetric>15억원 매출</RoadmapMetric>
                </RoadmapPhase>
                <RoadmapPhase color="#4A6FFF" width="20%" left="60%">
                  <RoadmapPhaseTitle>글로벌 진출</RoadmapPhaseTitle>
                  <RoadmapMilestone>해외 파트너십 구축</RoadmapMilestone>
                  <RoadmapMetric>30억원 매출</RoadmapMetric>
                </RoadmapPhase>
                <RoadmapPhase color="#4A6FFF" width="20%" left="80%">
                  <RoadmapPhaseTitle>생성형 AI 확장</RoadmapPhaseTitle>
                  <RoadmapMilestone>특화 LLM 출시</RoadmapMilestone>
                  <RoadmapMetric>60억원 매출</RoadmapMetric>
                </RoadmapPhase>
              </RoadmapProgressBar>
            </RoadmapTrack>
            
            <RoadmapTrack>
              <RoadmapTrackLabel>소셜 플랫폼</RoadmapTrackLabel>
              <RoadmapProgressBar>
                <RoadmapPhase color="#36B37E" width="20%" left="0%">
                  <RoadmapPhaseTitle>기획</RoadmapPhaseTitle>
                  <RoadmapMilestone>개발 착수</RoadmapMilestone>
                  <RoadmapMetric>-</RoadmapMetric>
                </RoadmapPhase>
                <RoadmapPhase color="#36B37E" width="20%" left="20%">
                  <RoadmapPhaseTitle>베타 출시</RoadmapPhaseTitle>
                  <RoadmapMilestone>첫 10만 사용자</RoadmapMilestone>
                  <RoadmapMetric>2억원 매출</RoadmapMetric>
                </RoadmapPhase>
                <RoadmapPhase color="#36B37E" width="20%" left="40%">
                  <RoadmapPhaseTitle>본격 확장</RoadmapPhaseTitle>
                  <RoadmapMilestone>MAU 100만 달성</RoadmapMilestone>
                  <RoadmapMetric>8억원 매출</RoadmapMetric>
                </RoadmapPhase>
                <RoadmapPhase color="#36B37E" width="20%" left="60%">
                  <RoadmapPhaseTitle>수익 모델 확대</RoadmapPhaseTitle>
                  <RoadmapMilestone>커머스 통합</RoadmapMilestone>
                  <RoadmapMetric>20억원 매출</RoadmapMetric>
                </RoadmapPhase>
                <RoadmapPhase color="#36B37E" width="20%" left="80%">
                  <RoadmapPhaseTitle>글로벌 확장</RoadmapPhaseTitle>
                  <RoadmapMilestone>글로벌 1,000만 MAU</RoadmapMilestone>
                  <RoadmapMetric>50억원 매출</RoadmapMetric>
                </RoadmapPhase>
              </RoadmapProgressBar>
            </RoadmapTrack>
          </RoadmapTimeline>
          
          <RoadmapSynergy>
            <RoadmapSynergyTitle>단계별 통합 성과</RoadmapSynergyTitle>
            <RoadmapSynergyItems>
              <RoadmapSynergyItem>
                <RoadmapSynergyYear>1년차</RoadmapSynergyYear>
                <RoadmapSynergyContent>
                  <RoadmapSynergyMetric>총 매출 10억원</RoadmapSynergyMetric>
                  <RoadmapSynergyText>포토부스 기반 구축, AI 에이전트 MVP 출시, 소셜 플랫폼 기획 및 개발 착수</RoadmapSynergyText>
                </RoadmapSynergyContent>
              </RoadmapSynergyItem>
              <RoadmapSynergyItem>
                <RoadmapSynergyYear>2년차</RoadmapSynergyYear>
                <RoadmapSynergyContent>
                  <RoadmapSynergyMetric>총 매출 25억원</RoadmapSynergyMetric>
                  <RoadmapSynergyText>포토부스-소셜 플랫폼 연동 시스템 구축, AI 기업 솔루션 첫 출시</RoadmapSynergyText>
                </RoadmapSynergyContent>
              </RoadmapSynergyItem>
              <RoadmapSynergyItem>
                <RoadmapSynergyYear>3년차</RoadmapSynergyYear>
                <RoadmapSynergyContent>
                  <RoadmapSynergyMetric>총 매출 58억원</RoadmapSynergyMetric>
                  <RoadmapSynergyText>3사업 통합 데이터 시스템 구축, AI 기반 소셜 플랫폼 개인화 기능 강화</RoadmapSynergyText>
                </RoadmapSynergyContent>
              </RoadmapSynergyItem>
              <RoadmapSynergyItem>
                <RoadmapSynergyYear>4년차</RoadmapSynergyYear>
                <RoadmapSynergyContent>
                  <RoadmapSynergyMetric>총 매출 110억원</RoadmapSynergyMetric>
                  <RoadmapSynergyText>글로벌 시장 진출 본격화, 해외 파트너십 확대, AI 기반 소셜 커머스 기능 출시</RoadmapSynergyText>
                </RoadmapSynergyContent>
              </RoadmapSynergyItem>
              <RoadmapSynergyItem>
                <RoadmapSynergyYear>5년차</RoadmapSynergyYear>
                <RoadmapSynergyContent>
                  <RoadmapSynergyMetric>총 매출 200억원</RoadmapSynergyMetric>
                  <RoadmapSynergyText>3사업 글로벌 연계 확대, 기업가치 1,000억원 달성, IPO 준비</RoadmapSynergyText>
                </RoadmapSynergyContent>
              </RoadmapSynergyItem>
            </RoadmapSynergyItems>
          </RoadmapSynergy>
          
          <RoadmapNote>
            * 각 사업 영역은 독립적으로 성장하면서도 통합적인 시너지 효과를 창출합니다.
            <br />
            * 데이터 순환 생태계를 통해 각 사업 영역의 경쟁력이 강화되며, 총 매출은 개별 사업의 합보다 큰 성장을 보입니다.
            <br />
            * 5년차에는 국내를 넘어 글로벌 시장에서 인정받는 AI 기반 통합 플랫폼 기업으로 자리매김하는 것이 목표입니다.
          </RoadmapNote>
        </RoadmapContainer>
      </RoadmapSection>
    </StrategySection>
  );
};

const StrategySection = styled.div`
  margin-top: 2rem;
  padding-bottom: 3rem;
`;

const StrategyTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${COLORS.RED};
    border-radius: 2px;
  }
`;

const StrategyIntro = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  margin-bottom: 2rem;
  max-width: 900px;
`;

const HighlightSpan = styled.span`
  color: ${COLORS.RED};
  font-weight: 700;
`;

const StrategyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StrategyCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const StrategyIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const StrategyCardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${COLORS.BLACK};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${COLORS.RED};
    opacity: 0.6;
  }
`;

const StrategyCardContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureIcon = styled.div`
  width: 18px;
  height: 18px;
  min-width: 18px;
  color: ${COLORS.RED};
  background-color: rgba(110, 124, 243, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  margin-right: 0.75rem;
  margin-top: 3px;
`;

const FeatureText = styled.p`
  font-size: 0.9375rem;
  line-height: 1.5;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  margin: 0;
`;

const Strong = styled.span`
  font-weight: 600;
  color: ${COLORS.BLACK};
`;

const ROIContainer = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.1);
`;

const ROITitle = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ROIBar = styled.div`
  height: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const ROIProgress = styled.div<{ width: number }>`
  height: 100%;
  width: ${props => props.width}%;
  background-color: ${COLORS.RED};
  border-radius: 5px;
`;

const ROILabel = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${COLORS.RED};
  text-align: right;
  margin: 0;
`;

const SynergySection = styled.div`
  margin-bottom: 3rem;
  background-color: rgba(110, 124, 243, 0.05);
  padding: 2rem;
  border-radius: 12px;
`;

const SynergyTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const SynergyDescription = styled.p`
  font-size: 1.0625rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  margin-bottom: 2rem;
`;

const SynergyDiagram = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  ${MEDIA_QUERIES.TABLET} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SynergyNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${COLORS.WHITE};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 200px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  
  ${MEDIA_QUERIES.TABLET} {
    width: 30%;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
  }
`;

const SynergyNodeIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  margin-bottom: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const SynergyNodeLabel = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const SynergyText = styled.p`
  font-size: 0.875rem;
  color: ${COLORS.BLACK};
  opacity: 0.7;
  margin-top: 0.5rem;
  font-weight: 600;
`;

const SynergyBenefit = styled.p`
  font-size: 0.8rem;
  color: ${COLORS.RED};
  margin-top: 0.5rem;
  font-weight: 500;
`;

const SynergyArrow = styled.div<{ direction: string }>`
  font-size: 1.5rem;
  color: ${COLORS.RED};
  position: absolute;
  
  ${props => props.direction === 'right' && `
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    
    @media (max-width: 768px) {
      right: 50%;
      bottom: -25px;
      top: auto;
      transform: rotate(90deg) translateX(-50%);
    }
  `}
  
  ${props => props.direction === 'up' && `
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    
    @media (max-width: 768px) {
      top: -25px;
    }
  `}
`;

const SynergyMetrics = styled.div`
  margin-top: 2rem;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const SynergyMetricsTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const SynergyMetricsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SynergyMetricsItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(249, 250, 251, 0.8);
  border-radius: 8px;
`;

const MetricsIcon = styled.div`
  font-size: 1.5rem;
  line-height: 1;
`;

const MetricsContent = styled.div`
  flex: 1;
`;

const MetricsTitle = styled.h6`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${COLORS.BLACK};
`;

const MetricsDescription = styled.p`
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.4;
`;

const ProjectionSection = styled.div`
  margin-top: 2rem;
`;

const ProjectionTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const GraphContainer = styled.div`
  margin: 2rem 0;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const AIGrowthTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const ProjectionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 1rem;
  
  th, td {
    padding: 0.75rem;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  
  th {
    background-color: ${COLORS.RED};
    color: white;
    font-weight: 600;
    position: sticky;
    top: 0;
  }
  
  th:first-child, td:first-child {
    text-align: left;
    font-weight: 600;
  }
  
  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.02);
  }
  
  tr:hover {
    background-color: rgba(110, 124, 243, 0.05);
  }
`;

const ProjectionNote = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${COLORS.BLACK};
  opacity: 0.7;
  font-style: italic;
`;

const PricingContainer = styled.div`
  margin-top: 1.5rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
`;

const PricingTitle = styled.h5`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${COLORS.BLACK};
`;

const PricingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const PricingItem = styled.div`
  background: rgba(249, 250, 251, 0.8);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
`;

const PricingName = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${COLORS.RED};
`;

const PricingValue = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0.2rem 0;
`;

const PricingDescription = styled.div`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.6);
`;

const GrowthLegend = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1.5rem 0;
`;

const GrowthLegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const GrowthLegendIcon = styled.div<{ type: string }>`
  width: 20px;
  height: 20px;
  ${props => props.type === 'bar' ? `
    background: ${COLORS.RED}99;
    border-radius: 3px;
  ` : `
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 1px;
      background: ${COLORS.RED};
      opacity: 0.6;
      transform: translateY(-50%);
    }
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: ${COLORS.RED};
      opacity: 0.7;
      transform: translateY(-50%);
    }
  `}
`;

const GrowthLegendText = styled.span`
  font-size: 0.9rem;
  color: ${COLORS.BLACK};
`;

const GrowthNote = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: ${COLORS.BLACK};
  opacity: 0.7;
  font-style: italic;
  margin-top: 1.5rem;
`;

const MarketValidationSection = styled.div`
  margin: 4rem 0;
  background: ${COLORS.WHITE};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`;

const ValidationTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${COLORS.RED};
    border-radius: 2px;
  }
`;

const ValidationDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  margin-bottom: 2rem;
  max-width: 900px;
`;

const ValidationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValidationCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const ValidationIcon = styled.div`
  width: 32px;
  height: 32px;
  color: ${COLORS.RED};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ValidationCardTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: ${COLORS.BLACK};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${COLORS.RED};
    opacity: 0.6;
    border-radius: 1px;
  }
`;

const ValidationStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const ValidationStat = styled.div`
  background: rgba(246, 246, 249, 0.6);
  padding: 0.8rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ValidationStatValue = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${COLORS.RED};
  margin-bottom: 0.3rem;
`;

const ValidationStatLabel = styled.div`
  font-size: 0.75rem;
  color: ${COLORS.BLACK};
  opacity: 0.7;
  line-height: 1.3;
`;

const ValidationConclusion = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(246, 246, 249, 0.8);
  border-radius: 8px;
  border-left: 3px solid ${COLORS.RED};
`;

const RoadmapSection = styled.div`
  margin: 4rem 0;
  background: ${COLORS.WHITE};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`;

const RoadmapTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${COLORS.RED};
    border-radius: 2px;
  }
`;

const RoadmapDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  margin-bottom: 2rem;
  max-width: 900px;
`;

const RoadmapContainer = styled.div`
  margin-top: 2rem;
  overflow-x: auto;
`;

const RoadmapHeader = styled.div`
  display: flex;
  margin-left: 180px;
  margin-bottom: 1rem;
  
  ${MEDIA_QUERIES.MOBILE} {
    margin-left: 100px;
  }
`;

const RoadmapYear = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  color: ${COLORS.BLACK};
  background-color: rgba(0, 0, 0, 0.03);
  padding: 0.5rem 0;
  border-radius: 4px;
  margin: 0 0.25rem;
`;

const RoadmapTimeline = styled.div`
  margin-bottom: 2rem;
`;

const RoadmapLegend = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const RoadmapLegendItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${COLORS.BLACK};
  
  &:before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: ${props => props.color};
    border-radius: 2px;
    margin-right: 0.5rem;
  }
`;

const RoadmapTrack = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
`;

const RoadmapTrackLabel = styled.div`
  width: 150px;
  font-weight: 600;
  font-size: 1rem;
  padding-right: 1.5rem;
  text-align: right;
  
  ${MEDIA_QUERIES.MOBILE} {
    width: 90px;
    font-size: 0.875rem;
    padding-right: 0.75rem;
  }
`;

const RoadmapProgressBar = styled.div`
  flex: 1;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

const RoadmapPhase = styled.div<{ color: string; width: string; left: string }>`
  position: absolute;
  top: 0;
  left: ${props => props.left};
  width: ${props => props.width};
  height: 100%;
  background-color: ${props => `${props.color}22`};
  border-left: 2px solid ${props => props.color};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => `${props.color}44`};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
  
  ${MEDIA_QUERIES.MOBILE} {
    padding: 0.25rem;
  }
`;

const RoadmapPhaseTitle = styled.div`
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  
  ${MEDIA_QUERIES.MOBILE} {
    font-size: 0.75rem;
  }
`;

const RoadmapMilestone = styled.div`
  font-size: 0.75rem;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  white-space: nowrap;
  
  ${MEDIA_QUERIES.MOBILE} {
    font-size: 0.675rem;
  }
`;

const RoadmapMetric = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${COLORS.RED};
  margin-top: 0.25rem;
  white-space: nowrap;
  
  ${MEDIA_QUERIES.MOBILE} {
    font-size: 0.675rem;
  }
`;

const RoadmapSynergy = styled.div`
  background-color: rgba(110, 124, 243, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
`;

const RoadmapSynergyTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  text-align: center;
`;

const RoadmapSynergyItems = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
  
  ${MEDIA_QUERIES.MOBILE} {
    grid-template-columns: 1fr;
  }
`;

const RoadmapSynergyItem = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const RoadmapSynergyYear = styled.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${COLORS.RED};
`;

const RoadmapSynergyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RoadmapSynergyMetric = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${COLORS.BLACK};
`;

const RoadmapSynergyText = styled.div`
  font-size: 0.85rem;
  line-height: 1.5;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const RoadmapNote = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${COLORS.BLACK};
  opacity: 0.7;
  font-style: italic;
  margin-top: 1.5rem;
`;

// 경쟁 우위 분석 스타일
const CompetitiveAnalysisSection = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const CompetitiveAnalysisTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const CompetitiveAnalysisDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: ${COLORS.BLACK};
`;

const RadarChartContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  
  @media ${MEDIA_QUERIES.TABLET} {
    max-width: 600px;
    margin: 2rem auto;
  }
`;

const CompetitiveAdvantages = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CompetitiveAdvantage = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const CompetitiveAdvantageTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const CompetitiveAdvantageContent = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
`;

// 성장률 예측 스타일
const GrowthForecastSection = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const GrowthForecastTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const GrowthForecastDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: ${COLORS.BLACK};
`;

const LineChartContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  
  @media ${MEDIA_QUERIES.TABLET} {
    max-width: 800px;
    margin: 2rem auto;
  }
`;

const GrowthStrategies = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GrowthStrategy = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const GrowthStrategyTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const GrowthStrategyContent = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
`;