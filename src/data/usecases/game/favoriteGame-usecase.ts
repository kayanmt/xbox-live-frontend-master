import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { HtmlElement } from "../../../helpers/html/html-element";
import { ProfileIdHandler } from "../../../helpers/profile/profileIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { Service } from "../../abstract/service-interface";

export class FavoriteGameUseCase implements Service {
  private readonly gameIdHandler: GameIdHandler;
  private readonly profileIdHandler: ProfileIdHandler;
  private readonly profileRouter: ProfileRouter;
  private readonly tokenHandler: TokenHandler;

  constructor(
    gameIdHandler: GameIdHandler,
    profileIdHandler: ProfileIdHandler,
    profileRouter: ProfileRouter,
    tokenHandler: TokenHandler
  ) {
    this.gameIdHandler = gameIdHandler;
    this.profileIdHandler = profileIdHandler;
    this.profileRouter = profileRouter;
    this.tokenHandler = tokenHandler;
  }

  public async execute(): Promise<void> {
    const favoriteButton = new HtmlElement("gameView-titleDiv-favoriteButton");
    return await favoriteButton.addEventListener("click", () =>
      this.sendRequest()
    );
  }

  private async sendRequest(): Promise<void> {
    const authorization = this.tokenHandler.getAuthorization();
    const profileId = this.profileIdHandler.getProfileId();
    const gameId = this.gameIdHandler.getGameId();
    const response = await this.profileRouter.getById(profileId, authorization);
    const isGameFavorited = response.body.favoriteGames.find(
      (id) => id === gameId
    );

    if (isGameFavorited) {
      await this.profileRouter
        .removeGames(profileId, [gameId], authorization)
        .then((response) => {
          if (response.statusCode === 200) {
            alert("Game removed from favorites!");
          }
        });
    } else {
      await this.profileRouter
        .addGames(profileId, [gameId], authorization)
        .then((response) => {
          if (response.statusCode === 200) {
            alert("Game added to favorites!");
          }
        });
    }
  }
}
