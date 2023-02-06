import { UserEditionAdminPage } from "../../../presentation/pages/userEditionAdmin-page";
import { makeAdminHeaderFactory } from "../components/adminHeader-component-factory";
import { makeUserEditionAdminFormFactory } from "../components/userEditionAdminForm-component-factory";

export function makeUserEditionAdminPageFactory(): UserEditionAdminPage {
  const header = makeAdminHeaderFactory();
  const userEditionForm = makeUserEditionAdminFormFactory();
  return new UserEditionAdminPage(header, userEditionForm);
}
