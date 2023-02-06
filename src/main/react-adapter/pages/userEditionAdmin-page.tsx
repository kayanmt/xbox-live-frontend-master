import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeUserEditionAdminControllerFactory } from "../../factories/controllers/userEditionAdmin-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function UserEditionAdmin() {
  const userEditionAdminPage = makeUserEditionAdminControllerFactory();
  const navigate = useNavigate();

  function navigateToUsersList() {
    navigate("/users-admin");
  }

  useEffect(() => {
    userEditionAdminPage.getUserInfo();
    userEditionAdminPage.updateUser(navigateToUsersList);
    userEditionAdminPage.deleteUser(navigateToUsersList);
  });

  return <HtmlComponent component={userEditionAdminPage.renderPage()} />;
}
