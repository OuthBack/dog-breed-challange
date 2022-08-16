import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  width: 100%;
  padding-right: ${(props) => props.theme.spacing.lg};
  padding-left: ${(props) => props.theme.spacing.lg};
  padding-top: ${(props) => props.theme.spacing.lg};
  padding-bottom: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.button_Background};
  color: ${(props) => props.theme.colors.button_text};
  outline: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  border-style: none;
`;
