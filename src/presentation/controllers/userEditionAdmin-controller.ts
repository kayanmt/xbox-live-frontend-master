import { DeleteUserAdminUseCase } from "../../data/usecases/user/deleteUserAdmin-usecase";
import { GetUserInfoAdminUseCase } from "../../data/usecases/user/getUserInfoAdmin-usecase";
import { UpdateUserAdminUseCase } from "../../data/usecases/user/updateUserAdmin-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { UserEditionAdminPage } from "../pages/userEditionAdmin-page";

export class UserEditionAdminController implements ControllerInterface {
  private readonly userEditionAdminPage: UserEditionAdminPage;
  private readonly getUserInfoAdminUseCase: GetUserInfoAdminUseCase;
  private readonly updateUserAdminUseCase: UpdateUserAdminUseCase;
  private readonly deleteUserAdminUseCase: DeleteUserAdminUseCase;

  constructor(
    userEditionAdminPage: UserEditionAdminPage,
    getUserInfoAdminUseCase: GetUserInfoAdminUseCase,
    updateUserAdminUseCase: UpdateUserAdminUseCase,
    deleteUserAdminUseCase: DeleteUserAdminUseCase
  ) {
    this.userEditionAdminPage = userEditionAdminPage;
    this.getUserInfoAdminUseCase = getUserInfoAdminUseCase;
    this.updateUserAdminUseCase = updateUserAdminUseCase;
    this.deleteUserAdminUseCase = deleteUserAdminUseCase;
  }

  public renderPage(): string {
    return this.userEditionAdminPage.render();
  }

  public getUserInfo(): void {
    this.getUserInfoAdminUseCase.execute();
  }

  public updateUser(navigateCallbackFunction: () => void): void {
    this.updateUserAdminUseCase.execute(navigateCallbackFunction);
  }

  public deleteUser(navigateCallbackFunction: () => void): void {
    this.deleteUserAdminUseCase.execute(navigateCallbackFunction);
  }
}
