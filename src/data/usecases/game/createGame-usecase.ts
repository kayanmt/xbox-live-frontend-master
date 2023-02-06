import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { Service } from "../../abstract/service-interface";

export class CreateGameUseCase implements Service {
  private readonly gameRouter: GameRouter;
  private readonly tokenHandler: TokenHandler;

  constructor(gameRouter: GameRouter, tokenHandler: TokenHandler) {
    this.gameRouter = gameRouter;
    this.tokenHandler = tokenHandler;
  }

  public execute(navigateCallbackFunction = () => {}): void {
    const authorization = this.tokenHandler.getAuthorization();
    const submitButton = new HtmlElement(
      "gameCreationAdminForm-buttonsDiv-createButton"
    );
    const gameTitle = new HtmlElement("gameCreationAdminForm-titleInput");
    const gamecoverImageUrl = new HtmlElement(
      "gameCreationAdminForm-coverImageUrlInput"
    );
    const gameDescription = new HtmlElement(
      "gameCreationAdminForm-descriptionInput"
    );
    const gameGender = new HtmlElement("gameCreationAdminForm-genderInput");
    const gameYear = new HtmlElement("gameCreationAdminForm-yearInput");
    const gameImdbScore = new HtmlElement("gameCreationAdminForm-imdbInput");
    const gameTrailerUrl = new HtmlElement(
      "gameCreationAdminForm-trailerUrlInput"
    );
    const gameGameplayUrl = new HtmlElement(
      "gameCreationAdminForm-gameplayUrlInput"
    );

    submitButton.addEventListener("click", async () => {
      const response = await this.gameRouter.create(
        {
          title: gameTitle.getValue(),
          coverImageUrl: gamecoverImageUrl.getValue(),
          description: gameDescription.getValue(),
          gender: gameGender.getValue(),
          year: Number(gameYear.getValue()),
          imdbScore: Number(gameImdbScore.getValue()),
          trailerYouTubeUrl: gameTrailerUrl.getValue(),
          gameplayYouTubeUrl: gameGameplayUrl.getValue(),
        },
        authorization
      );
      if (response.message) {
        alert(response.message);
      }
      if (response.statusCode === 201) {
        alert("Game created!");
        navigateCallbackFunction();
      }
    });
  }
}
