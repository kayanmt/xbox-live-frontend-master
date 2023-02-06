import { Div } from "../../../presentation/components/div";
import { Title } from "../../../presentation/components/title";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { FavoriteGamesPage } from "../../../presentation/pages/favoriteGames-page";
import { makeHeaderFactory } from "../components/header-component-factory";
import { makeMenuFactory } from "../components/menu-component-factory";

const { DIV } = DivTypeEnum;
const { ROW } = FlexDirectionEnum;
const { EVENLY } = FlexJustificationEnum;

export function makeFavoriteGamesPageFactory(): FavoriteGamesPage {
  const header = makeHeaderFactory();
  const pageTitle = new Title("Favorite Games", "favoriteGames-title");
  const menuDiv = makeMenuFactory();
  const gamesDiv = new Div(DIV, ROW, EVENLY, [], "favoriteGames-gamesDiv", [
    "flex-wrap",
  ]);

  return new FavoriteGamesPage(header, menuDiv, pageTitle, gamesDiv);
}
