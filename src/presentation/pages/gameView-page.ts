import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";
import { Header } from "../components/header";
import { Title } from "../components/title";

export class GameViewPage implements PageInterface {
  private readonly header: Header;
  private readonly menu: Div;
  private readonly gameTitle: Div;
  private readonly gameBody: Div;

  constructor(header: Header, menu: Div, gameTitle: Div, gameBody: Div) {
    this.header = header;
    this.menu = menu;
    this.gameTitle = gameTitle;
    this.gameBody = gameBody;
  }

  public render(): string {
    return `
        <main>
            ${this.header.render()}
            ${this.menu.render()}
            ${this.gameTitle.render()}
            ${this.gameBody.render()}
        </main>
    `;
  }
}
