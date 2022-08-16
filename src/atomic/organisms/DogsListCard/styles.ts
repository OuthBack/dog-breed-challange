import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    width: 480px;
    padding: ${theme.spacing.xlg};
    background-color: ${theme.colors.background_item};
    border-radius: ${theme.borderRadius};
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacing.md};

    img {
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }
    }
  `}
`;
