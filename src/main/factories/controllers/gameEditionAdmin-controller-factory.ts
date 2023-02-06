import { DeleteGameAdminUseCase } from "../../../data/usecases/game/deleteGameAdmin-usecase";
import { GetGameInfoAdminUseCase } from "../../../data/usecases/game/getGameInfoAdmin-usecase";
import { UpdateGameAdminUseCase } from "../../../data/usecases/game/updateGameAdmin-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { GameEditionAdminController } from "../../../presentation/controllers/gameEditionAdmin-controller";
import { makeGameEditionAdminPageFactory } from "../pages/gameEditionAdmin-page-factory";

export function makeGameEditionAdminControllerFactory(): GameEditionAdminController {
  const gameEditionAdminPage = makeGameEditionAdminPageFactory();
  const httpRequestAdapter = new HttpRequestAdapter();
  const gameRouter = new GameRouter(httpRequestAdapter);
  const tokenHandler = new TokenHandler();
  const gameIdHandler = new GameIdHandler();
  const getGameInfoAdminUseCase = new GetGameInfoAdminUseCase(
    gameRouter,
    tokenHandler,
    gameIdHandler
  );
  const updateGameAdminUseCase = new UpdateGameAdminUseCase(
    gameRouter,
    tokenHandler,
    gameIdHandler
  );
  const deleteGameAdminUseCase = new DeleteGameAdminUseCase(
    gameRouter,
    tokenHandler,
    gameIdHandler
  );
  return new GameEditionAdminController(
    gameEditionAdminPage,
    getGameInfoAdminUseCase,
    updateGameAdminUseCase,
    deleteGameAdminUseCase
  );
}
