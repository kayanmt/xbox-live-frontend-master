import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { ProfileIdHandler } from "../../../helpers/profile/profileIdHandler-helper";

export class DeleteProfileUseCase implements Service {
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

  public async execute(navigateCallbackFunction = () => {}): Promise<void> {
    const deleteButton = new HtmlElement("profileForm-buttonsDiv-deleteButton");
    const profileId = this.profileIdHandler.getProfileId();
    const authorization = this.tokenHandler.getAuthorization();
    deleteButton.addEventListener("click", async () => {
      if (window.confirm("Delete this profile?")) {
        await this.profileRouter
          .delete(profileId, authorization)
          .then((response) => {
            if (response.message) {
              alert(response.message);
            }
            if (response.statusCode === 200) {
              alert("Profile deleted!");
              navigateCallbackFunction();
            }
          });
      }
    });
  }
}
