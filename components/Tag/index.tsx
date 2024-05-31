import React from 'react';
import styled from 'styled-components';

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <StyledTag>
      <TagContent>
        {children}
      </TagContent>
    </StyledTag>
  );
}

const StyledTag = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border: none;
  padding: 0 8px;
  border-radius: 5px;
  height: 32px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  clip-path: ${({ theme }) => theme.polygon};
  display: flex;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background-color: ${({ theme }) => theme.colors.black};
    clip-path: ${({ theme }) => theme.polygon};
    pointer-events: none;
    z-index: 0;
  }
`;

const TagContent = styled.div`
  z-index: 1;
  position: relative;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
`;

export default Tag;
