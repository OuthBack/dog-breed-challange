import { useState } from "react";
import { TitleEnum } from "../../../enum/typograph.enum";
import { useDogs } from "../../../stores/dogs.store";
import { TitleAtom } from "../../atoms/Title";
import * as S from "./styles";

interface MenuCard {
  options: string[];
}

export const MenuCardOrganism = ({ options }: MenuCard) => {
  const { setDogType } = useDogs();
  const [selected, setSelected] = useState(0);

  const onClickOption = (index: number, name: string) => {
    setSelected(index);
    setDogType(name);
  };

  return (
    <S.Card>
      <S.Tab>
        {options.map((title, index) => (
          <S.Option
            isSelected={selected === index}
            key={index}
            onClick={() => onClickOption(index, title.toLowerCase())}
          >
            <TitleAtom type={TitleEnum.large} text={title} key={index} />
          </S.Option>
        ))}
      </S.Tab>
    </S.Card>
  );
};
