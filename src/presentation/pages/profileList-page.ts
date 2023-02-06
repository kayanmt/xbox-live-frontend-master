import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";
import { Title } from "../components/title";

export class ProfileListPage implements PageInterface {
  private readonly pageTitle: Title;
  private readonly profilesDiv: Div;

  constructor(pageTitle: Title, profilesDiv: Div) {
    this.pageTitle = pageTitle;
    this.profilesDiv = profilesDiv;
  }

  public render(): string {
    return `
        <main>
            ${this.pageTitle.render()}
            ${this.profilesDiv.render()}
        </main>
    `;
  }
}
