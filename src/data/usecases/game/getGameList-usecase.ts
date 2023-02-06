import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";
import { HtmlElement } from "../../../helpers/html/html-element";
import { Div } from "../../../presentation/components/div";
import { Image } from "../../../presentation/components/image";
import { Paragraph } from "../../../presentation/components/paragraph";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { ComponentComposer } from "../../../presentation/helpers/composers/component-composer";
import { ComponentInterface } from "../../../presentation/abstract/component-interface";
import { Game } from "../../../domain/game";
import { ApiResponse } from "../../../infra/api/dtos/apiResponse-dto";
import { Input } from "../../../presentation/components/input";
import { InputTypeEnum } from "../../../presentation/enums/input/input-type-enum";
import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { GameRouter } from "../../../infra/api/routers/game-router";

export class GetGameListUseCase implements Service {
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
    await this.renderGameCards(navigateCallbackFunction);
  }

  private async renderGameCards(
    navigateCallbackFunction = () => {}
  ): Promise<void> {
    const authorization = this.tokenHandler.getAuthorization();
    await this.gameRouter
      .getAll(authorization)
      .then((response: ApiResponse<Game[]>) => {
        const games = response.body.map((data: Game) => this.getGameCard(data));
        const html = new ComponentComposer(games).compose();
        const gameListDiv = new HtmlElement("gameList-gamesDiv");
        gameListDiv.deleteChildren();
        gameListDiv.insertHtml(html, "afterbegin");
      })
      .then(() => {
        this.addEventListenerToGames(navigateCallbackFunction);
        this.addCategoryFilter(navigateCallbackFunction);
      });
  }

  private getGameCard(game: Game): ComponentInterface {
    const gameTitle = new Paragraph(
      game.title,
      "gameList-gamesDiv-gameCard-gameTitle"
    );
    const gameImage = new Image(
      "Game image",
      game.coverImageUrl,
      "gameList-gamesDiv-gameCard-gameImage",
      ["gameCardImage"]
    );
    const gameId = new Input(
      InputTypeEnum.HIDDEN,
      game.id,
      "gameList-gamesDiv-gameCard-gameId",
      "",
      ["hiddenInput"]
    );
    return new Div(
      DivTypeEnum.DIV,
      FlexDirectionEnum.COLUMN,
      FlexJustificationEnum.EVENLY,
      [gameImage, gameTitle, gameId],
      "gameList-gamesDiv-gameCard",
      [
        "homepage-gameCard",
        "background-dark-blue",
        "border-light-gray",
        "gameList-gameCard",
      ]
    );
  }

  private addEventListenerToGames(navigateCallbackFunction = () => {}): void {
    const games = document.querySelectorAll(".gameList-gameCard");
    for (const game of games) {
      game.addEventListener("click", () => {
        this.gameIdHandler.removeGameId();
        const gameId = game.querySelector("input")?.value || "";
        this.gameIdHandler.storeGameId(gameId);
        navigateCallbackFunction();
      });
    }
  }

  private async addCategoryFilter(
    navigateCallbackFunction = () => {}
  ): Promise<void> {
    const selectComponent = new HtmlElement("gameList-categoryFilter-select");
    selectComponent.addEventListener("change", async (): Promise<void> => {
      const gameListDiv = new HtmlElement("gameList-gamesDiv");
      gameListDiv.deleteChildren();
      const authorization = this.tokenHandler.getAuthorization();
      this.gameRouter
        .getAll(authorization)
        .then((response: ApiResponse<Game[]>) => {
          const receivedGames = response.body.filter((data) => {
            const filter = selectComponent.getValue();
            const filterUnset =
              filter.trim() === "" || filter === null || filter === undefined;
            if (filterUnset) {
              return true;
            }
            return data.gender.toUpperCase() === filter.toUpperCase();
          });
          const games = receivedGames.map((data: Game) =>
            this.getGameCard(data)
          );
          gameListDiv.deleteChildren();
          const html = new ComponentComposer(games).compose();
          gameListDiv.insertHtml(html, "afterbegin");
        })
        .then(() => {
          this.addEventListenerToGames(navigateCallbackFunction);
          this.addCategoryFilter(navigateCallbackFunction);
        });
    });
  }
}
