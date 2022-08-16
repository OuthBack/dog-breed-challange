import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    padding: ${theme.spacing.lg};
    border: 1px solid transparent;
    border-radius: ${theme.borderRadius};
    width: 100%;
    background-color: ${theme.colors.background};
    transition: ${theme.transition.short};

    &:hover {
      border: 1px solid ${(props) => props.theme.colors.border_color}3F;
    }
  `}
`;
