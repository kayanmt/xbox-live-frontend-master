import { User } from "../../../domain/user";
import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { EditionUserIdHandler } from "../../../helpers/user/editionUserIdHandler-helper";
import { ApiResponse } from "../../../infra/api/dtos/apiResponse-dto";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { ComponentInterface } from "../../../presentation/abstract/component-interface";
import { Div } from "../../../presentation/components/div";
import { Input } from "../../../presentation/components/input";
import { Paragraph } from "../../../presentation/components/paragraph";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { InputTypeEnum } from "../../../presentation/enums/input/input-type-enum";
import { ComponentComposer } from "../../../presentation/helpers/composers/component-composer";
import { Service } from "../../abstract/service-interface";

export class GetUsersAdminListUseCase implements Service {
  private readonly tokenHandler: TokenHandler;
  private readonly editionUserIdHandler: EditionUserIdHandler;
  private readonly userRouter: UserRouter;

  constructor(
    tokenHandler: TokenHandler,
    userRouter: UserRouter,
    editionUserIdHandler: EditionUserIdHandler
  ) {
    this.tokenHandler = tokenHandler;
    this.userRouter = userRouter;
    this.editionUserIdHandler = editionUserIdHandler;
  }

  public async execute(navigateCallbackFunction = () => {}): Promise<void> {
    const authorization = this.tokenHandler.getAuthorization();
    await this.userRouter
      .getAll(authorization)
      .then((response: ApiResponse<User[]>) => {
        const profiles = response.body.map((data: User) =>
          this.getUserCard(data)
        );
        const html = new ComponentComposer(profiles).compose();
        const profileListDiv = new HtmlElement("adminUsersList-usersDiv");
        profileListDiv.deleteChildren();
        profileListDiv.insertHtml(html, "afterbegin");
      })
      .then(() => this.addEventListenerToUsers(navigateCallbackFunction));
  }

  private getUserCard(user: User): ComponentInterface {
    const userId = new Paragraph(
      "ID: " + user.id,
      "adminUsersList-usersDiv-userCard-userTitle",
      ["background-dark-blue"]
    );
    const userName = new Paragraph(
      "Name: " + user.name,
      "adminUsersList-usersDiv-userCard-userTitle",
      ["background-dark-blue"]
    );
    const userEmail = new Paragraph(
      "Email: " + user.email,
      "adminUsersList-usersDiv-userCard-userEmail",
      ["background-dark-blue"]
    );
    const userIdInput = new Input(
      InputTypeEnum.HIDDEN,
      user.id,
      "favoriteGameList-gamesDiv-gameCard-userIdInput",
      "",
      ["hiddenInput"]
    );
    return new Div(
      DivTypeEnum.DIV,
      FlexDirectionEnum.COLUMN,
      FlexJustificationEnum.EVENLY,
      [userId, userName, userEmail, userIdInput],
      "adminUsersList-usersDiv-userCard",
      ["background-dark-blue", "border-light-gray", "adminUserCard", "userCard"]
    );
  }

  private addEventListenerToUsers(navigateCallbackFunction = () => {}): void {
    const users = document.querySelectorAll(".adminUserCard");
    for (const user of users) {
      user.addEventListener("click", () => {
        this.editionUserIdHandler.removeUserId();
        const userId = user.querySelector("input")?.value || "";
        this.editionUserIdHandler.storeUserId(userId);
        navigateCallbackFunction();
      });
    }
  }
}
