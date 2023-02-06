import { FavoriteGameUseCase } from "../../../data/usecases/game/favoriteGame-usecase";
import { GetGameInfoUseCase } from "../../../data/usecases/game/getGameInfo-usecase";
import { ClockUpdateUseCase } from "../../../data/usecases/other/clockUpdate-usecase";
import { GetProfileHeaderUseCase } from "../../../data/usecases/profile/getProfileHeader-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { ProfileIdHandler } from "../../../helpers/profile/profileIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { GameViewController } from "../../../presentation/controllers/gameView-controller";
import { makeGameViewPageFactory } from "../pages/gameView-page-factory";

export function makeGameViewControllerFactory(): GameViewController {
  const gameViewPage = makeGameViewPageFactory();
  const httpRequestAdapter = new HttpRequestAdapter();
  const gameRouter = new GameRouter(httpRequestAdapter);
  const profileRouter = new ProfileRouter(httpRequestAdapter);
  const tokenHandler = new TokenHandler();
  const gameIdHandler = new GameIdHandler();
  const profileIdHandler = new ProfileIdHandler();
  const getGameInfoUseCase = new GetGameInfoUseCase(
    gameRouter,
    tokenHandler,
    gameIdHandler
  );
  const favoriteGameUseCase = new FavoriteGameUseCase(
    gameIdHandler,
    profileIdHandler,
    profileRouter,
    tokenHandler
  );
  const getProfileHeaderUseCase = new GetProfileHeaderUseCase(
    profileRouter,
    tokenHandler,
    profileIdHandler
  );
  const clockUpdateUseCase = new ClockUpdateUseCase();
  return new GameViewController(
    gameViewPage,
    getGameInfoUseCase,
    favoriteGameUseCase,
    getProfileHeaderUseCase,
    clockUpdateUseCase
  );
}
