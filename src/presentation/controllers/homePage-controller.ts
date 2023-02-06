import { GetLatestGameListUseCase } from "../../data/usecases/game/getLatestGameList-usecase";
import { ClockUpdateUseCase } from "../../data/usecases/other/clockUpdate-usecase";
import { GetProfileHeaderUseCase } from "../../data/usecases/profile/getProfileHeader-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { HomePage } from "../pages/home-page";

export class HomePageController implements ControllerInterface {
  private readonly homePage: HomePage;
  private readonly getLatestGameListUseCase: GetLatestGameListUseCase;
  private readonly getProfileHeaderUseCase: GetProfileHeaderUseCase;
  private readonly clockUpdateUseCase: ClockUpdateUseCase;

  constructor(
    homePage: HomePage,
    getLatestGameListUseCase: GetLatestGameListUseCase,
    getProfileHeaderUseCase: GetProfileHeaderUseCase,
    clockUpdateUseCase: ClockUpdateUseCase
  ) {
    this.homePage = homePage;
    this.getLatestGameListUseCase = getLatestGameListUseCase;
    this.getProfileHeaderUseCase = getProfileHeaderUseCase;
    this.clockUpdateUseCase = clockUpdateUseCase;
  }

  public renderPage(): string {
    return this.homePage.render();
  }

  public async setGameList(
    navigateCallbackFunction: () => void
  ): Promise<void> {
    return await this.getLatestGameListUseCase.execute(
      navigateCallbackFunction
    );
  }

  public updateHeader(): void {
    this.getProfileHeaderUseCase.execute();
    this.clockUpdateUseCase.execute();
  }
}
