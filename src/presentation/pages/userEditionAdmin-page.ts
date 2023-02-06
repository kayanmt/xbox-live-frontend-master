import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";

export class UserEditionAdminPage implements PageInterface {
  private readonly header: Div;
  private readonly userEditionForm: Div;

  constructor(header: Div, userEditionForm: Div) {
    this.header = header;
    this.userEditionForm = userEditionForm;
  }

  public render(): string {
    return `
        <main>
            ${this.header.render()}
            ${this.userEditionForm.render()}
        </main>
    `;
  }
}
