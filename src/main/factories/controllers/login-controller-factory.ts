import { MakeLoginUseCase } from "../../../data/usecases/auth/makeLogin-usecase";
import { AuthRouter } from "../../../infra/api/routers/auth-router";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { LoginController } from "../../../presentation/controllers/login-controller";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { makeLoginPage } from "../pages/login-page-factory";
import { UserIdHandler } from "../../../helpers/user/userIdHandler-helper";
import { UserRouter } from "../../../infra/api/routers/user-router";

export function makeLoginControllerFactory(): LoginController {
  const httpRequestAdapter = new HttpRequestAdapter();
  const tokenHandler = new TokenHandler();
  const userIdHandler = new UserIdHandler();
  const authRouter = new AuthRouter(httpRequestAdapter);
  const userRouter = new UserRouter(httpRequestAdapter);
  const makeLoginUseCase = new MakeLoginUseCase(
    authRouter,
    userRouter,
    tokenHandler,
    userIdHandler
  );
  const loginPage = makeLoginPage();
  return new LoginController(loginPage, makeLoginUseCase);
}
