import { ComponentInterface } from "../abstract/component-interface";
import { DivTypeEnum } from "../enums/div/div-type-enum";
import { FlexDirectionEnum } from "../enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../enums/div/flex-justification-enum";
import { ComponentComposer } from "../helpers/composers/component-composer";
import { HtmlElement } from "../../helpers/html/html-element";

export class Div extends HtmlElement implements ComponentInterface {
  private readonly divType: DivTypeEnum;
  private readonly flexDirection: string;
  private readonly flexJustification: string;
  private readonly components: ComponentInterface[];

  constructor(
    divType: DivTypeEnum,
    flexDirection: FlexDirectionEnum,
    flexJustification: FlexJustificationEnum,
    components: ComponentInterface[],
    id: string,
    classes: string[] = []
  ) {
    super(id, classes);
    this.divType = divType;
    this.flexDirection = flexDirection;
    this.flexJustification = flexJustification;
    this.components = components;
  }

  public render(): string {
    const flexDirection = this.getFlexDirection(this.flexDirection);
    const flexJustification = this.getFlexJustification(this.flexJustification);
    const components = new ComponentComposer(this.components);
    const classes = `div flex-body ${flexJustification} ${flexDirection} ${this.classes}`;
    return `
        <${this.divType} id="${this.id}" class="${classes}">
            ${components.compose()}
        </${this.divType}>
    `;
  }

  private getFlexDirection(type: string): string {
    switch (type.toLowerCase()) {
      case "column":
        return "flex-d-column";
      case "row":
        return "flex-d-row";
      default:
        return "";
    }
  }

  private getFlexJustification(direction: string): string {
    switch (direction.toLowerCase()) {
      case "evenly":
        return "justify-evenly";
      case "around":
        return "justify-around";
      case "between":
        return "justify-between";
      default:
        return "";
    }
  }
}
