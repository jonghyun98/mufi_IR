import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../constants/colors';
import { MEDIA_QUERIES } from '../../constants/breakpoints';
import { SHADOWS } from '../../constants/shadows';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <Container>
        <Content>
          <LeftColumn>
            <TitleSection>
              <Title>
                <BrandHighlight>MUFI</BrandHighlight>
                연결이 만드는<br />
                새로운 가능성
              </Title>
              <Description>
                MUFI는 Multi Unit Functional Intelligence의 약자로,<br />
                AI 기반 포토부스, 기업용 AI 솔루션, 대학생 소셜 플랫폼을 개발합니다.<br />
                우리는 최신 인공지능 기술을 활용해 일상 속 사진 촬영 경험을 개선하고,<br />
                기업의 업무 효율성을 높이며, 대학생들의 소통과 교류를 촉진합니다.
              </Description>
              <IRButtonContainer>
                <IRButton to="/ir">
                  <IRButtonText>사업 IR 보기</IRButtonText>
                  <IRButtonIcon>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
                    </svg>
                  </IRButtonIcon>
                </IRButton>
              </IRButtonContainer>
            </TitleSection>

            <LeftCardsSection>
              <VisionSection>
                <SectionTitle>비전 및 가치</SectionTitle>
                <VisionRow>
                  <VisionCard>
                    <VisionIcon>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" fill="currentColor"/>
                      </svg>
                    </VisionIcon>
                    <VisionContent>
                      <VisionTitle>미션</VisionTitle>
                      <VisionDesc>AI 기술로 일상의 순간을 특별하게 만들고, 사람과 서비스를 자연스럽게 연결합니다</VisionDesc>
                    </VisionContent>
                  </VisionCard>

                  <VisionCard>
                    <VisionIcon>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                      </svg>
                    </VisionIcon>
                    <VisionContent>
                      <VisionTitle>비전</VisionTitle>
                      <VisionDesc>2025년까지 국내 AI 포토부스 시장 점유율 1위, 기업용 AI 에이전트 솔루션 상용화를 달성합니다</VisionDesc>
                    </VisionContent>
                  </VisionCard>

                  <VisionCard>
                    <VisionIcon>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" fill="currentColor"/>
                      </svg>
                    </VisionIcon>
                    <VisionContent>
                      <VisionTitle>핵심가치</VisionTitle>
                      <VisionDesc>실용성 · 효율성 · 접근성 · 신뢰성 · 지속성</VisionDesc>
                    </VisionContent>
                  </VisionCard>
                </VisionRow>
              </VisionSection>

              <MetricsSection>
                <SectionTitle>주요 지표</SectionTitle>
                <MetricsRow>
                  <MetricItem>
                    <MetricIcon>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-4h4v-2h-4V7h-2v4H8v2h4z" fill="currentColor"/>
                      </svg>
                    </MetricIcon>
                    <MetricContent>
                      <MetricTitle>성장률</MetricTitle>
                      <MetricValue>250%</MetricValue>
                      <MetricDesc>전년 대비</MetricDesc>
                    </MetricContent>
                  </MetricItem>

                  <MetricItem>
                    <MetricIcon>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
                      </svg>
                    </MetricIcon>
                    <MetricContent>
                      <MetricTitle>팀 구성</MetricTitle>
                      <MetricValue>3 + AI</MetricValue>
                      <MetricDesc>코어팀 + AI 에이전트</MetricDesc>
                    </MetricContent>
                  </MetricItem>

                  <MetricItem>
                    <MetricIcon>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
                      </svg>
                    </MetricIcon>
                    <MetricContent>
                      <MetricTitle>서비스 이용자</MetricTitle>
                      <MetricValue>100K+</MetricValue>
                      <MetricDesc>누적 사용자</MetricDesc>
                    </MetricContent>
                  </MetricItem>
                </MetricsRow>
              </MetricsSection>

              <TeamImageSection>
                <ImageContainer>
                  <TeamImage src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="MUFI 팀" />
                  <ImageCaption>MUFI 코어팀</ImageCaption>
                </ImageContainer>
              </TeamImageSection>
            </LeftCardsSection>
          </LeftColumn>

          <RightColumn>
            <StoryCard>
              <StoryTitle>Brand Story</StoryTitle>
              <StoryText>
                MUFI는 2023년, 포토키오스크 소프트웨어 플랫폼으로 시작했습니다.
                '기술로 만드는 따뜻한 연결'이라는 생각으로, 사람과 기술, 서비스를 이어주는
                다리가 되고자 합니다.<br /><br />

                처음에는 '모든 순간을 특별하게'라는 작은 생각으로 시작했습니다.
                오프라인 포토부스 서비스를 온라인으로 가져오면서,
                더 많은 사람들이 쉽게 이용할 수 있게 만들었습니다.<br /><br />
                
                여기에 AI 기술을 더해 사진 촬영의 퀄리티를 높이고,
                누구나 쉽게 멋진 사진을 찍을 수 있도록 도와드리고 있습니다.
                이제는 단순한 사진 촬영이 아닌, 추억을 만드는 플랫폼이 되었습니다.<br /><br />
                
                앞으로는 기업용 AI 서비스와 대학생 소셜 플랫폼까지,
                더 다양한 방법으로 사람과 사람을 이어주는 따뜻한 서비스를 만들어가겠습니다.
              </StoryText>
              <StoryImageContainer>
                <StoryImage src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="MUFI 포토부스" />
              </StoryImageContainer>
            </StoryCard>

            <PartnerSection>
              <PartnerTitle>함께하는 파트너사</PartnerTitle>
              <PartnersContainer>
                <PartnersScroll>
                  <PartnerCard>
                    <PartnerLogo src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="파트너사 1" />
                    <PartnerInfo>
                      <PartnerName>ABC 기업</PartnerName>
                      <PartnerDesc>AI 기술 파트너</PartnerDesc>
                    </PartnerInfo>
                  </PartnerCard>
                  <PartnerCard>
                    <PartnerLogo src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="파트너사 2" />
                    <PartnerInfo>
                      <PartnerName>XYZ 스튜디오</PartnerName>
                      <PartnerDesc>디자인 파트너</PartnerDesc>
                    </PartnerInfo>
                  </PartnerCard>
                  <PartnerCard>
                    <PartnerLogo src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="파트너사 3" />
                    <PartnerInfo>
                      <PartnerName>테크 솔루션</PartnerName>
                      <PartnerDesc>기술 인프라 파트너</PartnerDesc>
                    </PartnerInfo>
                  </PartnerCard>
                  <PartnerCard>
                    <PartnerLogo src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="파트너사 4" />
                    <PartnerInfo>
                      <PartnerName>글로벌 미디어</PartnerName>
                      <PartnerDesc>마케팅 파트너</PartnerDesc>
                    </PartnerInfo>
                  </PartnerCard>
                  <PartnerCard>
                    <PartnerLogo src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="파트너사 5" />
                    <PartnerInfo>
                      <PartnerName>스마트 시스템즈</PartnerName>
                      <PartnerDesc>하드웨어 파트너</PartnerDesc>
                    </PartnerInfo>
                  </PartnerCard>
                  <PartnerCard>
                    <PartnerLogo src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="파트너사 6" />
                    <PartnerInfo>
                      <PartnerName>이노베이션 랩</PartnerName>
                      <PartnerDesc>연구개발 파트너</PartnerDesc>
                    </PartnerInfo>
                  </PartnerCard>
                </PartnersScroll>
                <ScrollIndicator>
                  <ScrollText>옆으로 스크롤하여 더 보기</ScrollText>
                  <ScrollIcon>→</ScrollIcon>
                </ScrollIndicator>
              </PartnersContainer>
            </PartnerSection>

            <TimelineSection>
              <SectionTitle>성장 과정</SectionTitle>
              <TimelineRow>
                <TimelineItem>
                  <TimelineYear>2023.Q1</TimelineYear>
                  <TimelineContent>
                    <TimelineHeading>첫 MVP 출시</TimelineHeading>
                    <TimelineDesc>MUFI-1 서비스 런칭 및 핵심 기술 개발 착수</TimelineDesc>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineYear>2023.Q3</TimelineYear>
                  <TimelineContent>
                    <TimelineHeading>포토부스 서비스 런칭</TimelineHeading>
                    <TimelineDesc>AI 기반 프리미엄 포토부스 서비스 정식 출시</TimelineDesc>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineYear>2024</TimelineYear>
                  <TimelineContent>
                    <TimelineHeading>소셜 플랫폼 출시</TimelineHeading>
                    <TimelineDesc>대학생 맞춤형 소셜 네트워킹 플랫폼 베타 서비스 시작</TimelineDesc>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineYear>2025</TimelineYear>
                  <TimelineContent>
                    <TimelineHeading>AI 서비스 확장</TimelineHeading>
                    <TimelineDesc>기업용 AI 솔루션 개발 및 글로벌 시장 진출 준비</TimelineDesc>
                  </TimelineContent>
                </TimelineItem>
              </TimelineRow>
            </TimelineSection>
          </RightColumn>
        </Content>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  background: ${COLORS.WHITE};
  padding: 80px 0;
  color: ${COLORS.BLACK};
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  
  ${MEDIA_QUERIES.TABLET} {
    padding: 0 2rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: 45% 55%;
    gap: 2.5rem;
    align-items: start;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    gap: 2rem;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    gap: 2rem;
  }
`;

const TitleSection = styled.div`
  text-align: center;
  
  ${MEDIA_QUERIES.TABLET} {
    text-align: left;
  }
`;

const LeftCardsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  ${MEDIA_QUERIES.TABLET} {
    gap: 1.5rem;
  }
`;

const TeamImageSection = styled.div`
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-family: 'Pretendard';
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
  letter-spacing: -0.02em;
  color: ${COLORS.BLACK};

  &::before {
    content: 'ABOUT US';
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    color: ${COLORS.RED};
    opacity: 0.9;
    font-family: 'Pretendard';

    ${MEDIA_QUERIES.TABLET} {
      left: 0;
      transform: none;
    }
  }

  ${MEDIA_QUERIES.TABLET} {
    font-size: 3rem;
    text-align: left;
  }

  ${MEDIA_QUERIES.LAPTOP} {
    font-size: 3.5rem;
  }
`;

const BrandHighlight = styled.span`
  display: block;
  font-size: 3rem;
  color: ${COLORS.RED};
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: ${COLORS.RED};

    ${MEDIA_QUERIES.TABLET} {
      left: 0;
      transform: none;
    }
  }

  ${MEDIA_QUERIES.TABLET} {
    font-size: 3.5rem;
  }

  ${MEDIA_QUERIES.LAPTOP} {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  opacity: 0.8;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  font-weight: 400;

  ${MEDIA_QUERIES.TABLET} {
    font-size: 1.25rem;
    text-align: left;
    margin-bottom: 2rem;
  }

  ${MEDIA_QUERIES.LAPTOP} {
    font-size: 1.375rem;
  }
`;

const ImageContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const TeamImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.03);
  }
`;

const ImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.75rem;
  font-size: 0.875rem;
  text-align: center;
`;

const VisionSection = styled.div`
  background: ${COLORS.WHITE};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
`;

const MetricsSection = styled.div`
  background: ${COLORS.WHITE};
  padding: 1.5rem 1.25rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
  
  ${MEDIA_QUERIES.TABLET} {
    padding: 1.5rem 1rem;
  }
  
  @media (min-width: 992px) {
    padding: 1.5rem 1.25rem;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.25rem;
    height: 1.25rem;
    width: 4px;
    background: ${COLORS.RED};
    border-radius: 2px;
  }
`;

const VisionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const VisionCard = styled.div`
  background: ${COLORS.WHITE};
  padding: 1.25rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${COLORS.RED};
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover::after {
    opacity: 0.7;
  }
`;

const VisionIcon = styled.div`
  font-size: 2rem;
  margin-right: 1rem;
  margin-bottom: 0;
  color: ${COLORS.RED};
  opacity: 0.9;
  flex-shrink: 0;
  
  svg {
    width: 36px;
    height: 36px;
    transition: all 0.3s ease;
  }

  ${VisionCard}:hover & svg {
    transform: scale(1.1);
  }
`;

const VisionContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const VisionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
  color: ${COLORS.BLACK};
`;

const VisionDesc = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  line-height: 1.5;
  color: ${COLORS.BLACK};
`;

const MetricsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }
`;

const MetricItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1.25rem 0.75rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${COLORS.RED};
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover::after {
    opacity: 0.7;
  }
  
  ${MEDIA_QUERIES.TABLET} {
    padding: 1.25rem 0.5rem;
    gap: 0.5rem;
  }
  
  @media (min-width: 992px) {
    padding: 1.25rem 0.75rem;
    gap: 0.75rem;
  }
`;

const MetricIcon = styled.div`
  width: 24px;
  height: 24px;
  color: ${COLORS.RED};
  opacity: 0.9;
  flex-shrink: 0;
  margin-top: 0.25rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  @media (min-width: 992px) {
    width: 28px;
    height: 28px;
  }
`;

const MetricContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: calc(100% - 30px);
`;

const MetricTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  opacity: 0.7;
  margin-bottom: 0.3rem;
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (min-width: 992px) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
`;

const MetricValue = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${COLORS.BLACK};
  font-family: 'Pretendard';
  letter-spacing: -0.01em;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (min-width: 992px) {
    font-size: 1.25rem;
  }
`;

const MetricDesc = styled.div`
  font-size: 0.65rem;
  color: ${COLORS.BLACK};
  opacity: 0.6;
  margin-top: 0.15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (min-width: 992px) {
    font-size: 0.7rem;
    margin-top: 0.2rem;
  }
`;

const StoryCard = styled.div`
  background: ${COLORS.WHITE};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
  
  ${MEDIA_QUERIES.TABLET} {
    padding: 2rem;
  }
`;

const StoryImageContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`;

const StoryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.03);
  }
`;

const StoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.25rem;
    height: 1.25rem;
    width: 4px;
    background: ${COLORS.RED};
    border-radius: 2px;
  }
`;

const StoryText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  
  ${MEDIA_QUERIES.TABLET} {
    font-size: 1.125rem;
  }
`;

const PartnerSection = styled.div`
  padding: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
`;

const PartnerTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.25rem;
    height: 1.25rem;
    width: 4px;
    background: ${COLORS.RED};
    border-radius: 2px;
  }
`;

const PartnersContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const PartnersScroll = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
  width: 100%;
  padding: 0.5rem 0 1rem 0;
  
  ${MEDIA_QUERIES.TABLET} {
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
    padding: 0.5rem 0.5rem 1.5rem 0.5rem;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scroll-behavior: smooth;
    
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }
`;

const PartnerCard = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
  
  ${MEDIA_QUERIES.TABLET} {
    flex: 0 0 auto;
    width: 180px;
  }
`;

const PartnerLogo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 0.75rem;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
  
  ${PartnerCard}:hover & {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const PartnerInfo = styled.div`
  text-align: center;
  width: 100%;
`;

const PartnerName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${COLORS.BLACK};
`;

const PartnerDesc = styled.p`
  font-size: 0.875rem;
  color: ${COLORS.BLACK};
  opacity: 0.7;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 0.75rem;
  color: ${COLORS.BLACK};
  opacity: 0.6;
  
  @media (min-width: 1200px) {
    display: none;
  }
`;

const ScrollText = styled.span`
  font-size: 0.75rem;
`;

const ScrollIcon = styled.span`
  animation: scrollHint 1.5s infinite;
  
  @keyframes scrollHint {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(5px);
    }
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  background: ${COLORS.WHITE};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
`;

const TimelineRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TimelineItem = styled.div`
  background: ${COLORS.WHITE};
  padding: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${COLORS.RED};
    opacity: 0.7;
  }
`;

const TimelineYear = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${COLORS.RED};
  margin-bottom: 1rem;
  opacity: 0.9;
  font-family: 'Pretendard';
  letter-spacing: -0.01em;
`;

const TimelineContent = styled.div``;

const TimelineHeading = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${COLORS.BLACK};
  letter-spacing: -0.01em;
`;

const TimelineDesc = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.6;
  color: ${COLORS.BLACK};
`;

const IRButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  
  ${MEDIA_QUERIES.TABLET} {
    justify-content: flex-start;
    margin-top: 1.5rem;
  }
`;

const IRButton = styled(Link)`
  display: flex;
  align-items: center;
  background-color: ${COLORS.RED};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const IRButtonText = styled.span`
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const IRButtonIcon = styled.span`
  display: flex;
  align-items: center;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;