import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeProfileListControllerFactory } from "../../factories/controllers/profileList-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function ProfileList() {
  const navigate = useNavigate();
  const profileList = makeProfileListControllerFactory();

  function profileSelected() {
    navigate("/home-page");
  }

  function adminPageNavigation() {
    navigate("/home-admin");
  }

  useEffect(() => {
    profileList.updateProfileCards(profileSelected);
    profileList.unlockAdminMenu(adminPageNavigation);
  });

  return <HtmlComponent component={profileList.renderPage()} />;
}
