import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeProfileCreationControllerFactory } from "../../factories/controllers/profileCreation-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function ProfileCreation() {
  const navigate = useNavigate();
  const profileCreationController = makeProfileCreationControllerFactory();

  function createProfile() {
    navigate("/profile-list");
  }

  useEffect(() => {
    profileCreationController.createProfile(createProfile);
  });

  return <HtmlComponent component={profileCreationController.renderPage()} />;
}
