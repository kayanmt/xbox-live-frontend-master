import { HtmlElement } from "../../helpers/html/html-element";
import { ComponentInterface } from "../abstract/component-interface";

export class Paragraph extends HtmlElement implements ComponentInterface {
  private readonly text: string;

  constructor(text: string, id: string, classes: string[] = []) {
    super(id, classes);
    this.text = text;
  }

  public render() {
    return `<p id="${this.id}" class="paragraph ${this.classes}">${this.text}</p>`;
  }
}
