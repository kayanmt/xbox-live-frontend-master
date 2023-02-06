import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { Service } from "../../abstract/service-interface";

export class UpdateGameAdminUseCase implements Service {
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

  public execute(navigateCallbackFunction = () => {}): void {
    const gameId = this.gameIdHandler.getGameId();
    const authorization = this.tokenHandler.getAuthorization();
    const updateButton = new HtmlElement(
      "gameEditionAdminForm-buttonsDiv-updateButton"
    );
    const gameTitle = new HtmlElement("gameEditionAdminForm-titleInput");
    const gameImage = new HtmlElement(
      "gameEditionAdminForm-coverImageUrlInput"
    );
    const gameDescription = new HtmlElement(
      "gameEditionAdminForm-descriptionInput"
    );
    const gameYear = new HtmlElement("gameEditionAdminForm-yearInput");
    const gameImdb = new HtmlElement("gameEditionAdminForm-imdbInput");
    const gameGender = new HtmlElement("gameEditionAdminForm-genderInput");
    const gameGameplay = new HtmlElement(
      "gameEditionAdminForm-gameplayUrlInput"
    );
    const gameTrailer = new HtmlElement("gameEditionAdminForm-trailerUrlInput");

    updateButton.addEventListener("click", async () => {
      await this.gameRouter
        .update(
          gameId,
          {
            title: gameTitle.getValue(),
            coverImageUrl: gameImage.getValue(),
            description: gameDescription.getValue(),
            year: Number(gameYear.getValue()),
            imdbScore: Number(gameImdb.getValue()),
            gender: gameGender.getValue(),
            gameplayYouTubeUrl: gameGameplay.getValue(),
            trailerYouTubeUrl: gameTrailer.getValue(),
          },
          authorization
        )
        .then((response) => {
          if (response.message) {
            alert(response.message);
          }
          if (response.statusCode === 200) {
            alert("Game updated!");
            navigateCallbackFunction();
          }
        });
    });
  }
}
