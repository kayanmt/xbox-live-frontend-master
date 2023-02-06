import { LogoutUseCase } from "../../../data/usecases/auth/logout-usecase";
import { DeleteProfileUseCase } from "../../../data/usecases/profile/deleteProfile-usecase";
import { GetProfileInfoUseCase } from "../../../data/usecases/profile/getProfileInfoUseCase";
import { UpdateProfileUseCase } from "../../../data/usecases/profile/updateProfile-usecase";
import { DeleteUserUseCase } from "../../../data/usecases/user/deleteUser-usecase";
import { GetUserInfoUseCase } from "../../../data/usecases/user/getUserInfo-usecase";
import { UpdateUserUseCase } from "../../../data/usecases/user/updateUser-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { ProfileIdHandler } from "../../../helpers/profile/profileIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { UserIdHandler } from "../../../helpers/user/userIdHandler-helper";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { LoggedUserController } from "../../../presentation/controllers/loggedUser-controller";
import { makeLoggedUserPageFactory } from "../pages/loggedUser-page-factory";

export function makeLoggedUserControllerFactory(): LoggedUserController {
  const loggedUserPage = makeLoggedUserPageFactory();
  const httpRequestAdapter = new HttpRequestAdapter();
  const tokenHandler = new TokenHandler();
  const userIdHandler = new UserIdHandler();
  const userRouter = new UserRouter(httpRequestAdapter);
  const getUserInfoUseCase = new GetUserInfoUseCase(
    userRouter,
    tokenHandler,
    userIdHandler
  );
  const profileIdHandler = new ProfileIdHandler();
  const profileRouter = new ProfileRouter(httpRequestAdapter);
  const getProfileInfoUseCase = new GetProfileInfoUseCase(
    profileRouter,
    tokenHandler,
    profileIdHandler
  );

  const updateUserUseCase = new UpdateUserUseCase(
    userRouter,
    tokenHandler,
    userIdHandler
  );
  const updateProfileUseCase = new UpdateProfileUseCase(
    profileRouter,
    tokenHandler,
    profileIdHandler
  );
  const deleteProfileUseCase = new DeleteProfileUseCase(
    profileRouter,
    tokenHandler,
    profileIdHandler
  );
  const deleteUserUseCase = new DeleteUserUseCase(
    userRouter,
    tokenHandler,
    userIdHandler
  );
  const logoutUseCase = new LogoutUseCase(tokenHandler);
  return new LoggedUserController(
    loggedUserPage,
    getUserInfoUseCase,
    getProfileInfoUseCase,
    updateUserUseCase,
    updateProfileUseCase,
    deleteProfileUseCase,
    deleteUserUseCase,
    logoutUseCase
  );
}
