"use client";

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Button, Input, Select, Grid, Flex } from '../../styles/theme.js';
// import ProductCard from '../../components/ProductCard.js';


const ProductSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.wite};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.jetBlack};
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.taupeGrey};
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.mintCream};
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const FilterTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const FilterTab = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: ${props => props.active
        ? props.theme.colors.roseDust
        : props.theme.colors.white
    };
  color: ${props => props.active
        ? props.theme.colors.white
        : props.theme.colors.jetBlack
    };

  &:hover {
    background-color: ${props => props.active
        ? props.theme.colors.roseDust
        : props.theme.colors.taupeGrey
    };
    color: ${props => props.theme.colors.white};
  }
`;


export default function Products({ featured = false, limit, showFilters = true }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('featured');

    const categories = ['All', 'Moisturizing', 'Exfoliating', 'Aromatherapy', 'Sensitive Skin'];
    return (
        <ProductSection id={featured ? "featured-products" : "products"}>
            <Container>
                <SectionTitle>{featured ? 'Featured Products' : 'Our Products'}</SectionTitle>
                <SectionDescription>
                    {featured
                        ? 'Discover our most popular handcrafted soaps, each made with premium natural ingredients'
                        : 'Browse our complete collection of natural, handmade soaps'}
                </SectionDescription>
                {showFilters && (
                    <>
                        <FilterTabs>
                            {categories.map(category => (
                                <FilterTab
                                    key={category}
                                    active={activeCategory === category}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </FilterTab>
                            ))}
                        </FilterTabs>

                        <FilterContainer>
                            <FilterGrid>
                                <Input
                                    type="text"
                                    placeholder="Search soaps..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                    <option value="featured">Sort by: Featured</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="name">Name: A to Z</option>/</Select>
                                <Select>
                                    <option>All Scents</option>
                                    <option>Lavender</option>
                                    <option>Rose</option>
                                    <option>Eucalyptus</option>
                                    <option>Unscented</option>
                                </Select>
                                <Button variant="outline">Reset Filters</Button>
                            </FilterGrid>
                        </FilterContainer>
                    </>
                )}
            </Container>
        </ProductSection>

    )
}

// import { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { colors, Container, Button, Input, Select, Grid, Flex } from '../../styles/theme.js';
// import ProductCard from '../../components/ProductCard.js';



// const LoadingContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 200px;
//   font-size: 1.125rem;
//   color: ${colors.taupeGrey};
// `;

// const NoProductsContainer = styled.div`
//   text-align: center;
//   padding: 3rem;
//   color: ${colors.taupeGrey};
// `;

// export default function Products({ featured = false, limit, showFilters = true }) {

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const params = {};

//                 if (featured) params.featured = true;
//                 if (activeCategory && activeCategory !== 'All') params.category = activeCategory;
//                 if (searchQuery) params.search = searchQuery;

//                 const queryString = new URLSearchParams(
//                     Object.entries(params).reduce((acc, [key, value]) => {
//                         if (value !== undefined) acc[key] = String(value);
//                         return acc;
//                     }, {})
//                 ).toString();

//                 const url = queryString ? `/api/products?${queryString}` : '/api/products';
//                 const response = await fetch(url);
//                 if (!response.ok) throw new Error('Failed to fetch products');
//                 const data = await response.json();
//                 setProducts(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [featured, activeCategory, searchQuery]);

//     const sortedProducts = [...products].sort((a, b) => {
//         switch (sortBy) {
//             case 'price-low':
//                 return parseFloat(a.price) - parseFloat(b.price);
//             case 'price-high':
//                 return parseFloat(b.price) - parseFloat(a.price);
//             case 'name':
//                 return a.name.localeCompare(b.name);
//             default:
//                 return featured ? (b.featured ? 1 : -1) : 0;
//         }
//     });

//     const displayProducts = limit ? sortedProducts.slice(0, limit) : sortedProducts;

//     if (isLoading) {
//         return <LoadingContainer>Loading products...</LoadingContainer>;
//     }

//     if (error) {
//         return (
//             <NoProductsContainer>
//                 <h3>Error loading products</h3>
//                 <p>{error}</p>
//             </NoProductsContainer>
//         );
//     }

//     return (
//         <ProductSection id={featured ? "featured-products" : "products"}>
//             <Container>
//

//                 {displayProducts.length === 0 ? (
//                     <NoProductsContainer>
//                         <h3>No products found</h3>
//                         <p>Try adjusting your search or filter criteria.</p>
//                     </NoProductsContainer>
//                 ) : (
//                     <Grid columns={4} gap="2rem">
//                         {displayProducts.map(product => (
//                             <ProductCard key={product.id} product={product} />
//                         ))}
//                     </Grid>
//                 )}

//                 {featured && products.length > (limit || 8) && (
//                     <Flex justify="center" style={{ marginTop: '3rem' }}>
//                         <Button variant="outline" onClick={() => window.location.href = '/products'}>
//                             View All Products
//                         </Button>
//                     </Flex>
//                 )}
//             </Container>
//         </ProductSection>
//     );
// }
