import { Div } from "../../../presentation/components/div";
import { Header } from "../../../presentation/components/header";
import { Image } from "../../../presentation/components/image";
import { Paragraph } from "../../../presentation/components/paragraph";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";

const { DIV } = DivTypeEnum;
const { ROW } = FlexDirectionEnum;
const { EVENLY } = FlexJustificationEnum;

export function makeHeaderFactory(): Header {
  const userName = new Paragraph("", "header-userInfo-userName", [
    "profileName",
  ]);
  const userImage = new Image("User", "", "header-userInfo-userImage", [
    "profileImage",
  ]);
  const userInfo = new Div(
    DIV,
    ROW,
    EVENLY,
    [userImage, userName],
    "header-userInfo"
  );

  const clock = new Paragraph("", "header-clockDiv-clock", ["clock"]);

  const clockDiv = new Div(DIV, ROW, EVENLY, [clock], "header-clockDiv", [
    "clockDiv",
  ]);

  return new Header([userInfo, clockDiv], "header");
}
