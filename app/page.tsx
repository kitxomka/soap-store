'use client';
import styled from 'styled-components';

const Wrapper = styled.main`
  padding: 4rem;
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5rem;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Title>Welcome to Our Soap Store 🛁</Title>
      <Subtitle>Beautiful handmade soaps, crafted with love.</Subtitle>
    </Wrapper>
  );
}
