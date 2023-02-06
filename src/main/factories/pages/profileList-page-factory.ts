import { Button } from "../../../presentation/components/button";
import { Div } from "../../../presentation/components/div";
import { Title } from "../../../presentation/components/title";
import { ButtonTypeEnum } from "../../../presentation/enums/button/button-type-enum";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { ProfileListPage } from "../../../presentation/pages/profileList-page";

export function makeProfileListPageFactory(): ProfileListPage {
  const pageTitle = new Title("Choose a profile", "profileList-title");

  const addProfileButton = new Button(
    "Add",
    ButtonTypeEnum.BUTTON,
    "profileList-addProfileButton",
    [
      "profileList-addProfileButton",
      "background-dark-blue",
      "border-light-gray",
    ]
  );

  const flexBody = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [addProfileButton],
    "profileList-flexBody",
    ["flex-wrap"]
  );

  return new ProfileListPage(pageTitle, flexBody);
}
