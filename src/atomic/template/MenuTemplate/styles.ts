import styled, { css } from "styled-components";

export const OneCard = styled.div`
  ${({ theme }) => css`
    width: 480px;
    margin: 0 auto;
    background-color: ${theme.colors.background_item};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 480px) {
      border-radius: ${theme.borderRadius};
    }
  `}
`;
