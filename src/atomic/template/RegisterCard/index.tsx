import { RegisterOrganism } from "../../organisms/RegisterCard";
import * as S from "./styles";

interface Register {
  onClick(): void;
}

export const RegisterCardTemplate = ({ onClick }: Register) => {
  return (
    <S.OneCard>
      <RegisterOrganism title="Register" onClick={onClick} />
    </S.OneCard>
  );
};
