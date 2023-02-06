import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";

export class GamesAdminPage implements PageInterface {
  private readonly header: Div;
  private readonly gameList: Div;

  constructor(header: Div, gameList: Div) {
    this.header = header;
    this.gameList = gameList;
  }

  public render(): string {
    return `
        <main>
          ${this.header.render()}
          ${this.gameList.render()}
        </main>
    `;
  }
}
