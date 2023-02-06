import { InsertStylesUseCase } from "../../../data/usecases/other/insertStyles-usecase";
import { StylesController } from "../../../presentation/controllers/styles-controller";
import { makeStyleComposerFactory } from "../styles/style-composer-factory";

export function makeStylesControllerFactory(): StylesController {
  const styleComposer = makeStyleComposerFactory();
  const insertStylesUseCase = new InsertStylesUseCase(styleComposer);
  return new StylesController(insertStylesUseCase);
}
