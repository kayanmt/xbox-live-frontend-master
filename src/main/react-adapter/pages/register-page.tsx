import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeRegisterControllerFactory } from "../../factories/controllers/register-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Register() {
  const navigate = useNavigate();
  const registerPage = makeRegisterControllerFactory();

  function registration() {
    navigate("/login");
  }

  useEffect(() => {
    registerPage.registerUser(registration);
  }, []);

  return <HtmlComponent component={registerPage.renderPage()} />;
}
