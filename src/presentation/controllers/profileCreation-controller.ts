import { CreateProfileUseCase } from "../../data/usecases/profile/createProfile-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { ProfileCreationPage } from "../pages/profileCreation-page";

export class ProfileCreationController implements ControllerInterface {
  private readonly profileCreationPage: ProfileCreationPage;
  private readonly createProfileUseCase: CreateProfileUseCase;

  constructor(
    profileCreation: ProfileCreationPage,
    createProfileUseCase: CreateProfileUseCase
  ) {
    this.profileCreationPage = profileCreation;
    this.createProfileUseCase = createProfileUseCase;
  }

  public renderPage(): string {
    return this.profileCreationPage.render();
  }

  public createProfile(navigateCallbackFunction: () => void): void {
    return this.createProfileUseCase.execute(navigateCallbackFunction);
  }
}
