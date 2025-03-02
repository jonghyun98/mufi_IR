import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const ExpansionStrategy: React.FC = () => {
  // 대학 파트너십 데이터
  const universityPartnerships = [
    { name: '서울대학교', students: 16000, festivalSize: 'Large', conversionRate: 22, revenue: 2880 },
    { name: '연세대학교', students: 15000, festivalSize: 'Large', conversionRate: 20, revenue: 2400 },
    { name: '고려대학교', students: 18000, festivalSize: 'Large', conversionRate: 18, revenue: 2590 },
    { name: '성균관대학교', students: 12000, festivalSize: 'Medium', conversionRate: 15, revenue: 1440 },
    { name: '경희대학교', students: 11000, festivalSize: 'Medium', conversionRate: 16, revenue: 1410 },
    { name: '건국대학교', students: 10000, festivalSize: 'Medium', conversionRate: 14, revenue: 1120 },
    { name: '동국대학교', students: 10500, festivalSize: 'Medium', conversionRate: 15, revenue: 1260 },
    { name: '삼육대학교', students: 7000, festivalSize: 'Small', conversionRate: 17, revenue: 950 },
    { name: '충북대학교', students: 8500, festivalSize: 'Medium', conversionRate: 13, revenue: 880 },
    { name: '서원대학교', students: 5000, festivalSize: 'Small', conversionRate: 12, revenue: 480 },
    { name: '청주대학교', students: 6500, festivalSize: 'Small', conversionRate: 14, revenue: 730 }
  ];
  
  // 대학 확장 계획 데이터
  const universityExpansionData = [
    { name: '2024', universities: 11, revenue: 16140 },
    { name: '2025', universities: 25, revenue: 32800 },
    { name: '2026', universities: 45, revenue: 58700 },
    { name: '2027', universities: 60, revenue: 78400 }
  ];

  return (
    <SectionContent>
      <Paragraph>
        MUFI는 작게 시작해 점진적으로 확장하는 전략을 채택하고 있습니다. 
        단계별 사업 확장 전략은 다음과 같습니다:
      </Paragraph>
      
      <TimelineContainer>
        <Timeline>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineDate>2025</TimelineDate>
              <TimelineTitle>1단계: 초기 시장 침투</TimelineTitle>
              <TimelineDescription>
                <TimelineList>
                  <TimelineListItem>
                    서울 내 소규모 사업자 10개와 포토부스 임대 계약 체결 (연 10억 원)
                  </TimelineListItem>
                  <TimelineListItem>
                    대학생 소셜 플랫폼 베타 테스트 및 초기 사용자 확보
                  </TimelineListItem>
                  <TimelineListItem>
                    손익분기점 달성 및 안정적 현금흐름 확보
                  </TimelineListItem>
                  <TimelineListItem>
                    AI 에이전트 초기 버전 개발 및 테스트 
                  </TimelineListItem>
                </TimelineList>
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineDate>2026</TimelineDate>
              <TimelineTitle>2단계: 시장 확대</TimelineTitle>
              <TimelineDescription>
                <TimelineList>
                  <TimelineListItem>
                    포토부스 설치 지점을 50개로 확대 (연 42억 원 매출)
                  </TimelineListItem>
                  <TimelineListItem>
                    소셜 플랫폼 정식 런칭 및 5만 사용자 확보
                  </TimelineListItem>
                  <TimelineListItem>
                    B2B 시장 진출 및 AI 솔루션 초기 계약 체결
                  </TimelineListItem>
                  <TimelineListItem>
                    영업이익 5억 원 달성, 본격적인 서비스 확장 체제 구축
                  </TimelineListItem>
                </TimelineList>
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineDate>2027</TimelineDate>
              <TimelineTitle>3단계: 성장 가속화</TimelineTitle>
              <TimelineDescription>
                <TimelineList>
                  <TimelineListItem>
                    포토부스 설치 지점 200개 이상으로 확대 (연 100.8억 원 매출)
                  </TimelineListItem>
                  <TimelineListItem>
                    소셜 플랫폼 사용자 20만 명 확보 (연 19.2억 원 매출)
                  </TimelineListItem>
                  <TimelineListItem>
                    B2B AI 솔루션 매출 42억 원 달성
                  </TimelineListItem>
                  <TimelineListItem>
                    데이터 판매 수익 5억 원 확보 시작
                  </TimelineListItem>
                </TimelineList>
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </TimelineContainer>
      
      <UniversityPartnershipSection>
        <UniversityPartnershipTitle>대학 파트너십 확장 계획</UniversityPartnershipTitle>
        <UniversityPartnershipDescription>
          MUFI의 주요 타겟 고객인 대학생들에게 접근하기 위해 국내 유수 대학교들과의 파트너십을 적극적으로 확대하고 있습니다. 
          2024년 현재 11개 대학과 파트너십을 체결하였으며, 2027년까지 60개 대학으로 확장할 계획입니다.
        </UniversityPartnershipDescription>
        
        <ExpansionChartContainer>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={universityExpansionData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke={COLORS.RED} />
              <YAxis yAxisId="right" orientation="right" stroke={COLORS.BLUE} />
              <Tooltip formatter={(value, name) => {
                if (name === 'universities') return [`${value}개`, '대학교 수'];
                if (name === 'revenue') return [`${value.toLocaleString()}만원`, '예상 매출'];
                return [value, name];
              }} />
              <Bar yAxisId="left" dataKey="universities" fill={COLORS.RED} name="대학교 수">
                {universityExpansionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS.RED} />
                ))}
              </Bar>
              <Bar yAxisId="right" dataKey="revenue" fill={COLORS.BLUE} name="예상 매출">
                {universityExpansionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS.BLUE} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ExpansionChartContainer>
        
        <UniversityPartnershipsTable>
          <UniversityTableHeader>
            <UniversityHeaderCell>대학명</UniversityHeaderCell>
            <UniversityHeaderCell>학생 수</UniversityHeaderCell>
            <UniversityHeaderCell>축제 규모</UniversityHeaderCell>
            <UniversityHeaderCell>매칭 서비스 전환율</UniversityHeaderCell>
            <UniversityHeaderCell>예상 월 매출</UniversityHeaderCell>
          </UniversityTableHeader>
          
          <UniversityTableBody>
            {universityPartnerships.map((university, index) => (
              <UniversityTableRow key={index}>
                <UniversityCell>{university.name}</UniversityCell>
                <UniversityCell>{university.students.toLocaleString()}명</UniversityCell>
                <UniversityCell>
                  {university.festivalSize === 'Large' ? '대규모' : 
                   university.festivalSize === 'Medium' ? '중규모' : '소규모'}
                </UniversityCell>
                <UniversityCell>{university.conversionRate}%</UniversityCell>
                <UniversityCell>{university.revenue.toLocaleString()}만원</UniversityCell>
              </UniversityTableRow>
            ))}
          </UniversityTableBody>
        </UniversityPartnershipsTable>
        
        <PartnershipBenefits>
          <PartnershipBenefit>
            <BenefitTitle>주요 혜택 및 협력 방식</BenefitTitle>
            <BenefitContent>
              <BenefitItem>각 대학 축제 및 행사 시 포토부스 우선 설치권 확보</BenefitItem>
              <BenefitItem>학내 상설 포토부스 설치 및 운영 (도서관, 학생회관 등)</BenefitItem>
              <BenefitItem>대학생 대상 매칭/소개팅 서비스 우선 접근권 제공</BenefitItem>
              <BenefitItem>대학별 특화 콘텐츠 및 필터 제작 협업</BenefitItem>
              <BenefitItem>학생회 및 동아리 연계 마케팅 프로그램 운영</BenefitItem>
            </BenefitContent>
          </PartnershipBenefit>
          
          <PartnershipBenefit>
            <BenefitTitle>대학별 맞춤형 전략</BenefitTitle>
            <BenefitContent>
              <BenefitItem><Strong>대형 대학:</Strong> 여러 단과대학에 분산 설치, 대규모 축제 참여, 전용 필터 개발</BenefitItem>
              <BenefitItem><Strong>중소형 대학:</Strong> 집중 거점 확보, 학교 특성에 맞는 이벤트 기획</BenefitItem>
              <BenefitItem><Strong>지방 대학:</Strong> 지역 특성을 반영한 콘텐츠, 기숙사 중심 서비스 개발</BenefitItem>
              <BenefitItem><Strong>특성화 대학:</Strong> 전공 특성에 맞는 테마형 서비스 제공 (예술대학-창작 필터 등)</BenefitItem>
            </BenefitContent>
          </PartnershipBenefit>
        </PartnershipBenefits>
      </UniversityPartnershipSection>
      
      <ExpansionStrategies>
        <ExpansionStrategyCard>
          <ExpansionStrategyIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
            </svg>
          </ExpansionStrategyIcon>
          <ExpansionStrategyTitle>지역 확장 전략</ExpansionStrategyTitle>
          <ExpansionStrategyContent>
            서울 중심의 초기 시장에서 시작하여 주요 대도시, 전국, 그리고 아시아 시장으로 
            단계적 확장을 진행합니다. 각 지역의 특성과 문화를 고려한 현지화 전략을 수립하고, 
            현지 파트너와의 협력을 통해 시장 진입 장벽을 낮춥니다.
          </ExpansionStrategyContent>
        </ExpansionStrategyCard>
        
        <ExpansionStrategyCard>
          <ExpansionStrategyIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" fill="currentColor"/>
            </svg>
          </ExpansionStrategyIcon>
          <ExpansionStrategyTitle>수직적 통합 전략</ExpansionStrategyTitle>
          <ExpansionStrategyContent>
            포토부스 하드웨어 제조부터 소프트웨어 개발, 데이터 분석, AI 모델 훈련까지 
            가치 사슬 전반을 통합하여 경쟁 우위를 확보합니다. 이를 통해 비용 효율성을 
            높이고 품질 관리를 강화하며, 혁신적인 제품과 서비스를 지속적으로 개발합니다.
          </ExpansionStrategyContent>
        </ExpansionStrategyCard>
        
        <ExpansionStrategyCard>
          <ExpansionStrategyIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="currentColor"/>
            </svg>
          </ExpansionStrategyIcon>
          <ExpansionStrategyTitle>재무 성장 전략</ExpansionStrategyTitle>
          <ExpansionStrategyContent>
            초기에는 포토부스 임대 수익을 기반으로 안정적인 현금 흐름을 확보하고, 
            점차 소셜 플랫폼의 구독 모델과 데이터 판매 수익으로 확장합니다. 
            2025년 매출 10억 원, 2026년 42억 원, 2027년 168억 원을 목표로 하며, 
            B2B 데이터 판매는 2027년부터 연간 5억 원 이상의 추가 수익을 창출할 계획입니다.
          </ExpansionStrategyContent>
        </ExpansionStrategyCard>
      </ExpansionStrategies>
      
      <RiskManagement>
        <RiskManagementTitle>위험 요인 및 대응 전략</RiskManagementTitle>
        <RiskGrid>
          <RiskCard>
            <RiskTitle>경쟁 위험</RiskTitle>
            <RiskDescription>
              초기 시장에서 경쟁자 진입 가능성이 있습니다.
            </RiskDescription>
            <RiskSolution>
              <strong>대응 전략:</strong> 지속적인 기술 혁신과 독점적 데이터 수집을 통한 진입 장벽 구축
            </RiskSolution>
          </RiskCard>
          
          <RiskCard>
            <RiskTitle>데이터 프라이버시</RiskTitle>
            <RiskDescription>
              개인정보 보호 규제 강화로 인한 데이터 활용 제한 가능성이 있습니다.
            </RiskDescription>
            <RiskSolution>
              <strong>대응 전략:</strong> GDPR, CCPA 등 글로벌 개인정보 보호 규정 준수 및 익명화 기술 강화
            </RiskSolution>
          </RiskCard>
          
          <RiskCard>
            <RiskTitle>경제 침체</RiskTitle>
            <RiskDescription>
              경기 침체로 인한 소비자 지출 감소 가능성이 있습니다.
            </RiskDescription>
            <RiskSolution>
              <strong>대응 전략:</strong> 유연한 가격 정책과 다양한 수익 모델 구축으로 리스크 분산
            </RiskSolution>
          </RiskCard>
        </RiskGrid>
      </RiskManagement>
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

const TimelineContainer = styled.div`
  margin: 2rem 0;
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
    width: 2px;
    background: ${COLORS.RED};
    
    ${MEDIA_QUERIES.TABLET} {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 50px;
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  ${MEDIA_QUERIES.TABLET} {
    padding-left: 0;
    width: 50%;
    
    &:nth-child(odd) {
      padding-right: 40px;
      text-align: right;
      margin-left: 0;
      margin-right: auto;
    }
    
    &:nth-child(even) {
      padding-left: 40px;
      text-align: left;
      margin-left: auto;
      margin-right: 0;
    }
  }
`;

const TimelinePoint = styled.div`
  position: absolute;
  top: 0;
  left: 15px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${COLORS.RED};
  border: 2px solid white;
  box-shadow: 0 0 0 4px rgba(255, 59, 48, 0.2);
  
  ${MEDIA_QUERIES.TABLET} {
    left: auto;
    right: -6px;
    
    ${TimelineItem}:nth-child(even) & {
      right: auto;
      left: -6px;
    }
  }
`;

const TimelineContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const TimelineDate = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: ${COLORS.RED};
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const TimelineTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
`;

const TimelineDescription = styled.div`
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const TimelineList = styled.ul`
  padding-left: 1.25rem;
  margin: 0;
`;

const TimelineListItem = styled.li`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ExpansionStrategies = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ExpansionStrategyCard = styled.div`
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

const ExpansionStrategyIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${COLORS.RED};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ExpansionStrategyTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${COLORS.BLACK};
`;

const ExpansionStrategyContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const RiskManagement = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const RiskManagementTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const RiskGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const RiskCard = styled.div`
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

const RiskTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${COLORS.BLACK};
`;

const RiskDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const RiskSolution = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  
  strong {
    font-weight: 600;
    opacity: 1;
  }
`;

const UniversityPartnershipSection = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const UniversityPartnershipTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const UniversityPartnershipDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const ExpansionChartContainer = styled.div`
  margin-bottom: 2rem;
`;

const UniversityPartnershipsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

const UniversityTableHeader = styled.thead`
  background: ${COLORS.RED};
  color: white;
`;

const UniversityHeaderCell = styled.th`
  padding: 0.75rem;
  text-align: left;
`;

const UniversityTableBody = styled.tbody`
  background: ${COLORS.WHITE};
`;

const UniversityTableRow = styled.tr`
  &:nth-child(even) {
    background: ${COLORS.WHITE};
  }
`;

const UniversityCell = styled.td`
  padding: 0.75rem;
  text-align: left;
`;

const PartnershipBenefits = styled.div`
  margin-top: 2rem;
`;

const PartnershipBenefit = styled.div`
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${COLORS.BLACK};
`;

const BenefitContent = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const BenefitItem = styled.p`
  margin-bottom: 0.5rem;
`;

const Strong = styled.strong`
  font-weight: 600;
  opacity: 1;
`; 