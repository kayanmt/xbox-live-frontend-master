import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";

export class UsersAdminPage implements PageInterface {
  private readonly header: Div;
  private readonly userList: Div;

  constructor(header: Div, userList: Div) {
    this.header = header;
    this.userList = userList;
  }

  public render(): string {
    return `
        <main>
            ${this.header.render()}
            ${this.userList.render()}
        </main>
    `;
  }
}
