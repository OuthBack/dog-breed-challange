import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    pointer-events: all;
    position: absolute;
    width: 480px;
    padding: ${theme.spacing.xlg};
    background-color: ${theme.colors.background_item};
    border-radius: ${theme.borderRadius};
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacing.md};
  `}
`;

export const FullPage = styled.div<{ show: boolean }>`
  ${({ theme, show }) =>
    css`
      pointer-events: ${show ? "all" : "none"};
      top: 0;
      position: fixed;
      right: 0;
      width: 100%;
      height: 100vh;
      display: ${show ? "flex" : "none"};
      background-color: ${theme.colors.button_Background}7F;
    `}
`;

export const FullPageHidden = styled.div<{ show: boolean }>`
  ${({ show }) =>
    css`
      pointer-events: none;
      top: 0;
      display: ${show ? "flex" : "none"};
      align-items: center;
      justify-content: center;
      position: fixed;
      width: 100%;
      height: 100vh;
    `}
`;

export const Close = styled.div`
  ${({ theme }) =>
    css`
      cursor: pointer;
      position: absolute;
      top: -10px;
      right: -10px;
      border-radius: ${theme.borderRadius};
      padding: ${theme.spacing.sm};
      color: ${theme.colors.button_text};
      background-color: ${theme.notification.alert};
    `}
`;
