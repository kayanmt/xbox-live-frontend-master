import { RegisterUserUseCase } from "../../data/usecases/user/registerUser-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { RegisterPage } from "../pages/register-page";

export class RegisterController implements ControllerInterface {
  private readonly registerPage: RegisterPage;
  private readonly registerUserUseCase: RegisterUserUseCase;

  constructor(
    registerPage: RegisterPage,
    registerUserUseCase: RegisterUserUseCase
  ) {
    this.registerPage = registerPage;
    this.registerUserUseCase = registerUserUseCase;
  }

  public renderPage(): string {
    return this.registerPage.render();
  }

  public registerUser(navigateCallbackFunction: () => void): void {
    return this.registerUserUseCase.execute(navigateCallbackFunction);
  }
}
