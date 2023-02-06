import { Div } from "../../../presentation/components/div";
import { Label } from "../../../presentation/components/label";
import { Select } from "../../../presentation/components/select";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";

export function makeGameListCategoryFilterFactory(): Div {
  const label = new Label("Filter: ", "gameList-categoryFilter-label");
  const selectOptions = [
    { option: "None", value: "" },
    { option: "Adventure", value: "Adventure" },
    { option: "Action", value: "Action" },
    { option: "Race", value: "Race" },
    { option: "Board", value: "Board" },
  ];
  const select = new Select(selectOptions, "gameList-categoryFilter-select");
  return new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [label, select],
    "gameList-categoryFilter"
  );
}
