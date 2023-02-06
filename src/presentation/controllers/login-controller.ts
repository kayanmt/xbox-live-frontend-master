import { MakeLoginUseCase } from "../../data/usecases/auth/makeLogin-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { LoginPage } from "../pages/login-page";

export class LoginController implements ControllerInterface {
  private readonly loginPage;
  private readonly makeLoginUseCase: MakeLoginUseCase;

  constructor(loginPage: LoginPage, makeLoginUseCase: MakeLoginUseCase) {
    this.loginPage = loginPage;
    this.makeLoginUseCase = makeLoginUseCase;
  }

  public renderPage(): string {
    return this.loginPage.render();
  }

  public makeLogin(navigateCallbackFunction: () => void): void {
    return this.makeLoginUseCase.execute(navigateCallbackFunction);
  }
}
