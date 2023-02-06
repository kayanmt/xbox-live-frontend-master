import { HtmlElement } from "../../helpers/html/html-element";
import { ComponentInterface } from "../abstract/component-interface";
import { ButtonTypeEnum } from "../enums/button/button-type-enum";

export class Button extends HtmlElement implements ComponentInterface {
  private readonly name: string;
  private readonly type: string;

  constructor(
    name: string,
    type: ButtonTypeEnum,
    id: string,
    classes: string[] = []
  ) {
    super(id, classes);
    this.name = name;
    this.type = type;
  }

  public render(): string {
    return `
      <button id="${this.id}" class="button ${this.classes}" type="${this.type}">${this.name}</button>
    `;
  }
}
