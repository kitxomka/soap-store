'use client';
import styled from 'styled-components';
import { FaLeaf, FaHeart, FaTruck } from 'react-icons/fa';

const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.mintCream};
  padding: 4rem 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.jetBlack};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.span`
  color: ${({ theme }) => theme.colors.roseDust};
`;

const HeroDescription = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.taupeGrey};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: all 0.3s ease;

  ${({ variant, theme }) =>
        variant === 'outline'
            ? `
        background: transparent;
        border: 2px solid ${theme.colors.jetBlack};
        color: ${theme.colors.jetBlack};

        &:hover {
          background-color: ${theme.colors.jetBlack};
          color: ${theme.colors.white};
        }
      `
            : `
        background-color: ${theme.colors.jetBlack};
        color: ${theme.colors.white};

        &:hover {
          background-color: ${theme.colors.white};
          color: ${theme.colors.jetBlack};
        }
      `
    }
`;

const FeatureGrid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const FeatureIconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureText = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.taupeGrey};
`;

const HeroImageContainer = styled.div`
  flex: 1;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 1rem;
  object-fit: cover;
`;

const FeatureBadge = styled.div`
  position: absolute;
  top: 20rem;
  right: 32rem;
  background-color: ${({ theme }) => theme.colors.roseDust};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 1rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06)
`;

const BadgeTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

const BadgeSubtitle = styled.div`
  font-size: 0.75rem;
`;

export default function Hero() {
    const scrollToProducts = () => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <HeroSection>
            <Container>
                <HeroGrid>
                    <HeroContent>
                        <HeroTitle>
                            Pure, Natural <br />
                            <HeroSubtitle>Artisan Soaps</HeroSubtitle>
                        </HeroTitle>
                        <HeroDescription>
                            Handcrafted with love using only the finest natural ingredients. Our artisan soaps nourish your skin while being gentle on the environment.
                        </HeroDescription>
                        <HeroButtons>
                            <Button variant="primary" onClick={scrollToProducts}>
                                Shop Now
                            </Button>
                            <Button variant="outline">Learn More</Button>
                        </HeroButtons>

                        <FeatureGrid>
                            <FeatureItem>
                                <FeatureIconContainer>
                                    <FaLeaf size={18} color="#333" />
                                </FeatureIconContainer>
                                <FeatureText>100% Natural</FeatureText>
                            </FeatureItem>
                            <FeatureItem>
                                <FeatureIconContainer>
                                    <FaHeart size={18} color="#333" />
                                </FeatureIconContainer>
                                <FeatureText>Handcrafted</FeatureText>
                            </FeatureItem>
                            <FeatureItem>
                                <FeatureIconContainer>
                                    <FaTruck size={18} color="#333" />
                                </FeatureIconContainer>
                                <FeatureText>Free Shipping</FeatureText>
                            </FeatureItem>
                        </FeatureGrid>
                    </HeroContent>

                    <HeroImageContainer>
                        <HeroImage
                            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                            alt="Artisan soap collection"
                        />
                        <FeatureBadge>
                            <BadgeTitle>100%</BadgeTitle>
                            <BadgeSubtitle>Natural</BadgeSubtitle>
                        </FeatureBadge>
                    </HeroImageContainer>
                </HeroGrid>
            </Container>
        </HeroSection>
    );
}
