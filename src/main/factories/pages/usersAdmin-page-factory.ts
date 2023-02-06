import { UsersAdminPage } from "../../../presentation/pages/usersAdmin-page";
import { makeAdminHeaderFactory } from "../components/adminHeader-component-factory";
import { makeAdminUsersListFactory } from "../components/adminUsersList-component-factory";

export function makeUsersAdminPageFactory(): UsersAdminPage {
  const header = makeAdminHeaderFactory();
  const userList = makeAdminUsersListFactory();
  return new UsersAdminPage(header, userList);
}
