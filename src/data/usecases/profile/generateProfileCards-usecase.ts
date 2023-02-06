import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { HtmlElement } from "../../../helpers/html/html-element";
import { Profile } from "../../../domain/profile";
import { Div } from "../../../presentation/components/div";
import { Image } from "../../../presentation/components/image";
import { Paragraph } from "../../../presentation/components/paragraph";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { ComponentComposer } from "../../../presentation/helpers/composers/component-composer";
import { ComponentInterface } from "../../../presentation/abstract/component-interface";
import { Input } from "../../../presentation/components/input";
import { InputTypeEnum } from "../../../presentation/enums/input/input-type-enum";
import { ProfileIdHandler } from "../../../helpers/profile/profileIdHandler-helper";

export class GenerateProfileCardsUseCase implements Service {
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
    const authorization = this.tokenHandler.getAuthorization();
    await this.profileRouter
      .getAll(authorization)
      .then((response) => {
        const profiles = response.body.map((data: any) =>
          this.getProfileCard(data)
        );
        const html = new ComponentComposer(profiles).compose();
        const profileListDiv = new HtmlElement("profileList-flexBody");
        profileListDiv.insertHtml(html, "afterbegin");
      })
      .then(() => this.addEventListenerToProfiles(navigateCallbackFunction));
  }

  private getProfileCard(profile: Profile): ComponentInterface {
    const profileImage = new Image(
      "profile image",
      profile.imageUrl,
      "profileList-profiles-profileDiv-image",
      ["profileList-image"]
    );
    const profileName = new Paragraph(
      profile.title,
      "profileList-profiles-profileDiv-profileName",
      ["profileList-name"]
    );
    const profileId = new Input(
      InputTypeEnum.HIDDEN,
      profile.id,
      "profileList-profiles-profileDiv-profileId",
      "",
      ["hiddenInput"]
    );
    return new Div(
      DivTypeEnum.DIV,
      FlexDirectionEnum.COLUMN,
      FlexJustificationEnum.EVENLY,
      [profileImage, profileName, profileId],
      "profileList-profiles-profileDiv",
      ["profileList-div"]
    );
  }

  private addEventListenerToProfiles(
    navigateCallbackFunction = () => {}
  ): void {
    const profiles = document.querySelectorAll(".profileList-div");
    for (const profile of profiles) {
      profile.addEventListener("click", () => {
        this.profileIdHandler.removeProfileId();
        const profileId = profile.querySelector("input")?.value || "";
        this.profileIdHandler.storeProfileId(profileId);
        navigateCallbackFunction();
      });
    }
  }
}
