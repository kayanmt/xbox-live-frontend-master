import { FavoriteGameUseCase } from "../../data/usecases/game/favoriteGame-usecase";
import { GetGameInfoUseCase } from "../../data/usecases/game/getGameInfo-usecase";
import { ClockUpdateUseCase } from "../../data/usecases/other/clockUpdate-usecase";
import { GetProfileHeaderUseCase } from "../../data/usecases/profile/getProfileHeader-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { GameViewPage } from "../pages/gameView-page";

export class GameViewController implements ControllerInterface {
  private readonly gameViewPage: GameViewPage;
  private readonly getGameInfoUseCase: GetGameInfoUseCase;
  private readonly favoriteGameUseCase: FavoriteGameUseCase;
  private readonly getProfileHeaderUseCase: GetProfileHeaderUseCase;
  private readonly clockUpdateUseCase: ClockUpdateUseCase;

  constructor(
    gameViewPage: GameViewPage,
    getGameInfoUseCase: GetGameInfoUseCase,
    favoriteGameUseCase: FavoriteGameUseCase,
    getProfileHeaderUseCase: GetProfileHeaderUseCase,
    clockUpdateUseCase: ClockUpdateUseCase
  ) {
    this.gameViewPage = gameViewPage;
    this.getGameInfoUseCase = getGameInfoUseCase;
    this.favoriteGameUseCase = favoriteGameUseCase;
    this.getProfileHeaderUseCase = getProfileHeaderUseCase;
    this.clockUpdateUseCase = clockUpdateUseCase;
  }

  public renderPage(): string {
    return this.gameViewPage.render();
  }

  public async setGameInfo(): Promise<void> {
    return await this.getGameInfoUseCase.execute();
  }

  public async favoriteGame(): Promise<void> {
    return await this.favoriteGameUseCase.execute();
  }

  public updateHeader(): void {
    this.getProfileHeaderUseCase.execute();
    this.clockUpdateUseCase.execute();
  }
}
