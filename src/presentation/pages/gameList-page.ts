import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";
import { Header } from "../components/header";
import { Title } from "../components/title";

export class GameListPage implements PageInterface {
  private readonly header: Header;
  private readonly title: Title;
  private readonly categoryFilter: Div;
  private readonly menuDiv: Div;
  private readonly gameList: Div;

  constructor(
    header: Header,
    menuDiv: Div,
    title: Title,
    categoryFilter: Div,
    gameList: Div
  ) {
    this.header = header;
    this.menuDiv = menuDiv;
    this.title = title;
    this.categoryFilter = categoryFilter;
    this.gameList = gameList;
  }

  public render(): string {
    return `
        <main>
            ${this.header.render()}
            ${this.menuDiv.render()}
            ${this.title.render()}
            ${this.categoryFilter.render()}
            ${this.gameList.render()}
        </main>
    `;
  }
}
