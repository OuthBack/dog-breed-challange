import { LabelEnum, TitleEnum } from "../../../enum/typograph.enum";
import { useNotification } from "../../../hooks/useNotification";
import { LabelAtom } from "../../atoms/Label";
import { TitleAtom } from "../../atoms/Title";
import * as S from "./styles";

export const NotificationCardOrganism = () => {
  const { message, showNotification, title, type } = useNotification();

  return (
    <S.Card color={type} show={showNotification}>
      <TitleAtom text={title} type={TitleEnum.large}></TitleAtom>
      <LabelAtom text={message} type={LabelEnum.small}></LabelAtom>
    </S.Card>
  );
};
