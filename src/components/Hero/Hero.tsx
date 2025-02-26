import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS } from '../../constants/colors';
import { MEDIA_QUERIES } from '../../constants/breakpoints';

const BRAND_MEANINGS = [
  {
    M: 'M',
    U: 'uin',
    F: 'F',
    I: 'ilm'
  },
  {
    M: 'Multi',
    U: 'Unit',
    F: 'Functional',
    I: 'Intelligence'
  },
  {
    M: 'My',
    U: 'University',
    F: 'Friends',
    I: 'Interact'
  }
] as const;

const SERVICES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" fill="currentColor"/>
      </svg>
    ),
    texts: ['포토부스', '대여', '플랫폼', '서비스']
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z" fill="currentColor"/>
      </svg>
    ),
    texts: ['기업', '맞춤형', 'AI', 'Agent']
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18h6v-1.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
      </svg>
    ),
    texts: ['대학생', '소셜', '플랫폼', '서비스']
  }
] as const;

const networkAnimation = keyframes`
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.5;
  }
`;

const moveNode = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(-20px, 20px) scale(1.2);
  }
  75% {
    transform: translate(20px, -20px) scale(0.9);
  }
`;

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.BLACK};
  padding: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    right: -10%;
    bottom: -10%;
    width: 40%;
    height: 40%;
    background: linear-gradient(135deg, ${COLORS.RED} 0%, rgba(234,67,67,0) 100%);
    filter: blur(120px);
    border-radius: 50%;
    opacity: 0.3;
  }

  &::after {
    content: '';
    position: absolute;
    left: -5%;
    top: -5%;
    width: 30%;
    height: 30%;
    background: linear-gradient(135deg, ${COLORS.RED} 0%, rgba(234,67,67,0) 100%);
    filter: blur(100px);
    border-radius: 50%;
    opacity: 0.2;
  }
`;

const NetworkContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
`;

const NetworkNode = styled.div<{ size: number; top: number; left: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  animation: ${moveNode} 12s infinite ease-in-out;
  animation-delay: ${props => props.delay}s;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 350px;
    height: 2px;
    background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%);
    transform-origin: left center;
    animation: ${networkAnimation} 6s infinite ease-in-out;
    animation-delay: ${props => props.delay + 1}s;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 2px;
    background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%);
    transform: rotate(120deg);
    transform-origin: left center;
    animation: ${networkAnimation} 8s infinite ease-in-out;
    animation-delay: ${props => props.delay + 2}s;
  }
`;

export const Hero: React.FC = () => {
  const [currentMeaning, setCurrentMeaning] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showService, setShowService] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTypingComplete(false);
      setShowService(false);
      setCurrentMeaning((prev) => (prev + 1) % BRAND_MEANINGS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 1800);

    const serviceTimer = setTimeout(() => {
      setShowService(true);
    }, 2000);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(serviceTimer);
    };
  }, [currentMeaning]);

  return (
    <HeroContainer>
      <NetworkContainer>
        <NetworkNode size={16} top={15} left={15} delay={0} />
        <NetworkNode size={20} top={25} left={75} delay={2} />
        <NetworkNode size={18} top={65} left={25} delay={4} />
        <NetworkNode size={22} top={75} left={85} delay={1} />
        <NetworkNode size={14} top={45} left={55} delay={3} />
        <NetworkNode size={18} top={35} left={35} delay={5} />
        <NetworkNode size={20} top={55} left={65} delay={2.5} />
      </NetworkContainer>
      <ContentWrapper>
        <MainContent>
          <SloganContainer>
            <MainSlogan>
              MUFI로 만드는<br />
              연결의 시작
            </MainSlogan>
            <SubSlogan>
              MUFI는 서비스와 사람을 연결해<br />
              새로운 가능성을 만듭니다
            </SubSlogan>
          </SloganContainer>
        </MainContent>
        <BrandExplanation>
          <BrandContainer>
            <BrandText>
              <BrandRow>
                <BrandLetter>M</BrandLetter>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMeaning}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CommandText
                      isComplete={isTypingComplete}
                      textLength={BRAND_MEANINGS[currentMeaning].M.length}
                      delay={0.2}
                    >
                      <span>{BRAND_MEANINGS[currentMeaning].M}</span>
                    </CommandText>
                  </motion.div>
                </AnimatePresence>
              </BrandRow>

              <BrandRow>
                <BrandLetter>U</BrandLetter>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMeaning}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CommandText
                      isComplete={isTypingComplete}
                      textLength={BRAND_MEANINGS[currentMeaning].U.length}
                      delay={0.4}
                    >
                      <span>{BRAND_MEANINGS[currentMeaning].U}</span>
                    </CommandText>
                  </motion.div>
                </AnimatePresence>
              </BrandRow>

              <BrandRow>
                <BrandLetter>F</BrandLetter>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMeaning}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CommandText
                      isComplete={isTypingComplete}
                      textLength={BRAND_MEANINGS[currentMeaning].F.length}
                      delay={0.6}
                    >
                      <span>{BRAND_MEANINGS[currentMeaning].F}</span>
                    </CommandText>
                  </motion.div>
                </AnimatePresence>
              </BrandRow>

              <BrandRow>
                <BrandLetter>I</BrandLetter>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMeaning}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CommandText
                      isComplete={isTypingComplete}
                      textLength={BRAND_MEANINGS[currentMeaning].I.length}
                      delay={0.8}
                    >
                      <span>{BRAND_MEANINGS[currentMeaning].I}</span>
                    </CommandText>
                  </motion.div>
                </AnimatePresence>
              </BrandRow>
            </BrandText>
            <ServiceContainer>
              <AnimatePresence mode="wait">
                {showService && (
                  <motion.div
                    key={currentMeaning}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ 
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <ServiceText>
                      <ServiceIcon>
                        {SERVICES[currentMeaning].icon}
                      </ServiceIcon>
                      <ServiceTextContent>
                        {SERVICES[currentMeaning].texts.map((text, index) => (
                          <span key={index}>
                            {text}
                            {index < SERVICES[currentMeaning].texts.length - 1 && " "}
                          </span>
                        ))}
                      </ServiceTextContent>
                    </ServiceText>
                  </motion.div>
                )}
              </AnimatePresence>
            </ServiceContainer>
          </BrandContainer>
        </BrandExplanation>
      </ContentWrapper>
    </HeroContainer>
  );
};

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const cursor = keyframes`
  from, to {
    border-right-color: ${COLORS.WHITE};
  }
  50% {
    border-right-color: transparent;
  }
`;

const glitch = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-1px);
  }
  75% {
    transform: translateX(1px);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const koreanTyping = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const clipIn = keyframes`
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
`;

const scaleIn = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

const ContentWrapper = styled.div`
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  ${MEDIA_QUERIES.TABLET} {
    flex-direction: row;
    align-items: center;
    gap: 8rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    justify-content: space-between;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  margin-top: 4rem;
  order: 1;
  width: 100%;

  ${MEDIA_QUERIES.TABLET} {
    width: 50%;
    margin-top: 0;
    padding-left: 0;
    padding-right: 3rem;
  }
`;

const SloganContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

const MainSlogan = styled.h1`
  font-family: 'Pretendard';
  font-size: 2.5rem;
  font-weight: 700;
  color: ${COLORS.WHITE};
  margin-bottom: 2rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-align: left;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: -1rem;
    width: 4rem;
    height: 4rem;
    background: linear-gradient(135deg, ${COLORS.RED} 0%, rgba(234,67,67,0) 100%);
    filter: blur(30px);
    border-radius: 50%;
    z-index: -1;
  }

  br {
    display: none;
    ${MEDIA_QUERIES.TABLET} {
      display: block;
    }
  }
  
  ${MEDIA_QUERIES.TABLET} {
    font-size: 3.5rem;
  }

  ${MEDIA_QUERIES.LAPTOP} {
    font-size: 4.5rem;
  }
`;

const SubSlogan = styled.h2`
  font-family: 'Pretendard';
  font-size: 1.25rem;
  font-weight: 400;
  color: ${COLORS.WHITE};
  opacity: 0.9;
  line-height: 1.6;
  letter-spacing: -0.01em;

  br {
    display: none;
    ${MEDIA_QUERIES.TABLET} {
      display: block;
    }
  }
  
  ${MEDIA_QUERIES.TABLET} {
    font-size: 1.75rem;
  }

  ${MEDIA_QUERIES.LAPTOP} {
    font-size: 2rem;
  }
`;

const BrandExplanation = styled.div`
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  padding: 1.5rem;
  order: 2;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  ${MEDIA_QUERIES.TABLET} {
    width: 500px;
    margin: 0;
    padding: 2rem;
  }

  ${MEDIA_QUERIES.LAPTOP} {
    width: 550px;
    padding: 2.5rem;
  }
`;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: visible;
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  height: 3.5rem;
  overflow: visible;
  position: relative;

  ${MEDIA_QUERIES.TABLET} {
    height: 4rem;
  }

  ${MEDIA_QUERIES.LAPTOP} {
    height: 4.5rem;
  }
`;

const BrandLetter = styled.span`
  font-size: 2.5rem;
  color: ${COLORS.WHITE};
  font-weight: 700;
  font-family: 'Pretendard';
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  width: 3rem;
  text-align: center;
  position: relative;

  ${MEDIA_QUERIES.TABLET} {
    font-size: 3rem;
    width: 3.5rem;
  }

  ${MEDIA_QUERIES.LAPTOP} {
    font-size: 3.5rem;
    width: 4rem;
  }
`;

interface CommandTextProps {
  textLength: number;
  delay: number;
  isComplete: boolean;
}

const CommandText = styled.span<CommandTextProps>`
  font-family: 'Pretendard';
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.WHITE};
  height: 2rem;
  overflow: visible;
  white-space: normal;
  width: auto;
  min-width: ${props => `${props.textLength}ch`};
  display: flex;
  align-items: center;
  position: relative;
  opacity: 0.9;
  margin-left: 1rem;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  backdrop-filter: blur(5px);

  & > span {
    display: block;
    white-space: normal;
    word-break: keep-all;
    overflow: hidden;
    width: 0;
    animation: 
      ${typing} ${props => Math.max(props.textLength * 0.15, 0.3)}s steps(${props => props.textLength}, end) ${props => props.delay}s forwards;
  }

  ${MEDIA_QUERIES.TABLET} {
    font-size: 1.25rem;
    height: 2.5rem;
    padding: 0.375rem 1rem;
  }

  ${MEDIA_QUERIES.LAPTOP} {
    font-size: 1.5rem;
    height: 3rem;
    padding: 0.5rem 1.25rem;
  }
`;

const ServiceContainer = styled.div`
  margin-top: 0.75rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  padding: 0 1rem;

  ${MEDIA_QUERIES.TABLET} {
    height: 7rem;
    padding: 0 1.5rem;
  }

  ${MEDIA_QUERIES.LAPTOP} {
    height: 8rem;
    padding: 0 2rem;
  }
`;

const ServiceIcon = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    color: ${COLORS.WHITE};
    opacity: 0.8;
    width: 24px;
    height: 24px;
    
    ${MEDIA_QUERIES.TABLET} {
      width: 32px;
      height: 32px;
    }

    ${MEDIA_QUERIES.LAPTOP} {
      width: 40px;
      height: 40px;
    }
  }
`;

const ServiceTextContent = styled.div`
  text-align: center;
  word-break: keep-all;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  font-size: 1.125rem;
  line-height: 1.4;
  
  span {
    display: inline-block;
    line-height: 1.4;
  }

  ${MEDIA_QUERIES.TABLET} {
    font-size: 1.25rem;
    gap: 0.375rem;
  }

  ${MEDIA_QUERIES.LAPTOP} {
    font-size: 1.5rem;
    gap: 0.5rem;
  }
`;

const ServiceText = styled.div`
  font-family: 'Pretendard';
  color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  will-change: opacity, transform;
  opacity: 0.9;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  max-width: 400px;
  margin: 0 auto;

  ${MEDIA_QUERIES.TABLET} {
    padding: 1.25rem 2rem;
    max-width: 450px;
  }

  ${MEDIA_QUERIES.LAPTOP} {
    padding: 1.5rem 2.5rem;
    max-width: 500px;
  }
`;