import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeGamesAdminControllerFactory } from "../../factories/controllers/gamesAdmin-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GamesAdmin() {
  const gamesAdminPage = makeGamesAdminControllerFactory();
  const navigate = useNavigate();

  function gamePageNavitation() {
    navigate("/game-edition-admin");
  }

  useEffect(() => {
    gamesAdminPage.setGameList(gamePageNavitation);
  });

  return <HtmlComponent component={gamesAdminPage.renderPage()} />;
}
