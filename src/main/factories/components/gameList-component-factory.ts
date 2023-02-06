import { Div } from "../../../presentation/components/div";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";

const { DIV } = DivTypeEnum;
const { ROW } = FlexDirectionEnum;
const { EVENLY } = FlexJustificationEnum;

export function makeGameListFactory(): Div {
  return new Div(DIV, ROW, EVENLY, [], "gameList-gamesDiv", ["flex-wrap"]);
}
