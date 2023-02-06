import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeLoginControllerFactory } from "../../factories/controllers/login-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Login() {
  const navigate = useNavigate();
  const loginPage = makeLoginControllerFactory();

  function login() {
    navigate("/profile-list");
  }

  useEffect(() => {
    loginPage.makeLogin(login);
  }, []);

  return <HtmlComponent component={loginPage.renderPage()} />;
}
