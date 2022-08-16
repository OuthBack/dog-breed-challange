import styled, { css } from "styled-components";

export const Card = styled.form`
  ${({ theme }) => css`
    width: 480px;
    padding: ${theme.spacing.xlg};
    background-color: ${theme.colors.background_item};
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacing.md};

    @media screen and (min-width: 480px) {
      height: auto;
      border-radius: ${theme.borderRadius};
    }
  `}
`;

export const LeftAlign = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: ${theme.spacing.sm};
    align-self: flex-start;
  `}
`;
