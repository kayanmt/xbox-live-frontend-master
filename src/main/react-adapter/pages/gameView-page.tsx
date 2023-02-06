import { useEffect } from "react";
import { makeGameViewControllerFactory } from "../../factories/controllers/gameView-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GameView() {
  const gameViewController = makeGameViewControllerFactory();

  useEffect(() => {
    gameViewController.setGameInfo();
    gameViewController.favoriteGame();
    gameViewController.updateHeader();
  });

  return <HtmlComponent component={gameViewController.renderPage()} />;
}
