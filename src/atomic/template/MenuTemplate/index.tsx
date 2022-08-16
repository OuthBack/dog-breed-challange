import { useState } from "react";
import { DogCardOrganism } from "../../organisms/DogCard";
import { DogsListCardOrganism } from "../../organisms/DogsListCard";
import { MenuCardOrganism } from "../../organisms/MenuCard";
import * as S from "./styles";

interface Menu {
  dogs: string[];
}

export const MenuTemplate = ({ dogs }: Menu) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal((oldState) => !oldState);
  };

  return (
    <S.OneCard>
      <MenuCardOrganism options={["Chihuahua", "Husky", "Labrador", "Pug"]} />
      <DogsListCardOrganism
        dogs={dogs}
        handleModal={handleModal}
      ></DogsListCardOrganism>
      <DogCardOrganism
        show={showModal}
        handleModal={handleModal}
      ></DogCardOrganism>
    </S.OneCard>
  );
};
