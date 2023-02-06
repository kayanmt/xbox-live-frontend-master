import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { UserIdHandler } from "../../../helpers/user/userIdHandler-helper";
import { UserRouter } from "../../../infra/api/routers/user-router";

export class ValidateTokenUseCase {
  private readonly tokenHandler: TokenHandler;
  private readonly userRouter: UserRouter;
  private readonly userIdHandler: UserIdHandler;

  constructor(
    tokenHandler: TokenHandler,
    userRouter: UserRouter,
    userIdHandler: UserIdHandler
  ) {
    this.tokenHandler = tokenHandler;
    this.userRouter = userRouter;
    this.userIdHandler = userIdHandler;
  }

  public async execute(
    validateCallbackFunction: (result: boolean) => void
  ): Promise<void> {
    const userId = this.userIdHandler.getUserId();
    const authorization = this.tokenHandler.getAuthorization();
    const foundUser = await this.userRouter.getById(userId, authorization);
    if (foundUser.statusCode === 200) {
      validateCallbackFunction(true);
    } else {
      validateCallbackFunction(false);
    }
  }
}
