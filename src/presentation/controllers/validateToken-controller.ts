import { ValidateTokenUseCase } from "../../data/usecases/auth/validateToken-usecase";

export class ValidateTokenController {
  private readonly validateTokenUseCase: ValidateTokenUseCase;

  constructor(validateTokenUseCase: ValidateTokenUseCase) {
    this.validateTokenUseCase = validateTokenUseCase;
  }

  public validate(validateCallbackFunction: (result: boolean) => void): void {
    this.validateTokenUseCase.execute(validateCallbackFunction);
  }
}
