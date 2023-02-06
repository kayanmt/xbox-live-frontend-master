import { ApiConnection } from "../connection/apiConnection";
import { ApiResponse } from "../dtos/apiResponse-dto";
import { ProfileDto } from "../dtos/profile-dto";
import { Profile } from "../../../domain/profile";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";

export class ProfileRouter extends ApiConnection {
  private readonly httpRequestAdapter: HttpRequestAdapter;

  constructor(httpRequestAdapter: HttpRequestAdapter) {
    super();
    this.httpRequestAdapter = httpRequestAdapter;
  }

  public async create(
    profile: ProfileDto,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    return await this.httpRequestAdapter.post(
      this.apiLink + "/profile/create-profile",
      profile,
      authorizationToken
    );
  }

  public async getAll(
    authorizationToken: string
  ): Promise<ApiResponse<Profile[]>> {
    return await this.httpRequestAdapter.get(
      this.apiLink + "/profile/get-all-profiles",
      authorizationToken
    );
  }

  public async getById(
    profileId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    return await this.httpRequestAdapter.get(
      this.apiLink + "/profile/get-profile/" + profileId,
      authorizationToken
    );
  }

  public async delete(
    profileId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    return await this.httpRequestAdapter.delete(
      this.apiLink + "/profile/delete-profile/" + profileId,
      authorizationToken
    );
  }

  public async update(
    profileId: string,
    profile: ProfileDto,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    return await this.httpRequestAdapter.patch(
      this.apiLink + "/profile/update-profile/" + profileId,
      profile,
      authorizationToken
    );
  }

  public async addGames(
    profileId: string,
    gameIdList: string[],
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    return await this.httpRequestAdapter.patch(
      this.apiLink + "/profile/add-games-profile/" + profileId,
      {
        favoriteGames: gameIdList,
      },
      authorizationToken
    );
  }

  public async removeGames(
    profileId: string,
    gameIdList: string[],
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    return await this.httpRequestAdapter.patch(
      this.apiLink + "/profile/remove-games-profile/" + profileId,
      {
        favoriteGames: gameIdList,
      },
      authorizationToken
    );
  }
}
