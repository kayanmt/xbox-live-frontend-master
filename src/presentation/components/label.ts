import { HtmlElement } from "../../helpers/html/html-element";
import { ComponentInterface } from "../abstract/component-interface";

export class Label extends HtmlElement implements ComponentInterface {
  private readonly text: string;

  constructor(text: string, id: string, classes: string[] = []) {
    super(id, classes);
    this.text = text;
  }

  public render(): string {
    return `
        <label class="label ${this.classes}" id="${this.id}">${this.text}</label>
    `;
  }
}
