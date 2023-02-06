import { Button } from "../../../presentation/components/button";
import { Div } from "../../../presentation/components/div";
import { Title } from "../../../presentation/components/title";
import { ButtonTypeEnum } from "../../../presentation/enums/button/button-type-enum";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";

export function makeAdminHeaderFactory(): Div {
  const title = new Title("Admin page", "homeAdmin-title");

  const gamesHandlingButton = new Button(
    "Games",
    ButtonTypeEnum.BUTTON,
    "adminHeader-buttonsDiv-gamesButton",
    ["border-light-blue", "background-dark-blue"]
  );
  const profilesHandlingButton = new Button(
    "Users",
    ButtonTypeEnum.BUTTON,
    "adminHeader-buttonsDiv-usersButton",
    ["border-light-green", "background-dark-green"]
  );
  const returnButton = new Button(
    "Return",
    ButtonTypeEnum.BUTTON,
    "adminHeader-buttonsDiv-returnButton",
    ["border-light-red", "background-dark-red"]
  );

  const buttonsDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [gamesHandlingButton, profilesHandlingButton, returnButton],
    "adminHeader-buttonsDiv",
    ["flex-wrap"]
  );

  return new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [title, buttonsDiv],
    "adminHeader"
  );
}
