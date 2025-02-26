import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

export const InvestmentPlan: React.FC = () => {
  return (
    <SectionContent>
      <Paragraph>
        MUFI는 단계적인 투자 유치 계획을 통해 사업 확장과 기술 개발을 가속화하고자 합니다.
        초기 시드 투자를 시작으로 시리즈 A 투자 유치까지의 로드맵을 수립하였으며,
        각 단계별 명확한 목표와 자금 활용 계획을 제시합니다.
      </Paragraph>
      
      <InvestmentStages>
        <StageCard>
          <StageHeader>
            <StageIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
              </svg>
            </StageIcon>
            <StageTitle>시드 투자 (현재)</StageTitle>
          </StageHeader>
          <StageDetails>
            <StageAmount>3억원</StageAmount>
            <StageDescription>
              <ul>
                <li>초기 프로토타입 개발 및 테스트</li>
                <li>첫 10개 포토부스 설치 및 운영</li>
                <li>핵심 팀원 구성 및 운영 비용</li>
              </ul>
            </StageDescription>
          </StageDetails>
        </StageCard>
        
        <StageCard>
          <StageHeader>
            <StageIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" fill="currentColor"/>
              </svg>
            </StageIcon>
            <StageTitle>프리 시리즈 A (2025년 Q3)</StageTitle>
          </StageHeader>
          <StageDetails>
            <StageAmount>10억원</StageAmount>
            <StageDescription>
              <ul>
                <li>포토부스 50대 확장 설치</li>
                <li>소셜 플랫폼 베타 버전 출시</li>
                <li>AI 기술 고도화 및 데이터 수집 인프라 구축</li>
                <li>마케팅 및 사용자 확보 전략 실행</li>
              </ul>
            </StageDescription>
          </StageDetails>
        </StageCard>
        
        <StageCard>
          <StageHeader>
            <StageIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.11-.9 2-2 2h-2v2h4v2H9v-4c0-1.11.9-2 2-2h2V9H9V7h4c1.1 0 2 .89 2 2v2z" fill="currentColor"/>
              </svg>
            </StageIcon>
            <StageTitle>시리즈 A (2026년 Q4)</StageTitle>
          </StageHeader>
          <StageDetails>
            <StageAmount>50억원</StageAmount>
            <StageDescription>
              <ul>
                <li>전국 200대 이상 포토부스 확장</li>
                <li>소셜 플랫폼 정식 출시 및 사용자 100,000명 확보</li>
                <li>B2B 데이터 판매 모델 구축</li>
                <li>해외 시장 진출 준비 (일본, 동남아시아)</li>
              </ul>
            </StageDescription>
          </StageDetails>
        </StageCard>
      </InvestmentStages>
      
      <FundingAllocation>
        <FundingTitle>투자금 활용 계획</FundingTitle>
        <FundingChart>
          <svg width="100%" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 연구 개발 (35%) */}
            <path d="M300 150 L300 0 A150 150 0 0 1 429.9 75 Z" fill={COLORS.RED} fillOpacity="0.8" />
            <text x="350" y="60" fill={COLORS.BLACK} fontWeight="bold">R&D 35%</text>
            
            {/* 사업 확장 (30%) */}
            <path d="M300 150 L429.9 75 A150 150 0 0 1 429.9 225 Z" fill={COLORS.BLUE} fillOpacity="0.8" />
            <text x="450" y="150" fill={COLORS.BLACK} fontWeight="bold">사업 확장 30%</text>
            
            {/* 마케팅 (20%) */}
            <path d="M300 150 L429.9 225 A150 150 0 0 1 300 300 Z" fill={COLORS.GREEN} fillOpacity="0.8" />
            <text x="350" y="250" fill={COLORS.BLACK} fontWeight="bold">마케팅 20%</text>
            
            {/* 운영 비용 (15%) */}
            <path d="M300 150 L300 300 A150 150 0 0 1 170.1 225 Z" fill={COLORS.YELLOW} fillOpacity="0.8" />
            <text x="220" y="250" fill={COLORS.BLACK} fontWeight="bold">운영 비용 15%</text>
          </svg>
        </FundingChart>
        <FundingDetails>
          <FundingItem>
            <FundingItemColor style={{ background: COLORS.RED }} />
            <FundingItemTitle>연구 개발 (35%)</FundingItemTitle>
            <FundingItemDescription>
              AI 알고리즘 개발, 이미지 처리 기술 고도화, 소셜 플랫폼 개발, 
              데이터 수집 및 분석 인프라 구축
            </FundingItemDescription>
          </FundingItem>
          
          <FundingItem>
            <FundingItemColor style={{ background: COLORS.BLUE }} />
            <FundingItemTitle>사업 확장 (30%)</FundingItemTitle>
            <FundingItemDescription>
              포토부스 하드웨어 제작 및 설치, 지역 확장, 
              파트너십 구축, 해외 시장 진출 준비
            </FundingItemDescription>
          </FundingItem>
          
          <FundingItem>
            <FundingItemColor style={{ background: COLORS.GREEN }} />
            <FundingItemTitle>마케팅 (20%)</FundingItemTitle>
            <FundingItemDescription>
              브랜드 인지도 구축, 사용자 확보 캠페인, 
              대학 내 마케팅 활동, 온라인 광고
            </FundingItemDescription>
          </FundingItem>
          
          <FundingItem>
            <FundingItemColor style={{ background: COLORS.YELLOW }} />
            <FundingItemTitle>운영 비용 (15%)</FundingItemTitle>
            <FundingItemDescription>
              인력 채용 및 유지, 사무실 운영, 
              법률 및 행정 비용, 기타 운영 경비
            </FundingItemDescription>
          </FundingItem>
        </FundingDetails>
      </FundingAllocation>
      
      <InvestorValue>
        <InvestorValueTitle>투자자 가치 제안</InvestorValueTitle>
        <ValuePropositions>
          <ValueCard>
            <ValueIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" fill="currentColor"/>
              </svg>
            </ValueIcon>
            <ValueTitle>높은 성장 잠재력</ValueTitle>
            <ValueDescription>
              대학생 타겟 시장에서 시작하여 전국 및 아시아 시장으로 확장 가능한 
              비즈니스 모델로, 2027년까지 연 매출 100억원 이상 목표
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z" fill="currentColor"/>
              </svg>
            </ValueIcon>
            <ValueTitle>독자적 데이터 자산</ValueTitle>
            <ValueDescription>
              실제 사용자 데이터를 기반으로 한 AI 모델 개발 및 
              B2B 데이터 판매를 통한 추가 수익 창출 가능성
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12V5zM7 7.25h2.5V6.5H7V5h4v3.75H8.5v.75H11V11H7V7.25zM19 13l-6 6-4-4-4 4v-2.5l4-4 4 4 6-6V13z" fill="currentColor"/>
              </svg>
            </ValueIcon>
            <ValueTitle>다양한 수익 모델</ValueTitle>
            <ValueDescription>
              포토부스 렌탈, 소셜 플랫폼 프리미엄 구독, 광고 수익, 
              B2B 데이터 판매 등 다양한 수익원을 통한 안정적 성장
            </ValueDescription>
          </ValueCard>
        </ValuePropositions>
      </InvestorValue>
      
      <ExitStrategy>
        <ExitStrategyTitle>투자금 회수 전략</ExitStrategyTitle>
        <ExitOptions>
          <ExitOption>
            <ExitOptionIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 5h-1.5v7h-1.5V8H12V6.5h5V8zm-5 5h-1.5V9H9v4H7.5V9H6V7.5h6V13z" fill="currentColor"/>
              </svg>
            </ExitOptionIcon>
            <ExitOptionTitle>M&A (2028-2029)</ExitOptionTitle>
            <ExitOptionDescription>
              대형 IT 기업 또는 엔터테인먼트 기업에 의한 인수 합병을 통한 
              투자금 회수. 예상 기업 가치 500억원 이상.
            </ExitOptionDescription>
          </ExitOption>
          
          <ExitOption>
            <ExitOptionIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2.5 11.5h-7v-1h7v1zm0-2h-7v-1h7v1zm0-2h-7v-1h7v1zm0-2h-7v-1h7v1z" fill="currentColor"/>
              </svg>
            </ExitOptionIcon>
            <ExitOptionTitle>IPO (2030 이후)</ExitOptionTitle>
            <ExitOptionDescription>
              국내 코스닥 시장 상장을 통한 투자금 회수. 
              예상 기업 가치 1,000억원 이상.
            </ExitOptionDescription>
          </ExitOption>
        </ExitOptions>
      </ExitStrategy>
    </SectionContent>
  );
};

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const InvestmentStages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    flex-direction: row;
  }
`;

const StageCard = styled.div`
  flex: 1;
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

const StageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StageIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const StageTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
`;

const StageDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StageAmount = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLORS.RED};
`;

const StageDescription = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  
  ul {
    padding-left: 1.5rem;
    margin: 0;
    
    li {
      margin-bottom: 0.5rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const FundingAllocation = styled.div`
  margin-top: 1rem;
`;

const FundingTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const FundingChart = styled.div`
  margin-bottom: 2rem;
  
  svg {
    max-height: 300px;
    margin: 0 auto;
    display: block;
  }
`;

const FundingDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FundingItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: ${COLORS.WHITE};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
`;

const FundingItemColor = styled.div`
  width: 40px;
  height: 8px;
  border-radius: 4px;
`;

const FundingItemTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
`;

const FundingItemDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const InvestorValue = styled.div`
  margin-top: 1rem;
`;

const InvestorValueTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const ValuePropositions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  color: ${COLORS.RED};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ValueTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const ValueDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const ExitStrategy = styled.div`
  margin-top: 1rem;
`;

const ExitStrategyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const ExitOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ExitOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

const ExitOptionIcon = styled.div`
  width: 60px;
  height: 60px;
  color: ${COLORS.RED};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ExitOptionTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const ExitOptionDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`; 