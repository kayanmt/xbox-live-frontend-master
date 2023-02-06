import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";

export class GameCreationAdminPage implements PageInterface {
  private readonly header: Div;
  private readonly gameCreationForm: Div;

  constructor(header: Div, gameCreationForm: Div) {
    this.header = header;
    this.gameCreationForm = gameCreationForm;
  }

  public render(): string {
    return `
        <main>
            ${this.header.render()}
            ${this.gameCreationForm.render()}
        </main>
    `;
  }
}
