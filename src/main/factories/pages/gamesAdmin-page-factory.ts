import { GamesAdminPage } from "../../../presentation/pages/gamesAdmin-page";
import { makeAdminGamesListFactory } from "../components/adminGamesList-component-factory";
import { makeAdminHeaderFactory } from "../components/adminHeader-component-factory";

export function makeGamesAdminPageFactory(): GamesAdminPage {
  const header = makeAdminHeaderFactory();
  const gameList = makeAdminGamesListFactory();
  return new GamesAdminPage(header, gameList);
}
