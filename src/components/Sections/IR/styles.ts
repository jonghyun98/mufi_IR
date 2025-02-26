import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

export const Section = styled.section`
  background: ${COLORS.WHITE};
  padding: 100px 0;
  color: ${COLORS.BLACK};
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: ${COLORS.RED};
  }
  
  ${MEDIA_QUERIES.TABLET} {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.8;
  margin-top: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    font-size: 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const IRSection = styled.section`
  background: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
  
  ${MEDIA_QUERIES.TABLET} {
    padding: 3rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${COLORS.BLACK};
  position: relative;
  padding-left: 1.25rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    height: 1.5rem;
    width: 5px;
    background: ${COLORS.RED};
    border-radius: 2px;
  }
  
  ${MEDIA_QUERIES.TABLET} {
    font-size: 2rem;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`; 