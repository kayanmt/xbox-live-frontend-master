import { Button } from "../../../presentation/components/button";
import { Div } from "../../../presentation/components/div";
import { Input } from "../../../presentation/components/input";
import { Label } from "../../../presentation/components/label";
import { Title } from "../../../presentation/components/title";
import { ButtonTypeEnum } from "../../../presentation/enums/button/button-type-enum";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { InputTypeEnum } from "../../../presentation/enums/input/input-type-enum";

export function makeUserAccountFormFactory(): Div {
  const formTitle = new Title("My account", "userAccountForm-title");

  const nameLabel = new Label("Name", "userAccountForm-nameLabel");
  const nameInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "userAccountForm-nameInput",
    "Name"
  );

  const emailLabel = new Label("Email", "userAccountForm-emailLabel");
  const emailInput = new Input(
    InputTypeEnum.EMAIL,
    "",
    "userAccountForm-emailInput",
    "Email"
  );

  const passwordLabel = new Label("Password", "userAccountForm-passwordLabel");
  const passwordInput = new Input(
    InputTypeEnum.PASSWORD,
    "",
    "userAccountForm-passwordInput",
    "Password"
  );

  const cpfLabel = new Label("CPF", "userAccountForm-cpfLabel");
  const cpfInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "userAccountForm-cpfInput",
    "CPF"
  );

  const updateButton = new Button(
    "Update",
    ButtonTypeEnum.BUTTON,
    "userAccountForm-buttonsDiv-updateButton",
    ["border-light-green", "background-dark-green"]
  );
  const logoutButton = new Button(
    "Logout",
    ButtonTypeEnum.BUTTON,
    "userAccountForm-buttonsDiv-logoutButton",
    ["border-light-blue", "background-dark-blue"]
  );
  const deleteButton = new Button(
    "Delete",
    ButtonTypeEnum.BUTTON,
    "userAccountForm-buttonsDiv-deleteButton",
    ["border-light-red", "background-dark-red"]
  );

  const buttonsDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [logoutButton, updateButton, deleteButton],
    "userAccountForm-buttonsDiv"
  );

  return new Div(
    DivTypeEnum.FORM,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [
      formTitle,
      nameLabel,
      nameInput,
      emailLabel,
      emailInput,
      passwordLabel,
      passwordInput,
      cpfLabel,
      cpfInput,
      buttonsDiv,
    ],
    "userAccountForm",
    ["form"]
  );
}
