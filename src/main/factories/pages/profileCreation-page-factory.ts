import { ProfileCreationPage } from "../../../presentation/pages/profileCreation-page";
import { makeProfileCreationFormFactory } from "../components/profileCreationForm-component-factory";

export function makeProfileCreationPageFactory(): ProfileCreationPage {
  const profileForm = makeProfileCreationFormFactory();

  return new ProfileCreationPage(profileForm);
}
