import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";
import { Title } from "../components/title";

export class HomeAdminPage implements PageInterface {
  private readonly adminHeader: Div;

  constructor(adminHeader: Div) {
    this.adminHeader = adminHeader;
  }

  public render(): string {
    return `
        <main>
          ${this.adminHeader.render()}
        </main>
    `;
  }
}
