import { GetUsersAdminListUseCase } from "../../../data/usecases/user/getUsersAdmin-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { EditionUserIdHandler } from "../../../helpers/user/editionUserIdHandler-helper";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { UsersAdminController } from "../../../presentation/controllers/usersAdmin-controller";
import { makeUsersAdminPageFactory } from "../pages/usersAdmin-page-factory";

export function makeUsersAdminControllerFactory(): UsersAdminController {
  const usersAdminPage = makeUsersAdminPageFactory();
  const tokenHandler = new TokenHandler();
  const httpRequestAdapter = new HttpRequestAdapter();
  const userRouter = new UserRouter(httpRequestAdapter);
  const editionUserIdHandler = new EditionUserIdHandler();
  const getUsersAdminListUseCase = new GetUsersAdminListUseCase(
    tokenHandler,
    userRouter,
    editionUserIdHandler
  );
  return new UsersAdminController(usersAdminPage, getUsersAdminListUseCase);
}
