import { Button } from "../../../presentation/components/button";
import { Div } from "../../../presentation/components/div";
import { Input } from "../../../presentation/components/input";
import { Label } from "../../../presentation/components/label";
import { Title } from "../../../presentation/components/title";
import { ButtonTypeEnum } from "../../../presentation/enums/button/button-type-enum";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { InputTypeEnum } from "../../../presentation/enums/input/input-type-enum";

export function makeProfileCreationFormFactory(): Div {
  const formTitle = new Title("New Profile", "profileCreationForm-title");

  const nameLabel = new Label("Title", "profileCreationForm-nameLabel");
  const nameInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "profileCreationForm-nameInput",
    "Profile title"
  );

  const imageLabel = new Label("Image", "profileCreationForm-imageLabel");
  const imageInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "profileCreationForm-imageInput",
    "Image url"
  );

  const createButton = new Button(
    "Create",
    ButtonTypeEnum.BUTTON,
    "profileCreationForm-buttonsDiv-createButton",
    ["border-light-green", "background-dark-green"]
  );
  const closeButton = new Button(
    "Close",
    ButtonTypeEnum.BUTTON,
    "profileCreationForm-buttonsDiv-closeButton",
    ["border-light-red", "background-dark-red"]
  );

  const buttonsDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [createButton, closeButton],
    "profileCreationForm-buttonsDiv"
  );

  const profileCreationForm = new Div(
    DivTypeEnum.FORM,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [formTitle, nameLabel, nameInput, imageLabel, imageInput, buttonsDiv],
    "profileCreationForm",
    ["form"]
  );

  return new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [profileCreationForm],
    "profileCreationFormDiv"
  );
}
