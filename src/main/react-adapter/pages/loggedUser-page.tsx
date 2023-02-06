import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeLoggedUserControllerFactory } from "../../factories/controllers/loggedUser-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function LoggedUser() {
  const navigate = useNavigate();
  const loggedUserPage = makeLoggedUserControllerFactory();

  function updateUser() {
    navigate("/logged-user");
  }

  function updateProfile() {
    navigate("/logged-user");
  }

  function deleteProfile() {
    navigate("/profile-list");
  }

  function deleteUser() {
    navigate("/login");
  }

  function logout() {
    navigate("/login");
  }

  useEffect(() => {
    loggedUserPage.getUserInfo();
    loggedUserPage.updateUser(updateUser);
    loggedUserPage.deleteUser(deleteUser);
    loggedUserPage.getProfileInfo();
    loggedUserPage.updateProfile(updateProfile);
    loggedUserPage.deleteProfile(deleteProfile);
    loggedUserPage.logout(logout);
  });

  return <HtmlComponent component={loggedUserPage.renderPage()} />;
}
