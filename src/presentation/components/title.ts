import { HtmlElement } from "../../helpers/html/html-element";
import { ComponentInterface } from "../abstract/component-interface";

export class Title extends HtmlElement implements ComponentInterface {
  private readonly title: string;

  constructor(title: string, id: string, classes: string[] = []) {
    super(id, classes);
    this.title = title;
  }

  public render(): string {
    return `
        <h1 id="${this.id}" class="title ${this.classes}">${this.title}</h1>
    `;
  }
}
