import { InsertStylesUseCase } from "../../data/usecases/other/insertStyles-usecase";

export class StylesController {
  private readonly insertStylesUseCase: InsertStylesUseCase;

  constructor(insertStylesUseCase: InsertStylesUseCase) {
    this.insertStylesUseCase = insertStylesUseCase;
  }

  public renderStyles(): void {
    return this.insertStylesUseCase.execute();
  }
}
