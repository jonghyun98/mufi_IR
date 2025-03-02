import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';
import { Link } from 'react-router-dom';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title, 
  Tooltip, 
  Legend,
  ChartOptions,
  ChartData,
  RadialLinearScale
} from 'chart.js';
import { Bar, Pie, Line, Radar } from 'react-chartjs-2';

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

// 슬라이드의 베이스 타입 정의
interface BaseSlide {
  id: string;
  title: string;
  subTitle: string;
  color: string;
  bgImage?: string;
  type: string;
  sectionNumber?: string;
  keyPoints?: string[];
}

// 차트 슬라이드 타입 정의
interface ChartSlideData extends BaseSlide {
  type: 'chart';
  chartType: 'bar' | 'pie' | 'line' | 'radar';
  chartData: any; // 타입 호환성 문제를 해결하기 위해 any 사용
  chartOptions: any; // 타입 호환성 문제를 해결하기 위해 any 사용
}

// 경쟁사 비교 슬라이드 타입 정의
interface CompetitorInfo {
  name: string;
  description: string;
  market_share: number;
  strengths: string[];
  weaknesses: string[];
}

interface ComparisonSlideData extends BaseSlide {
  type: 'comparison';
  competitors: CompetitorInfo[];
}

// 기존 슬라이드 타입 정의
interface LegacySlideData extends BaseSlide {
  key?: string[];
}

// 인트로 슬라이드 타입 정의
interface IntroSlideData extends BaseSlide {
  type: 'intro';
}

// 섹션 인트로 슬라이드 타입 정의
interface SectionIntroSlideData extends BaseSlide {
  type: 'section-intro';
}

// 슬라이드 유니온 타입
type SlideData = IntroSlideData | SectionIntroSlideData | ChartSlideData | ComparisonSlideData | LegacySlideData;

// 슬라이드 섹션 데이터
const SLIDES: SlideData[] = [
  {
    id: 'intro',
    title: 'MUFI 사업 IR',
    subTitle: '투자자 및 파트너를 위한 요약 자료',
    color: COLORS.RED,
    bgImage: '/images/background-intro.jpg',
    type: 'intro'
  },
  // 시장 분석 메인 슬라이드
  {
    id: 'market-analysis-main',
    title: '시장 분석',
    subTitle: '국내 포토부스 시장은 연 15% 성장, 2025년 7,800억 규모 전망',
    color: COLORS.BLUE,
    sectionNumber: '1',
    type: 'section-intro'
  },
  // 시장 분석 서브 슬라이드 1-1: 시장 규모 및 성장성
  {
    id: 'market-analysis-size',
    title: '시장 규모 및 성장성',
    subTitle: '포토부스 시장 규모 연간 15% 성장 중',
    color: COLORS.BLUE,
    sectionNumber: '1-1',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['2021', '2022', '2023', '2024(예상)', '2025(예상)'],
      datasets: [
        {
          label: '시장 규모(억원)',
          data: [5200, 5800, 6700, 7200, 7800],
          backgroundColor: `${COLORS.BLUE}90`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false
    },
    keyPoints: [
      '2023년 국내 포토부스 시장 규모 6,700억원 달성',
      '최근 3년간 연평균 성장률(CAGR) 15.2%',
      '2025년 시장 규모 7,800억원 전망',
      'MZ세대 중심 사진 문화 확산이 성장 견인'
    ]
  },
  // 시장 분석 서브 슬라이드 1-2: 주요 고객층 분석
  {
    id: 'market-analysis-customers',
    title: '주요 고객층 분석',
    subTitle: 'MZ세대가 전체 이용객의 78% 차지',
    color: COLORS.BLUE,
    sectionNumber: '1-2',
    type: 'chart',
    chartType: 'pie',
    chartData: {
      labels: ['10대', '20대', '30대', '40대 이상'],
      datasets: [
        {
          data: [32, 41, 18, 9],
          backgroundColor: [
            `${COLORS.RED}90`,
            `${COLORS.BLUE}90`,
            `${COLORS.GREEN}90`,
            `${COLORS.YELLOW}90`
          ]
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false
    },
    keyPoints: [
      '10-20대가 전체 시장의 73% 차지',
      '인스타그램 등 SNS 활동과 밀접한 연관성',
      '여성 고객 비중 65%, 남성 고객 비중 지속 증가 중',
      '커플/친구 단위 이용 패턴이 주를 이룸(87%)'
    ]
  },
  // 시장 분석 서브 슬라이드 1-3: 주요 경쟁사 분석
  {
    id: 'market-analysis-competitors',
    title: '주요 경쟁사 분석',
    subTitle: '상위 5개 업체가 시장의 62% 점유',
    color: COLORS.BLUE,
    sectionNumber: '1-3',
    type: 'comparison',
    competitors: [
      {
        name: 'A사',
        description: '국내 최대 포토부스 운영 업체',
        market_share: 28,
        strengths: ['넓은 매장 네트워크', '높은 브랜드 인지도'],
        weaknesses: ['운영 비효율성', '높은 유지보수 비용']
      },
      {
        name: 'B사',
        description: '프리미엄 컨셉 포토부스 전문',
        market_share: 15,
        strengths: ['고급화 전략', '차별화된 컨텐츠'],
        weaknesses: ['제한된 위치', '높은 이용 가격']
      },
      {
        name: 'C사',
        description: '테마파크 중심 포토부스 운영',
        market_share: 12,
        strengths: ['안정적 수익 구조', '다양한 테마 제공'],
        weaknesses: ['계절적 수요 변동', '낮은 기술 혁신성']
      },
      {
        name: '기타 업체',
        description: '중소형 포토부스 운영 업체',
        market_share: 45,
        strengths: ['지역 특화 서비스', '유연한 운영 방식'],
        weaknesses: ['낮은 수익성', '제한된 마케팅 역량']
      }
    ],
    keyPoints: [
      '시장 상위 5개 업체의 시장 점유율 62%',
      '대형 업체 중심의 규모 경쟁과 기술 혁신 진행 중',
      'AI 기반 서비스로 차별화 시도하는 신규 업체 증가',
      'MUFI의 AI 기반 운영 최적화는 핵심 경쟁 우위 요소'
    ]
  },
  // 사업 영역 메인 슬라이드
  {
    id: 'business-areas-main',
    title: '사업 영역',
    subTitle: '포토부스 운영과 AI 기반 최적화 솔루션',
    color: COLORS.RED,
    sectionNumber: '2',
    type: 'section-intro'
  },
  // 사업 영역 개요 도식화 슬라이드 (NEW)
  {
    id: 'business-areas-overview',
    title: '사업 영역 통합 비전',
    subTitle: '데이터와 AI로 포토부스 산업을 재정의하다',
    color: COLORS.RED,
    sectionNumber: '2-0',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['데이터 수집', '분석 및 최적화', '가치 창출', '신규 사업 확장'],
      datasets: [
        {
          label: '현재 발전 단계 (%)',
          data: [85, 75, 65, 30],
          backgroundColor: `${COLORS.RED}90`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'MUFI 사업 영역 발전 단계'
        }
      }
    },
    keyPoints: [
      '포토부스는 단순 서비스가 아닌 데이터 수집의 전초기지',
      'AI 기술로 운영의 모든 단계를 최적화하는 기술 기업',
      '수집-분석-최적화-가치창출의 선순환 구조 확립',
      '축적된 데이터와 AI 역량으로 신규 사업 확장성 확보'
    ]
  },
  // 사업 영역 서브 슬라이드 2-1: 포토부스 설치 및 운영
  {
    id: 'business-areas-photobooth',
    title: '포토부스 설치 및 운영',
    subTitle: '핵심 수익원인 포토부스 직접 운영',
    color: COLORS.RED,
    sectionNumber: '2-1',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['대학가', '쇼핑몰', '카페', '관광지', '기타'],
      datasets: [
        {
          label: '설치 비중(%)',
          data: [35, 25, 20, 15, 5],
          backgroundColor: `${COLORS.RED}90`
        },
        {
          label: '매출 기여도(%)',
          data: [42, 28, 18, 10, 2],
          backgroundColor: `${COLORS.BLUE}90`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: '설치 위치별 포토부스 분포 및 매출 기여도'
        }
      }
    },
    keyPoints: [
      '데이터 기반 위치 선정으로 대학가 매출 기여도 42% 달성',
      '프리미엄 모델: 쇼핑몰, 고급 카페 위주로 고객당 매출 35% 향상',
      '계절별 전략: 관광지 성수기 집중 배치로 자산 활용률 95% 달성',
      '위치 데이터 학습: 신규 포토부스 위치 예측 정확도 92%'
    ]
  },
  // 사업모델 통합 프로세스 도식화 슬라이드 (NEW)
  {
    id: 'business-areas-process',
    title: '통합 비즈니스 프로세스',
    subTitle: '데이터 기반 선순환 구조의 포토부스 생태계',
    color: COLORS.RED,
    sectionNumber: '2-1-1',
    type: 'chart',
    chartType: 'line',
    chartData: {
      labels: ['데이터 수집', '인사이트 도출', '운영 최적화', '고객 경험 향상', '추가 데이터 수집'],
      datasets: [
        {
          label: '비즈니스 가치 창출',
          data: [30, 45, 65, 85, 100],
          borderColor: `${COLORS.RED}`,
          backgroundColor: `${COLORS.RED}30`,
          tension: 0.4,
          fill: true
        },
        {
          label: '운영 효율성',
          data: [20, 40, 70, 85, 95],
          borderColor: `${COLORS.BLUE}`,
          backgroundColor: `${COLORS.BLUE}30`,
          tension: 0.4,
          fill: true
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '달성률 (%)'
          }
        }
      }
    },
    keyPoints: [
      '포토부스 → 사용자 데이터 수집 → AI 분석 → 서비스 개선의 선순환',
      '매장별 실시간 데이터 분석으로 운영 최적화 달성률 95%',
      '고객 경험 향상으로 재방문율 32% 증가, 객단가 15% 상승',
      '지속적 데이터 축적으로 AI 모델 정확도 분기별 5% 향상'
    ]
  },
  // 사업 영역 서브 슬라이드 2-2: AI 최적화 플랫폼
  {
    id: 'business-areas-ai',
    title: 'AI 최적화 플랫폼',
    subTitle: '운영 효율화 및 유지보수 비용 절감',
    color: COLORS.RED,
    sectionNumber: '2-2',
    type: 'chart',
    chartType: 'line',
    chartData: {
      labels: ['설치', '유지보수', '물류비용', '인건비', '자재비'],
      datasets: [
        {
          label: '일반 운영 비용',
          data: [100, 75, 68, 85, 60],
          borderColor: `${COLORS.BLUE}`,
          backgroundColor: `${COLORS.BLUE}30`,
          tension: 0.1
        },
        {
          label: 'AI 최적화 후 비용',
          data: [100, 30, 26, 40, 35],
          borderColor: `${COLORS.RED}`,
          backgroundColor: `${COLORS.RED}30`,
          tension: 0.1
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '비용 지수 (일반 설치비용=100 기준)'
          }
        }
      }
    },
    keyPoints: [
      'AI 기반 예측 정비로 유지보수 비용 60% 절감 (연간 6천만원)',
      '최적화된 자재 공급망 관리로 물류비용 62% 감소 (월 2.7천만원)',
      '인력 배치 최적화로 인건비 55% 절감 효과 (연간 1.2억원)',
      '포토부스당 연간 운영비 57% 절감으로 업계 최고 수익성 달성'
    ]
  },
  // AI 기술의 경제적 가치 도식화 슬라이드 (NEW)
  {
    id: 'business-areas-ai-value',
    title: 'AI 기술의 경제적 가치',
    subTitle: '투자 대비 수익으로 증명하는 기술력',
    color: COLORS.RED,
    sectionNumber: '2-2-1',
    type: 'chart',
    chartType: 'pie',
    chartData: {
      labels: ['유지보수 비용 절감', '운영 효율화', '수익성 향상', '신규 사업 기회'],
      datasets: [
        {
          data: [35, 25, 30, 10],
          backgroundColor: [
            `${COLORS.RED}90`,
            `${COLORS.BLUE}90`,
            `${COLORS.GREEN}90`,
            `${COLORS.YELLOW}90`
          ]
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'AI 기술 투자 수익 분포(%)'
        }
      }
    },
    keyPoints: [
      'AI 시스템 투자 대비 수익률(ROI) 486% 달성',
      '투자 회수 기간: 평균 4.3개월',
      '운영 효율화로 인한 연간 2.5억원 순이익 증가',
      '예측 정비 시스템으로 장비 수명 38% 연장 효과'
    ]
  },
  // 사업 영역 서브 슬라이드 2-3: 콘텐츠 큐레이션
  {
    id: 'business-areas-content',
    title: '콘텐츠 큐레이션',
    subTitle: '사용자 경험을 극대화하는 차별화된 콘텐츠',
    color: COLORS.RED,
    sectionNumber: '2-3',
    type: 'chart',
    chartType: 'pie',
    chartData: {
      labels: ['스탠다드', '프리미엄', '시즌 테마', '브랜드 콜라보', '커스텀'],
      datasets: [
        {
          data: [30, 25, 20, 15, 10],
          backgroundColor: [
            `${COLORS.BLUE}90`,
            `${COLORS.RED}90`,
            `${COLORS.GREEN}90`,
            `${COLORS.YELLOW}90`,
            `${COLORS.BLUE}60`
          ]
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: '콘텐츠 카테고리별 사용 비중'
        }
      }
    },
    keyPoints: [
      'AI 기반 콘텐츠 개인화로 고객 만족도 92% 달성',
      '시즌별 테마 콘텐츠로 재방문율 24% 향상 (업계 평균 9%)',
      '브랜드 협업 콘텐츠로 추가 매출 2.8억원/년 창출',
      '위치별 맞춤 콘텐츠로 이용률 35% 증가'
    ]
  },
  // 사업 영역 확장 로드맵 슬라이드 (NEW)
  {
    id: 'business-areas-expansion',
    title: '사업 영역 확장 로드맵',
    subTitle: '데이터와 AI 기술 기반의 미래 성장 전략',
    color: COLORS.RED,
    sectionNumber: '2-4',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['2024', '2025', '2026', '2027', '2028'],
      datasets: [
        {
          label: '포토부스 운영',
          data: [70, 60, 50, 45, 40],
          backgroundColor: `${COLORS.RED}80`
        },
        {
          label: 'AI 라이센싱',
          data: [20, 25, 25, 25, 25],
          backgroundColor: `${COLORS.BLUE}80`
        },
        {
          label: '데이터 인사이트',
          data: [5, 8, 10, 10, 10],
          backgroundColor: `${COLORS.GREEN}80`
        },
        {
          label: 'AR/VR 콘텐츠',
          data: [5, 7, 10, 12, 15],
          backgroundColor: `${COLORS.YELLOW}80`
        },
        {
          label: '신규 사업',
          data: [0, 0, 5, 8, 10],
          backgroundColor: `${COLORS.BLUE}60`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: '매출 비중 (%)'
          }
        }
      }
    },
    keyPoints: [
      '포토부스 중심에서 데이터 기술 기업으로 점진적 전환',
      'AI 운영 시스템 라이센싱으로 안정적 수익원 확보 (B2B)',
      'MZ 트렌드 데이터 인사이트 서비스 개발 (2024년 출시)',
      'AR/VR 기술 통합으로 메타버스 연계 차세대 콘텐츠 준비'
    ]
  },
  // 비즈니스 모델 메인 슬라이드
  {
    id: 'business-model-main',
    title: '비즈니스 모델',
    subTitle: '수익 다각화를 통한 안정적 사업 구조',
    color: COLORS.GREEN,
    sectionNumber: '3',
    type: 'section-intro',
    bgImage: '/images/business-model-bg.jpg'
  },
  // 비즈니스 모델 개요 슬라이드 (NEW)
  {
    id: 'business-model-overview',
    title: '비즈니스 모델 개요',
    subTitle: '포토부스 운영을 넘어선 다층적 수익 구조',
    color: COLORS.GREEN,
    sectionNumber: '3-0',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['기존 포토부스 업계', 'MUFI'],
      datasets: [
        {
          label: '포토부스 이용료',
          data: [90, 55],
          backgroundColor: `${COLORS.BLUE}90`
        },
        {
          label: 'AI 라이센싱',
          data: [0, 25],
          backgroundColor: `${COLORS.GREEN}90`
        },
        {
          label: '광고 플랫폼',
          data: [10, 15],
          backgroundColor: `${COLORS.RED}90`
        },
        {
          label: '데이터 비즈니스',
          data: [0, 5],
          backgroundColor: `${COLORS.YELLOW}90`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: '매출 비중 (%)'
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: '수익원 다각화 비교'
        }
      }
    },
    keyPoints: [
      '기존 업계 대비 45%의 추가 수익원 확보로 안정적 수익 구조 구축',
      'AI 기술력 기반의 SaaS 비즈니스 모델로 높은 마진율 실현',
      '데이터 비즈니스는 초기 단계이나 높은 성장 잠재력 보유',
      '다양한 수익원으로 인한 시장 변동성 위험 분산 효과'
    ]
  },
  // 비즈니스 모델 서브 슬라이드 3-1: 수익 다각화 구조 (개선)
  {
    id: 'business-model-revenue',
    title: '수익 다각화 구조',
    subTitle: '4가지 수익 모델로 안정적인 비즈니스 운영',
    color: COLORS.GREEN,
    sectionNumber: '3-1',
    type: 'chart',
    chartType: 'pie',
    chartData: {
      labels: ['포토부스 이용료', 'AI 라이센싱', '광고 수익', '데이터 분석 서비스'],
      datasets: [
        {
          data: [55, 25, 15, 5],
          backgroundColor: [
            `${COLORS.GREEN}90`,
            `${COLORS.BLUE}90`,
            `${COLORS.RED}90`,
            `${COLORS.YELLOW}90`
          ]
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: '수익원 구성 비율 (%)'
        }
      }
    },
    keyPoints: [
      '포토부스 이용료: 1회당 평균 5,000원, 기기당 월 350만원 매출',
      'AI 라이센싱: 월 구독형(기본 50만원/기기), 고마진(85%) 사업',
      '광고 플랫폼: 브랜드 콜라보 및 디지털 광고 (월 2.5억원 매출)',
      '데이터 분석: MZ세대 트렌드 리포트 판매 (분기별 7,500만원 수익)'
    ]
  },
  // 비즈니스 모델 플로우 다이어그램 슬라이드 (NEW)
  {
    id: 'business-model-flow',
    title: '비즈니스 프로세스',
    subTitle: '데이터 기반 선순환 비즈니스 구조',
    color: COLORS.GREEN,
    sectionNumber: '3-1-1',
    type: 'chart',
    chartType: 'line',
    chartData: {
      labels: ['고객 유입', '데이터 수집', '서비스 최적화', '교차판매', '파트너십 확장'],
      datasets: [
        {
          label: '가치 창출 단계',
          data: [20, 35, 55, 75, 100],
          borderColor: `${COLORS.GREEN}`,
          backgroundColor: `${COLORS.GREEN}30`,
          tension: 0.4,
          fill: true
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '비즈니스 가치 (%)'
          },
          max: 100
        }
      }
    },
    keyPoints: [
      '포토부스 서비스가 고객 접점이자 데이터 수집 채널로 기능',
      '수집된 데이터를 AI로 분석하여 서비스와 운영 지속 최적화',
      '기존 고객 대상 AI 및 데이터 서비스 교차판매로 수익 극대화',
      '파트너십 확장으로 네트워크 효과 창출 (현재 42개 브랜드 협업)'
    ]
  },
  // 비즈니스 모델 서브 슬라이드 3-2: 수익성 예측 (유지)
  {
    id: 'business-model-profitability',
    title: '수익성 예측',
    subTitle: '시간 경과에 따른 매출 및 이익률 성장',
    color: COLORS.GREEN,
    sectionNumber: '3-2',
    type: 'chart',
    chartType: 'line',
    chartData: {
      labels: ['1년차', '2년차', '3년차', '4년차', '5년차'],
      datasets: [
        {
          label: '매출(억원)',
          data: [15, 35, 65, 90, 120],
          borderColor: `${COLORS.BLUE}`,
          backgroundColor: `${COLORS.BLUE}30`,
          yAxisID: 'y',
          tension: 0.1
        },
        {
          label: '영업이익률(%)',
          data: [5, 12, 18, 23, 28],
          borderColor: `${COLORS.GREEN}`,
          backgroundColor: `${COLORS.GREEN}30`,
          yAxisID: 'y1',
          tension: 0.1
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: '매출(억원)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: '영업이익률(%)'
          },
          grid: {
            drawOnChartArea: false
          }
        }
      }
    },
    keyPoints: [
      '3년차 영업이익률 18%는 업계 평균(8%)의 2.25배 수준',
      '5년차 목표 매출 120억원, 영업이익 33.6억원 (이익률 28%)',
      'AI 라이센싱 및 데이터 사업의 고마진 특성으로 점진적 수익성 개선',
      '초기 투자 회수 시점: 운영 16개월 차 (업계 평균 24개월 대비 빠른 회수)'
    ]
  },
  // 비즈니스 모델 서브 슬라이드 3-3: 경쟁 우위 요소 (유지)
  {
    id: 'business-model-advantage',
    title: '경쟁 우위 요소',
    subTitle: 'AI 기술 기반 차별화 전략',
    color: COLORS.GREEN,
    sectionNumber: '3-3',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['운영 효율성', '콘텐츠 다양성', '위치 최적화', '고객 경험', '비용 절감'],
      datasets: [
        {
          label: '기존 업체 평균',
          data: [50, 65, 60, 70, 55],
          backgroundColor: `${COLORS.BLUE}70`
        },
        {
          label: 'MUFI',
          data: [90, 85, 95, 85, 85],
          backgroundColor: `${COLORS.GREEN}70`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: '역량 점수 (100점 만점)'
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: '경쟁사 대비 우위 요소'
        }
      }
    },
    keyPoints: [
      'AI 기반 위치 최적화로 동일 입지 대비 매출 58% 향상',
      '자동화된 운영 시스템으로 포토부스당 관리 인력 82% 절감',
      '데이터 기반 의사결정으로 시장 변화 대응 속도 5.2배 향상',
      '특허 출원 중인 AI 알고리즘 5건으로 기술적 진입장벽 구축'
    ]
  },
  // 비즈니스 모델 검증 슬라이드 (NEW)
  {
    id: 'business-model-validation',
    title: '비즈니스 모델 검증',
    subTitle: '실제 운영 데이터로 입증된 사업성',
    color: COLORS.GREEN,
    sectionNumber: '3-4',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['고객 재방문율', '운영 비용', '포토부스 회전율', '고객 만족도'],
      datasets: [
        {
          label: '도입 전',
          data: [15, 100, 8.5, 72],
          backgroundColor: `${COLORS.BLUE}80`
        },
        {
          label: '도입 후',
          data: [32, 43, 12.8, 94],
          backgroundColor: `${COLORS.GREEN}80`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '상대적 지표 (%)'
          }
        }
      }
    },
    keyPoints: [
      '실제 파일럿 매장(12개소) 운영 결과 재방문율 113% 향상',
      '운영 비용 57% 절감으로 순이익 2.3배 증가 확인',
      '회전율 개선(시간당 3.6명→5.4명)으로 단위 면적당 매출 50% 증가',
      '고객 만족도 조사 결과 94점 획득 (업계 평균 72점 대비 31% 높음)'
    ]
  },
  // AI 에이전트 메인 슬라이드
  {
    id: 'ai-agent-main',
    title: 'AI 에이전트',
    subTitle: '포토부스 운영 최적화를 위한 인공지능 솔루션',
    color: COLORS.RED,
    sectionNumber: '4',
    type: 'section-intro',
    bgImage: '/images/ai-agent-bg.jpg'
  },
  // AI 에이전트 개요 슬라이드 (NEW)
  {
    id: 'ai-agent-overview',
    title: 'AI 에이전트 개요',
    subTitle: '자율 운영의 미래를 여는 인공지능 시스템',
    color: COLORS.RED,
    sectionNumber: '4-0',
    type: 'chart',
    chartType: 'pie',
    chartData: {
      labels: ['수요 예측 모듈', '위치 최적화 모듈', '물류 자동화 모듈', '예측 정비 모듈', '인력 배치 모듈'],
      datasets: [
        {
          data: [25, 30, 15, 20, 10],
          backgroundColor: [
            `${COLORS.BLUE}90`,
            `${COLORS.RED}90`,
            `${COLORS.GREEN}90`,
            `${COLORS.YELLOW}90`,
            `${COLORS.BLUE}60`
          ]
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'AI 에이전트 모듈별 리소스 배분 (%)'
        }
      }
    },
    keyPoints: [
      'MUFI의 핵심 기술인 AI 에이전트는 5개 핵심 모듈로 구성',
      '위치 최적화가 가장 큰 비중(30%)으로 투입 리소스 대비 ROI 최고',
      '모든 모듈이 통합된 중앙 관제 시스템으로 운영',
      '자체 개발 알고리즘으로 특허 5건 출원 (2건 등록 완료)'
    ]
  },
  // AI 아키텍처 슬라이드 (NEW)
  {
    id: 'ai-agent-architecture',
    title: 'AI 아키텍처',
    subTitle: '확장 가능한 모듈형 인공지능 구조',
    color: COLORS.RED,
    sectionNumber: '4-0-1',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['데이터 수집 계층', '분석 계층', '의사결정 계층', '실행 계층', '피드백 계층'],
      datasets: [
        {
          label: '개발 진행률(%)',
          data: [95, 90, 85, 80, 75],
          backgroundColor: [
            `${COLORS.BLUE}90`,
            `${COLORS.GREEN}90`,
            `${COLORS.RED}90`,
            `${COLORS.YELLOW}90`,
            `${COLORS.BLUE}60`
          ]
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: '개발 진행률 (%)'
          }
        }
      }
    },
    keyPoints: [
      '5계층 아키텍처 구조: 수집→분석→의사결정→실행→피드백',
      '분산 처리 시스템으로 3,000개 포토부스까지 동시 제어 가능',
      'Azure ML과 자체 개발 알고리즘의 하이브리드 구조 채택',
      '핵심 의사결정 계층은 끊임없는 학습으로 정확도 자동 향상'
    ]
  },
  // AI 에이전트 서브 슬라이드 4-1: 핵심 기술 구성
  {
    id: 'ai-agent-technology',
    title: 'AI 에이전트 핵심 기술',
    subTitle: '운영 전 영역을 최적화하는 인공지능 시스템',
    color: COLORS.RED,
    sectionNumber: '4-1',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['수요 예측', '위치 최적화', '물류 자동화', '예측 정비', '인력 배치'],
      datasets: [
        {
          label: '정확도 (%)',
          data: [92, 95, 89, 87, 93],
          backgroundColor: `${COLORS.RED}80`,
          borderWidth: 1,
          borderColor: `${COLORS.RED}`
        },
        {
          label: '업계 평균 (%)',
          data: [65, 52, 48, 42, 58],
          backgroundColor: `${COLORS.BLUE}60`,
          borderWidth: 1,
          borderColor: `${COLORS.BLUE}`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: '알고리즘 정확도 (%)'
          }
        }
      }
    },
    keyPoints: [
      '위치 최적화 알고리즘: 유동인구, 경쟁업체, 소비 패턴 3중 분석',
      '수요 예측 엔진: 날씨, 이벤트, 시즌성 등 27개 변수 실시간 처리',
      '인력 배치 최적화: 8,500건의 과거 데이터로 학습된 예측 모델 적용',
      '예측 정비: 장비 이상을 평균 3.2일 전에 감지하는 예방 정비 시스템'
    ]
  },
  // AI 기술 비교 슬라이드 (NEW)
  {
    id: 'ai-agent-comparison',
    title: 'AI 기술 경쟁 우위',
    subTitle: '차별화된 AI 기술력으로 시장 우위 확보',
    color: COLORS.RED,
    sectionNumber: '4-1-1',
    type: 'chart',
    chartType: 'radar',
    chartData: {
      labels: ['정확도', '확장성', '학습 속도', '운영 비용', '장애 대응', '데이터 활용도'],
      datasets: [
        {
          label: 'MUFI AI',
          data: [95, 92, 88, 96, 90, 93],
          backgroundColor: `${COLORS.RED}30`,
          borderColor: `${COLORS.RED}`,
          borderWidth: 2,
          pointBackgroundColor: `${COLORS.RED}`
        },
        {
          label: '기존 최고 경쟁사',
          data: [75, 65, 60, 70, 68, 62],
          backgroundColor: `${COLORS.BLUE}20`,
          borderColor: `${COLORS.BLUE}`,
          borderWidth: 2,
          pointBackgroundColor: `${COLORS.BLUE}`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    },
    keyPoints: [
      '기존 최고 경쟁사 대비 정확도 26% 향상, 학습 속도 46% 빠름',
      '운영 비용 효율화 지표 96점으로 업계 1위 (다음 업체 70점)',
      '확장성 92점으로 3,000개 이상 포토부스 동시 관리 가능',
      '이상 발생 시 자가 진단 및 복구 시스템으로 장애 대응 시간 90% 단축'
    ]
  },
  // AI 에이전트 서브 슬라이드 4-2: 효과 분석
  {
    id: 'ai-agent-impact',
    title: 'AI 도입 효과 분석',
    subTitle: '운영 비용 절감 및 고객 만족도 향상',
    color: COLORS.RED,
    sectionNumber: '4-2',
    type: 'chart',
    chartType: 'line',
    chartData: {
      labels: ['도입 전', '1개월 후', '3개월 후', '6개월 후', '12개월 후'],
      datasets: [
        {
          label: '운영 비용 (만원/대)',
          data: [175, 120, 95, 85, 75],
          borderColor: `${COLORS.BLUE}`,
          backgroundColor: `${COLORS.BLUE}20`,
          yAxisID: 'y',
          tension: 0.1
        },
        {
          label: '고객 만족도 (%)',
          data: [67, 75, 82, 88, 94],
          borderColor: `${COLORS.GREEN}`,
          backgroundColor: `${COLORS.GREEN}20`,
          yAxisID: 'y1',
          tension: 0.1
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: '월간 운영 비용 (만원/대)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: '고객 만족도 (%)'
          },
          grid: {
            drawOnChartArea: false
          }
        }
      }
    },
    keyPoints: [
      '월간 운영 비용 57% 감소 (175만원 → 75만원, 연간 1,200만원 절감)',
      '고객 만족도 27%p 향상 (주요인: 대기시간 감소, 콘텐츠 개인화)',
      '장애 대응 시간 87% 단축 (36.8분 → 4.2분, 가용성 99.8% 달성)',
      '1년 누적 ROI 486%, 투자 대비 수익 비율 업계 최고 수준'
    ]
  },
  // 실시간 대시보드 슬라이드 (NEW)
  {
    id: 'ai-agent-dashboard',
    title: '실시간 AI 대시보드',
    subTitle: '데이터 기반 의사결정을 위한 관제 시스템',
    color: COLORS.RED,
    sectionNumber: '4-2-1',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['이상 감지', '자원 최적화', '수요 예측', '성과 지표', '유지보수 계획'],
      datasets: [
        {
          label: '실시간 정보 정확도(%)',
          data: [98, 94, 92, 96, 91],
          backgroundColor: `${COLORS.RED}70`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: '정보 정확도 (%)'
          }
        }
      }
    },
    keyPoints: [
      '웹 기반 실시간 모니터링으로 언제 어디서나 현황 파악 가능',
      '대시보드를 통한 이상 징후 98% 사전 감지로 장애 예방',
      '운영자 1인당 관리 가능 기기 수 8대→42대로 확장',
      '주간/월간/분기 보고서 자동 생성으로 의사결정 지원'
    ]
  },
  // AI 에이전트 서브 슬라이드 4-3: 미래 로드맵
  {
    id: 'ai-agent-roadmap',
    title: 'AI 에이전트 로드맵',
    subTitle: '자율 개선 시스템으로 진화',
    color: COLORS.RED,
    sectionNumber: '4-3',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['2024', '2025', '2026', '2027'],
      datasets: [
        {
          label: '자율 개선 수준',
          data: [2, 3, 4, 4.5],
          backgroundColor: [
            `${COLORS.BLUE}80`,
            `${COLORS.GREEN}80`,
            `${COLORS.RED}80`,
            `${COLORS.YELLOW}80`
          ]
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 5,
          title: {
            display: true,
            text: '자율 개선 수준 (5점 만점)'
          }
        }
      }
    },
    keyPoints: [
      '현재(2024): 예측형 최적화 (데이터 기반 비용/효율 최적화, 95% 완료)',
      '2025: 지능형 조정 (환경 변화에 자율 대응, 개발 70% 진행 중)',
      '2026: 제한적 자기진화 (알고리즘 스스로 개선, 연구 단계)',
      '2027: 완전 자율 운영 (인간 감독 하 자율 의사결정, 개념 설계 완료)'
    ]
  },
  // 확장 전략 메인 슬라이드
  {
    id: 'expansion-main',
    title: '확장 전략',
    subTitle: '지역 및 사업 영역 확장을 통한 성장 계획',
    color: COLORS.GREEN,
    sectionNumber: '5',
    type: 'section-intro',
    bgImage: '/images/expansion-bg.jpg'
  },
  // 확장 전략 개요 슬라이드 (NEW)
  {
    id: 'expansion-overview',
    title: '확장 전략 핵심',
    subTitle: '3단계 확장 전략으로 지속 가능한 성장 달성',
    color: COLORS.GREEN,
    sectionNumber: '5-0',
    type: 'chart',
    chartType: 'pie',
    chartData: {
      labels: ['시장 침투', '사업 다각화', '글로벌 확장'],
      datasets: [
        {
          data: [50, 30, 20],
          backgroundColor: [
            `${COLORS.GREEN}90`,
            `${COLORS.BLUE}90`,
            `${COLORS.RED}90`
          ]
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: '확장 전략 리소스 배분 (%)'
        }
      }
    },
    keyPoints: [
      '현재 주력: 국내 대학가 및 상권 중심 시장 침투 (1-2년)',
      '병행 추진: AI 라이센싱 등 사업 다각화로 수익원 확보 (2-3년)',
      '중장기 목표: 동남아 및 북미 핵심 시장 글로벌 진출 (3-5년)',
      '각 단계별 마일스톤 설정으로 체계적 확장 진행'
    ]
  },
  // 확장 전략 서브 슬라이드 5-1: 지역 확장 계획
  {
    id: 'expansion-regions',
    title: '지역 확장 계획',
    subTitle: '대학가에서 쇼핑몰, 관광지로 확장',
    color: COLORS.GREEN,
    sectionNumber: '5-1',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['2024', '2025', '2026', '2027', '2028'],
      datasets: [
        {
          label: '대학가',
          data: [25, 50, 75, 100, 120],
          backgroundColor: `${COLORS.BLUE}80`
        },
        {
          label: '쇼핑몰',
          data: [5, 15, 35, 60, 90],
          backgroundColor: `${COLORS.RED}80`
        },
        {
          label: '관광지',
          data: [0, 10, 25, 45, 70],
          backgroundColor: `${COLORS.GREEN}80`
        },
        {
          label: '기타',
          data: [2, 8, 20, 35, 50],
          backgroundColor: `${COLORS.YELLOW}80`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: '설치 포토부스 수'
          }
        }
      }
    },
    keyPoints: [
      '대학가(20대 인구 밀집): 1차 목표로 서울/수도권 10개 대학 32대 설치',
      '쇼핑몰(유동인구 활용): 핵심 상권 15개 지점 내 분기별 3-5대 추가',
      '관광지(계절성 대응): 제주, 부산 등 핵심 관광지 30대 계절별 운영',
      '5년간 총 330대 포토부스로 시장점유율 15% 달성 목표'
    ]
  },
  // 추가 - 시장 점유율 전략 슬라이드
  {
    id: 'expansion-market-share',
    title: '시장 점유율 전략',
    subTitle: '전략적 포지셔닝을 통한 시장 지배력 확보',
    color: COLORS.GREEN,
    sectionNumber: '5-1-1',
    type: 'chart',
    chartType: 'line',
    chartData: {
      labels: ['2024', '2025', '2026', '2027', '2028'],
      datasets: [
        {
          label: 'MUFI 시장점유율(%)',
          data: [2, 5, 8, 12, 15],
          borderColor: `${COLORS.GREEN}`,
          backgroundColor: `${COLORS.GREEN}30`,
          tension: 0.4,
          yAxisID: 'y'
        },
        {
          label: '누적 포토부스 대수',
          data: [32, 83, 155, 240, 330],
          borderColor: `${COLORS.BLUE}`,
          backgroundColor: `${COLORS.BLUE}30`,
          tension: 0.4,
          yAxisID: 'y1'
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: '시장 점유율 (%)'
          },
          max: 20
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: '누적 포토부스 대수'
          },
          grid: {
            drawOnChartArea: false
          }
        }
      }
    },
    keyPoints: [
      '목표 시장 점유율: 5년 내 15% 달성 (업계 2위 입지 확보)',
      '초기 1-2년은 핵심 타깃 집중 전략 → 3년차부터 광역 확장 전략',
      'AI 최적화로 경쟁사 대비 운영 효율성 우위 확보',
      '대형 경쟁사(A사) 진입 장벽이 낮은 틈새시장 우선 공략'
    ]
  },
  // 확장 전략 서브 슬라이드 5-2: 글로벌 시장 진출
  {
    id: 'expansion-global',
    title: '글로벌 시장 진출',
    subTitle: '동남아시아 및 북미 시장 단계적 확장',
    color: COLORS.GREEN,
    sectionNumber: '5-2',
    type: 'chart',
    chartType: 'pie',
    chartData: {
      labels: ['국내', '동남아시아', '북미', '기타'],
      datasets: [
        {
          data: [60, 25, 10, 5],
          backgroundColor: [
            `${COLORS.RED}80`,
            `${COLORS.BLUE}80`,
            `${COLORS.GREEN}80`,
            `${COLORS.YELLOW}80`
          ]
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: '5년차 매출 비중 목표 (%)'
        }
      }
    },
    keyPoints: [
      '베트남(2025 Q2): 호치민, 하노이 중심 15대 시범 운영',
      '태국(2025 Q4): 방콕 관광지 중심 10대 설치',
      '말레이시아(2026 Q2): 쿠알라룸푸르 쇼핑몰 8대 설치',
      '미국(2026 Q3): 캘리포니아 주요 대학가 5개 거점 진출'
    ]
  },
  // 글로벌 확장 단계 슬라이드
  {
    id: 'expansion-global-phases',
    title: '글로벌 확장 단계',
    subTitle: '3단계 글로벌 진출 로드맵',
    color: COLORS.GREEN,
    sectionNumber: '5-2-1',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['1단계: 시장 탐색', '2단계: 거점 확보', '3단계: 확장'],
      datasets: [
        {
          label: '동남아시아',
          data: [80, 60, 40],
          backgroundColor: `${COLORS.BLUE}80`
        },
        {
          label: '북미',
          data: [20, 40, 60],
          backgroundColor: `${COLORS.GREEN}80`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '리소스 배분 (%)'
          }
        }
      }
    },
    keyPoints: [
      '1단계(2025): 동남아 중심 현지 파트너십 구축 및 시장 검증',
      '2단계(2026): 동남아 확장 및 북미 시장 거점 구축',
      '3단계(2027-28): 북미 시장 본격 확장 및 유럽 시장 탐색',
      '각 국가별 맞춤형 콘텐츠 및 AI 모델 현지화로 경쟁력 확보'
    ]
  },
  // 확장 전략 서브 슬라이드 5-3: 사업 다각화
  {
    id: 'expansion-diversification',
    title: '사업 다각화',
    subTitle: '기술 기반 신규 사업 영역 확장',
    color: COLORS.GREEN,
    sectionNumber: '5-3',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['포토부스', 'AI 라이센싱', 'AR 콘텐츠', '메타버스 연동', '데이터 비즈니스'],
      datasets: [
        {
          label: '2024',
          data: [90, 10, 0, 0, 0],
          backgroundColor: `${COLORS.BLUE}60`
        },
        {
          label: '2026',
          data: [60, 20, 10, 5, 5],
          backgroundColor: `${COLORS.GREEN}60`
        },
        {
          label: '2028',
          data: [40, 25, 15, 10, 10],
          backgroundColor: `${COLORS.RED}60`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: '매출 비중 (%)'
          }
        }
      }
    },
    keyPoints: [
      'AI 라이센싱 사업(B2B): 2025년까지 10개 중소 포토부스 업체 계약 목표',
      'AR 콘텐츠 플랫폼: 2025년 Q3 출시 예정, 초기 30개 콘텐츠 확보',
      '메타버스 연동 서비스: 2026년 주요 메타버스 플랫폼 3곳과 제휴',
      '데이터 사업부: 2025년 Q1 신설, MZ세대 트렌드 리포트 분기별 발행'
    ]
  },
  // 전략적 파트너십 슬라이드
  {
    id: 'expansion-partnerships',
    title: '전략적 파트너십',
    subTitle: '생태계 구축을 통한 성장 가속화',
    color: COLORS.GREEN,
    sectionNumber: '5-4',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['콘텐츠 파트너', '기술 파트너', '유통 파트너', '광고 파트너', '투자 파트너'],
      datasets: [
        {
          label: '현재 파트너 수',
          data: [12, 4, 8, 15, 3],
          backgroundColor: `${COLORS.BLUE}70`
        },
        {
          label: '2025년 목표',
          data: [25, 8, 20, 30, 5],
          backgroundColor: `${COLORS.GREEN}70`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '파트너 수'
          }
        }
      }
    },
    keyPoints: [
      '콘텐츠 파트너: SM, JYP 등 엔터테인먼트사와 콜라보 콘텐츠 개발',
      '기술 파트너: MS, AWS와 클라우드 인프라 및 AI 기술 협력',
      '유통 파트너: CGV, 스타벅스 등 핵심 입지 보유 기업과 제휴',
      '광고 파트너: 아모레퍼시픽, 삼성전자 등 주요 브랜드와 광고 계약'
    ]
  },
  // 재무 계획 메인 슬라이드
  {
    id: 'financial-main',
    title: '재무 계획',
    subTitle: '안정적 성장과 수익성 확보 전략',
    color: COLORS.YELLOW,
    sectionNumber: '6',
    type: 'section-intro',
    bgImage: '/images/financial-bg.jpg'
  },
  // 재무 계획 개요 슬라이드 (NEW)
  {
    id: 'financial-overview',
    title: '재무 계획 개요',
    subTitle: '지속 가능한 성장과 수익성 확보를 위한 전략',
    color: COLORS.YELLOW,
    sectionNumber: '6-0',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['초기 정착기', '성장 가속기', '확장기', '안정기'],
      datasets: [
        {
          label: '매출 성장',
          data: [15, 35, 65, 120],
          backgroundColor: `${COLORS.BLUE}80`
        },
        {
          label: '영업이익',
          data: [0.75, 4.2, 11.7, 33.6],
          backgroundColor: `${COLORS.GREEN}80`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '금액(억원)'
          }
        }
      }
    },
    keyPoints: [
      '5년 내 매출 120억원, 영업이익 33.6억원 달성 목표',
      '영업이익률 연 평균 5%p 이상 개선',
      '3년차부터 누적 현금흐름 흑자 전환',
      'AI 기술 고도화로 수익성 지속 개선'
    ]
  },
  // 재무 계획 서브 슬라이드 6-2: 투자 및 자금조달
  {
    id: 'financial-investment',
    title: '투자 및 자금조달',
    subTitle: '단계적 투자 유치 및 자금 활용 계획',
    color: COLORS.YELLOW,
    sectionNumber: '6-2',
    type: 'chart',
    chartType: 'pie',
    chartData: {
      labels: ['기술개발', '마케팅/영업', '인프라 구축', '운영자금'],
      datasets: [
        {
          data: [40, 30, 20, 10],
          backgroundColor: [
            `${COLORS.BLUE}80`,
            `${COLORS.RED}80`,
            `${COLORS.GREEN}80`,
            `${COLORS.YELLOW}80`
          ]
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: '자금 사용 계획 (%)'
        }
      }
    },
    keyPoints: [
      'Seed 투자: 2억원 (2023, 자체조달)',
      'Series A: 10억원 (2024, 외부투자 진행 중)',
      'Series B: 30억원 (2026, 계획)',
      '기술개발에 40% 집중 투자로 경쟁력 강화'
    ]
  },
  // 재무 계획 서브 슬라이드 6-3: 투자 수익성
  {
    id: 'financial-roi',
    title: '투자 수익성',
    subTitle: '높은 ROI와 안정적 성장 모델',
    color: COLORS.YELLOW,
    sectionNumber: '6-3',
    type: 'chart',
    chartType: 'line',
    chartData: {
      labels: ['6개월', '12개월', '18개월', '24개월', '36개월', '48개월', '60개월'],
      datasets: [
        {
          label: '누적 투자(억원)',
          data: [5, 8, 12, 15, 25, 35, 40],
          borderColor: `${COLORS.BLUE}`,
          backgroundColor: `${COLORS.BLUE}20`,
          yAxisID: 'y',
          tension: 0.1
        },
        {
          label: '누적 수익(억원)',
          data: [0, 0.75, 3, 7, 19, 39, 73],
          borderColor: `${COLORS.GREEN}`,
          backgroundColor: `${COLORS.GREEN}20`,
          yAxisID: 'y',
          tension: 0.1
        },
        {
          label: 'ROI(%)',
          data: [-100, -91, -75, -53, -24, 11, 82],
          borderColor: `${COLORS.RED}`,
          backgroundColor: `${COLORS.RED}20`,
          yAxisID: 'y1',
          tension: 0.1
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: '금액(억원)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'ROI(%)'
          },
          grid: {
            drawOnChartArea: false
          }
        }
      }
    },
    keyPoints: [
      '손익분기점: 도입 후 16개월 차 달성 (누적 기준)',
      '투자자 수익 회수 가능 시점: 38개월 차 (ROI 0% 돌파)',
      '5년차 ROI: 누적 투자 대비 82%의 높은 수익률 달성',
      '장기 투자자 목표 수익률: 7년차 150% (IPO 또는 M&A 고려)'
    ]
  },
  // 리스크 관리 슬라이드 (NEW)
  {
    id: 'financial-risk',
    title: '리스크 관리',
    subTitle: '잠재적 위험 요소 및 대응 전략',
    color: COLORS.YELLOW,
    sectionNumber: '6-4',
    type: 'chart',
    chartType: 'radar',
    chartData: {
      labels: ['시장 경쟁', '기술 변화', '규제 리스크', '운영 리스크', '자금 조달', '인력 확보'],
      datasets: [
        {
          label: '리스크 수준',
          data: [70, 50, 30, 45, 60, 55],
          backgroundColor: `${COLORS.RED}30`,
          borderColor: `${COLORS.RED}`,
          borderWidth: 2,
          pointBackgroundColor: `${COLORS.RED}`
        },
        {
          label: '대응 역량',
          data: [75, 85, 70, 90, 65, 80],
          backgroundColor: `${COLORS.GREEN}30`,
          borderColor: `${COLORS.GREEN}`,
          borderWidth: 2,
          pointBackgroundColor: `${COLORS.GREEN}`
        }
      ]
    },
    chartOptions: {
      animation: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    },
    keyPoints: [
      '시장 경쟁: 대형 업체 진입 시 기술 차별화 및 선점 효과로 대응',
      '기술 변화: 지속적 R&D 투자 (매출의 15%)로 기술 경쟁력 유지',
      '자금 조달: 단계별 투자 유치 외 영업 현금흐름 개선으로 리스크 완화',
      '코어 리스크 헷지: 다양한 수익 모델과 지역 다변화로 안정성 확보'
    ]
  },
  // 기존 legacy 타입 슬라이드
  {
    id: 'business-areas',
    title: '사업 영역',
    subTitle: '포토부스 운영 및 AI 기반 운영 최적화 플랫폼',
    color: COLORS.RED,
    type: 'legacy',
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
    type: 'legacy',
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
    type: 'legacy',
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
    type: 'legacy',
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
    type: 'legacy',
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
    type: 'legacy',
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
    type: 'legacy',
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
    type: 'legacy',
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
    type: 'legacy',
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
  const chartRefs = useRef<(HTMLCanvasElement | null)[]>([]);

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

  // 차트 렌더링 컴포넌트
  const renderChart = (slide: ChartSlideData, index: number) => {
    switch (slide.chartType) {
      case 'bar':
        return (
          <ChartContainer>
            <Bar 
              ref={(el: any) => chartRefs.current[index] = el} 
              data={slide.chartData} 
              options={slide.chartOptions as ChartOptions<'bar'>} 
            />
          </ChartContainer>
        );
      case 'pie':
        return (
          <ChartContainer>
            <Pie 
              ref={(el: any) => chartRefs.current[index] = el} 
              data={slide.chartData} 
              options={slide.chartOptions as ChartOptions<'pie'>} 
            />
          </ChartContainer>
        );
      case 'line':
        return (
          <ChartContainer>
            <Line 
              ref={(el: any) => chartRefs.current[index] = el} 
              data={slide.chartData} 
              options={slide.chartOptions as ChartOptions<'line'>} 
            />
          </ChartContainer>
        );
      case 'radar':
        return (
          <ChartContainer>
            <Radar 
              ref={(el: any) => chartRefs.current[index] = el} 
              data={slide.chartData} 
              options={slide.chartOptions as ChartOptions<'radar'>} 
            />
          </ChartContainer>
        );
      default:
        return null;
    }
  };

  // 경쟁사 비교 테이블 렌더링 컴포넌트
  const renderCompetitorComparison = (slide: ComparisonSlideData) => {
    return (
      <CompetitorsContainer>
        {slide.competitors.map((competitor, idx) => (
          <CompetitorCard key={idx}>
            <CompetitorHeader>
              <CompetitorName>{competitor.name}</CompetitorName>
              <CompetitorShare>{competitor.market_share}%</CompetitorShare>
            </CompetitorHeader>
            <CompetitorDescription>{competitor.description}</CompetitorDescription>
            <CompetitorSection>
              <CompetitorSectionTitle>강점</CompetitorSectionTitle>
              <CompetitorList>
                {competitor.strengths.map((strength, i) => (
                  <CompetitorListItem key={i}>
                    <CompetitorListBullet color={COLORS.GREEN} />
                    {strength}
                  </CompetitorListItem>
                ))}
              </CompetitorList>
            </CompetitorSection>
            <CompetitorSection>
              <CompetitorSectionTitle>약점</CompetitorSectionTitle>
              <CompetitorList>
                {competitor.weaknesses.map((weakness, i) => (
                  <CompetitorListItem key={i}>
                    <CompetitorListBullet color={COLORS.RED} />
                    {weakness}
                  </CompetitorListItem>
                ))}
              </CompetitorList>
            </CompetitorSection>
          </CompetitorCard>
        ))}
      </CompetitorsContainer>
    );
  };

  // 슬라이드 컨텐츠 렌더링
  const renderSlideContent = (slide: SlideData, index: number) => {
    switch (slide.type) {
      case 'intro':
        return (
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
        );
      
      case 'section-intro':
        return (
          <SectionIntroSlide>
            <SectionNumber color={slide.color}>{slide.sectionNumber}</SectionNumber>
            <SectionIntroTitle color={slide.color}>{slide.title}</SectionIntroTitle>
            <SectionIntroSubtitle>{slide.subTitle}</SectionIntroSubtitle>
            
            <SectionContinueIndicator>
              <ContinueText>계속하려면 아래로 스크롤하세요</ContinueText>
              <ContinueIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z" fill="currentColor"/>
                </svg>
              </ContinueIcon>
            </SectionContinueIndicator>
          </SectionIntroSlide>
        );
      
      case 'chart':
        // 타입스크립트에게 slide가 ChartSlideData 타입임을 알립니다
        const chartSlide = slide as ChartSlideData;
        return (
          <ChartSlide>
            <SlideHeader>
              <SectionDetailNumber color={chartSlide.color}>{chartSlide.sectionNumber}</SectionDetailNumber>
              <SlideTitle color={chartSlide.color}>{chartSlide.title}</SlideTitle>
              <SlideSubtitle>{chartSlide.subTitle}</SlideSubtitle>
            </SlideHeader>
            
            <ChartContent>
              {renderChart(chartSlide, index)}
              
              <KeyPointsContainer>
                {chartSlide.keyPoints && chartSlide.keyPoints.map((point, i) => (
                  <KeyPoint key={i} delay={i * 0.1}>
                    <KeyPointNumber color={chartSlide.color}>{i + 1}</KeyPointNumber>
                    <KeyPointText>{point}</KeyPointText>
                  </KeyPoint>
                ))}
              </KeyPointsContainer>
            </ChartContent>
          </ChartSlide>
        );
      
      case 'comparison':
        const comparisonSlide = slide as ComparisonSlideData;
        return (
          <ComparisonSlide>
            <SlideHeader>
              <SectionDetailNumber color={comparisonSlide.color}>{comparisonSlide.sectionNumber}</SectionDetailNumber>
              <SlideTitle color={comparisonSlide.color}>{comparisonSlide.title}</SlideTitle>
              <SlideSubtitle>{comparisonSlide.subTitle}</SlideSubtitle>
            </SlideHeader>
            
            <ComparisonContent>
              {renderCompetitorComparison(comparisonSlide)}
              
              <KeyPointsContainer>
                {comparisonSlide.keyPoints && comparisonSlide.keyPoints.map((point, i) => (
                  <KeyPoint key={i} delay={i * 0.1}>
                    <KeyPointNumber color={comparisonSlide.color}>{i + 1}</KeyPointNumber>
                    <KeyPointText>{point}</KeyPointText>
                  </KeyPoint>
                ))}
              </KeyPointsContainer>
            </ComparisonContent>
          </ComparisonSlide>
        );
      
      default:
        // 기존 일반 슬라이드 형식 (이전 버전과의 호환성 유지)
        const legacySlide = slide as LegacySlideData;
        return (
          <ContentSlide>
            <SlideHeader>
              <SlideNumber color={legacySlide.color}>{index < 10 ? `0${index}` : index}</SlideNumber>
              <SlideTitle color={legacySlide.color}>{legacySlide.title}</SlideTitle>
              <SlideSubtitle>{legacySlide.subTitle}</SlideSubtitle>
            </SlideHeader>
            
            <SlideContent>
              <KeyPointsContainer>
                {legacySlide.key && legacySlide.key.map((point, i) => (
                  <KeyPoint key={i} delay={i * 0.1}>
                    <KeyPointNumber color={legacySlide.color}>{i + 1}</KeyPointNumber>
                    <KeyPointText>{point}</KeyPointText>
                  </KeyPoint>
                ))}
              </KeyPointsContainer>
            </SlideContent>
          </ContentSlide>
        );
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
            {renderSlideContent(slide, index)}
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

const SectionIntroSlide = styled.div`
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

const SectionNumber = styled.div<ColorProps>`
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.color};
  margin-bottom: 0.5rem;
  opacity: 0.8;
  
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 1.2rem;
  }
`;

const SectionIntroTitle = styled.h2<ColorProps>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.color};
  margin-bottom: 1rem;
  
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 3rem;
  }
`;

const SectionIntroSubtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 1.5rem;
  }
`;

const SectionContinueIndicator = styled.div`
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

const ContinueText = styled.span`
  font-size: 0.9rem;
  color: ${COLORS.BLACK};
  opacity: 0.7;
  margin-bottom: 0.5rem;
`;

const ContinueIcon = styled.div`
  width: 24px;
  height: 24px;
  
  svg {
    width: 100%;
    height: 100%;
    color: ${COLORS.BLACK};
    opacity: 0.7;
  }
`;

const ChartSlide = styled.div`
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

const ChartContent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChartContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ComparisonSlide = styled.div`
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

const ComparisonContent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CompetitorsContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CompetitorCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const CompetitorHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CompetitorName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLORS.BLACK};
`;

const CompetitorShare = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const CompetitorDescription = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const CompetitorSection = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const CompetitorSectionTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${COLORS.BLACK};
  margin-bottom: 0.5rem;
`;

const CompetitorList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const CompetitorListItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;

const CompetitorListBullet = styled.span<ColorProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: inline-block;
  margin-right: 0.5rem;
`;

const SectionDetailNumber = styled.div<ColorProps>`
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.color};
  margin-bottom: 0.5rem;
  opacity: 0.8;
  
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 1.2rem;
  }
`; 