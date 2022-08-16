import { LabelEnum } from "../../../enum/typograph.enum";
import * as S from "./styles";

interface Label {
  text: string;
  type: LabelEnum;
  href?: string;
}

export const LabelAtom = ({ text, type, href }: Label) => {
  return href ? (
    <a href={href}>
      <S.Label type={type}>{text}</S.Label>
    </a>
  ) : (
    <S.Label type={type}>{text}</S.Label>
  );
};
