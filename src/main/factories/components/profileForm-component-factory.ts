import { Button } from "../../../presentation/components/button";
import { Div } from "../../../presentation/components/div";
import { Image } from "../../../presentation/components/image";
import { Input } from "../../../presentation/components/input";
import { Label } from "../../../presentation/components/label";
import { Title } from "../../../presentation/components/title";
import { ButtonTypeEnum } from "../../../presentation/enums/button/button-type-enum";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { InputTypeEnum } from "../../../presentation/enums/input/input-type-enum";

export function makeProfileFormFactory(): Div {
  const formTitle = new Title("Profile", "profileForm-title");

  const nameLabel = new Label("Title", "profileForm-nameLabel");
  const nameInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "profileForm-nameInput",
    "Profile title"
  );

  const imageLabel = new Label("Image", "profileForm-imageLabel");
  const imageInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "profileForm-imageInput",
    "Image url"
  );

  const profileImage = new Image("Profile", "", "profileForm-image");

  const updateButton = new Button(
    "Update",
    ButtonTypeEnum.BUTTON,
    "profileForm-buttonsDiv-updateButton",
    ["border-light-green", "background-dark-green"]
  );
  const deleteButton = new Button(
    "Delete",
    ButtonTypeEnum.BUTTON,
    "profileForm-buttonsDiv-deleteButton",
    ["border-light-red", "background-dark-red"]
  );

  const buttonsDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [updateButton, deleteButton],
    "profileForm-buttonsDiv"
  );

  return new Div(
    DivTypeEnum.FORM,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [
      formTitle,
      nameLabel,
      nameInput,
      imageLabel,
      imageInput,
      profileImage,
      buttonsDiv,
    ],
    "profileForm",
    ["form"]
  );
}
