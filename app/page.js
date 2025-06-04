'use client';

import styled from 'styled-components';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';

const Main = styled.main`
  // text-align: center;
`;

export default function HomePage() {
  return (
    <>
      <Main>
        <Hero />
        <ProductCarousel />
      </Main>
    </>
  );
}
