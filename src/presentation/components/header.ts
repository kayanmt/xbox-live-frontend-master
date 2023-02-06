import { ComponentInterface } from "../abstract/component-interface";
import { ComponentComposer } from "../helpers/composers/component-composer";
import { HtmlElement } from "../../helpers/html/html-element";

export class Header extends HtmlElement implements ComponentInterface {
  private readonly components: ComponentInterface[];

  constructor(
    components: ComponentInterface[],
    id: string,
    classes: string[] = []
  ) {
    super(id, classes);
    this.components = components;
  }

  public render(): string {
    const components = new ComponentComposer(this.components);
    return `
        <header id="${this.id}" class="header ${this.classes}">
            ${components.compose()}
        </header>
    `;
  }
}
