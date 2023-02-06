import { Game } from "../../../domain/game";
import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { ApiResponse } from "../../../infra/api/dtos/apiResponse-dto";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { ComponentInterface } from "../../../presentation/abstract/component-interface";
import { Div } from "../../../presentation/components/div";
import { Image } from "../../../presentation/components/image";
import { Input } from "../../../presentation/components/input";
import { Paragraph } from "../../../presentation/components/paragraph";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { InputTypeEnum } from "../../../presentation/enums/input/input-type-enum";
import { ComponentComposer } from "../../../presentation/helpers/composers/component-composer";
import { Service } from "../../abstract/service-interface";

export class GetGamesAdminListUseCase implements Service {
  private readonly tokenHandler: TokenHandler;
  private readonly gameIdHandler: GameIdHandler;
  private readonly gameRouter: GameRouter;

  constructor(
    tokenHandler: TokenHandler,
    gameRouter: GameRouter,
    gameIdHandler: GameIdHandler
  ) {
    this.gameRouter = gameRouter;
    this.tokenHandler = tokenHandler;
    this.gameIdHandler = gameIdHandler;
  }

  public async execute(navigateCallbackFunction = () => {}): Promise<void> {
    const authorization = this.tokenHandler.getAuthorization();
    await this.gameRouter
      .getAll(authorization)
      .then((response: ApiResponse<Game[]>) => {
        const profiles = response.body.map((data: Game) =>
          this.getGameCard(data)
        );
        const html = new ComponentComposer(profiles).compose();
        const profileListDiv = new HtmlElement("adminGameList-gamesDiv");
        profileListDiv.deleteChildren();
        profileListDiv.insertHtml(html, "afterbegin");
      })
      .then(() => this.addEventListenerToGames(navigateCallbackFunction));
  }

  private getGameCard(game: Game): ComponentInterface {
    const gameTitle = new Paragraph(
      game.title,
      "adminGameList-gamesDiv-gameCard-gameTitle"
    );
    const gameImage = new Image(
      "Game image",
      game.coverImageUrl,
      "adminGameList-gamesDiv-gameCard-gameImage",
      ["gameCardImage"]
    );
    const gameId = new Input(
      InputTypeEnum.HIDDEN,
      game.id,
      "adminGameList-gamesDiv-gameCard-gameId",
      "",
      ["hiddenInput"]
    );
    return new Div(
      DivTypeEnum.DIV,
      FlexDirectionEnum.COLUMN,
      FlexJustificationEnum.EVENLY,
      [gameImage, gameTitle, gameId],
      "adminGameList-gamesDiv-gameCard",
      [
        "homepage-gameCard",
        "background-dark-blue",
        "border-light-gray",
        "adminGameCard",
      ]
    );
  }

  private addEventListenerToGames(navigateCallbackFunction = () => {}): void {
    const games = document.querySelectorAll(".adminGameCard");
    for (const game of games) {
      game.addEventListener("click", () => {
        this.gameIdHandler.removeGameId();
        const gameId = game.querySelector("input")?.value || "";
        this.gameIdHandler.storeGameId(gameId);
        navigateCallbackFunction();
      });
    }
  }
}
