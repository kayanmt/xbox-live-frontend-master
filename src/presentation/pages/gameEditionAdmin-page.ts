import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";

export class GameEditionAdminPage implements PageInterface {
  private readonly header: Div;
  private readonly gameEditionForm: Div;

  constructor(header: Div, gameEditionForm: Div) {
    this.header = header;
    this.gameEditionForm = gameEditionForm;
  }

  public render(): string {
    return `
        <main>
            ${this.header.render()}
            ${this.gameEditionForm.render()}
        </main>
    `;
  }
}
