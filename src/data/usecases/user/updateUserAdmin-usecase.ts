import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { EditionUserIdHandler } from "../../../helpers/user/editionUserIdHandler-helper";
import { UserDto } from "../../../infra/api/dtos/user-dto";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { Service } from "../../abstract/service-interface";

export class UpdateUserAdminUseCase implements Service {
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

  public execute(navigateCallbackFunction = () => {}): void {
    const userId = this.editionUserIdHandler.getUserId();
    const authorization = this.tokenHandler.getAuthorization();
    const updateButton = new HtmlElement(
      "userEditionAdminForm-buttonsDiv-updateButton"
    );
    const userName = new HtmlElement("userEditionAdminForm-nameInput");
    const userEmail = new HtmlElement("userEditionAdminForm-emailInput");
    const userPassword = new HtmlElement("userEditionAdminForm-passwordInput");
    const userCpf = new HtmlElement("userEditionAdminForm-cpfInput");

    updateButton.addEventListener("click", async () => {
      const updatedUser: UserDto = {
        name: userName.getValue(),
        email: userEmail.getValue(),
        cpf: userCpf.getValue(),
      };

      if (userPassword.getValue().trim() !== "") {
        updatedUser.password = userPassword.getValue();
      }

      await this.userRouter
        .update(userId, updatedUser, authorization)
        .then((response) => {
          if (response.message) {
            alert(response.message);
          }
          if (response.statusCode === 200) {
            alert("User updated!");
            navigateCallbackFunction();
          }
        });
    });
  }
}
