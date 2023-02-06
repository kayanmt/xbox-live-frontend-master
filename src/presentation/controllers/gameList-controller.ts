import { GetGameListUseCase } from "../../data/usecases/game/getGameList-usecase";
import { ClockUpdateUseCase } from "../../data/usecases/other/clockUpdate-usecase";
import { GetProfileHeaderUseCase } from "../../data/usecases/profile/getProfileHeader-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { GameListPage } from "../pages/gameList-page";

export class GameListController implements ControllerInterface {
  private readonly gameListPage: GameListPage;
  private readonly getGameListUseCase: GetGameListUseCase;
  private readonly getProfileHeaderUseCase: GetProfileHeaderUseCase;
  private readonly clockUpdateUseCase: ClockUpdateUseCase;

  constructor(
    gameListPage: GameListPage,
    getGameListUseCase: GetGameListUseCase,
    getProfileHeaderUseCase: GetProfileHeaderUseCase,
    clockUpdateUseCase: ClockUpdateUseCase
  ) {
    this.gameListPage = gameListPage;
    this.getGameListUseCase = getGameListUseCase;
    this.getProfileHeaderUseCase = getProfileHeaderUseCase;
    this.clockUpdateUseCase = clockUpdateUseCase;
  }

  public renderPage(): string {
    return this.gameListPage.render();
  }

  public async setGameList(
    navigateCallbackFunction: () => void
  ): Promise<void> {
    return await this.getGameListUseCase.execute(navigateCallbackFunction);
  }

  public updateHeader(): void {
    this.getProfileHeaderUseCase.execute();
    this.clockUpdateUseCase.execute();
  }
}
