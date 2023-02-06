import { GameCreationAdminPage } from "../../../presentation/pages/gameCreationAdmin-page";
import { makeAdminHeaderFactory } from "../components/adminHeader-component-factory";
import { makeGameCreationAdminFormFactory } from "../components/gameCreationAdminForm-component-factory";

export function makeGameCreationAdminPageFactory(): GameCreationAdminPage {
  const header = makeAdminHeaderFactory();
  const gameCreationForm = makeGameCreationAdminFormFactory();
  return new GameCreationAdminPage(header, gameCreationForm);
}
