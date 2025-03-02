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
  ChartData
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
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
  chartType: 'bar' | 'pie' | 'line';
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
          text: '설치 위치별 포토부스 분포'
        }
      }
    },
    keyPoints: [
      '1차 타겟: 유동인구 많은 대학가 중심 배치 (35%)',
      '프리미엄 모델: 쇼핑몰, 고급 카페 위주 설치',
      '계절별 전략: 관광지 성수기 집중 배치 운영',
      '원격 관리: AI 기반 모니터링으로 효율적 운영'
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
      'AI 기반 예측 정비로 유지보수 비용 60% 절감',
      '최적화된 자재 공급망 관리로 물류비용 62% 감소',
      '인력 배치 최적화로 인건비 55% 절감 효과',
      '대시보드 제공으로 실시간 비용 및 성과 모니터링'
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
      'AI 기반 고객 선호도 분석으로 인기 콘텐츠 우선 제공',
      '시즌별 테마 콘텐츠로 재방문율 24% 향상',
      '브랜드 협업 콘텐츠로 추가 수익원 창출',
      '대학별 맞춤 콘텐츠로 지역 특화 서비스 제공'
    ]
  },
  // 비즈니스 모델 메인 슬라이드
  {
    id: 'business-model-main',
    title: '비즈니스 모델',
    subTitle: '수익 다각화를 통한 안정적 사업 구조',
    color: COLORS.GREEN,
    sectionNumber: '3',
    type: 'section-intro'
  },
  // 비즈니스 모델 서브 슬라이드 3-1: 수익 다각화
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
      '포토부스 이용료: 현재 전체 수익의 55%, 안정적 캐시카우',
      'AI 라이센싱: 타 운영사에 최적화 시스템 제공, 고성장 예상',
      '광고 플랫폼: 포토부스 내 디지털 광고 서비스, 브랜드 협업',
      '데이터 분석: 트렌드 리포트 판매, 향후 성장 주력 분야'
    ]
  },
  // 비즈니스 모델 서브 슬라이드 3-2: 수익성 예측
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
      '3년차부터 영업이익률 18% 이상 달성 예상',
      '5년차 매출 120억원, 영업이익률 28% 목표',
      'AI 라이센싱 수익 비중 증가로 수익성 지속 개선',
      '초기 투자 회수 시점: 운영 16개월 차'
    ]
  },
  // 비즈니스 모델 서브 슬라이드 3-3: 경쟁 우위 요소
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
      'AI 기반 위치 최적화로 타 업체 대비 58% 높은 수익률',
      '자동화된 운영 시스템으로 80% 이상 비용 절감 효과',
      '데이터 주도 의사결정으로 대응 속도 90% 향상',
      '지속적인 알고리즘 개선으로 경쟁 우위 유지'
    ]
  },
  // AI 에이전트 메인 슬라이드
  {
    id: 'ai-agent-main',
    title: 'AI 에이전트',
    subTitle: '포토부스 운영 최적화를 위한 인공지능 솔루션',
    color: COLORS.RED,
    sectionNumber: '4',
    type: 'section-intro'
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
          backgroundColor: `${COLORS.RED}80`
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
      '위치 최적화 알고리즘: 95% 정확도로 최적 설치 위치 예측',
      '수요 예측 엔진: 92% 정확도로 시간대별 수요 예측',
      '인력 배치 최적화: 93% 효율성으로 작업자 배치 자동화',
      '물류 및 자재 자동화: 89% 정확도로 최적 보급 일정 계산'
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
      '월간 운영 비용 57% 감소 (175만원 → 75만원)',
      '고객 만족도 27%p 향상 (67% → 94%)',
      '문제 대응 시간 87% 단축 (36.8분 → 4.2분)',
      '가동률 15%p 향상 (82% → 97%)'
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
      '현재(2024): 예측형 최적화 (데이터 기반 비용/효율 최적화)',
      '2025: 지능형 조정 (환경 변화에 자율 대응)',
      '2026: 제한적 자기진화 (알고리즘 스스로 개선)',
      '2027: 완전 자율 운영 (인간 감독 하 자율 의사결정)'
    ]
  },
  // 확장 전략 메인 슬라이드
  {
    id: 'expansion-main',
    title: '확장 전략',
    subTitle: '지역 및 사업 영역 확장을 통한 성장 계획',
    color: COLORS.GREEN,
    sectionNumber: '5',
    type: 'section-intro'
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
      '1차 목표(2024): 주요 대학가 중심 32개 거점 확보',
      '2차 목표(2025-26): 쇼핑몰, 상권 중심 93개 지점 추가',
      '3차 목표(2027-28): 관광지, 복합문화공간으로 115개 확장',
      '5년 내 누적 330개 포토부스 운영 목표'
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
      '베트남, 태국, 말레이시아 중심 동남아 진출 (2025~)',
      '미국 대학가 거점 진출 (2026~)',
      '글로벌 프랜차이즈 모델로 빠른 확장',
      '현지화된 콘텐츠 및 AI 모델 적용'
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
      'AR 기반 확장 콘텐츠 개발 (2025~)',
      '메타버스 연동 포토부스 경험 구축 (2026~)',
      '데이터 기반 트렌드 분석 서비스 (2025~)',
      '운영 최적화 AI 라이센싱 확대 (진행 중)'
    ]
  },
  // 재무 계획 메인 슬라이드
  {
    id: 'financial-main',
    title: '재무 계획',
    subTitle: '안정적 성장과 수익성 확보 전략',
    color: COLORS.YELLOW,
    sectionNumber: '6',
    type: 'section-intro'
  },
  // 재무 계획 서브 슬라이드 6-1: 손익 계획
  {
    id: 'financial-profit',
    title: '손익 계획',
    subTitle: '매출 성장 및 수익성 개선 계획',
    color: COLORS.YELLOW,
    sectionNumber: '6-1',
    type: 'chart',
    chartType: 'bar',
    chartData: {
      labels: ['1년차', '2년차', '3년차', '4년차', '5년차'],
      datasets: [
        {
          label: '매출(억원)',
          data: [15, 35, 65, 90, 120],
          backgroundColor: `${COLORS.BLUE}70`,
          yAxisID: 'y',
          order: 2
        },
        {
          label: '영업이익(억원)',
          data: [0.75, 4.2, 11.7, 20.7, 33.6],
          backgroundColor: `${COLORS.GREEN}70`,
          yAxisID: 'y',
          order: 1
        },
        {
          label: '영업이익률(%)',
          data: [5, 12, 18, 23, 28],
          borderColor: `${COLORS.RED}`,
          backgroundColor: `${COLORS.RED}30`,
          type: 'line',
          yAxisID: 'y1',
          order: 0
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
            text: '비율(%)'
          },
          min: 0,
          max: 30,
          grid: {
            drawOnChartArea: false
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
      '손익분기점: 운영 16개월 차(누적 기준)',
      '투자 대비 수익 흑자전환: 38개월 차',
      '5년차 ROI: 82%',
      '포토부스 한 대당 평균 회수 기간: 1.7년'
    ]
  },
  // 여기에 다른 슬라이드들 계속...
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