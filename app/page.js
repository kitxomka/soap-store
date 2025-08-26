'use client';

import styled from 'styled-components';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import AboutSection from '../components/AboutSection';


const Main = styled.main`
  // text-align: center;
`;

export default function HomePage() {
  return (
    <>
      <Main>
        <Hero />
        <ProductCarousel />
        <AboutSection />
      </Main>
    </>
  );
}
