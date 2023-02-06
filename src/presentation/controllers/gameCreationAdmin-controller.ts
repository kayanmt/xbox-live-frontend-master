import { CreateGameUseCase } from "../../data/usecases/game/createGame-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { GameCreationAdminPage } from "../pages/gameCreationAdmin-page";

export class GameCreationAdminController implements ControllerInterface {
  private readonly gameCreationAdminPage: GameCreationAdminPage;
  private readonly createGameUseCase: CreateGameUseCase;

  constructor(
    gameCreationAdminPage: GameCreationAdminPage,
    createGameUseCase: CreateGameUseCase
  ) {
    this.gameCreationAdminPage = gameCreationAdminPage;
    this.createGameUseCase = createGameUseCase;
  }

  public renderPage(): string {
    return this.gameCreationAdminPage.render();
  }

  public createGame(navigateCallbackFunction: () => void): void {
    return this.createGameUseCase.execute(navigateCallbackFunction);
  }
}
