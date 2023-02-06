import { GameEditionAdminPage } from "../../../presentation/pages/gameEditionAdmin-page";
import { makeAdminHeaderFactory } from "../components/adminHeader-component-factory";
import { makeGameEditionAdminFormFactory } from "../components/gameEditionAdminForm-component-factory";

export function makeGameEditionAdminPageFactory(): GameEditionAdminPage {
  const header = makeAdminHeaderFactory();
  const gameEditionForm = makeGameEditionAdminFormFactory();
  return new GameEditionAdminPage(header, gameEditionForm);
}
