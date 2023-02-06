import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";

export class LogoutUseCase implements Service {
  private readonly tokenHandler: TokenHandler;

  constructor(tokenHandler: TokenHandler) {
    this.tokenHandler = tokenHandler;
  }

  public execute(navigateCallbackFunction = () => {}): void {
    const logoutButton = new HtmlElement(
      "userAccountForm-buttonsDiv-logoutButton"
    );
    logoutButton.addEventListener("click", () => {
      if (window.confirm("Logout from this account?")) {
        alert("Logged out!");
        this.tokenHandler.removeToken();
        navigateCallbackFunction();
      }
    });
  }
}
