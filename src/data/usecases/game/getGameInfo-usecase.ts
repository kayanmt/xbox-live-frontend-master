import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { Service } from "../../abstract/service-interface";

export class GetGameInfoUseCase implements Service {
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
      const title = new HtmlElement("gameView-titleDiv-title");
      const image = new HtmlElement(
        "gameView-gameBody-gameDescriptionDiv-image"
      );
      const description = new HtmlElement(
        "gameView-gameBody-gameDescriptionDiv-gameDescription-description"
      );
      const year = new HtmlElement(
        "gameView-gameBody-gameDescriptionDiv-gameDescription-aditionalInfo-year"
      );
      const imdb = new HtmlElement(
        "gameView-gameBody-gameDescriptionDiv-gameDescription-aditionalInfo-imdb"
      );
      const gender = new HtmlElement(
        "gameView-gameBody-gameDescriptionDiv-gameDescription-aditionalInfo-gender"
      );
      const gameplayAnchor = new HtmlElement(
        "gameView-gameBody-gameDescriptionDiv-gameDescription-aditionalInfo-gameplayAnchor"
      );
      const trailerAnchor = new HtmlElement(
        "gameView-gameBody-gameDescriptionDiv-gameDescription-aditionalInfo-trailerAnchor"
      );

      title.setInnerText(game.title);
      image.setSrc(game.coverImageUrl);
      description.setInnerText(game.description);
      year.setInnerText("Year: " + game.year.toString());
      imdb.setInnerText("IMDB: " + game.imdbScore.toString());
      gender.setInnerText("Gender: " + game.gender);
      gameplayAnchor.setHref(game.gameplayYouTubeUrl);
      trailerAnchor.setHref(game.trailerYouTubeUrl);
    });
  }
}
