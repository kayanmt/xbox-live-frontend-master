import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { EditionUserIdHandler } from "../../../helpers/user/editionUserIdHandler-helper";

export class DeleteUserAdminUseCase implements Service {
  private readonly userRouter: UserRouter;
  private readonly tokenHandler: TokenHandler;
  private readonly editionUserIdHandler: EditionUserIdHandler;

  constructor(
    userRouter: UserRouter,
    tokenHandler: TokenHandler,
    editionUserIdHandler: EditionUserIdHandler
  ) {
    this.userRouter = userRouter;
    this.tokenHandler = tokenHandler;
    this.editionUserIdHandler = editionUserIdHandler;
  }

  public async execute(navigateCallbackFunction = () => {}): Promise<void> {
    const deleteButton = new HtmlElement(
      "userEditionAdminForm-buttonsDiv-deleteButton"
    );
    const userId = this.editionUserIdHandler.getUserId();
    const authorization = this.tokenHandler.getAuthorization();
    deleteButton.addEventListener("click", async () => {
      if (window.confirm("Delete this user?")) {
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
