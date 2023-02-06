import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { Service } from "../../abstract/service-interface";

export class CreateProfileUseCase implements Service {
  private readonly profileRouter: ProfileRouter;
  private readonly tokenHandler: TokenHandler;

  constructor(profileRouter: ProfileRouter, tokenHandler: TokenHandler) {
    this.profileRouter = profileRouter;
    this.tokenHandler = tokenHandler;
  }

  public execute(navigateCallbackFunction = () => {}): void {
    const authorization = this.tokenHandler.getAuthorization();
    const profileTitle = new HtmlElement("profileCreationForm-nameInput");
    const profileImageUrl = new HtmlElement("profileCreationForm-imageInput");
    const submitButton = new HtmlElement(
      "profileCreationForm-buttonsDiv-createButton"
    );

    submitButton.addEventListener("click", async () => {
      const response = await this.profileRouter.create(
        {
          title: profileTitle.getValue(),
          imageUrl: profileImageUrl.getValue(),
        },
        authorization
      );
      if (response.message) {
        alert(response.message);
      }
      if (response.statusCode === 201) {
        alert("Profile created!");
        navigateCallbackFunction();
      }
    });
  }
}
