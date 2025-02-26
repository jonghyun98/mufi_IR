import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

export const BusinessAreas: React.FC = () => {
  return (
    <StrategySection>
      <StrategyTitle>현재 사업 영역</StrategyTitle>
      <StrategyGrid>
        <StrategyCard>
          <StrategyIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="currentColor"/>
            </svg>
          </StrategyIcon>
          <StrategyCardTitle>포토부스 사업</StrategyCardTitle>
          <StrategyCardContent>
            직접 운영하며, AI로 사진 품질 개선, 개인화된 필터 제공. 현재 대학생들이 네컷사진으로 연락처를 교환하며 소셜 플랫폼으로 전환되는 경험을 테스트 중입니다.
          </StrategyCardContent>
        </StrategyCard>
        <StrategyCard>
          <StrategyIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
            </svg>
          </StrategyIcon>
          <StrategyCardTitle>AI 에이전트 사업</StrategyCardTitle>
          <StrategyCardContent>
            고객 지원, 개인화된 추천 등 AI 기반 솔루션 제공. 기업용 맞춤형 AI 에이전트 개발과 SaaS 기반 월 구독 모델을 통해 수익을 창출합니다.
          </StrategyCardContent>
        </StrategyCard>
        <StrategyCard>
          <StrategyIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
            </svg>
          </StrategyIcon>
          <StrategyCardTitle>대학생 소셜 플랫폼</StrategyCardTitle>
          <StrategyCardContent>
            사진 공유와 네트워킹 중심, AI로 친구 추천 및 콘텐츠 추천. 프리미엄 멤버십, 타겟 광고 수익, 대학 및 기업 파트너십을 통해 수익 모델을 구축합니다.
          </StrategyCardContent>
        </StrategyCard>
      </StrategyGrid>
    </StrategySection>
  );
};

const StrategySection = styled.div`
  margin-top: 2rem;
`;

const StrategyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const StrategyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
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
`;

const StrategyCardContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`; 