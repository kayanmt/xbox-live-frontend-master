import { HomeAdminPage } from "../../../presentation/pages/homeAdmin-page";
import { makeAdminHeaderFactory } from "../components/adminHeader-component-factory";

export function makeHomeAdminPageFactory(): HomeAdminPage {
  const adminHeader = makeAdminHeaderFactory();
  return new HomeAdminPage(adminHeader);
}
