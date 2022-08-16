import styled, { css } from "styled-components";

export const Card = styled.div<{
  color: "warning" | "alert" | "success";
  show?: boolean;
}>`
  ${({ theme, color, show }) => css`
    position: fixed;
    transition: 1s ease-in-out;
    transform: translateX(${show ? "0" : "1000px"});
    right: 0;
    top: 0;
    width: 240px;
    padding: ${theme.spacing.sm};
    background-color: ${theme.notification[color]};
    border-radius: ${theme.borderRadius};
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacing.sm};
    color: ${theme.colors.button_text};
  `}
`;
