import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { EditionUserIdHandler } from "../../../helpers/user/editionUserIdHandler-helper";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { Service } from "../../abstract/service-interface";

export class GetUserInfoAdminUseCase implements Service {
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

  public async execute(): Promise<void> {
    const authorization = this.tokenHandler.getAuthorization();
    const userId = this.editionUserIdHandler.getUserId();
    this.userRouter.getById(userId, authorization).then(async (data) => {
      const user = data.body;
      const name = new HtmlElement("userEditionAdminForm-nameInput");
      const email = new HtmlElement("userEditionAdminForm-emailInput");
      const cpf = new HtmlElement("userEditionAdminForm-cpfInput");
      name.setValue(user.name);
      email.setValue(user.email);
      cpf.setValue(user.cpf);
    });
  }
}
