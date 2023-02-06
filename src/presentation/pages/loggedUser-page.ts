import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";

export class LoggedUserPage implements PageInterface {
  private readonly menuDiv: Div;
  private readonly formsDiv: Div;

  constructor(menuDiv: Div, formsDiv: Div) {
    this.menuDiv = menuDiv;
    this.formsDiv = formsDiv;
  }

  public render(): string {
    return `
        <main>
            ${this.menuDiv.render()}
            ${this.formsDiv.render()}
        </main>
    `;
  }
}
