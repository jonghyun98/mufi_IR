import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

export const VisionMission: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{
    vision: boolean;
    mission: boolean;
    about: boolean;
  }>({
    vision: false,
    mission: false,
    about: false
  });

  const toggleSection = (section: 'vision' | 'mission' | 'about') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // 상세 내용 데이터
  const detailContents = {
    vision: `AI 기술을 활용해 사진 경험과 소셜 연결을 혁신하며, 하드웨어 제조부터 소프트웨어 서비스, 데이터 분석까지 전 가치 사슬을 통합해 글로벌 AI 리더로 자리 잡는 것입니다. 

우리는 피터 틸의 접근법을 반영하여 경쟁이 덜 치열한 틈새 시장에서 시작해 독점적 지위를 확보하고자 합니다.

특히 다음 영역에서 혁신을 이루고자 합니다:
• AI 자율 운영 시스템을 통한 운영 효율화
• 실시간 데이터 수집 및 분석 인프라 구축
• 대학생 커뮤니티를 위한 차별화된 소셜 경험 제공
• 수집된 데이터를 활용한 새로운 비즈니스 가치 창출`,

    mission: `사용자에게 새로운 사진 경험을 제공하고, 대학생 커뮤니티를 연결하며, 데이터 기반으로 AI 발전에 기여합니다. 

우리는 포토부스 운영, AI 에이전트, 대학생 소셜 플랫폼을 중심으로 사업을 전개하며, 특히 대학생들이 네컷사진으로 연락처를 교환하며 소셜 서비스로 전환되는 경험을 테스트 중입니다.

MUFI의 핵심 미션:
• 사용자 중심의 혁신적인 사진 경험 창출
• 대학생 커뮤니티를 위한 소셜 플랫폼 구축
• 실세계 데이터 수집을 통한 AI 발전 기여
• 지속 가능한 비즈니스 모델 확립`,

    about: `MUFI는 AI 기술을 활용해 사진 경험과 소셜 연결을 혁신하는 미래 지향적 기술 회사입니다. 

우리는 포토부스를 통해 축제 시장에서 미디어 콘텐츠와 융합해 서비스를 확장하며, 사용자 데이터를 수집해 실세계 데이터 수집 인프라를 구축하고 있습니다. 

이 데이터를 기반으로 B2B 데이터 파이프라인을 공급해 추가 수익을 창출하고 AI 연구 발전에 기여할 계획입니다. 이는 단순한 사진 서비스를 넘어 데이터 기반 비즈니스 모델로의 전환을 보여줍니다.

주요 비즈니스 영역:
• AI 자율 운영 포토부스 서비스
• 기업용 AI 에이전트 개발 및 공급
• 대학생 특화 소셜 플랫폼 운영
• 데이터 수집 및 분석 파이프라인 구축`
  };

  // 카드로 표시할 아이콘
  const icons = {
    vision: [
      <svg key="v1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6-4c0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6 6-2.7 6-6z" fill="currentColor"/>
        <path d="M2.9 12c0-.4.1-.8.2-1.2.1-.3.5-.4.8-.3.3.1.4.5.3.8-.1.3-.2.5-.2.7 0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-1 0-2 .2-2.9.5-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 1.1-.4 2.2-.6 3.3-.6 5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12c0-.4.1-.8.1-1.2.1-.3.5-.5.8-.4.3.1.5.5.4.8 0 .3-.1.5-.1.8 0 4.9 4 8.9 8.9 8.9s8.9-4 8.9-8.9-4-8.9-8.9-8.9c-.9 0-1.8.1-2.6.4-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 1-.3 2-.5 3-.5 5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12z" fill="currentColor"/>
      </svg>,
      <svg key="v2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9zm-1.7 4.9c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z" fill="currentColor"/>
        <path d="M20 12V7c0-.6-.4-1-1-1s-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1zM6 17c0 .6-.4 1-1 1s-1-.4-1-1v-5c0-.6.4-1 1-1s1 .4 1 1v5z" fill="currentColor"/>
      </svg>,
      <svg key="v3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
      </svg>,
      <svg key="v4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.6 16H6.6c-.9 0-1.6-.7-1.6-1.6V6.6C5 5.7 5.7 5 6.6 5h10.8c.9 0 1.6.7 1.6 1.6v10.8c0 .9-.7 1.6-1.6 1.6z" fill="currentColor"/>
        <path d="M7 13h10v1H7zM7 10h10v1H7zM7 7h10v1H7zM7 16h7v1H7z" fill="currentColor"/>
      </svg>
    ],
    mission: [
      <svg key="m1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8z" fill="currentColor"/>
        <path d="M12 17c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1zM12 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" fill="currentColor"/>
      </svg>,
      <svg key="m2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
      </svg>,
      <svg key="m3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9zm-1.7 4.9c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z" fill="currentColor"/>
        <path d="M20 12V7c0-.6-.4-1-1-1s-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1zM6 17c0 .6-.4 1-1 1s-1-.4-1-1v-5c0-.6.4-1 1-1s1 .4 1 1v5z" fill="currentColor"/>
      </svg>,
      <svg key="m4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" fill="currentColor"/>
      </svg>
    ],
    about: [
      <svg key="a1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="currentColor"/>
      </svg>,
      <svg key="a2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
      </svg>,
      <svg key="a3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
      </svg>,
      <svg key="a4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9zm-1.7 4.9c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z" fill="currentColor"/>
        <path d="M20 12V7c0-.6-.4-1-1-1s-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1zM6 17c0 .6-.4 1-1 1s-1-.4-1-1v-5c0-.6.4-1 1-1s1 .4 1 1v5z" fill="currentColor"/>
      </svg>
    ]
  };

  // 불릿 포인트 리스트를 추출하는 함수
  const extractBulletPoints = (content: string, marker: string) => {
    const lines = content.split('\n');
    const bulletPoints: string[] = [];
    let recording = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.includes(marker)) {
        recording = true;
        continue;
      }
      
      if (recording && line.startsWith('•')) {
        bulletPoints.push(line.substring(1).trim());
      }
    }
    
    return bulletPoints;
  };

  // 콘텐츠를 형식화하는 함수
  const formatContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    const formattedContent: JSX.Element[] = [];
    
    paragraphs.forEach((paragraph, index) => {
      if (paragraph.includes('특히 다음 영역에서 혁신을 이루고자 합니다:')) {
        // 혁신 영역 카드로 변환
        const headerText = paragraph.split('특히 다음 영역에서 혁신을 이루고자 합니다:')[0];
        const bulletPoints = extractBulletPoints(content, '특히 다음 영역에서 혁신을 이루고자 합니다:');
        
        if (headerText.trim()) {
          formattedContent.push(
            <DetailParagraph key={`para-${index}`}>{headerText.trim()}</DetailParagraph>
          );
        }
        
        formattedContent.push(
          <CardIntroText key={`intro-${index}`}>특히 다음 영역에서 혁신을 이루고자 합니다:</CardIntroText>
        );
        
        formattedContent.push(
          <FeatureCardGrid key={`grid-${index}`}>
            {bulletPoints.map((point, i) => (
              <FeatureCard key={`feature-${i}`}>
                <FeatureIconWrapper>
                  {icons.vision[i % icons.vision.length]}
                </FeatureIconWrapper>
                <FeatureContent>{point}</FeatureContent>
              </FeatureCard>
            ))}
          </FeatureCardGrid>
        );
      } else if (paragraph.includes('MUFI의 핵심 미션:')) {
        // 미션 영역 카드로 변환
        const headerText = paragraph.split('MUFI의 핵심 미션:')[0];
        const bulletPoints = extractBulletPoints(content, 'MUFI의 핵심 미션:');
        
        if (headerText.trim()) {
          formattedContent.push(
            <DetailParagraph key={`para-${index}`}>{headerText.trim()}</DetailParagraph>
          );
        }
        
        formattedContent.push(
          <CardIntroText key={`intro-${index}`}>MUFI의 핵심 미션:</CardIntroText>
        );
        
        formattedContent.push(
          <FeatureCardGrid key={`grid-${index}`}>
            {bulletPoints.map((point, i) => (
              <FeatureCard key={`feature-${i}`}>
                <FeatureIconWrapper>
                  {icons.mission[i % icons.mission.length]}
                </FeatureIconWrapper>
                <FeatureContent>{point}</FeatureContent>
              </FeatureCard>
            ))}
          </FeatureCardGrid>
        );
      } else if (paragraph.includes('주요 비즈니스 영역:')) {
        // 비즈니스 영역 카드로 변환
        const headerText = paragraph.split('주요 비즈니스 영역:')[0];
        const bulletPoints = extractBulletPoints(content, '주요 비즈니스 영역:');
        
        if (headerText.trim()) {
          formattedContent.push(
            <DetailParagraph key={`para-${index}`}>{headerText.trim()}</DetailParagraph>
          );
        }
        
        formattedContent.push(
          <CardIntroText key={`intro-${index}`}>주요 비즈니스 영역:</CardIntroText>
        );
        
        formattedContent.push(
          <FeatureCardGrid key={`grid-${index}`}>
            {bulletPoints.map((point, i) => (
              <FeatureCard key={`feature-${i}`}>
                <FeatureIconWrapper>
                  {icons.about[i % icons.about.length]}
                </FeatureIconWrapper>
                <FeatureContent>{point}</FeatureContent>
              </FeatureCard>
            ))}
          </FeatureCardGrid>
        );
      } else if (!paragraph.includes('•')) {
        formattedContent.push(
          <DetailParagraph key={`para-${index}`}>{paragraph}</DetailParagraph>
        );
      }
    });
    
    return formattedContent;
  };

  return (
    <SectionContent>
      <VisionMissionGrid>
        <VisionCard expanded={expandedSections.vision}>
          <CardIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="currentColor"/>
              <path d="M12 10c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
              <path d="M2 12h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11z" fill="currentColor"/>
              <path d="M20 12h2c0-6.07-4.93-11-11-11v2c4.97 0 9 4.03 9 9z" fill="currentColor"/>
            </svg>
          </CardIcon>
          <CardTitle>비전</CardTitle>
          
          {!expandedSections.vision ? (
            <CardContentShort>
              AI 기술을 활용해 사진 경험과 소셜 연결을 혁신하며, 하드웨어 제조부터 소프트웨어 서비스, 데이터 분석까지 전 가치 사슬을 통합해 글로벌 AI 리더로 자리 잡는 것입니다.
            </CardContentShort>
          ) : (
            <CardContentFull>
              {formatContent(detailContents.vision)}
            </CardContentFull>
          )}
          
          <ToggleButton 
            onClick={() => toggleSection('vision')}
            expanded={expandedSections.vision}
          >
            {expandedSections.vision ? '접기' : '자세히 보기'} 
            <IconArrow expanded={expandedSections.vision} />
          </ToggleButton>
        </VisionCard>
        
        <MissionCard expanded={expandedSections.mission}>
          <CardIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="currentColor"/>
              <path d="M7 12h2v5H7v-5zm8-5h2v10h-2V7zm-4 7h2v3h-2v-3zm0-4h2v2h-2v-2z" fill="currentColor"/>
            </svg>
          </CardIcon>
          <CardTitle>사명</CardTitle>
          
          {!expandedSections.mission ? (
            <CardContentShort>
              사용자에게 새로운 사진 경험을 제공하고, 대학생 커뮤니티를 연결하며, 데이터 기반으로 AI 발전에 기여합니다.
            </CardContentShort>
          ) : (
            <CardContentFull>
              {formatContent(detailContents.mission)}
            </CardContentFull>
          )}
          
          <ToggleButton 
            onClick={() => toggleSection('mission')}
            expanded={expandedSections.mission}
          >
            {expandedSections.mission ? '접기' : '자세히 보기'} 
            <IconArrow expanded={expandedSections.mission} />
          </ToggleButton>
        </MissionCard>
      </VisionMissionGrid>
      
      <AboutCompanySection expanded={expandedSections.about}>
        <AboutCompanyHeading>
          <AboutIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
            </svg>
          </AboutIcon>
          회사 소개
        </AboutCompanyHeading>
        
        {!expandedSections.about ? (
          <AboutContentShort>
            MUFI는 AI 기술을 활용해 사진 경험과 소셜 연결을 혁신하는 미래 지향적 기술 회사입니다. 우리는 포토부스를 통해 축제 시장에서 미디어 콘텐츠와 융합해 서비스를 확장하며, 사용자 데이터를 수집해 실세계 데이터 수집 인프라를 구축하고 있습니다.
          </AboutContentShort>
        ) : (
          <CardContentFull>
            {formatContent(detailContents.about)}
          </CardContentFull>
        )}
        
        <ToggleButton
          onClick={() => toggleSection('about')}
          expanded={expandedSections.about}
          variant="secondary"
        >
          {expandedSections.about ? '접기' : '자세히 알아보기'} 
          <IconArrow expanded={expandedSections.about} />
        </ToggleButton>
      </AboutCompanySection>
    </SectionContent>
  );
};

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const VisionMissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-top: 1rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  color: ${COLORS.RED};
  margin-bottom: 1.5rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: ${COLORS.BLACK};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${COLORS.RED};
    border-radius: 2px;
  }
`;

const CardContentShort = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardContentFull = styled.div`
  margin-bottom: 1.5rem;
  animation: expandContent 0.3s ease-out;
  
  @keyframes expandContent {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CardIntroText = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: ${COLORS.BLACK};
`;

const FeatureCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeatureCard = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(110, 124, 243, 0.1);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    border-color: rgba(110, 124, 243, 0.3);
  }
`;

const FeatureIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  min-width: 32px;
  color: ${COLORS.RED};
  background-color: rgba(110, 124, 243, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 6px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const FeatureContent = styled.p`
  font-size: 1.0625rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  margin: 0;
`;

const DetailParagraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

interface ExpandableCardProps {
  expanded: boolean;
}

const VisionCard = styled.div<ExpandableCardProps>`
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  ${props => props.expanded && `
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    border-color: rgba(110, 124, 243, 0.2);
  `}
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    border-color: rgba(110, 124, 243, 0.2);
  }
`;

const MissionCard = styled(VisionCard)`
  /* 미션 카드에 특별한 스타일이 필요하면 여기에 추가 */
`;

const AboutIcon = styled.div`
  width: 32px;
  height: 32px;
  color: ${COLORS.RED};
  margin-right: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const AboutCompanySection = styled.div<ExpandableCardProps>`
  background: linear-gradient(to right, rgba(110, 124, 243, 0.05), rgba(255, 255, 255, 0.8));
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(110, 124, 243, 0.1);
  margin-top: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  ${props => props.expanded && `
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    border-color: rgba(110, 124, 243, 0.2);
  `}
  
  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    border-color: rgba(110, 124, 243, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, ${COLORS.RED}, ${COLORS.BLUE});
    border-radius: 4px 0 0 4px;
  }
`;

const AboutCompanyHeading = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
  display: flex;
  align-items: center;
`;

const AboutContentShort = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.85;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

interface ToggleButtonProps {
  expanded: boolean;
  variant?: 'primary' | 'secondary';
}

const ToggleButton = styled.button<ToggleButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${props => props.variant === 'secondary' ? COLORS.BLUE : COLORS.RED};
  font-weight: 600;
  font-size: 1.05rem;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: auto;
  
  &:hover {
    opacity: 0.8;
    transform: translateX(${props => props.expanded ? '-5px' : '5px'});
  }
`;

const IconArrow = styled.span<{ expanded: boolean }>`
  display: inline-block;
  width: 18px;
  height: 18px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${props => props.expanded ? 'rotate(90deg)' : 'rotate(0deg)'};
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 12px;
    height: 2px;
    background-color: currentColor;
    transform: translateY(-50%);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: ${props => props.expanded ? '6px' : '0'};
    width: 8px;
    height: 8px;
    border-top: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: translateY(-50%) rotate(${props => props.expanded ? '135deg' : '45deg'});
  }
`; 