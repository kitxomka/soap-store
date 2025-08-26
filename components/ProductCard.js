"use client";
import styled from 'styled-components';
import { Heart, Star } from 'lucide-react';
import { colors, Button, Card } from '../styles/theme.js';
// import { useCart } from '@/contexts/CartContext';

const ProductCardContainer = styled(Card)`
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ProductCardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const WishlistButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${colors.white};
    color: ${colors.roseDust};
  }
`;

const ProductInfo = styled.div`
  padding: 0 0.5rem;
`;

const ProductName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.jetBlack};
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

const ProductDescription = styled.p`
  color: ${colors.taupeGrey};
  font-size: 0.875rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.roseDust};
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

const Rating = styled.div`
  display: flex;
  color: #fbbf24;
`;

const RatingText = styled.span`
  font-size: 0.875rem;
  color: ${colors.taupeGrey};
  margin-left: 0.5rem;
`;

const CategoryBadge = styled.span`
  background-color: ${colors.mintCream};
  color: ${colors.jetBlack};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

export default function ProductCard({ product }) {
    // const { addToCart } = useCart();

    const handleAddToCart = async () => {
        try {
            await addToCart(product.id);
        } catch (error) {
            console.error('Failed to add product to cart:', error);
        }
    };

    // // Generate mock rating for demo purposes
    // const rating = 4.5;
    // const reviewCount = Math.floor(Math.random() * 100) + 10;

    return (
        <ProductCardContainer>
            <ProductImageContainer>
                <ProductImage src={product.image} alt={product.name} />
                <CategoryBadge>{product.category}</CategoryBadge>
                <WishlistButton>
                    <Heart size={18} />
                </WishlistButton>
            </ProductImageContainer>

            <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>

                <RatingContainer>
                    <Rating>
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                fill={i < Math.floor(rating) ? "currentColor" : "none"}
                            />
                        ))}
                    </Rating>
                    <RatingText>({reviewCount})</RatingText>
                </RatingContainer>

                <ProductFooter>
                    <ProductPrice>${product.price}</ProductPrice>
                    <Button variant="secondary" onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                </ProductFooter>
            </ProductInfo>
        </ProductCardContainer>
    );
}
