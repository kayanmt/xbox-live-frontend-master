import { HtmlElement } from "../../helpers/html/html-element";
import { ComponentInterface } from "../abstract/component-interface";
import { InputTypeEnum } from "../enums/input/input-type-enum";

export class Input extends HtmlElement implements ComponentInterface {
  private readonly type: string;
  private readonly value: string;
  private readonly placeholder: string;

  constructor(
    type: InputTypeEnum,
    value: string,
    id: string,
    placeholder: string = "",
    classes: string[] = []
  ) {
    super(id, classes);
    this.type = type;
    this.value = value;
    this.placeholder = placeholder;
  }

  public render(): string {
    return `
        <input class="input ${this.classes}" id="${this.id}" type="${this.type}" value="${this.value}" placeholder="${this.placeholder}" />
    `;
  }
}
