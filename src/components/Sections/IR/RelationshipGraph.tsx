import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

export const RelationshipGraph: React.FC = () => {
  return (
    <RelationshipGraphSection id="relationship-graph">
      <StrategyTitle>사업 요소 관계도</StrategyTitle>
      <GraphDescription>
        MUFI의 핵심 사업 영역과 데이터 흐름, 수익 창출 구조를 시각화한 관계도입니다.
      </GraphDescription>
      <RelationshipGraphContainer>
        <svg width="100%" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          {/* 중앙 노드 - MUFI */}
          <g className="central-node">
            <circle cx="400" cy="100" r="40" fill="white" stroke={COLORS.BLACK} strokeWidth="2" />
            <text x="400" y="105" textAnchor="middle" dominantBaseline="middle" fill={COLORS.BLACK} fontWeight="bold">MUFI</text>
          </g>
          
          {/* 비즈니스 노드들 */}
          <g className="business-node">
            <rect x="150" y="200" width="120" height="50" rx="5" fill="white" stroke={COLORS.RED} strokeWidth="2" />
            <text x="210" y="225" textAnchor="middle" dominantBaseline="middle" fill={COLORS.RED}>포토부스</text>
          </g>
          
          <g className="business-node">
            <rect x="340" y="200" width="120" height="50" rx="5" fill="white" stroke={COLORS.RED} strokeWidth="2" />
            <text x="400" y="225" textAnchor="middle" dominantBaseline="middle" fill={COLORS.RED}>AI 에이전트</text>
          </g>
          
          <g className="business-node">
            <rect x="530" y="200" width="120" height="50" rx="5" fill="white" stroke={COLORS.RED} strokeWidth="2" />
            <text x="590" y="225" textAnchor="middle" dominantBaseline="middle" fill={COLORS.RED}>소셜 플랫폼</text>
          </g>
          
          {/* 데이터 노드 */}
          <g className="data-node">
            <rect x="250" y="300" width="120" height="50" rx="5" fill="white" stroke={COLORS.BLACK} strokeWidth="2" />
            <text x="310" y="325" textAnchor="middle" dominantBaseline="middle" fill={COLORS.BLACK}>데이터 수집</text>
          </g>
          
          {/* 수익 노드 */}
          <g className="revenue-node">
            <rect x="450" y="300" width="120" height="50" rx="5" fill="white" stroke={COLORS.RED} strokeWidth="2" />
            <text x="510" y="325" textAnchor="middle" dominantBaseline="middle" fill={COLORS.RED}>수익 창출</text>
          </g>
          
          {/* 연결선 - 중앙에서 비즈니스 노드로 */}
          <line x1="380" y1="130" x2="210" y2="200" stroke={COLORS.BLACK} strokeWidth="2" />
          <line x1="400" y1="140" x2="400" y2="200" stroke={COLORS.BLACK} strokeWidth="2" />
          <line x1="420" y1="130" x2="590" y2="200" stroke={COLORS.BLACK} strokeWidth="2" />
          
          {/* 연결선 - 비즈니스 노드에서 데이터 노드로 (점선) */}
          <line x1="210" y1="250" x2="310" y2="300" stroke={COLORS.BLACK} strokeWidth="2" strokeDasharray="5,5" />
          <line x1="400" y1="250" x2="310" y2="300" stroke={COLORS.BLACK} strokeWidth="2" strokeDasharray="5,5" />
          <line x1="590" y1="250" x2="310" y2="300" stroke={COLORS.BLACK} strokeWidth="2" strokeDasharray="5,5" />
          
          {/* 연결선 - 데이터 노드에서 수익 노드로 */}
          <line x1="370" y1="325" x2="450" y2="325" stroke={COLORS.BLACK} strokeWidth="2" />
          
          {/* 연결선 - 비즈니스 노드에서 수익 노드로 */}
          <line x1="210" y1="250" x2="510" y2="300" stroke={COLORS.RED} strokeWidth="2" />
          <line x1="400" y1="250" x2="510" y2="300" stroke={COLORS.RED} strokeWidth="2" />
          <line x1="590" y1="250" x2="510" y2="300" stroke={COLORS.RED} strokeWidth="2" />
        </svg>
      </RelationshipGraphContainer>
      <GraphLegend>
        <LegendItem>
          <LegendColor className="business" />
          <LegendText>사업 영역</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendColor className="data" />
          <LegendText>데이터 흐름</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendColor className="revenue" />
          <LegendText>수익 창출</LegendText>
        </LegendItem>
      </GraphLegend>
    </RelationshipGraphSection>
  );
};

// 관계 그래프 스타일 컴포넌트
const RelationshipGraphSection = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const StrategyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const GraphDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const RelationshipGraphContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 2rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1rem;
  background: ${COLORS.WHITE};
  
  svg {
    overflow: visible;
    
    text {
      font-family: 'Pretendard', sans-serif;
      font-size: 14px;
    }
    
    @media (max-width: 768px) {
      text {
        font-size: 12px;
      }
    }
  }
`;

const GraphLegend = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  
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

const LegendColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  
  &.business {
    background-color: ${COLORS.RED};
  }
  
  &.data {
    background-color: ${COLORS.BLACK};
  }
  
  &.revenue {
    background-color: ${COLORS.RED};
  }
`;

const LegendText = styled.span`
  font-size: 0.875rem;
  color: ${COLORS.BLACK};
`; 