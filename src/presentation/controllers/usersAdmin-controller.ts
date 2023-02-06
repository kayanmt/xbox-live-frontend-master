import { GetUsersAdminListUseCase } from "../../data/usecases/user/getUsersAdmin-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { UsersAdminPage } from "../pages/usersAdmin-page";

export class UsersAdminController implements ControllerInterface {
  private readonly usersAdminPage: UsersAdminPage;
  private readonly getUsersAdminListUseCase: GetUsersAdminListUseCase;

  constructor(
    usersAdminPage: UsersAdminPage,
    getUsersAdminListUseCase: GetUsersAdminListUseCase
  ) {
    this.usersAdminPage = usersAdminPage;
    this.getUsersAdminListUseCase = getUsersAdminListUseCase;
  }

  public renderPage(): string {
    return this.usersAdminPage.render();
  }

  public async setUserList(
    navigateCallbackFunction: () => void
  ): Promise<void> {
    return await this.getUsersAdminListUseCase.execute(
      navigateCallbackFunction
    );
  }
}
