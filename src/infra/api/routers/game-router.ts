import { ApiConnection } from "../connection/apiConnection";
import { ApiResponse } from "../dtos/apiResponse-dto";
import { Game } from "../../../domain/game";
import { GameDto } from "../dtos/game-dto";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";

export class GameRouter extends ApiConnection {
  private readonly httpRequestAdapter: HttpRequestAdapter;

  constructor(httpRequestAdapter: HttpRequestAdapter) {
    super();
    this.httpRequestAdapter = httpRequestAdapter;
  }

  public async create(
    game: GameDto,
    authorizationToken: string
  ): Promise<ApiResponse<Game>> {
    return await this.httpRequestAdapter.post(
      this.apiLink + "/game/create-game",
      game,
      authorizationToken
    );
  }

  public async getAll(
    authorizationToken: string
  ): Promise<ApiResponse<Game[]>> {
    return await this.httpRequestAdapter.get(
      this.apiLink + "/game/get-all-games",
      authorizationToken
    );
  }

  public async getById(
    gameId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Game>> {
    return await this.httpRequestAdapter.get(
      this.apiLink + "/game/get-game/" + gameId,
      authorizationToken
    );
  }

  public async delete(
    gameId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Game>> {
    return await this.httpRequestAdapter.delete(
      this.apiLink + "/game/delete-game/" + gameId,
      authorizationToken
    );
  }

  public async update(
    gameId: string,
    game: GameDto,
    authorizationToken: string
  ): Promise<ApiResponse<Game>> {
    return await this.httpRequestAdapter.patch(
      this.apiLink + "/game/update-game/" + gameId,
      game,
      authorizationToken
    );
  }
}
