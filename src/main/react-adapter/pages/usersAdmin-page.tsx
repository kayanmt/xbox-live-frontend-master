import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeUsersAdminControllerFactory } from "../../factories/controllers/usersAdmin-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function UsersAdmin() {
  const usersAdminPage = makeUsersAdminControllerFactory();
  const navigate = useNavigate();

  function navigateToUserEditon() {
    navigate("/user-edition-admin");
  }

  useEffect(() => {
    usersAdminPage.setUserList(navigateToUserEditon);
  });

  return <HtmlComponent component={usersAdminPage.renderPage()} />;
}
