import { HtmlElement } from "../../../helpers/html/html-element";
import { ProfileIdHandler } from "../../../helpers/profile/profileIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { Service } from "../../abstract/service-interface";

export class GetProfileHeaderUseCase implements Service {
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
    const profileTitle = new HtmlElement("header-userInfo-userName");
    const profileImage = new HtmlElement("header-userInfo-userImage");
    this.profileRouter.getById(profileId, authorization).then((response) => {
      profileTitle.setInnerText(response.body.title);
      profileImage.setSrc(response.body.imageUrl);
    });
  }
}
