import React from 'react';
import { Container, Header, Title, Subtitle, Content, Section } from './styles';
import { RelationshipGraph } from './RelationshipGraph';
import { BusinessAreas } from './BusinessAreas';
import { MarketAnalysis } from './MarketAnalysis';
import { BusinessModel } from './BusinessModel';
import { ExpansionStrategy } from './ExpansionStrategy';
import { FinancialPlan } from './FinancialPlan';
import { TeamComposition } from './TeamComposition';
import { InvestmentPlan } from './InvestmentPlan';
import { Contact } from './Contact';
import { AIAgentCaseStudy } from './AIAgentCaseStudy';

export const IR: React.FC = () => {
  return (
    <Section>
      <Container>
        <Header>
          <Title>MUFI 사업 IR</Title>
          <Subtitle>투자자 및 파트너를 위한 정보</Subtitle>
        </Header>
        
        <Content>
          <MarketAnalysis />
        </Content>
        
        <Content>
          <BusinessAreas />
        </Content>
        
        <Content>
          <BusinessModel />
        </Content>
        
        <Content>
          <AIAgentCaseStudy />
        </Content>
        
        <Content>
          <RelationshipGraph />
        </Content>
        
        <Content>
          <ExpansionStrategy />
        </Content>
        
        <Content>
          <FinancialPlan />
        </Content>
        
        <Content>
          <InvestmentPlan />
        </Content>
        
        <Content>
          <TeamComposition />
        </Content>
        
        <Content>
          <Contact />
        </Content>
      </Container>
    </Section>
  );
}; 