import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";

export class DeleteGameAdminUseCase implements Service {
  private readonly gameRouter: GameRouter;
  private readonly tokenHandler: TokenHandler;
  private readonly gameIdHandler: GameIdHandler;

  constructor(
    gameRouter: GameRouter,
    tokenHandler: TokenHandler,
    gameIdHandler: GameIdHandler
  ) {
    this.gameRouter = gameRouter;
    this.tokenHandler = tokenHandler;
    this.gameIdHandler = gameIdHandler;
  }

  public async execute(navigateCallbackFunction = () => {}): Promise<void> {
    const deleteButton = new HtmlElement(
      "gameEditionAdminForm-buttonsDiv-deleteButton"
    );
    const gameId = this.gameIdHandler.getGameId();
    const authorization = this.tokenHandler.getAuthorization();
    deleteButton.addEventListener("click", async () => {
      if (window.confirm("Delete this game?")) {
        await this.gameRouter.delete(gameId, authorization).then((response) => {
          if (response.message) {
            alert(response.message);
          }
          if (response.statusCode === 200) {
            alert("Game deleted!");
            navigateCallbackFunction();
          }
        });
      }
    });
  }
}
