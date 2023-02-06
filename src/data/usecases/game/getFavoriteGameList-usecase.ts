import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { HtmlElement } from "../../../helpers/html/html-element";
import { Profile } from "../../../domain/profile";
import { Div } from "../../../presentation/components/div";
import { Image } from "../../../presentation/components/image";
import { Paragraph } from "../../../presentation/components/paragraph";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { ComponentComposer } from "../../../presentation/helpers/composers/component-composer";
import { ComponentInterface } from "../../../presentation/abstract/component-interface";
import { ProfileIdHandler } from "../../../helpers/profile/profileIdHandler-helper";
import { Game } from "../../../domain/game";
import { ApiResponse } from "../../../infra/api/dtos/apiResponse-dto";
import { Input } from "../../../presentation/components/input";
import { InputTypeEnum } from "../../../presentation/enums/input/input-type-enum";
import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";

export class GetFavoriteGameListUseCase implements Service {
  private readonly profileRouter: ProfileRouter;
  private readonly tokenHandler: TokenHandler;
  private readonly profileIdHandler: ProfileIdHandler;
  private readonly gameIdHandler: GameIdHandler;

  constructor(
    profileRouter: ProfileRouter,
    tokenHandler: TokenHandler,
    profileIdHandler: ProfileIdHandler,
    gameIdHandler: GameIdHandler
  ) {
    this.profileRouter = profileRouter;
    this.tokenHandler = tokenHandler;
    this.profileIdHandler = profileIdHandler;
    this.gameIdHandler = gameIdHandler;
  }

  public async execute(navigateCallbackFunction = () => {}): Promise<void> {
    const profileId = this.profileIdHandler.getProfileId();
    const authorization = this.tokenHandler.getAuthorization();
    await this.profileRouter
      .getById(profileId, authorization)
      .then((response: ApiResponse<Profile>) => {
        const profiles = response.body.Game.map((data: Game) =>
          this.getProfileCard(data)
        );
        const html = new ComponentComposer(profiles).compose();
        const profileListDiv = new HtmlElement("favoriteGames-gamesDiv");
        profileListDiv.deleteChildren();
        profileListDiv.insertHtml(html, "afterbegin");
      })
      .then(() => this.addEventListenerToGames(navigateCallbackFunction));
  }

  private getProfileCard(game: Game): ComponentInterface {
    const gameTitle = new Paragraph(
      game.title,
      "favoriteGameList-gamesDiv-gameCard-gameTitle"
    );
    const gameImage = new Image(
      "Game image",
      game.coverImageUrl,
      "favoriteGameList-gamesDiv-gameCard-gameImage",
      ["gameCardImage"]
    );
    const gameId = new Input(
      InputTypeEnum.HIDDEN,
      game.id,
      "favoriteGameList-gamesDiv-gameCard-gameId",
      "",
      ["hiddenInput"]
    );
    return new Div(
      DivTypeEnum.DIV,
      FlexDirectionEnum.COLUMN,
      FlexJustificationEnum.EVENLY,
      [gameImage, gameTitle, gameId],
      "favoriteGameList-gamesDiv-gameCard",
      [
        "homepage-gameCard",
        "background-dark-blue",
        "border-light-gray",
        "favoriteGameList-gameCard",
      ]
    );
  }

  private addEventListenerToGames(navigateCallbackFunction = () => {}): void {
    const games = document.querySelectorAll(".favoriteGameList-gameCard");
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
