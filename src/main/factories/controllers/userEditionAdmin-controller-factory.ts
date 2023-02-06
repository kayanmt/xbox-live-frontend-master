import { DeleteUserAdminUseCase } from "../../../data/usecases/user/deleteUserAdmin-usecase";
import { GetUserInfoAdminUseCase } from "../../../data/usecases/user/getUserInfoAdmin-usecase";
import { UpdateUserAdminUseCase } from "../../../data/usecases/user/updateUserAdmin-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { EditionUserIdHandler } from "../../../helpers/user/editionUserIdHandler-helper";
import { UserIdHandler } from "../../../helpers/user/userIdHandler-helper";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { UserEditionAdminController } from "../../../presentation/controllers/userEditionAdmin-controller";
import { makeUserEditionAdminPageFactory } from "../pages/userEditionAdmin-page-factory";

export function makeUserEditionAdminControllerFactory(): UserEditionAdminController {
  const userEditionAdminPage = makeUserEditionAdminPageFactory();
  const httpRequestAdapter = new HttpRequestAdapter();
  const userRouter = new UserRouter(httpRequestAdapter);
  const tokenHandler = new TokenHandler();
  const editionUserIdHandler = new EditionUserIdHandler();
  const getUserInfoAdminUseCase = new GetUserInfoAdminUseCase(
    userRouter,
    tokenHandler,
    editionUserIdHandler
  );
  const updateUserAdminUseCase = new UpdateUserAdminUseCase(
    userRouter,
    tokenHandler,
    editionUserIdHandler
  );
  const deleteUserAdminUseCase = new DeleteUserAdminUseCase(
    userRouter,
    tokenHandler,
    editionUserIdHandler
  );
  return new UserEditionAdminController(
    userEditionAdminPage,
    getUserInfoAdminUseCase,
    updateUserAdminUseCase,
    deleteUserAdminUseCase
  );
}
