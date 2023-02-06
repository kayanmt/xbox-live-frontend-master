import { HtmlElement } from "../../../helpers/html/html-element";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { Service } from "../../abstract/service-interface";

export class RegisterUserUseCase implements Service {
  private readonly userRouter: UserRouter;

  constructor(userRouter: UserRouter) {
    this.userRouter = userRouter;
  }

  public execute(navigateCallbackFunction = () => {}): void {
    const registerButton = new HtmlElement(
      "registerForm-buttonsDiv-registerButton"
    );
    const nameInput = new HtmlElement("registerForm-nameInput");
    const emailInput = new HtmlElement("registerForm-emailInput");
    const passwordInput = new HtmlElement("registerForm-passwordInput");
    const cpfInput = new HtmlElement("registerForm-cpfInput");

    registerButton.addEventListener("click", async () => {
      const response = await this.userRouter.create({
        name: nameInput.getValue(),
        email: emailInput.getValue(),
        password: passwordInput.getValue(),
        cpf: cpfInput.getValue(),
      });
      if (response.message) {
        alert(response.message);
      }
      if (response.statusCode === 201) {
        alert("User created!");
        navigateCallbackFunction();
      }
    });
  }
}
