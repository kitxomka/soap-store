'use client';

import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';
import allProducts from '../lib/products';

const products = allProducts.slice(0, 5); // Show only 5 products

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 460px; /* Fixed height */
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

const Heart = styled.button`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 0.3rem;
  border-radius: 999px;
  cursor: pointer;
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

const AddToCart = styled.button`
  background: ${({ theme }) => theme.colors.roseDust};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
`;

const ViewAll = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.roseDust};
  font-weight: bold;
  font-size: 0.875rem;
  border: 2px solid ${({ theme }) => theme.colors.roseDust};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: transparent;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.roseDust};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default function ProductCarousel() {
    return (
        <Section>
            <Container>
                <Title>Featured Soaps</Title>
                <Subtitle>
                    Discover our most popular handcrafted soaps, each made with premium natural ingredients.
                </Subtitle>

                <Grid>
                    {products.map((product, index) => (
                        <Card key={index}>
                            <ImageWrapper>
                                <ProductImage src={product.image} alt={product.title} />
                                <Tag>{product.tag}</Tag>
                                <Heart>
                                    <FaRegHeart size={14} color="#EBBAA9" />
                                </Heart>
                            </ImageWrapper>
                            <TitleText>{product.title}</TitleText>
                            <Description>{product.desc}</Description>
                            <Rating>
                                {'★'.repeat(product.rating)}
                                {'☆'.repeat(5 - product.rating)}
                            </Rating>
                            <Price>{product.price}</Price>
                            <AddToCart>Add to Cart</AddToCart>
                        </Card>
                    ))}
                </Grid>

                <ViewAll href="/products">View All Products</ViewAll>
            </Container>
        </Section>
    );
}
