import { Button } from "../../../presentation/components/button";
import { Div } from "../../../presentation/components/div";
import { ButtonTypeEnum } from "../../../presentation/enums/button/button-type-enum";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";

export function makeAdminGamesListFactory(): Div {
  const createGameButton = new Button(
    "Add",
    ButtonTypeEnum.BUTTON,
    "adminGameList-gamesDiv-addGameButton",
    ["background-dark-blue", "border-light-gray"]
  );
  const gameListDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [],
    "adminGameList-gamesDiv",
    ["flex-wrap", "gameList-gameCard"]
  );

  return new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [createGameButton, gameListDiv],
    "adminGameList-div",
    ["flex-wrap"]
  );
}
