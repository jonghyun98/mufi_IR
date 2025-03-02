import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';
import { Link } from 'react-router-dom';

// 슬라이드 섹션 데이터
const SLIDES = [
  {
    id: 'intro',
    title: 'MUFI 사업 IR',
    subTitle: '투자자 및 파트너를 위한 요약 자료',
    color: COLORS.RED,
    bgImage: '/images/background-intro.jpg',
  },
  {
    id: 'market-analysis',
    title: '시장 분석',
    subTitle: '국내 포토부스 시장은 연 15% 성장, 2025년 7,800억 규모 전망',
    color: COLORS.BLUE,
    key: [
      '연간 15% 성장하는 포토부스 시장',
      'MZ세대 소비 중심의 경험 시장 확대',
      '포토부스 운영사 CAGR 11.5% 성장',
      '글로벌 시장 진출 가능성'
    ]
  },
  {
    id: 'business-areas',
    title: '사업 영역',
    subTitle: '포토부스 운영 및 AI 기반 운영 최적화 플랫폼',
    color: COLORS.RED,
    key: [
      '포토부스 설치 및 운영',
      'AI 기반 운영 최적화 시스템',
      '파트너십을 통한 유통망 확장',
      '콘텐츠 큐레이션 및 제작'
    ]
  },
  {
    id: 'business-model',
    title: '비즈니스 모델',
    subTitle: '수익 다각화를 통한 안정적 사업 구조',
    color: COLORS.GREEN,
    key: [
      '직접 운영 수익: 포토부스 이용료',
      '광고 수익: 디지털 광고 플랫폼',
      '라이센싱: AI 운영 시스템 제공',
      '데이터 수익: 소비자 트렌드 분석'
    ]
  },
  {
    id: 'ai-agent',
    title: 'AI 에이전트',
    subTitle: '운영 최적화 및 자동화 시스템',
    color: COLORS.RED,
    key: [
      '물류 비용 62% 절감 (월 26만원/대)',
      '업무 효율성 93%로 향상',
      '유통망 최적화로 설치 적합성 95% 달성',
      '투자 회수 기간 4.3개월'
    ]
  },
  {
    id: 'relationship',
    title: '사업 구조도',
    subTitle: '다양한 파트너십 기반의 사업 생태계',
    color: COLORS.BLUE,
    key: [
      '카페, 쇼핑몰 등 설치 파트너',
      '광고주 및 브랜드 협력',
      '기술 개발 파트너',
      'MBC 등 콘텐츠 파트너십'
    ]
  },
  {
    id: 'expansion',
    title: '확장 전략',
    subTitle: '지역 확장 및 신규 사업 영역 개척',
    color: COLORS.GREEN,
    key: [
      '주요 대학가 중심 초기 진출',
      '쇼핑몰, 관광지로 2차 확장',
      '글로벌 시장 진출: 동남아, 미국',
      '신기술 접목: AR 콘텐츠 및 메타버스 연동'
    ]
  },
  {
    id: 'financial',
    title: '재무 계획',
    subTitle: '안정적인 성장과 수익성 확보',
    color: COLORS.YELLOW,
    key: [
      '초기 투자: 5억원 (설비 및 시스템 개발)',
      '손익분기점: 운영 16개월 차',
      '5년차 매출 120억, 영업이익률 28%',
      '누적 현금흐름 흑자 전환: 3년차'
    ]
  },
  {
    id: 'investment',
    title: '투자 계획',
    subTitle: '단계별 자금 조달 및 활용 방안',
    color: COLORS.RED,
    key: [
      'Seed: 2억원 (2023 자체조달)',
      'Series A: 10억원 (2024 외부투자)',
      'Series B: 30억원 (2026 예정)',
      '주요 사용처: 기술개발 40%, 마케팅 30%, 인프라 30%'
    ]
  },
  {
    id: 'team',
    title: '팀 구성',
    subTitle: '다양한 배경과 전문성을 갖춘 창업팀',
    color: COLORS.BLUE,
    key: [
      '포토부스 운영 5년 경력 보유',
      'AI 및 데이터 분석 전문가',
      '미디어 콘텐츠 전문가',
      '전략 및 사업개발 전문가'
    ]
  },
  {
    id: 'contact',
    title: '문의하기',
    subTitle: '투자 및 협력 문의를 환영합니다',
    color: COLORS.RED,
    key: [
      '이메일: invest@mufi.co.kr',
      '전화: 02-123-4567',
      '홈페이지: www.mufi.co.kr',
      '주소: 서울시 강남구 테헤란로 123'
    ]
  }
];

export const IRPresentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 전환 중이면 무시
      if (isTransitioning) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        if (currentSlide < SLIDES.length - 1) {
          setIsTransitioning(true);
          setCurrentSlide(prev => prev + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        if (currentSlide > 0) {
          setIsTransitioning(true);
          setCurrentSlide(prev => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isTransitioning]);

  // 전환 효과 종료 후 상태 업데이트
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800); // 트랜지션 시간과 일치시킴

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // 휠 이벤트 처리
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // 전환 중이면 무시
      if (isTransitioning) return;
      
      // 수직 스크롤만 처리
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      
      e.preventDefault();
      
      if (e.deltaY > 0) {
        // 아래로 스크롤
        if (currentSlide < SLIDES.length - 1) {
          setIsTransitioning(true);
          setCurrentSlide(prev => prev + 1);
        }
      } else {
        // 위로 스크롤
        if (currentSlide > 0) {
          setIsTransitioning(true);
          setCurrentSlide(prev => prev - 1);
        }
      }
    };

    const wheelListener = (e: WheelEvent) => handleWheel(e);
    window.addEventListener('wheel', wheelListener, { passive: false });
    
    return () => window.removeEventListener('wheel', wheelListener);
  }, [currentSlide, isTransitioning]);

  // 특정 슬라이드로 이동하는 함수
  const goToSlide = (index: number) => {
    if (index >= 0 && index < SLIDES.length && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
    }
  };

  return (
    <PresentationContainer>
      <SlidesWrapper style={{ transform: `translateY(-${currentSlide * 100}%)` }}>
        {SLIDES.map((slide, index) => (
          <SlideSection 
            key={slide.id} 
            ref={el => slidesRef.current[index] = el}
            color={slide.color}
            bgImage={slide.bgImage}
          >
            {index === 0 ? (
              // 첫 번째 슬라이드는 인트로 화면
              <IntroSlide>
                <IntroLogo>MUFI</IntroLogo>
                <IntroTitle>{slide.title}</IntroTitle>
                <IntroSubtitle>{slide.subTitle}</IntroSubtitle>
                
                <ScrollIndicator>
                  <ScrollText>스크롤하여 시작하기</ScrollText>
                  <ScrollIcon>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 10l5 5 5-5z" fill="currentColor"/>
                    </svg>
                  </ScrollIcon>
                </ScrollIndicator>
              </IntroSlide>
            ) : (
              // 나머지 슬라이드는 컨텐츠 화면
              <ContentSlide>
                <SlideHeader>
                  <SlideNumber color={slide.color}>{index < 10 ? `0${index}` : index}</SlideNumber>
                  <SlideTitle color={slide.color}>{slide.title}</SlideTitle>
                  <SlideSubtitle>{slide.subTitle}</SlideSubtitle>
                </SlideHeader>
                
                <SlideContent>
                  <KeyPointsContainer>
                    {slide.key && slide.key.map((point, i) => (
                      <KeyPoint key={i} delay={i * 0.1}>
                        <KeyPointNumber color={slide.color}>{i + 1}</KeyPointNumber>
                        <KeyPointText>{point}</KeyPointText>
                      </KeyPoint>
                    ))}
                  </KeyPointsContainer>
                </SlideContent>
              </ContentSlide>
            )}
          </SlideSection>
        ))}
      </SlidesWrapper>
      
      <Navigation>
        <NavBackButton to="/ir">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor"/>
          </svg>
          IR 페이지로 돌아가기
        </NavBackButton>
        
        <SlideIndicators>
          {SLIDES.map((_, index) => (
            <SlideIndicator 
              key={index} 
              active={currentSlide === index}
              color={SLIDES[index].color}
              onClick={() => goToSlide(index)}
            />
          ))}
        </SlideIndicators>
        
        <SlideControls>
          <ControlButton 
            onClick={() => goToSlide(currentSlide - 1)}
            disabled={currentSlide === 0 || isTransitioning}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
            </svg>
          </ControlButton>
          
          <SlideCounter>
            <CurrentSlide>{currentSlide + 1}</CurrentSlide>
            <TotalSlides>/ {SLIDES.length}</TotalSlides>
          </SlideCounter>
          
          <ControlButton 
            onClick={() => goToSlide(currentSlide + 1)}
            disabled={currentSlide === SLIDES.length - 1 || isTransitioning}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
            </svg>
          </ControlButton>
        </SlideControls>
      </Navigation>
    </PresentationContainer>
  );
};

// Styled Components
const PresentationContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: ${COLORS.BLACK};
`;

const SlidesWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
`;

interface SlideProps {
  color: string;
  bgImage?: string;
}

const SlideSection = styled.div<SlideProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${props => props.bgImage ? `url(${props.bgImage})` : 'none'};
    background-size: cover;
    background-position: center;
    opacity: ${props => props.bgImage ? 0.7 : 0};
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%);
    z-index: 1;
    opacity: ${props => props.bgImage ? 1 : 0};
  }
`;

const IntroSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 2rem;
`;

const IntroLogo = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: ${COLORS.RED};
  margin-bottom: 1rem;
  letter-spacing: 0.5rem;
  
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 5rem;
  }
`;

const IntroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${COLORS.BLACK};
  margin-bottom: 1rem;
  text-align: center;
  
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 3.5rem;
  }
`;

const IntroSubtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  text-align: center;
  
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 1.5rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  color: ${COLORS.BLACK};
  opacity: 0.7;
  margin-bottom: 0.5rem;
`;

const ScrollIcon = styled.div`
  width: 24px;
  height: 24px;
  
  svg {
    width: 100%;
    height: 100%;
    color: ${COLORS.BLACK};
    opacity: 0.7;
  }
`;

const ContentSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SlideHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
`;

interface ColorProps {
  color: string;
}

const SlideNumber = styled.div<ColorProps>`
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.color};
  margin-bottom: 0.5rem;
  opacity: 0.8;
  
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 1.2rem;
  }
`;

const SlideTitle = styled.h2<ColorProps>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.color};
  margin-bottom: 1rem;
  
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 3rem;
  }
`;

const SlideSubtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 1.5rem;
  }
`;

const SlideContent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const KeyPointsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${MEDIA_QUERIES.DESKTOP} {
    width: 80%;
  }
`;

interface KeyPointProps {
  delay: number;
}

const KeyPoint = styled.div<KeyPointProps>`
  display: flex;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: ${props => props.delay}s;
  opacity: 0;
  transform: translateY(20px);
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const KeyPointNumber = styled.div<ColorProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${props => props.color};
  color: ${COLORS.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1rem;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const KeyPointText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${COLORS.BLACK};
  
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 1.1rem;
  }
`;

// Navigation Components
const Navigation = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: 10;
`;

const NavBackButton = styled(Link)`
  display: flex;
  align-items: center;
  color: ${COLORS.BLACK};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.7;
  transition: opacity 0.3s;
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
  
  &:hover {
    opacity: 1;
  }
`;

const SlideIndicators = styled.div`
  display: none;
  
  ${MEDIA_QUERIES.DESKTOP} {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

interface IndicatorProps {
  active: boolean;
  color: string;
}

const SlideIndicator = styled.div<IndicatorProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.active ? props.color : 'rgba(0, 0, 0, 0.2)'};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${props => props.active ? props.color : 'rgba(0, 0, 0, 0.4)'};
  }
`;

const SlideControls = styled.div`
  display: flex;
  align-items: center;
`;

const SlideCounter = styled.div`
  display: flex;
  align-items: baseline;
  margin: 0 1rem;
`;

const CurrentSlide = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${COLORS.BLACK};
`;

const TotalSlides = styled.span`
  font-size: 0.9rem;
  color: ${COLORS.BLACK};
  opacity: 0.6;
  margin-left: 0.2rem;
`;

interface ButtonProps {
  disabled: boolean;
}

const ControlButton = styled.button<ButtonProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.disabled ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.2)'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s;
  
  svg {
    width: 24px;
    height: 24px;
    color: ${props => props.disabled ? 'rgba(0, 0, 0, 0.3)' : COLORS.BLACK};
  }
  
  &:hover {
    background-color: ${props => props.disabled ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.3)'};
  }
  
  &:active {
    transform: ${props => props.disabled ? 'none' : 'scale(0.95)'};
  }
`; 