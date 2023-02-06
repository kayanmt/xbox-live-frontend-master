import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeHomeAdminControllerFactory } from "../../factories/controllers/homeAdmin-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function HomeAdmin() {
  const navigate = useNavigate();
  const homeAdminPage = makeHomeAdminControllerFactory();

  function validateAdmin(result: boolean): void {
    if (!result) {
      navigate("/login");
    }
  }

  useEffect(() => {
    homeAdminPage.validateAdmin(validateAdmin);
  });

  return <HtmlComponent component={homeAdminPage.renderPage()} />;
}
