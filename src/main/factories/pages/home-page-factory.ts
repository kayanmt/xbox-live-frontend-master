import { HomePage } from "../../../presentation/pages/home-page";
import { makeHeaderFactory } from "../components/header-component-factory";
import { makeMenuFactory } from "../components/menu-component-factory";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { Div } from "../../../presentation/components/div";

const { DIV } = DivTypeEnum;
const { ROW } = FlexDirectionEnum;
const { EVENLY } = FlexJustificationEnum;
export function makeHomePageFactory(): HomePage {
  const header = makeHeaderFactory();
  const gamesDiv = new Div(DIV, ROW, EVENLY, [], "homePage-gamesDiv", [
    "flex-wrap",
  ]);
  const menuDiv = makeMenuFactory();

  return new HomePage(header, gamesDiv, menuDiv);
}
