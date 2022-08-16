import styled, { css } from "styled-components";
import { LabelEnum } from "../../../enum/typograph.enum";

const sizes = {
  [LabelEnum.large]: {
    fontSize: css`
      ${({ theme }) => theme.typography.label.large.fontSize}
    `,
    lineHeight: css`
      ${({ theme }) => theme.typography.label.large.lineheight}
    `,
    letterSpace: css`
      ${({ theme }) => theme.typography.label.large.letterspace}
    `,
  },
  [LabelEnum.regular]: {
    fontSize: css`
      ${({ theme }) => theme.typography.label.large.fontSize}
    `,
    lineHeight: css`
      ${({ theme }) => theme.typography.label.large.lineheight}
    `,
    letterSpace: css`
      ${({ theme }) => theme.typography.label.large.letterspace}
    `,
  },
  [LabelEnum.small]: {
    fontSize: css`
      ${({ theme }) => theme.typography.label.large.fontSize}
    `,
    lineHeight: css`
      ${({ theme }) => theme.typography.label.large.lineheight}
    `,
    letterSpace: css`
      ${({ theme }) => theme.typography.label.large.letterspace}
    `,
  },
};

export const Label = styled.label<{ type: LabelEnum }>`
  ${({ type }) => css`
    font-size: ${sizes[type].fontSize};
    line-height: ${sizes[type].lineHeight};
    letter-spacing: ${sizes[type].letterSpace};
  `}
`;
