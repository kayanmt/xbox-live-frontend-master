import { User } from "../../../domain/user";
import { ApiConnection } from "../connection/apiConnection";
import { ApiResponse } from "../dtos/apiResponse-dto";
import { UserDto } from "../dtos/user-dto";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";

export class UserRouter extends ApiConnection {
  private readonly httpRequestAdapter: HttpRequestAdapter;

  constructor(httpRequestAdapter: HttpRequestAdapter) {
    super();
    this.httpRequestAdapter = httpRequestAdapter;
  }

  public async create(user: UserDto): Promise<ApiResponse<User>> {
    return await this.httpRequestAdapter.post(
      this.apiLink + "/user/create-user",
      user
    );
  }

  public async getAll(
    authorizationToken: string
  ): Promise<ApiResponse<User[]>> {
    return await this.httpRequestAdapter.get(
      this.apiLink + "/user/get-all-users",
      authorizationToken
    );
  }

  public async getById(
    userId: string,
    authorizationToken: string
  ): Promise<ApiResponse<User>> {
    return await this.httpRequestAdapter.get(
      this.apiLink + "/user/get-user-by-id/" + userId,
      authorizationToken
    );
  }

  public async getByEmail(
    userEmail: string,
    authorizationToken: string
  ): Promise<ApiResponse<User>> {
    return await this.httpRequestAdapter.post(
      this.apiLink + "/user/get-user-by-email",
      {
        email: userEmail,
      },
      authorizationToken
    );
  }

  public async delete(
    userId: string,
    authorizationToken: string
  ): Promise<ApiResponse<User>> {
    return await this.httpRequestAdapter.delete(
      this.apiLink + "/user/delete-user/" + userId,
      authorizationToken
    );
  }

  public async update(
    userId: string,
    user: UserDto,
    authorizationToken: string
  ): Promise<ApiResponse<User>> {
    return await this.httpRequestAdapter.patch(
      this.apiLink + "/user/update-user/" + userId,
      user,
      authorizationToken
    );
  }
}
