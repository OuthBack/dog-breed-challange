import Image from "next/image";
import { useDogs } from "../../../stores/dogs.store";
import * as S from "./styles";

interface DogCard {
  show: boolean;
  handleModal(): void;
}

export const DogCardOrganism = ({ show, handleModal }: DogCard) => {
  const { selectedDogUrl } = useDogs();

  return (
    <>
      <S.FullPage show={show} onClick={handleModal}></S.FullPage>
      <S.FullPageHidden show={show}>
        <S.Card>
          <Image src={selectedDogUrl} width={460} height={460}></Image>
          <S.Close onClick={handleModal}>X</S.Close>
        </S.Card>
      </S.FullPageHidden>
    </>
  );
};
