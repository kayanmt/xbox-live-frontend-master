import { ComponentInterface } from "../abstract/component-interface";
import { HtmlElement } from "../../helpers/html/html-element";

export class Anchor extends HtmlElement implements ComponentInterface {
  private readonly text: string;
  private readonly link: string;

  constructor(text: string, link: string, id: string, classes: string[] = []) {
    super(id, classes);
    this.text = text;
    this.link = link;
  }

  public render(): string {
    return `
        <a id="${this.id}" class="anchor ${this.classes}" href="${this.link}" target="_blank">${this.text}</a>
    `;
  }
}
