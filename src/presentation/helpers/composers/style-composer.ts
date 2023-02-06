export class StyleComposer {
  constructor(private readonly styleFilePaths: string[]) {}

  public compose(): string {
    let styleComposer = "";
    this.styleFilePaths.map((stylePath) => {
      styleComposer =
        styleComposer + `<link rel="stylesheet" href="${stylePath}" type="text/css">`;
    });
    return styleComposer;
  }
}
