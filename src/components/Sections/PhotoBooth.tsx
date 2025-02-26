import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS, SHADOWS } from '../../constants/colors';
import { MEDIA_QUERIES } from '../../constants/breakpoints';

const flashAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.1);
  }
  5% {
    opacity: 1;
    transform: scale(1);
  }
  15% {
    opacity: 0.4;
  }
  30% {
    opacity: 0;
    transform: scale(2);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
`;

const Section = styled.section`
  min-height: 100vh;
  background-color: ${COLORS.BLACK};
  padding: 120px 0;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,0.2) 50%, 
      rgba(255,255,255,0) 100%
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
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,0.2) 50%, 
      rgba(255,255,255,0) 100%
    );
  }
`;

const FlashEffect = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: ${flashAnimation} 2.5s infinite 0.6s;
`;

export const PhotoBooth: React.FC = () => {
  const handleRentalClick = () => {
    window.open('https://rental.muinfilm.com', '_blank');
  };

  return (
    <Section id="photobooth">
      <FlashEffect />
      <Container>
        <Content>
          <Title>
            <BrandHighlight>MUINFILM</BrandHighlight>
            당신의 특별한 순간을<br />
            완벽하게 담아내다
          </Title>
          <Description>
            MUINFILM의 프리미엄 포토부스는 단순한 사진 촬영을 넘어<br />
            소중한 추억을 작품으로 만드는 새로운 경험을 선사합니다
          </Description>
          <Features>
            <Feature>
              <FeatureIcon>📸</FeatureIcon>
              <FeatureTitle>고품질 촬영</FeatureTitle>
              <FeatureDesc>DSLR급 화질과 전문 조명으로 완성도 높은 사진</FeatureDesc>
              <FeatureDetails>
                <DetailItem>• Full Frame 카메라 장착</DetailItem>
                <DetailItem>• 전문가급 조명 시스템</DetailItem>
                <DetailItem>• AI 보정 기술 적용</DetailItem>
              </FeatureDetails>
            </Feature>
            <Feature>
              <FeatureIcon>🎨</FeatureIcon>
              <FeatureTitle>다양한 테마</FeatureTitle>
              <FeatureDesc>계절, 이벤트별 맞춤형 촬영 테마 제공</FeatureDesc>
              <FeatureDetails>
                <DetailItem>• 시즌별 특별 테마</DetailItem>
                <DetailItem>• 커스텀 프레임 제작</DetailItem>
                <DetailItem>• 실시간 필터 적용</DetailItem>
              </FeatureDetails>
            </Feature>
            <Feature>
              <FeatureIcon>🔄</FeatureIcon>
              <FeatureTitle>즉시 공유</FeatureTitle>
              <FeatureDesc>촬영 즉시 모바일로 전송되는 편리한 서비스</FeatureDesc>
              <FeatureDetails>
                <DetailItem>• QR코드 즉시 전송</DetailItem>
                <DetailItem>• SNS 실시간 공유</DetailItem>
                <DetailItem>• 무제한 다운로드</DetailItem>
              </FeatureDetails>
            </Feature>
          </Features>
          <Stats>
            <StatItem>
              <StatNumber>1,000+</StatNumber>
              <StatLabel>행사 진행</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>50,000+</StatNumber>
              <StatLabel>촬영 컷</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>98%</StatNumber>
              <StatLabel>만족도</StatLabel>
            </StatItem>
          </Stats>
          <RentalButton onClick={handleRentalClick}>
            자세히 보러가기
            <ButtonIcon>→</ButtonIcon>
          </RentalButton>
        </Content>
      </Container>
    </Section>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`;

const Content = styled.div`
  text-align: center;
  color: ${COLORS.WHITE};
`;

const Title = styled.h2`
  font-family: 'Pretendard';
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: ${COLORS.WHITE};
  position: relative;

  &::before {
    content: 'BUSINESS AREA 01';
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

const BrandHighlight = styled.span`
  display: block;
  font-size: 3.5rem;
  color: ${COLORS.RED};
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;

  ${MEDIA_QUERIES.TABLET} {
    font-size: 4.5rem;
  }

  ${MEDIA_QUERIES.LAPTOP} {
    font-size: 5.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 4rem;
  line-height: 1.6;
  color: ${COLORS.WHITE};

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
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

const Feature = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: ${COLORS.RED};
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.WHITE};
`;

const FeatureDesc = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.5;
  color: ${COLORS.WHITE};
`;

const FeatureDetails = styled.div`
  margin-top: 1rem;
  text-align: left;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const DetailItem = styled.p`
  font-size: 0.9rem;
  color: ${COLORS.WHITE};
  opacity: 0.7;
  margin: 0.5rem 0;
  transition: opacity 0.2s ease;

  ${Feature}:hover & {
    opacity: 0.9;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 5rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  ${MEDIA_QUERIES.TABLET} {
    gap: 4rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${COLORS.RED};
  margin-bottom: 0.5rem;
  font-family: 'Pretendard';

  ${MEDIA_QUERIES.TABLET} {
    font-size: 3rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: ${COLORS.WHITE};
  opacity: 0.8;
`;

const RentalButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${COLORS.WHITE};
  background: linear-gradient(135deg, ${COLORS.RED} 0%, #A5B0FF 100%);
  border-radius: 12px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(110, 124, 243, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ButtonIcon = styled.span`
  font-size: 1.25rem;
  transition: transform 0.3s ease;

  ${RentalButton}:hover & {
    transform: translateX(5px);
  }
`; 