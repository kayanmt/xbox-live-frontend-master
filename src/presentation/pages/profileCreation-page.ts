import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";

export class ProfileCreationPage implements PageInterface {
  private readonly profileForm: Div;

  constructor(profileForm: Div) {
    this.profileForm = profileForm;
  }

  public render(): string {
    return `
        <main>
           ${this.profileForm.render()}
        </main>
    `;
  }
}
