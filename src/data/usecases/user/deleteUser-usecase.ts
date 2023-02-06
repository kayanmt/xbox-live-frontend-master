import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { UserIdHandler } from "../../../helpers/user/userIdHandler-helper";

export class DeleteUserUseCase implements Service {
  private readonly userRouter: UserRouter;
  private readonly tokenHandler: TokenHandler;
  private readonly userIdHandler: UserIdHandler;

  constructor(
    userRouter: UserRouter,
    tokenHandler: TokenHandler,
    userIdHandler: UserIdHandler
  ) {
    this.userRouter = userRouter;
    this.tokenHandler = tokenHandler;
    this.userIdHandler = userIdHandler;
  }

  public async execute(navigateCallbackFunction = () => {}): Promise<void> {
    const deleteButton = new HtmlElement(
      "userAccountForm-buttonsDiv-deleteButton"
    );
    const userId = this.userIdHandler.getUserId();
    const authorization = this.tokenHandler.getAuthorization();
    deleteButton.addEventListener("click", async () => {
      if (window.confirm("Delete your account?")) {
        await this.userRouter.delete(userId, authorization).then((response) => {
          if (response.message) {
            alert(response.message);
          }
          if (response.statusCode === 200) {
            alert("User deleted!");
            navigateCallbackFunction();
          }
        });
      }
    });
  }
}
