import styled, { css } from "styled-components";

export const Card = styled.div`
  width: 480px;
  padding: ${(props) => props.theme.spacing.xlg};
  background-color: ${(props) => props.theme.colors.background_item};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

export const Tab = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.button_Background};

    > * {
      &:first-child {
        border-left: 0;
      }
    }
  `}
`;

export const Option = styled.div<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    cursor: pointer;
    border-left: ${!isSelected && `1px solid ${theme.colors.border_color}`};
    padding: ${theme.spacing.sm};
    background-color: ${isSelected ? theme.colors.background : "transparent"};

    &:hover {
      color: ${!isSelected && theme.colors.button_text};
    }
  `}
`;
