import { LogoutUseCase } from "../../data/usecases/auth/logout-usecase";
import { DeleteProfileUseCase } from "../../data/usecases/profile/deleteProfile-usecase";
import { GetProfileInfoUseCase } from "../../data/usecases/profile/getProfileInfoUseCase";
import { UpdateProfileUseCase } from "../../data/usecases/profile/updateProfile-usecase";
import { DeleteUserUseCase } from "../../data/usecases/user/deleteUser-usecase";
import { GetUserInfoUseCase } from "../../data/usecases/user/getUserInfo-usecase";
import { UpdateUserUseCase } from "../../data/usecases/user/updateUser-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { LoggedUserPage } from "../pages/loggedUser-page";

export class LoggedUserController implements ControllerInterface {
  private readonly loggedUserPage: LoggedUserPage;
  private readonly getUserInfoUseCase: GetUserInfoUseCase;
  private readonly getProfileInfoUseCase: GetProfileInfoUseCase;
  private readonly updateUserUseCase: UpdateUserUseCase;
  private readonly updateProfileUseCase: UpdateProfileUseCase;
  private readonly deleteProfileUseCase: DeleteProfileUseCase;
  private readonly deleteUserUseCase: DeleteUserUseCase;
  private readonly logoutUseCase: LogoutUseCase;

  constructor(
    loggedUserPage: LoggedUserPage,
    getUserInfoUseCase: GetUserInfoUseCase,
    getProfileInfoUseCase: GetProfileInfoUseCase,
    updateUserUseCase: UpdateUserUseCase,
    updateProfileUseCase: UpdateProfileUseCase,
    deleteProfileUseCase: DeleteProfileUseCase,
    deleteUserUseCase: DeleteUserUseCase,
    logoutUseCase: LogoutUseCase
  ) {
    this.loggedUserPage = loggedUserPage;
    this.getUserInfoUseCase = getUserInfoUseCase;
    this.getProfileInfoUseCase = getProfileInfoUseCase;
    this.updateUserUseCase = updateUserUseCase;
    this.updateProfileUseCase = updateProfileUseCase;
    this.deleteProfileUseCase = deleteProfileUseCase;
    this.deleteUserUseCase = deleteUserUseCase;
    this.logoutUseCase = logoutUseCase;
  }

  public renderPage(): string {
    return this.loggedUserPage.render();
  }

  public getUserInfo(): void {
    this.getUserInfoUseCase.execute();
  }

  public getProfileInfo(): void {
    this.getProfileInfoUseCase.execute();
  }

  public updateUser(navigateCallbackFunction: () => void): void {
    this.updateUserUseCase.execute(navigateCallbackFunction);
  }

  public updateProfile(navigateCallbackFunction: () => void): void {
    this.updateProfileUseCase.execute(navigateCallbackFunction);
  }

  public deleteProfile(navigateCallbackFunction: () => void): void {
    this.deleteProfileUseCase.execute(navigateCallbackFunction);
  }

  public deleteUser(navigateCallbackFunction: () => void): void {
    this.deleteUserUseCase.execute(navigateCallbackFunction);
  }

  public logout(navigateCallbackFunction: () => void): void {
    this.logoutUseCase.execute(navigateCallbackFunction);
  }
}
