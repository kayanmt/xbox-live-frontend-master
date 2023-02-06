import { ValidateAdminUseCase } from "../../../data/usecases/auth/validateAdmin-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { UserIdHandler } from "../../../helpers/user/userIdHandler-helper";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { HomeAdminController } from "../../../presentation/controllers/homeAdmin-controller";
import { makeHomeAdminPageFactory } from "../pages/homeAdmin-page-factory";

export function makeHomeAdminControllerFactory(): HomeAdminController {
  const homeAdminPage = makeHomeAdminPageFactory();
  const tokenHandler = new TokenHandler();
  const userIdHandler = new UserIdHandler();
  const httpRequestAdapter = new HttpRequestAdapter();
  const userRouter = new UserRouter(httpRequestAdapter);
  const validateAdminUseCase = new ValidateAdminUseCase(
    tokenHandler,
    userRouter,
    userIdHandler
  );
  return new HomeAdminController(homeAdminPage, validateAdminUseCase);
}
