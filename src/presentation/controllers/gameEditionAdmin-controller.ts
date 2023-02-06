import { DeleteGameAdminUseCase } from "../../data/usecases/game/deleteGameAdmin-usecase";
import { GetGameInfoAdminUseCase } from "../../data/usecases/game/getGameInfoAdmin-usecase";
import { UpdateGameAdminUseCase } from "../../data/usecases/game/updateGameAdmin-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { GameEditionAdminPage } from "../pages/gameEditionAdmin-page";

export class GameEditionAdminController implements ControllerInterface {
  private readonly gameEditionAdminPage: GameEditionAdminPage;
  private readonly getGameInfoAdminUseCase: GetGameInfoAdminUseCase;
  private readonly updateGameAdminUseCase: UpdateGameAdminUseCase;
  private readonly deleteGameAdminUseCase: DeleteGameAdminUseCase;

  constructor(
    gameEditionAdminPage: GameEditionAdminPage,
    getGameInfoAdminUseCase: GetGameInfoAdminUseCase,
    updateGameAdminUseCase: UpdateGameAdminUseCase,
    deleteGameAdminUseCase: DeleteGameAdminUseCase
  ) {
    this.gameEditionAdminPage = gameEditionAdminPage;
    this.getGameInfoAdminUseCase = getGameInfoAdminUseCase;
    this.updateGameAdminUseCase = updateGameAdminUseCase;
    this.deleteGameAdminUseCase = deleteGameAdminUseCase;
  }

  public renderPage(): string {
    return this.gameEditionAdminPage.render();
  }

  public getGameInfo(): void {
    this.getGameInfoAdminUseCase.execute();
  }

  public updateGame(navigateCallbackFunction: () => void): void {
    this.updateGameAdminUseCase.execute(navigateCallbackFunction);
  }

  public deleteGame(navigateCallbackFunction: () => void): void {
    this.deleteGameAdminUseCase.execute(navigateCallbackFunction);
  }
}
