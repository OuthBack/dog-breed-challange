import { TitleEnum } from "../../../enum/typograph.enum";
import * as S from "./styles";

interface Title {
  type: TitleEnum;
  text: string;
}

export const TitleAtom = ({ type, text }: Title) => {
  const types = {
    [TitleEnum.display]: () => <h1>{text}</h1>,
    [TitleEnum.xLarge]: () => <h2>{text}</h2>,
    [TitleEnum.large]: () => <h3>{text}</h3>,
    [TitleEnum.regular]: () => <h4>{text}</h4>,
    [TitleEnum.small]: () => <h5>{text}</h5>,
    [TitleEnum.xSmall]: () => <h6>{text}</h6>,
    [TitleEnum.overline]: () => <h6>{text}</h6>,
  };

  const Text = types[type];

  return (
    <S.Title>
      <Text />
    </S.Title>
  );
};
