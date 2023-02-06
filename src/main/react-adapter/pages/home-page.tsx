import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeHomePageControllerFactory } from "../../factories/controllers/homePage-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Homepage() {
  const navigate = useNavigate();
  const homepage = makeHomePageControllerFactory();

  function gameSelected() {
    navigate("/game-view");
  }

  useEffect(() => {
    homepage.setGameList(gameSelected);
    homepage.updateHeader();
  });

  return <HtmlComponent component={homepage.renderPage()} />;
}
