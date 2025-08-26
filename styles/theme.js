
import styled from "styled-components";

export const theme = {
    colors: {
        white: "#FFFFFF",
        mintCream: "#FBF0E5",
        taupeGrey: "#A59489",
        roseDust: "#EBBAA9",
        jetBlack: "#333333",
    },
    fonts: {
        primary: '"Inter", serif',
    },
};

export const Input = styled.input`
  width: 96%;
  padding: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.mintCream};
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.roseDust};
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.mintCream};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.roseDust};
  }
`;

export const Textarea = styled.textarea`
  width: 96%;
  padding: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.mintCream};
  border-radius: 0.5rem;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.roseDust};
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  ${({ variant, theme }) => {
        switch (variant) {
            case "primary":
                return `
          background-color: ${theme.colors.jetBlack};
          color: ${theme.colors.white};
          &:hover {
            background-color: ${theme.colors.taupeGrey};
          }
        `;
            case "secondary":
                return `
          background-color: ${theme.colors.roseDust};
          color: ${theme.colors.white};
          &:hover {
            background-color: ${theme.colors.taupeGrey};
          }
        `;

            case "outline":
                return `
          background-color: transparent;
          color: ${theme.colors.jetBlack};
          border: 2px solid ${theme.colors.taupeGrey};
          &:hover {
            background-color: ${theme.colors.taupeGrey};
            color: ${theme.colors.white};
          }
        `;
            default:
                return `
          background-color: ${theme.colors.jetBlack};
          color: ${theme.colors.white};
          &:hover {
            background-color: ${theme.colors.taupeGrey};
          }
        `;
        }
    }}
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;
