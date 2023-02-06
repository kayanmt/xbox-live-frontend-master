import { GetGameListUseCase } from "../../../data/usecases/game/getGameList-usecase";
import { ClockUpdateUseCase } from "../../../data/usecases/other/clockUpdate-usecase";
import { GetProfileHeaderUseCase } from "../../../data/usecases/profile/getProfileHeader-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { ProfileIdHandler } from "../../../helpers/profile/profileIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { GameListController } from "../../../presentation/controllers/gameList-controller";
import { makeGameListPageFactory } from "../pages/gameList-page-factory";

export function makeGameListControllerFactory(): GameListController {
  const gameListPage = makeGameListPageFactory();
  const httpRequestAdapter = new HttpRequestAdapter();
  const gameRouter = new GameRouter(httpRequestAdapter);
  const tokenHandler = new TokenHandler();
  const gameIdHandler = new GameIdHandler();
  const getGameListUseCase = new GetGameListUseCase(
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
  return new GameListController(
    gameListPage,
    getGameListUseCase,
    getProfileHeaderUseCase,
    clockUpdateUseCase
  );
}
