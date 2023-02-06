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

export function makeGameEditionAdminFormFactory(): Div {
  const formTitle = new Title("Game", "gameEditionAdminForm-title");

  const titleLabel = new Label("Title", "gameEditionAdminForm-titleLabel");
  const titleInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "gameEditionAdminForm-titleInput",
    "Title"
  );

  const coverImageUrlLabel = new Label(
    "Image",
    "gameEditionAdminForm-coverImageUrlLabel"
  );
  const coverImageUrlInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "gameEditionAdminForm-coverImageUrlInput",
    "Image url"
  );

  const descriptionLabel = new Label(
    "Description",
    "gameEditionAdminForm-descriptionLabel"
  );
  const descriptionInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "gameEditionAdminForm-descriptionInput",
    "Description"
  );

  const yearLabel = new Label("Year", "gameEditionAdminForm-yearLabel");
  const yearInput = new Input(
    InputTypeEnum.NUMBER,
    "",
    "gameEditionAdminForm-yearInput",
    "Year"
  );

  const genderLabel = new Label("Gender", "gameEditionAdminForm-genderLabel");
  const genderInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "gameEditionAdminForm-genderInput",
    "Gender"
  );

  const imdbLabel = new Label("Imdb", "gameEditionAdminForm-imdbLabel");
  const imdbInput = new Input(
    InputTypeEnum.NUMBER,
    "",
    "gameEditionAdminForm-imdbInput",
    "Imdb"
  );

  const trailerUrlLabel = new Label(
    "Trailer",
    "gameEditionAdminForm-trailerUrlLabel"
  );
  const trailerUrlInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "gameEditionAdminForm-trailerUrlInput",
    "Trailer url"
  );

  const gameplayUrlLabel = new Label(
    "Gameplay",
    "gameEditionAdminForm-gameplayUrlLabel"
  );
  const gameplayUrlInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "gameEditionAdminForm-gameplayUrlInput",
    "Gameplay url"
  );

  const updateButton = new Button(
    "Update",
    ButtonTypeEnum.BUTTON,
    "gameEditionAdminForm-buttonsDiv-updateButton",
    ["border-light-green", "background-dark-green"]
  );
  const deleteButton = new Button(
    "Delete",
    ButtonTypeEnum.BUTTON,
    "gameEditionAdminForm-buttonsDiv-deleteButton",
    ["border-light-red", "background-dark-red"]
  );

  const buttonsDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [updateButton, deleteButton],
    "gameEditionAdminForm-buttonsDiv"
  );

  return new Div(
    DivTypeEnum.FORM,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [
      formTitle,
      titleLabel,
      titleInput,
      coverImageUrlLabel,
      coverImageUrlInput,
      descriptionLabel,
      descriptionInput,
      yearLabel,
      yearInput,
      genderLabel,
      genderInput,
      imdbLabel,
      imdbInput,
      trailerUrlLabel,
      trailerUrlInput,
      gameplayUrlLabel,
      gameplayUrlInput,
      buttonsDiv,
    ],
    "gameEditionAdminForm",
    ["form"]
  );
}
