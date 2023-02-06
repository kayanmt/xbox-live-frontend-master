import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";

export class LoginPage implements PageInterface {
  private readonly loginForm: Div;

  constructor(loginForm: Div) {
    this.loginForm = loginForm;
  }

  public render(): string {
    return `
        <main>
            ${this.loginForm.render()}
        </main>
    `;
  }
}
