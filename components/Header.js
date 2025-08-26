"use client";

import { useState } from "react";
import styled from "styled-components";
import { ShoppingBag, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import logo from "../public/logo.png";


const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mintCream};
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 0 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoIcon = styled.div`
  width: 9rem;
  height: 10rem;
  background-image: url(${logo.src});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 6em;
`;


const NavLinks = styled.div`
  display: none;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  color: ${({ $active, theme }) =>
    $active ? theme.colors.roseDust : theme.colors.jetBlack};
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.roseDust};
  }
`;


const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.jetBlack};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.roseDust};
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${({ theme }) => theme.colors.roseDust};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

const MobileToggle = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  @media (min-width: 768px) {
    display: none !important;
  }

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.mintCream};
  padding: 1rem;
  gap: 1rem;
`;



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(2);
  const pathname = usePathname();


  return (
    <>
      <Nav>
        <NavContainer>
          <LogoContainer>
            <LogoIcon />
          </LogoContainer>

          <NavLinks>
            <NavLink href="/" $active={pathname === "/"}>Home</NavLink>
            <NavLink href="#about" $active={pathname === "/#about"}>About</NavLink>
            <NavLink href="/products" $active={pathname === "/products"}>Products</NavLink>
            <NavLink href="/contact" $active={pathname === "/contact"}>Contact</NavLink>
          </NavLinks>


          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <IconButton>
              <ShoppingBag size={20} />
              {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
            </IconButton>

            <MobileToggle>
              <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </IconButton>
            </MobileToggle>
          </div>
        </NavContainer>
      </Nav>

      {isMenuOpen && (
        <MobileMenu>
          <NavLink href="/">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#products">Products</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </MobileMenu>
      )}
    </>
  );
}
