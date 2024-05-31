import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {cinzel} from '@/styles/GlobalStyles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  variant?: "outline" | "default";
}

const Button: React.FC<ButtonProps> = ({link, variant = "default", ...rest}) => {
  if (link) {
    return (
      <Link href={link}>
        <StyledButton variant={variant} {...rest}>
          <span>
            {rest.children}
          </span>
        </StyledButton>
      </Link>
    );
  }

  return (
    <StyledButton variant={variant} {...rest}>
      <span>
        {rest.children}
      </span>
    </StyledButton>
  );
}

const StyledButton = styled.button<{ variant: "outline" | "default", children: React.ReactNode}>`
  background-color: ${({ variant, theme }) => variant === "outline" ? theme.colors.darkGrey : theme.colors.gold};
  color: ${({ theme, variant }) => variant === "outline" ? theme.colors.gold : theme.colors.black};
  padding: 0 20px;
  border: none;
  height: 42px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  clip-path: ${({ theme }) => theme.polygon};
  display: flex;
  justify-content: center;
  white-space: nowrap;
  align-items: center;


  &:before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background-color: ${({ theme, variant }) => variant === "outline" ? theme.colors.black : theme.colors.lightGold};
    clip-path: ${({ theme }) => theme.polygon};
    pointer-events: none;
  }
    
  span {
    position: relative;
    z-index: 1;
    font-family: ${cinzel.style.fontFamily};
    font-weight: ${cinzel.style.fontWeight};
  }
`;

export default Button;
