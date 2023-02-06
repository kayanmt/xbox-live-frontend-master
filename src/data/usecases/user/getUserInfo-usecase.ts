import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { UserIdHandler } from "../../../helpers/user/userIdHandler-helper";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { Service } from "../../abstract/service-interface";

export class GetUserInfoUseCase implements Service {
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

  public async execute(): Promise<void> {
    const authorization = this.tokenHandler.getAuthorization();
    const userId = this.userIdHandler.getUserId();
    const name = new HtmlElement("userAccountForm-nameInput");
    const email = new HtmlElement("userAccountForm-emailInput");
    const cpf = new HtmlElement("userAccountForm-cpfInput");

    this.userRouter.getById(userId, authorization).then((response) => {
      name.setValue(response.body.name);
      email.setValue(response.body.email);
      cpf.setValue(response.body.cpf);
    });
  }
}
