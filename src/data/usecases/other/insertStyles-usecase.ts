import { StyleComposer } from "../../../presentation/helpers/composers/style-composer";
import { Service } from "../../abstract/service-interface";

export class InsertStylesUseCase implements Service {
  private readonly styleComposer: StyleComposer;

  constructor(styleComposer: StyleComposer) {
    this.styleComposer = styleComposer;
  }

  public execute(): void {
    const styles = this.styleComposer.compose();
    const head = document.querySelector("head");
    head?.insertAdjacentHTML("beforeend", styles);
  }
}
