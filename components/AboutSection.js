'use client';

import styled from 'styled-components';
import { Container } from '../styles/theme.js';
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
});

const AboutSectionWrapper = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.mintCream};
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const AboutContent = styled.div`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.jetBlack};
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const AboutDescription = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.taupeGrey};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StatCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.roseDust};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.taupeGrey};
  font-size: 0.875rem;
`;

const AboutImageContainer = styled.div`
  position: relative;
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;



export default function AboutSection() {
  return (
    <AboutSectionWrapper id="about">
      <Container>
        <AboutGrid>
          <AboutContent>
            <AboutTitle>
              Crafted with Love, Made for You
            </AboutTitle>
            <AboutDescription>
              At  <span className={`${parisienne.className} text-4xl`} style={{ fontSize: "1.5rem" }}>Eva & Bloom </span>, we believe that skincare should be both luxurious and natural.
              Our journey began in a small kitchen, where we discovered the perfect blend of
              traditional soap-making techniques and premium organic ingredients.
            </AboutDescription>
            <AboutDescription>
              Every bar is handcrafted in small batches to ensure quality and freshness.
              We source our ingredients ethically and use sustainable practices because we
              care about your skin and our planet.
            </AboutDescription>

            <StatsGrid>
              <StatCard>
                <StatNumber>100%</StatNumber>
                <StatLabel>Natural Ingredients</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>5+</StatNumber>
                <StatLabel>Happy Customers</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>25+</StatNumber>
                <StatLabel>Unique Scents</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>0</StatNumber>
                <StatLabel>Harmful Chemicals</StatLabel>
              </StatCard>
            </StatsGrid>
          </AboutContent>

          <AboutImageContainer>
            <AboutImage
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Soap making process"
            />
          </AboutImageContainer>
        </AboutGrid>
      </Container>
    </AboutSectionWrapper >
  );
}
