import Image from "next/image";
import { TitleEnum } from "../../../enum/typograph.enum";
import { useDogs } from "../../../stores/dogs.store";
import { TitleAtom } from "../../atoms/Title";
import * as S from "./styles";

interface DogsListCard {
  dogs: string[];
  handleModal(): void;
}

export const DogsListCardOrganism = ({ dogs, handleModal }: DogsListCard) => {
  const { setSelectedDogUrl } = useDogs();

  const onClickImage = (src: string) => {
    setSelectedDogUrl(src);
    handleModal();
  };

  return (
    <S.Card>
      {dogs.length ? (
        dogs.map((src, index) => (
          <Image
            width={460}
            height={460}
            src={src}
            key={index}
            onClick={() => onClickImage(src)}
          />
        ))
      ) : (
        <TitleAtom
          type={TitleEnum.regular}
          text="Ops.. Dogs not found :C"
        ></TitleAtom>
      )}
    </S.Card>
  );
};
