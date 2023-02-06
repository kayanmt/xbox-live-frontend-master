import { HtmlElement } from "../../helpers/html/html-element";
import { ComponentInterface } from "../abstract/component-interface";

type Option = {
  option: string;
  value: string;
};

export class Select extends HtmlElement implements ComponentInterface {
  private readonly options: Option[];

  constructor(options: Option[], id: string, classes: string[] = []) {
    super(id, classes);
    this.options = options;
  }

  public render(): string {
    const options = this.composeOptions();
    return `
        <select id="${this.id}" class="select ${this.classes}">
            ${options}
        </select>
    `;
  }

  private composeOptions(): string {
    let options = "";
    this.options.map((option) => {
      options =
        options + `<option value="${option.value}">${option.option}</option>`;
    });
    return options;
  }
}
