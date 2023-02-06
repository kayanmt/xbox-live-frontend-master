import { GetGamesAdminListUseCase } from "../../../data/usecases/game/getGamesAdminList-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { GamesAdminController } from "../../../presentation/controllers/gamesAdmin-controller";
import { makeGamesAdminPageFactory } from "../pages/gamesAdmin-page-factory";

export function makeGamesAdminControllerFactory(): GamesAdminController {
  const gamesAdminPage = makeGamesAdminPageFactory();
  const httpRequestAdapter = new HttpRequestAdapter();
  const gameRouter = new GameRouter(httpRequestAdapter);
  const tokenHandler = new TokenHandler();
  const gameIdHandler = new GameIdHandler();
  const getGamesAdminListUseCase = new GetGamesAdminListUseCase(
    tokenHandler,
    gameRouter,
    gameIdHandler
  );
  return new GamesAdminController(gamesAdminPage, getGamesAdminListUseCase);
}
