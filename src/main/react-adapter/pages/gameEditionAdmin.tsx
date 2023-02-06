import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeGameEditionAdminControllerFactory } from "../../factories/controllers/gameEditionAdmin-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GameEditionAdmin() {
  const gameEditionAdminPage = makeGameEditionAdminControllerFactory();
  const navigate = useNavigate();

  function navigateToGameList() {
    navigate("/games-admin");
  }

  useEffect(() => {
    gameEditionAdminPage.getGameInfo();
    gameEditionAdminPage.updateGame(navigateToGameList);
    gameEditionAdminPage.deleteGame(navigateToGameList);
  });

  return <HtmlComponent component={gameEditionAdminPage.renderPage()} />;
}
