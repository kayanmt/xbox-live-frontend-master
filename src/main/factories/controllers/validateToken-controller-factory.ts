import { ValidateTokenUseCase } from "../../../data/usecases/auth/validateToken-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { UserIdHandler } from "../../../helpers/user/userIdHandler-helper";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { ValidateTokenController } from "../../../presentation/controllers/validateToken-controller";

export function makeValidateTokenControllerFactory(): ValidateTokenController {
  const httpRequestAdapter = new HttpRequestAdapter();
  const userRouter = new UserRouter(httpRequestAdapter);
  const userIdHandler = new UserIdHandler();
  const tokenHandler = new TokenHandler();
  const validateTokenUseCase = new ValidateTokenUseCase(
    tokenHandler,
    userRouter,
    userIdHandler
  );
  return new ValidateTokenController(validateTokenUseCase);
}
