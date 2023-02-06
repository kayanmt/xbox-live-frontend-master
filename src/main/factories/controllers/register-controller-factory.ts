import { RegisterUserUseCase } from "../../../data/usecases/user/registerUser-usecase";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { RegisterController } from "../../../presentation/controllers/register-controller";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { makeRegisterPageFactory } from "../pages/register-page-factory";

export function makeRegisterControllerFactory(): RegisterController {
  const httpRequestAdapter = new HttpRequestAdapter();
  const userRouter = new UserRouter(httpRequestAdapter);
  const registerUserUseCase = new RegisterUserUseCase(userRouter);
  const registerPage = makeRegisterPageFactory();
  return new RegisterController(registerPage, registerUserUseCase);
}
