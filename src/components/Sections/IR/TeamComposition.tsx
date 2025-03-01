import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

export const TeamComposition: React.FC = () => {
  return (
    <SectionContent>
      <Paragraph>
        MUFI는 AI, 하드웨어, 소프트웨어 전문가로 구성된 다양한 배경의 팀원들이 모여 
        혁신적인 제품과 서비스를 개발하고 있습니다. 각 분야의 전문성을 바탕으로 
        <span style={{ fontWeight: 'bold' }}>포토부스 운영, AI 에이전트 개발, 소셜 플랫폼 구축</span>을 위한 최적의 팀을 구성했습니다.
        2027년까지의 성장 계획에 맞춰 각 사업 영역별 전문가 확보 및 팀 확장을 진행하고 있습니다.
      </Paragraph>
      
      <TeamGrid>
        <TeamMemberCard>
          <TeamMemberAvatar>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
          </TeamMemberAvatar>
          <TeamMemberInfo>
            <TeamMemberName>CEO</TeamMemberName>
            <TeamMemberTitle>최고경영자</TeamMemberTitle>
            <TeamMemberDescription>
              AI 분야 5년 경력을 보유한 전문가로, 스타트업 창업 및 운영 경험이 있습니다. 
              비전 수립, 전략 기획, 투자 유치를 담당하며 팀을 이끌고 있습니다.
              <TeamMemberFocus>주요 담당: 사업 전략, 투자 유치, 성장 로드맵 수립</TeamMemberFocus>
            </TeamMemberDescription>
          </TeamMemberInfo>
        </TeamMemberCard>
        
        <TeamMemberCard>
          <TeamMemberAvatar>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
          </TeamMemberAvatar>
          <TeamMemberInfo>
            <TeamMemberName>CTO</TeamMemberName>
            <TeamMemberTitle>최고기술책임자</TeamMemberTitle>
            <TeamMemberDescription>
              AI 이미지 처리 전문가로, 컴퓨터 비전 및 머신러닝 분야에서 다수의 프로젝트를 수행했습니다. 
              기술 개발 전략 수립 및 R&D 팀을 이끌고 있습니다.
              <TeamMemberFocus>주요 담당: AI 에이전트 개발, 기술 로드맵, 데이터 파이프라인 구축</TeamMemberFocus>
            </TeamMemberDescription>
          </TeamMemberInfo>
        </TeamMemberCard>
        
        <TeamMemberCard>
          <TeamMemberAvatar>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
          </TeamMemberAvatar>
          <TeamMemberInfo>
            <TeamMemberName>COO</TeamMemberName>
            <TeamMemberTitle>최고운영책임자</TeamMemberTitle>
            <TeamMemberDescription>
              소규모 사업 운영 3년 경력을 보유하고 있으며, 포토부스 사업 운영 및 
              파트너십 관리를 담당하고 있습니다. 효율적인 운영 프로세스 구축에 전문성을 갖추고 있습니다.
            </TeamMemberDescription>
          </TeamMemberInfo>
        </TeamMemberCard>
        
        <TeamMemberCard>
          <TeamMemberAvatar>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
          </TeamMemberAvatar>
          <TeamMemberInfo>
            <TeamMemberName>CSO</TeamMemberName>
            <TeamMemberTitle>최고영업책임자</TeamMemberTitle>
            <TeamMemberDescription>
              B2B 영업 4년 경력을 보유하고 있으며, 기업 고객 발굴 및 파트너십 구축을 
              담당하고 있습니다. 데이터 판매 및 AI 에이전트 사업의 영업 전략을 수립하고 있습니다.
            </TeamMemberDescription>
          </TeamMemberInfo>
        </TeamMemberCard>
        
        <TeamMemberCard>
          <TeamMemberAvatar>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
          </TeamMemberAvatar>
          <TeamMemberInfo>
            <TeamMemberName>CPO</TeamMemberName>
            <TeamMemberTitle>최고제품책임자</TeamMemberTitle>
            <TeamMemberDescription>
              UX/UI 디자인 및 제품 개발 경험이 풍부하며, 사용자 중심의 제품 설계를 
              담당하고 있습니다. 소셜 플랫폼 및 포토부스 인터페이스 개발을 주도하고 있습니다.
            </TeamMemberDescription>
          </TeamMemberInfo>
        </TeamMemberCard>
      </TeamGrid>
      
      <AdvisoryBoard>
        <AdvisoryBoardTitle>자문단</AdvisoryBoardTitle>
        <AdvisoryBoardGrid>
          <AdvisorCard>
            <AdvisorAvatar>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
              </svg>
            </AdvisorAvatar>
            <AdvisorInfo>
              <AdvisorName>AI 연구 자문</AdvisorName>
              <AdvisorDescription>
                국내 유수 대학 AI 연구소 교수로, 컴퓨터 비전 및 머신러닝 분야의 
                전문가입니다. 기술 개발 방향 및 연구 협력을 자문하고 있습니다.
              </AdvisorDescription>
            </AdvisorInfo>
          </AdvisorCard>
          
          <AdvisorCard>
            <AdvisorAvatar>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
              </svg>
            </AdvisorAvatar>
            <AdvisorInfo>
              <AdvisorName>비즈니스 전략 자문</AdvisorName>
              <AdvisorDescription>
                벤처캐피탈 파트너로, 스타트업 투자 및 성장 전략 수립에 
                풍부한 경험을 보유하고 있습니다. 사업 확장 및 투자 유치 전략을 자문하고 있습니다.
              </AdvisorDescription>
            </AdvisorInfo>
          </AdvisorCard>
          
          <AdvisorCard>
            <AdvisorAvatar>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
              </svg>
            </AdvisorAvatar>
            <AdvisorInfo>
              <AdvisorName>법률 및 규제 자문</AdvisorName>
              <AdvisorDescription>
                IT 및 데이터 프라이버시 전문 변호사로, 개인정보 보호 및 
                데이터 활용에 관한 법률 자문을 제공하고 있습니다.
              </AdvisorDescription>
            </AdvisorInfo>
          </AdvisorCard>
        </AdvisoryBoardGrid>
      </AdvisoryBoard>
      
      <Partnerships>
        <PartnershipsTitle>협력 기관</PartnershipsTitle>
        <PartnershipsList>
          <PartnershipItem>
            <PartnershipIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" fill="currentColor"/>
              </svg>
            </PartnershipIcon>
            <PartnershipInfo>
              <PartnershipName>대학 연구 협력</PartnershipName>
              <PartnershipDescription>
                국내 주요 대학 AI 연구소와 협력하여 최신 기술 개발 및 
                인재 확보를 위한 파트너십을 구축하고 있습니다.
              </PartnershipDescription>
            </PartnershipInfo>
          </PartnershipItem>
          
          <PartnershipItem>
            <PartnershipIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" fill="currentColor"/>
              </svg>
            </PartnershipIcon>
            <PartnershipInfo>
              <PartnershipName>기업 파트너십</PartnershipName>
              <PartnershipDescription>
                국내 주요 기업들과 AI 기술 및 데이터 활용을 위한 
                전략적 파트너십을 구축하고 있습니다.
              </PartnershipDescription>
            </PartnershipInfo>
          </PartnershipItem>
          
          <PartnershipItem>
            <PartnershipIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="currentColor"/>
              </svg>
            </PartnershipIcon>
            <PartnershipInfo>
              <PartnershipName>스타트업 생태계</PartnershipName>
              <PartnershipDescription>
                국내 주요 스타트업 액셀러레이터 및 인큐베이터와 협력하여 
                성장 지원 및 네트워킹 기회를 확보하고 있습니다.
              </PartnershipDescription>
            </PartnershipInfo>
          </PartnershipItem>
        </PartnershipsList>
      </Partnerships>
      
      <TeamInfo>
        <TeamInfoHeading>사업 영역별 인력 구성 계획 (2027년 목표)</TeamInfoHeading>
        <TeamInfoGrid>
          <TeamInfoCard>
            <TeamInfoIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="currentColor"/>
              </svg>
            </TeamInfoIcon>
            <TeamInfoCardTitle>포토부스 사업팀</TeamInfoCardTitle>
            <TeamInfoMetric>18명</TeamInfoMetric>
            <TeamInfoList>
              <TeamInfoItem>하드웨어 엔지니어 6명</TeamInfoItem>
              <TeamInfoItem>현장 운영 전문가 4명</TeamInfoItem>
              <TeamInfoItem>공급망 관리자 3명</TeamInfoItem>
              <TeamInfoItem>품질 관리자 3명</TeamInfoItem>
              <TeamInfoItem>마케팅 전문가 2명</TeamInfoItem>
            </TeamInfoList>
          </TeamInfoCard>
          
          <TeamInfoCard>
            <TeamInfoIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
              </svg>
            </TeamInfoIcon>
            <TeamInfoCardTitle>AI 에이전트팀</TeamInfoCardTitle>
            <TeamInfoMetric>22명</TeamInfoMetric>
            <TeamInfoList>
              <TeamInfoItem>AI 연구원 8명</TeamInfoItem>
              <TeamInfoItem>백엔드 개발자 5명</TeamInfoItem>
              <TeamInfoItem>데이터 과학자 4명</TeamInfoItem>
              <TeamInfoItem>MLOps 엔지니어 3명</TeamInfoItem>
              <TeamInfoItem>UX 연구원 2명</TeamInfoItem>
            </TeamInfoList>
          </TeamInfoCard>
          
          <TeamInfoCard>
            <TeamInfoIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
              </svg>
            </TeamInfoIcon>
            <TeamInfoCardTitle>소셜 플랫폼팀</TeamInfoCardTitle>
            <TeamInfoMetric>15명</TeamInfoMetric>
            <TeamInfoList>
              <TeamInfoItem>프론트엔드 개발자 5명</TeamInfoItem>
              <TeamInfoItem>백엔드 개발자 4명</TeamInfoItem>
              <TeamInfoItem>UI/UX 디자이너 3명</TeamInfoItem>
              <TeamInfoItem>콘텐츠 전략가 2명</TeamInfoItem>
              <TeamInfoItem>커뮤니티 매니저 1명</TeamInfoItem>
            </TeamInfoList>
          </TeamInfoCard>
        </TeamInfoGrid>
        
        <TeamInfoNote>
          * 2025년 초기 15명에서 시작하여 매년 단계적으로 팀을 확장할 예정입니다.
          * 2026년 35명, 2027년 55명으로 인력 규모 확대 계획을 수립하였습니다.
          * 세 팀 외에도 경영지원 및 공통 기술 인력 포함 총 65명 규모로 성장할 예정입니다.
        </TeamInfoNote>
      </TeamInfo>
    </SectionContent>
  );
};

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${MEDIA_QUERIES.DESKTOP} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamMemberCard = styled.div`
  display: flex;
  flex-direction: column;
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

const TeamMemberAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${COLORS.RED};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    width: 60%;
    height: 60%;
  }
`;

const TeamMemberInfo = styled.div`
  text-align: center;
`;

const TeamMemberName = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${COLORS.BLACK};
`;

const TeamMemberTitle = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${COLORS.RED};
`;

const TeamMemberDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const TeamMemberFocus = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const AdvisoryBoard = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const AdvisoryBoardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const AdvisoryBoardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AdvisorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const AdvisorAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${COLORS.BLACK};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  svg {
    width: 60%;
    height: 60%;
  }
`;

const AdvisorInfo = styled.div`
  text-align: center;
`;

const AdvisorName = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${COLORS.BLACK};
`;

const AdvisorDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const Partnerships = styled.div`
  margin-top: 2rem;
`;

const PartnershipsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const PartnershipsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PartnershipItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
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

const PartnershipIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const PartnershipInfo = styled.div`
  flex: 1;
`;

const PartnershipName = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${COLORS.BLACK};
`;

const PartnershipDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const TeamInfo = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const TeamInfoHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const TeamInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const TeamInfoIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const TeamInfoCardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${COLORS.BLACK};
`;

const TeamInfoMetric = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const TeamInfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TeamInfoItem = styled.li`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  margin-bottom: 0.25rem;
`;

const TeamInfoNote = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  margin-top: 1rem;
`; 