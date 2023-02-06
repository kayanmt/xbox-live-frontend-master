import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";

export class RegisterPage implements PageInterface {
  private readonly registerForm: Div;

  constructor(registerForm: Div) {
    this.registerForm = registerForm;
  }

  public render(): string {
    return `
        <main>
            ${this.registerForm.render()}
        </main>
    `;
  }
}
