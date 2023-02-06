import { GetLatestGameListUseCase } from "../../../data/usecases/game/getLatestGameList-usecase";
import { ClockUpdateUseCase } from "../../../data/usecases/other/clockUpdate-usecase";
import { GetProfileHeaderUseCase } from "../../../data/usecases/profile/getProfileHeader-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { ProfileIdHandler } from "../../../helpers/profile/profileIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { HomePageController } from "../../../presentation/controllers/homePage-controller";
import { makeHomePageFactory } from "../pages/home-page-factory";

export function makeHomePageControllerFactory(): HomePageController {
  const homePage = makeHomePageFactory();
  const httpRequestAdapter = new HttpRequestAdapter();
  const tokenHandler = new TokenHandler();
  const gameIdHandler = new GameIdHandler();
  const gameRouter = new GameRouter(httpRequestAdapter);
  const getLatestGameListUseCase = new GetLatestGameListUseCase(
    gameRouter,
    tokenHandler,
    gameIdHandler
  );
  const profileRouter = new ProfileRouter(httpRequestAdapter);
  const profileIdHandler = new ProfileIdHandler();
  const getProfileHeaderUseCase = new GetProfileHeaderUseCase(
    profileRouter,
    tokenHandler,
    profileIdHandler
  );
  const clockUpdateUseCase = new ClockUpdateUseCase();
  return new HomePageController(
    homePage,
    getLatestGameListUseCase,
    getProfileHeaderUseCase,
    clockUpdateUseCase
  );
}
