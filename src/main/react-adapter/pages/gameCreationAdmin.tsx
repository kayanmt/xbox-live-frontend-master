import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeGameCreationAdminControllerFactory } from "../../factories/controllers/gameCreationAdmin-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GameCreationAdmin() {
  const gameCreationAdminPage = makeGameCreationAdminControllerFactory();
  const navigate = useNavigate();

  function navigateToGameList() {
    navigate("/games-admin");
  }

  useEffect(() => {
    gameCreationAdminPage.createGame(navigateToGameList);
  });

  return <HtmlComponent component={gameCreationAdminPage.renderPage()} />;
}
