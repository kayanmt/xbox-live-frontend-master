import { HtmlElement } from "../../../helpers/html/html-element";
import { AuthRouter } from "../../../infra/api/routers/auth-router";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";
import { UserIdHandler } from "../../../helpers/user/userIdHandler-helper";
import { UserRouter } from "../../../infra/api/routers/user-router";

export class MakeLoginUseCase implements Service {
  private readonly authRouter: AuthRouter;
  private readonly userRouter: UserRouter;
  private readonly tokenHandler: TokenHandler;
  private readonly userIdHandler: UserIdHandler;

  constructor(
    authRouter: AuthRouter,
    userRouter: UserRouter,
    tokenHandler: TokenHandler,
    userIdHandler: UserIdHandler
  ) {
    this.authRouter = authRouter;
    this.userRouter = userRouter;
    this.tokenHandler = tokenHandler;
    this.userIdHandler = userIdHandler;
  }

  public execute(navigateCallbackFunction = () => {}): void {
    const loginButton = new HtmlElement("loginForm-buttonsDiv-loginButon");
    const emailInput = new HtmlElement("loginForm-emailInput");
    const passwordInput = new HtmlElement("loginForm-passwordInput");

    loginButton.addEventListener("click", async () => {
      const email = emailInput.getValue();
      const password = passwordInput.getValue();
      const response = await this.authRouter.login({
        email,
        password,
      });
      if (response.message) {
        alert(response.message);
      }
      if (response.statusCode === 200) {
        const token = response.body.token;
        this.tokenHandler.storeToken(token);
        const authorization = this.tokenHandler.getAuthorization();
        const userId = await this.getUserId(email, authorization);
        this.userIdHandler.storeUserId(userId);
        alert("Logged in!");
        navigateCallbackFunction();
      } else {
        this.tokenHandler.removeToken();
      }
    });
  }

  private async getUserId(
    userEmail: string,
    authorization: string
  ): Promise<string> {
    const response = await this.userRouter.getByEmail(userEmail, authorization);
    return response.body.id;
  }
}
