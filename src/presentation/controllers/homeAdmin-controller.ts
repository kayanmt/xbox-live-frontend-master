import { ValidateAdminUseCase } from "../../data/usecases/auth/validateAdmin-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { HomeAdminPage } from "../pages/homeAdmin-page";

export class HomeAdminController implements ControllerInterface {
  private readonly homeAdminPage: HomeAdminPage;
  private validateAdminUseCase: ValidateAdminUseCase;

  constructor(
    homeAdminPage: HomeAdminPage,
    validateAdminUseCase: ValidateAdminUseCase
  ) {
    this.homeAdminPage = homeAdminPage;
    this.validateAdminUseCase = validateAdminUseCase;
  }

  public renderPage(): string {
    return this.homeAdminPage.render();
  }

  public async validateAdmin(
    validateCallbackFunction: (result: boolean) => void
  ): Promise<void> {
    return this.validateAdminUseCase.execute(validateCallbackFunction);
  }
}
