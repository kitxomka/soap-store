'use client';

import styled from 'styled-components';
import allProducts from '../lib/products';
import { Container, Button, Card } from '../styles/theme.js';

const products = allProducts.slice(0, 4); // Show only 4 products

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.jetBlack};
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.taupeGrey};
  margin: 0.5rem 0 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  /* this makes all cards in the same row equal height */
  align-items: stretch;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 1rem;
`;

const Tag = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: ${({ theme }) => theme.colors.roseDust};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.625rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
`;

const CardContent = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TitleText = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.jetBlack};
  margin-top: 1rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.taupeGrey};
  margin: 0.25rem 0;
  flex-grow: 1; /* pushes rating/price down if text is short */
`;

const Rating = styled.div`
  color: ${({ theme }) => theme.colors.roseDust};
  font-size: 0.875rem;
`;

const Price = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.jetBlack};
  margin: 0.5rem 0;
`;

export default function ProductCarousel() {
  return (
    <Section id="products">
      <Container>
        <Title>Featured Soaps</Title>
        <Subtitle>
          Discover our most popular handcrafted soaps, each made with premium natural ingredients.
        </Subtitle>

        <Grid>
          {products.map((product, index) => (
            <StyledCard key={index}>
              <ImageWrapper>
                <ProductImage src={product.image} alt={product.title} />
                <Tag>{product.tag}</Tag>
              </ImageWrapper>

              <CardContent>
                <TitleText>{product.title}</TitleText>
                <Description>{product.desc}</Description>
                <Rating>
                  {'★'.repeat(product.rating)}
                  {'☆'.repeat(5 - product.rating)}
                </Rating>
                <Price>{product.price}</Price>
              </CardContent>

              <Button variant="secondary">Add to Cart</Button>
            </StyledCard>
          ))}
        </Grid>
        <Button as="a" variant="secondary" href="/products">View All Products</Button>
      </Container>
    </Section>
  );
}
