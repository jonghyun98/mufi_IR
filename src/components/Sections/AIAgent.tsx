import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { MEDIA_QUERIES } from '../../constants/breakpoints';

export const AIAgent: React.FC = () => {
  return (
    <Section id="ai-agent">
      <Container>
        <Content>
          <Title>
            AI로 실현하는<br />
            맞춤형 비즈니스
          </Title>
          <Description>
            MUFI의 AI Agent는 기업의 요구사항을 정확히 파악하고<br />
            최적화된 솔루션을 제공합니다
          </Description>
          <ServiceGrid>
            <ServiceCard>
              <ServiceIcon>🤖</ServiceIcon>
              <ServiceTitle>맞춤형 AI</ServiceTitle>
              <ServiceDesc>
                기업의 특성과 요구사항에 맞춘<br />
                커스텀 AI 솔루션 개발
              </ServiceDesc>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>📊</ServiceIcon>
              <ServiceTitle>데이터 분석</ServiceTitle>
              <ServiceDesc>
                빅데이터 기반의 정확한<br />
                시장 분석 및 인사이트 제공
              </ServiceDesc>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>💡</ServiceIcon>
              <ServiceTitle>자동화</ServiceTitle>
              <ServiceDesc>
                반복적인 업무의<br />
                효율적인 자동화 구현
              </ServiceDesc>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>🔍</ServiceIcon>
              <ServiceTitle>실시간 모니터링</ServiceTitle>
              <ServiceDesc>
                24/7 시스템 모니터링으로<br />
                안정적인 서비스 운영
              </ServiceDesc>
            </ServiceCard>
          </ServiceGrid>
        </Content>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  background-color: ${COLORS.WHITE};
  padding: 120px 0;
  display: flex;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(0,0,0,0) 0%, 
      rgba(0,0,0,0.2) 50%, 
      rgba(0,0,0,0) 100%
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(0,0,0,0) 0%, 
      rgba(0,0,0,0.2) 50%, 
      rgba(0,0,0,0) 100%
    );
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  text-align: center;
  color: ${COLORS.BLACK};
`;

const Title = styled.h2`
  font-family: 'Pretendard';
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.2;
  color: ${COLORS.BLACK};
  position: relative;

  &::before {
    content: 'BUSINESS AREA 02';
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    color: ${COLORS.RED};
    opacity: 0.8;
  }

  ${MEDIA_QUERIES.TABLET} {
    font-size: 3.5rem;

    &::before {
      top: -3rem;
      font-size: 1.125rem;
    }
  }

  ${MEDIA_QUERIES.LAPTOP} {
    font-size: 4rem;

    &::before {
      top: -4rem;
      font-size: 1.25rem;
    }
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 4rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};

  ${MEDIA_QUERIES.TABLET} {
    font-size: 1.5rem;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 4rem;

  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
`;

const ServiceCard = styled.div`
  background: ${COLORS.WHITE};
  padding: 3rem 2rem;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(234,67,67,0.1) 0%, rgba(234,67,67,0) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${COLORS.RED};

    &::before {
      opacity: 1;
    }
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const ServiceDesc = styled.p`
  font-size: 1.125rem;
  opacity: 0.8;
  line-height: 1.6;
  color: ${COLORS.BLACK};
`;