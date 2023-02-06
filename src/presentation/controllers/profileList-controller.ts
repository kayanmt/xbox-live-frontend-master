import { ValidateAdminUseCase } from "../../data/usecases/auth/validateAdmin-usecase";
import { GenerateProfileCardsUseCase } from "../../data/usecases/profile/generateProfileCards-usecase";
import { HtmlElement } from "../../helpers/html/html-element";
import { ControllerInterface } from "../abstract/controller.interface";
import { Button } from "../components/button";
import { ButtonTypeEnum } from "../enums/button/button-type-enum";
import { ProfileListPage } from "../pages/profileList-page";

export class ProfileListController implements ControllerInterface {
  private readonly profileListPage: ProfileListPage;
  private readonly generateProfileCardsUseCase: GenerateProfileCardsUseCase;
  private readonly validateAdminUseCase: ValidateAdminUseCase;

  constructor(
    profileListPage: ProfileListPage,
    generateProfileCardsUseCase: GenerateProfileCardsUseCase,
    validateAdminUseCase: ValidateAdminUseCase
  ) {
    this.profileListPage = profileListPage;
    this.generateProfileCardsUseCase = generateProfileCardsUseCase;
    this.validateAdminUseCase = validateAdminUseCase;
  }

  public renderPage(): string {
    return this.profileListPage.render();
  }

  public async updateProfileCards(
    navigateCallbackFunction: () => void
  ): Promise<void> {
    return await this.generateProfileCardsUseCase.execute(
      navigateCallbackFunction
    );
  }

  public async unlockAdminMenu(
    navigateCallbackFunction: () => void
  ): Promise<void> {
    function addHomeAdminButton(result: boolean): void {
      if (result) {
        const profileDiv = new HtmlElement("profileList-flexBody");
        const homeAdminButton = new Button(
          "ADM",
          ButtonTypeEnum.BUTTON,
          "profileList-adminMenuButton",
          [
            "profileList-addProfileButton",
            "background-dark-green",
            "border-light-gray",
          ]
        );
        profileDiv.insertHtml(homeAdminButton.render());
        homeAdminButton.addEventListener("click", () =>
          navigateCallbackFunction()
        );
      }
    }
    await this.validateAdminUseCase.execute(addHomeAdminButton);
  }
}
