import { useEffect } from "react";
import { makeStylesControllerFactory } from "../../factories/controllers/styles-controller-factory";

export function StyleComposer() {
  const stylesController = makeStylesControllerFactory();

  useEffect(() => {
    stylesController.renderStyles();
  });

  return <></>;
}
