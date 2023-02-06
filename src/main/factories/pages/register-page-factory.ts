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
import { RegisterPage } from "../../../presentation/pages/register-page";

export function makeRegisterPageFactory(): RegisterPage {
  const formTitle = new Title("Register", "registerForm-title");

  const nameLabel = new Label("Name", "registerForm-nameLabel");
  const nameInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "registerForm-nameInput",
    "Name"
  );

  const emailLabel = new Label("Email", "registerForm-emailLabel");
  const emailInput = new Input(
    InputTypeEnum.EMAIL,
    "",
    "registerForm-emailInput",
    "Email"
  );

  const passwordLabel = new Label("Password", "registerForm-passwordLabel");
  const passwordInput = new Input(
    InputTypeEnum.PASSWORD,
    "",
    "registerForm-passwordInput",
    "Password"
  );

  const cpfLabel = new Label("CPF", "registerForm-cpfLabel");
  const cpfInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "registerForm-cpfInput",
    "CPF"
  );

  const registerButton = new Button(
    "Register",
    ButtonTypeEnum.BUTTON,
    "registerForm-buttonsDiv-registerButton",
    ["border-light-green", "background-dark-green"]
  );

  const closeButtonButton = new Button(
    "Close",
    ButtonTypeEnum.BUTTON,
    "registerForm-buttonsDiv-closeButtonButton",
    ["border-light-red", "background-dark-red"]
  );

  const buttonsDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [registerButton, closeButtonButton],
    "registerForm-buttonsDiv"
  );

  const loginForm = new Div(
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
    "registerForm",
    ["form"]
  );

  const loginFormDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [loginForm],
    "registerFormDiv"
  );

  return new RegisterPage(loginFormDiv);
}
