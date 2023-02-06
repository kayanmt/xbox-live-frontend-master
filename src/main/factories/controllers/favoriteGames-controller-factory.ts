import { GetFavoriteGameListUseCase } from "../../../data/usecases/game/getFavoriteGameList-usecase";
import { ClockUpdateUseCase } from "../../../data/usecases/other/clockUpdate-usecase";
import { GetProfileHeaderUseCase } from "../../../data/usecases/profile/getProfileHeader-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { ProfileIdHandler } from "../../../helpers/profile/profileIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { FavoriteGamesController } from "../../../presentation/controllers/favoriteGames-controller";
import { makeFavoriteGamesPageFactory } from "../pages/favoriteGames-page-factory";

export function makeFavoriteGamesControllerFactory(): FavoriteGamesController {
  const favoriteGamesPage = makeFavoriteGamesPageFactory();
  const httpRequestAdapter = new HttpRequestAdapter();
  const profileRouter = new ProfileRouter(httpRequestAdapter);
  const tokenHandler = new TokenHandler();
  const profileIdHandler = new ProfileIdHandler();
  const gameIdHandler = new GameIdHandler();
  const getFavoriteGamesListUseCase = new GetFavoriteGameListUseCase(
    profileRouter,
    tokenHandler,
    profileIdHandler,
    gameIdHandler
  );
  const getProfileHeaderUseCase = new GetProfileHeaderUseCase(
    profileRouter,
    tokenHandler,
    profileIdHandler
  );
  const clockUpdateUseCase = new ClockUpdateUseCase()
  return new FavoriteGamesController(
    favoriteGamesPage,
    getFavoriteGamesListUseCase,
    getProfileHeaderUseCase,clockUpdateUseCase
  );
}
