import { Button } from "../../../presentation/components/button";
import { Div } from "../../../presentation/components/div";
import { ButtonTypeEnum } from "../../../presentation/enums/button/button-type-enum";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";

const { DIV } = DivTypeEnum;
const { ROW } = FlexDirectionEnum;
const { EVENLY } = FlexJustificationEnum;
const { BUTTON } = ButtonTypeEnum;

export function makeMenuFactory(): Div {
  const homeButton = new Button("Home Page", BUTTON, "menuDiv-home", [
    "menuButton",
  ]);

  const favoriteGamesButton = new Button(
    "Favorite Games",
    BUTTON,
    "menuDiv-favoriteGames",
    ["menuButton"]
  );

  const topImdbGamesButton = new Button(
    "Game List",
    BUTTON,
    "menuDiv-gameList",
    ["menuButton"]
  );

  return new Div(
    DIV,
    ROW,
    EVENLY,
    [homeButton, favoriteGamesButton, topImdbGamesButton],
    "menuDiv",
    ["flex-wrap"]
  );
}
