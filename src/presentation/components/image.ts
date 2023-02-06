import { HtmlElement } from "../../helpers/html/html-element";
import { ComponentInterface } from "../abstract/component-interface";

export class Image extends HtmlElement implements ComponentInterface {
  private readonly alt: string;
  private readonly src: string;

  constructor(alt: string, src: string, id: string, classes: string[] = []) {
    super(id, classes);
    this.alt = alt;
    this.src = src;
  }

  public render(): string {
    return `
        <img id="${this.id}" class="image ${this.classes}" src="${this.src}" alt="${this.alt}" />
    `;
  }
}
