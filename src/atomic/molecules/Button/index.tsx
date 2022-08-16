import * as S from './styles';

interface Button {
  text?: string;
  onClick(): void;
}

export const ButtonMolecule = ({ text, onClick }: Button) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};
