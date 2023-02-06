import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeGameListControllerFactory } from "../../factories/controllers/gameList-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GameList() {
  const navigate = useNavigate();
  const gameListController = makeGameListControllerFactory();

  function gameSelected() {
    navigate("/game-view");
  }

  useEffect(() => {
    gameListController.setGameList(gameSelected);
    gameListController.updateHeader();
  });

  return <HtmlComponent component={gameListController.renderPage()} />;
}
