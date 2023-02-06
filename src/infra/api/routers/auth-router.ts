import { ApiConnection } from "../connection/apiConnection";
import { ApiResponse } from "../dtos/apiResponse-dto";
import { TokenDto } from "../dtos/token-dto";
import { LoginDto } from "../dtos/login-dto";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";

export class AuthRouter extends ApiConnection {
  private readonly httpRequestAdapter: HttpRequestAdapter;

  constructor(httpRequestAdapter: HttpRequestAdapter) {
    super();
    this.httpRequestAdapter = httpRequestAdapter;
  }

  public async login(loginData: LoginDto): Promise<ApiResponse<TokenDto>> {
    return await this.httpRequestAdapter.post(
      this.apiLink + "/auth/login",
      loginData
    );
  }
}
