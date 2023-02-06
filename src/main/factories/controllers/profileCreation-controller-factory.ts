import { CreateProfileUseCase } from "../../../data/usecases/profile/createProfile-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { ProfileCreationController } from "../../../presentation/controllers/profileCreation-controller";
import { makeProfileCreationPageFactory } from "../pages/profileCreation-page-factory";

export function makeProfileCreationControllerFactory(): ProfileCreationController {
  const httpRequestAdapter = new HttpRequestAdapter();
  const profileRouter = new ProfileRouter(httpRequestAdapter);
  const tokenHandler = new TokenHandler();
  const createProfileUseCase = new CreateProfileUseCase(
    profileRouter,
    tokenHandler
  );
  const profileCreationPage = makeProfileCreationPageFactory();
  return new ProfileCreationController(
    profileCreationPage,
    createProfileUseCase
  );
}
