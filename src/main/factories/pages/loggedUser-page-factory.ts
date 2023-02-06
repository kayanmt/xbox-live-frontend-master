import { Div } from "../../../presentation/components/div";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { LoggedUserPage } from "../../../presentation/pages/loggedUser-page";
import { makeMenuFactory } from "../components/menu-component-factory";
import { makeProfileFormFactory } from "../components/profileForm-component-factory";
import { makeUserAccountFormFactory } from "../components/userAccountForm-component-factory";

export function makeLoggedUserPageFactory(): LoggedUserPage {
  const menuDiv = makeMenuFactory();
  const profileForm = makeProfileFormFactory();
  const userEditionForm = makeUserAccountFormFactory();

  const formsDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [profileForm, userEditionForm],
    "loggedUser-formsDiv",
    ["flex-wrap"]
  );

  return new LoggedUserPage(menuDiv, formsDiv);
}
