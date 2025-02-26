import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { MEDIA_QUERIES } from '../../../constants/breakpoints';

export const Contact: React.FC = () => {
  return (
    <SectionContent>
      <Paragraph>
        MUFI에 관심을 가져주셔서 감사합니다. 투자 및 파트너십에 관한 문의사항이 있으시면 
        아래 연락처로 연락해 주시기 바랍니다. 빠른 시일 내에 답변 드리겠습니다.
      </Paragraph>
      
      <ContactGrid>
        <ContactCard>
          <ContactIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
            </svg>
          </ContactIcon>
          <ContactInfo>
            <ContactTitle>이메일</ContactTitle>
            <ContactValue>contact@mufi.co.kr</ContactValue>
            <ContactDescription>
              투자 및 파트너십 문의는 이메일로 연락해 주시기 바랍니다.
            </ContactDescription>
          </ContactInfo>
        </ContactCard>
        
        <ContactCard>
          <ContactIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
            </svg>
          </ContactIcon>
          <ContactInfo>
            <ContactTitle>전화</ContactTitle>
            <ContactValue>02-123-4567</ContactValue>
            <ContactDescription>
              평일 오전 9시부터 오후 6시까지 통화 가능합니다.
            </ContactDescription>
          </ContactInfo>
        </ContactCard>
        
        <ContactCard>
          <ContactIcon>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
          </ContactIcon>
          <ContactInfo>
            <ContactTitle>주소</ContactTitle>
            <ContactValue>서울특별시 강남구 테헤란로 123, 4층</ContactValue>
            <ContactDescription>
              방문 전 사전 예약을 부탁드립니다.
            </ContactDescription>
          </ContactInfo>
        </ContactCard>
      </ContactGrid>
      
      <SocialLinks>
        <SocialTitle>소셜 미디어</SocialTitle>
        <SocialGrid>
          <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <SocialIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H6.5v-7H9v7zM7.7 8.7c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.6 1.4-1.4 1.4zM18 17h-2.5v-4c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v4H10v-7h2.5v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3 1.3 3 3.2V17z" fill="currentColor"/>
              </svg>
            </SocialIcon>
            <SocialName>LinkedIn</SocialName>
          </SocialLink>
          
          <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <SocialIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" fill="currentColor"/>
              </svg>
            </SocialIcon>
            <SocialName>Twitter</SocialName>
          </SocialLink>
          
          <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <SocialIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="currentColor"/>
              </svg>
            </SocialIcon>
            <SocialName>Instagram</SocialName>
          </SocialLink>
        </SocialGrid>
      </SocialLinks>
      
      <ContactForm>
        <ContactFormTitle>문의하기</ContactFormTitle>
        <Form>
          <FormGroup>
            <Label htmlFor="name">이름</Label>
            <Input type="text" id="name" placeholder="이름을 입력하세요" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">이메일</Label>
            <Input type="email" id="email" placeholder="이메일을 입력하세요" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">문의 유형</Label>
            <Select id="subject">
              <option value="">문의 유형을 선택하세요</option>
              <option value="investment">투자 문의</option>
              <option value="partnership">파트너십 문의</option>
              <option value="business">사업 제안</option>
              <option value="other">기타 문의</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">메시지</Label>
            <Textarea id="message" rows={5} placeholder="문의 내용을 입력하세요" />
          </FormGroup>
          
          <SubmitButton type="button">
            문의하기
          </SubmitButton>
        </Form>
      </ContactForm>
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactCard = styled.div`
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

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  color: ${COLORS.RED};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
`;

const ContactValue = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${COLORS.RED};
`;

const ContactDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${COLORS.BLACK};
  opacity: 0.8;
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
`;

const SocialTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const SocialGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  
  ${MEDIA_QUERIES.TABLET} {
    justify-content: flex-start;
  }
`;

const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SocialIcon = styled.div`
  width: 48px;
  height: 48px;
  color: ${COLORS.RED};
  margin-bottom: 0.5rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const SocialName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
`;

const ContactForm = styled.div`
  margin-top: 2rem;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const ContactFormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${COLORS.BLACK};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.BLACK};
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${COLORS.RED};
    box-shadow: 0 0 0 2px rgba(110, 124, 243, 0.2);
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${COLORS.RED};
    box-shadow: 0 0 0 2px rgba(110, 124, 243, 0.2);
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${COLORS.RED};
    box-shadow: 0 0 0 2px rgba(110, 124, 243, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${COLORS.RED};
  color: ${COLORS.WHITE};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background: ${COLORS.BLUE};
    transform: translateY(-2px);
  }
`; 