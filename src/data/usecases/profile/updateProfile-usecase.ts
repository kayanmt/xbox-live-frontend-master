import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { ProfileIdHandler } from "../../../helpers/profile/profileIdHandler-helper";

export class UpdateProfileUseCase implements Service {
  private readonly profileRouter: ProfileRouter;
  private readonly tokenHandler: TokenHandler;
  private readonly profileIdHandler: ProfileIdHandler;

  constructor(
    profileRouter: ProfileRouter,
    tokenHandler: TokenHandler,
    profileIdHandler: ProfileIdHandler
  ) {
    this.profileRouter = profileRouter;
    this.tokenHandler = tokenHandler;
    this.profileIdHandler = profileIdHandler;
  }

  public execute(navigateCallbackFunction = () => {}): void {
    const updateButton = new HtmlElement("profileForm-buttonsDiv-updateButton");
    const profileTitle = new HtmlElement("profileForm-nameInput");
    const profileImageUrl = new HtmlElement("profileForm-imageInput");
    const profileId = this.profileIdHandler.getProfileId();
    const authorization = this.tokenHandler.getAuthorization();
    this.updateImageRealTime();

    updateButton.addEventListener("click", async () => {
      const title = profileTitle.getValue();
      const imageUrl = profileImageUrl.getValue();
      await this.profileRouter
        .update(
          profileId,
          {
            title,
            imageUrl,
          },
          authorization
        )
        .then((response) => {
          if (response.message) {
            alert(response.message);
          }
          if (response.statusCode === 200) {
            alert("Profile updated!")
            navigateCallbackFunction();
          }
        });
    });
  }

  private updateImageRealTime(): void {
    const profileImageUrl = new HtmlElement("profileForm-imageInput");
    const profileImage = new HtmlElement("profileForm-image");
    profileImageUrl.addEventListener("change", () => {
      profileImage.setSrc(profileImageUrl.getValue());
    });
  }
}
