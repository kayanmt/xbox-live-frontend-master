import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeFavoriteGamesControllerFactory } from "../../factories/controllers/favoriteGames-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function FavoriteGames() {
  const navigate = useNavigate();
  const favoriteGamesController = makeFavoriteGamesControllerFactory();

  function gameSelected() {
    navigate("/game-view");
  }

  useEffect(() => {
    favoriteGamesController.setGameList(gameSelected);
    favoriteGamesController.updateHeader();
  });

  return <HtmlComponent component={favoriteGamesController.renderPage()} />;
}
