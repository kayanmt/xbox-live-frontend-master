import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { Service } from "../../abstract/service-interface";

export class GetGameInfoAdminUseCase implements Service {
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

  public async execute(): Promise<void> {
    const authorization = this.tokenHandler.getAuthorization();
    const gameId = this.gameIdHandler.getGameId();
    this.gameRouter.getById(gameId, authorization).then(async (data) => {
      const game = data.body;
      const title = new HtmlElement("gameEditionAdminForm-titleInput");
      const image = new HtmlElement("gameEditionAdminForm-coverImageUrlInput");
      const description = new HtmlElement(
        "gameEditionAdminForm-descriptionInput"
      );
      const year = new HtmlElement("gameEditionAdminForm-yearInput");
      const imdb = new HtmlElement("gameEditionAdminForm-imdbInput");
      const gender = new HtmlElement("gameEditionAdminForm-genderInput");
      const gameplay = new HtmlElement("gameEditionAdminForm-gameplayUrlInput");
      const trailer = new HtmlElement("gameEditionAdminForm-trailerUrlInput");

      title.setValue(game.title);
      image.setValue(game.coverImageUrl);
      description.setValue(game.description);
      year.setValue(game.year.toString());
      imdb.setValue(game.imdbScore.toString());
      gender.setValue(game.gender);
      gameplay.setValue(game.gameplayYouTubeUrl);
      trailer.setValue(game.trailerYouTubeUrl);
    });
  }
}
