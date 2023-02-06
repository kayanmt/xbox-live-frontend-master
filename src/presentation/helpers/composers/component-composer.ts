import { ComponentInterface } from "../../abstract/component-interface";

export class ComponentComposer {
  private readonly components: ComponentInterface[];

  constructor(components: ComponentInterface[]) {
    this.components = components;
  }

  public compose(): string {
    let componentComposer = "";
    this.components.map((component) => {
      componentComposer = componentComposer + component.render();
    });
    return componentComposer;
  }
}
