import { HtmlElement } from "../../../helpers/html/html-element";
import { ProfileIdHandler } from "../../../helpers/profile/profileIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { Service } from "../../abstract/service-interface";

export class GetProfileInfoUseCase implements Service {
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

  public async execute(): Promise<void> {
    const authorization = this.tokenHandler.getAuthorization();
    const profileId = this.profileIdHandler.getProfileId();
    const profileTitle = new HtmlElement("profileForm-nameInput");
    const profileImageUrl = new HtmlElement("profileForm-imageInput");
    const profileImage = new HtmlElement("profileForm-image");

    this.profileRouter.getById(profileId, authorization).then((response) => {
      profileTitle.setValue(response.body.title);
      profileImageUrl.setValue(response.body.imageUrl);
      profileImage.setSrc(response.body.imageUrl);
    });
  }
}
