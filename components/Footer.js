'use client';

import styled from 'styled-components';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
});

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.jetBlack};
  color: ${({ theme }) => theme.colors.white};
  padding: 3rem 0 2rem 0;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;


const SocialLink = styled.a`
  width: 3rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.roseDust};
    transform: translateY(-2px);
  }
`;


const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  margin: 2rem 0 0 0;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterTitle className={`${parisienne.className} text-4xl`}>Eva & Bloom</FooterTitle>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              <FaFacebookF size={20} />
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <FaInstagram size={20} />
            </SocialLink>
          </SocialLinks>
        </FooterContent>
        <Copyright>
          © {new Date().getFullYear()} PureSoap. All rights reserved.
        </Copyright>
      </FooterContainer>
    </FooterSection>
  );
}