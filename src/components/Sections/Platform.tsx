import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { MEDIA_QUERIES } from '../../constants/breakpoints';

export const Platform: React.FC = () => {
  return (
    <Section id="platform">
      <Container>
        <Content>
          <Title>
            대학생을 위한<br />
            새로운 소셜 플랫폼
          </Title>
          <Description>
            MUFI 플랫폼에서 같은 관심사를 가진<br />
            대학생들과 연결되어 보세요
          </Description>
          <Features>
            <FeatureColumn>
              <FeatureCard>
                <FeatureIcon>👥</FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>관심사 기반 매칭</FeatureTitle>
                  <FeatureDesc>취미, 전공, 목표가 비슷한 친구들과 자연스럽게 연결됩니다</FeatureDesc>
                </FeatureContent>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>🎯</FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>스터디 그룹</FeatureTitle>
                  <FeatureDesc>함께 공부하고 성장할 수 있는 스터디 그룹을 만나보세요</FeatureDesc>
                </FeatureContent>
              </FeatureCard>
            </FeatureColumn>
            <ImageContainer>
              <AppPreview>
                {/* App Preview Image will be here */}
                <PreviewPlaceholder />
              </AppPreview>
            </ImageContainer>
            <FeatureColumn>
              <FeatureCard>
                <FeatureIcon>🎉</FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>이벤트 참여</FeatureTitle>
                  <FeatureDesc>다양한 캠퍼스 이벤트와 모임에 참여해보세요</FeatureDesc>
                </FeatureContent>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>💬</FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>실시간 소통</FeatureTitle>
                  <FeatureDesc>채팅과 게시판을 통해 자유롭게 의견을 나눌 수 있습니다</FeatureDesc>
                </FeatureContent>
              </FeatureCard>
            </FeatureColumn>
          </Features>
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
    content: 'BUSINESS AREA 03';
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

const Features = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 4rem;

  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: 1fr 1.2fr 1fr;
    gap: 3rem;
    align-items: center;
  }
`;

const FeatureColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FeatureCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: ${COLORS.WHITE};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
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

const FeatureIcon = styled.div`
  font-size: 2rem;
  flex-shrink: 0;
`;

const FeatureContent = styled.div`
  text-align: left;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${COLORS.BLACK};
`;

const FeatureDesc = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.5;
  color: ${COLORS.BLACK};
`;

const ImageContainer = styled.div`
  display: none;
  
  ${MEDIA_QUERIES.TABLET} {
    display: block;
    padding: 2rem;
  }
`;

const AppPreview = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const PreviewPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 9/16;
  background: ${COLORS.WHITE};
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(234,67,67,0.05) 0%, rgba(234,67,67,0.02) 100%);
    border-radius: inherit;
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