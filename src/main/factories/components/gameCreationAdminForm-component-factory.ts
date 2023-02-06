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

export function makeGameCreationAdminFormFactory(): Div {
  const formTitle = new Title("Create Game", "gameCreationAdminForm-title");

  const titleLabel = new Label("Title", "gameCreationAdminForm-titleLabel");
  const titleInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "gameCreationAdminForm-titleInput",
    "Title"
  );

  const coverImageUrlLabel = new Label(
    "Image",
    "gameCreationAdminForm-coverImageUrlLabel"
  );
  const coverImageUrlInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "gameCreationAdminForm-coverImageUrlInput",
    "Image url"
  );

  const descriptionLabel = new Label(
    "Description",
    "gameCreationAdminForm-descriptionLabel"
  );
  const descriptionInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "gameCreationAdminForm-descriptionInput",
    "Description"
  );

  const yearLabel = new Label("Year", "gameCreationAdminForm-yearLabel");
  const yearInput = new Input(
    InputTypeEnum.NUMBER,
    "",
    "gameCreationAdminForm-yearInput",
    "Year"
  );

  const genderLabel = new Label("Gender", "gameCreationAdminForm-genderLabel");
  const genderInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "gameCreationAdminForm-genderInput",
    "Gender"
  );

  const imdbLabel = new Label("Imdb", "gameCreationAdminForm-imdbLabel");
  const imdbInput = new Input(
    InputTypeEnum.NUMBER,
    "",
    "gameCreationAdminForm-imdbInput",
    "Imdb"
  );

  const trailerUrlLabel = new Label(
    "Trailer",
    "gameCreationAdminForm-trailerUrlLabel"
  );
  const trailerUrlInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "gameCreationAdminForm-trailerUrlInput",
    "Trailer url"
  );

  const gameplayUrlLabel = new Label(
    "Gameplay",
    "gameCreationAdminForm-gameplayUrlLabel"
  );
  const gameplayUrlInput = new Input(
    InputTypeEnum.TEXT,
    "",
    "gameCreationAdminForm-gameplayUrlInput",
    "Gameplay url"
  );

  const createButton = new Button(
    "Create",
    ButtonTypeEnum.BUTTON,
    "gameCreationAdminForm-buttonsDiv-createButton",
    ["border-light-green", "background-dark-green"]
  );
  const returnButton = new Button(
    "Return",
    ButtonTypeEnum.BUTTON,
    "gameCreationAdminForm-buttonsDiv-returnButton",
    ["border-light-red", "background-dark-red"]
  );

  const buttonsDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [createButton, returnButton],
    "gameCreationAdminForm-buttonsDiv"
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
    "gameCreationAdminForm",
    ["form"]
  );
}
