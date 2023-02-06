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
import { LoginPage } from "../../../presentation/pages/login-page";

export function makeLoginPage(): LoginPage {
  const formTitle = new Title("Login", "loginForm-title");

  const emailLabel = new Label("Email", "loginForm-emailLabel");
  const emailInput = new Input(
    InputTypeEnum.EMAIL,
    "",
    "loginForm-emailInput",
    "Email"
  );

  const passwordLabel = new Label("Password", "loginForm-passwordLabel");
  const passwordInput = new Input(
    InputTypeEnum.PASSWORD,
    "",
    "loginForm-passwordInput",
    "Password"
  );

  const loginButon = new Button(
    "Login",
    ButtonTypeEnum.BUTTON,
    "loginForm-buttonsDiv-loginButon",
    ["border-light-green", "background-dark-green"]
  );
  const registerButton = new Button(
    "Register",
    ButtonTypeEnum.BUTTON,
    "loginForm-buttonsDiv-registerButton",
    ["border-light-blue", "background-dark-blue"]
  );

  const buttonsDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [loginButon, registerButton],
    "loginForm-buttonsDiv"
  );

  const loginForm = new Div(
    DivTypeEnum.FORM,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [
      formTitle,
      emailLabel,
      emailInput,
      passwordLabel,
      passwordInput,
      buttonsDiv,
    ],
    "loginForm",
    ["form"]
  );

  const loginFormDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [loginForm],
    "loginFormDiv"
  );

  return new LoginPage(loginFormDiv);
}
