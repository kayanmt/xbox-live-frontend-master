import { Anchor } from "../../../presentation/components/anchor";
import { Button } from "../../../presentation/components/button";
import { Div } from "../../../presentation/components/div";
import { Image } from "../../../presentation/components/image";
import { Paragraph } from "../../../presentation/components/paragraph";
import { Title } from "../../../presentation/components/title";
import { ButtonTypeEnum } from "../../../presentation/enums/button/button-type-enum";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { GameViewPage } from "../../../presentation/pages/gameView-page";
import { makeHeaderFactory } from "../components/header-component-factory";
import { makeMenuFactory } from "../components/menu-component-factory";

export function makeGameViewPageFactory(): GameViewPage {
  const header = makeHeaderFactory();
  const menu = makeMenuFactory();

  const title = new Title("", "gameView-titleDiv-title");
  const favotiteButton = new Button(
    "Favorite",
    ButtonTypeEnum.BUTTON,
    "gameView-titleDiv-favoriteButton",
    ["background-dark-blue", "border-light-blue"]
  );
  const titleDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [title, favotiteButton],
    "gameView-titleDiv"
  );

  const gameImage = new Image(
    "Game image",
    "",
    "gameView-gameBody-gameDescriptionDiv-image"
  );

  const description = new Paragraph(
    "",
    "gameView-gameBody-gameDescriptionDiv-gameDescription-description"
  );

  const year = new Paragraph(
    "Year: " + "",
    "gameView-gameBody-gameDescriptionDiv-gameDescription-aditionalInfo-year"
  );

  const imdb = new Paragraph(
    "Imdb: " + "",
    "gameView-gameBody-gameDescriptionDiv-gameDescription-aditionalInfo-imdb"
  );

  const gender = new Paragraph(
    "Gender: " + "",
    "gameView-gameBody-gameDescriptionDiv-gameDescription-aditionalInfo-gender"
  );

  const gameplayAnchor = new Anchor(
    "Gameplay",
    "",
    "gameView-gameBody-gameDescriptionDiv-gameDescription-aditionalInfo-gameplayAnchor"
  );
  const trailerAnchor = new Anchor(
    "Trailer",
    "",
    "gameView-gameBody-gameDescriptionDiv-gameDescription-aditionalInfo-trailerAnchor"
  );

  const aditionalInfo = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [year, imdb, gender, gameplayAnchor, trailerAnchor],
    "gameView-gameBody-gameDescriptionDiv-gameDescription-aditionalInfo"
  );

  const gameDescription = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [description, aditionalInfo],
    "gameView-gameBody-gameDescriptionDiv-gameDescription"
  );

  const gameDescriptionDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [gameImage, gameDescription],
    "gameView-gameBody-gameDescriptionDiv"
  );

  const gameBody = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [gameDescriptionDiv],
    "gameView-gameBody"
  );

  return new GameViewPage(header, menu, titleDiv, gameBody);
}
