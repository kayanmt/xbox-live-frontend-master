import { ValidateAdminUseCase } from "../../../data/usecases/auth/validateAdmin-usecase";
import { GenerateProfileCardsUseCase } from "../../../data/usecases/profile/generateProfileCards-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { ProfileIdHandler } from "../../../helpers/profile/profileIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { UserIdHandler } from "../../../helpers/user/userIdHandler-helper";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { ProfileListController } from "../../../presentation/controllers/profileList-controller";
import { makeProfileListPageFactory } from "../pages/profileList-page-factory";

export function makeProfileListControllerFactory(): ProfileListController {
  const httpRequestAdapter = new HttpRequestAdapter();
  const profileRouter = new ProfileRouter(httpRequestAdapter);
  const userRouter = new UserRouter(httpRequestAdapter);
  const tokenHandler = new TokenHandler();
  const profileIdHandler = new ProfileIdHandler();
  const userIdHandler = new UserIdHandler();
  const generateProfileCardsUseCase = new GenerateProfileCardsUseCase(
    profileRouter,
    tokenHandler,
    profileIdHandler
  );
  const validateAdminUseCase = new ValidateAdminUseCase(
    tokenHandler,
    userRouter,
    userIdHandler
  );
  const profileListPage = makeProfileListPageFactory();
  return new ProfileListController(
    profileListPage,
    generateProfileCardsUseCase,
    validateAdminUseCase
  );
}
