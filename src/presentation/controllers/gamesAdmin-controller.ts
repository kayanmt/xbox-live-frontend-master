import { GetGamesAdminListUseCase } from "../../data/usecases/game/getGamesAdminList-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { GamesAdminPage } from "../pages/gamesAdmin-page";

export class GamesAdminController implements ControllerInterface {
  private readonly gamesAdminPage: GamesAdminPage;
  private readonly getGamesAdminListUseCase: GetGamesAdminListUseCase;

  constructor(
    gamesAdminPage: GamesAdminPage,
    getGamesAdminListUseCase: GetGamesAdminListUseCase
  ) {
    this.gamesAdminPage = gamesAdminPage;
    this.getGamesAdminListUseCase = getGamesAdminListUseCase;
  }

  public renderPage(): string {
    return this.gamesAdminPage.render();
  }

  public async setGameList(
    navigateCallbackFunction: () => void
  ): Promise<void> {
    return await this.getGamesAdminListUseCase.execute(
      navigateCallbackFunction
    );
  }
}
