import { LabelEnum, TitleEnum } from "../../../enum/typograph.enum";
import { useRegister } from "../../../stores/register.store";
import { InputAtom } from "../../atoms/Input";
import { LabelAtom } from "../../atoms/Label";
import { TitleAtom } from "../../atoms/Title";
import { ButtonMolecule } from "../../molecules/Button";
import * as S from "./styles";

interface RegisterCard {
  title: string;
  onClick(): void;
}

export const RegisterOrganism = ({ title, onClick }: RegisterCard) => {
  const { email, setEmail } = useRegister();

  return (
    <S.Card
      onSubmit={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      <TitleAtom type={TitleEnum.large} text={title} />
      <S.LeftAlign>
        <LabelAtom type={LabelEnum.regular} text="Email"></LabelAtom>
        <InputAtom
          value={email}
          placeholder="example@email.com"
          onChange={setEmail}
        />
      </S.LeftAlign>
      <ButtonMolecule onClick={onClick} text="Enviar" />
    </S.Card>
  );
};
