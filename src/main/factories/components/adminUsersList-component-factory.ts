import { Div } from "../../../presentation/components/div";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";

export function makeAdminUsersListFactory(): Div {
  return new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [],
    "adminUsersList-usersDiv",
    ["flex-wrap"]
  );
}
