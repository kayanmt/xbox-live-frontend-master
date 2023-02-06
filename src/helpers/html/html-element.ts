export class HtmlElement {
  protected readonly id: string;
  protected readonly classes: string;

  constructor(id: string, classes: string[] = []) {
    this.id = id;
    this.classes = this.setClasses(classes);
  }

  private setClasses(classes: string[]) {
    return classes.join(" ");
  }

  public getElement(): any {
    return document.getElementById(this.id);
  }

  public getValue(): string {
    const element: any = document.getElementById(this.id);
    return element.value;
  }

  public setValue(value: string): void {
    const element: any = document.getElementById(this.id);
    element.value = value;
  }

  public addEventListener(type: string, callBackFunction = () => {}): void {
    document.getElementById(this.id)?.addEventListener(type, callBackFunction);
  }

  public addEventListenerToChildren(type: string, callBackFunction: any): void {
    const children = document.getElementById(this.id)?.children;
    if (children) {
      Array.from(children).forEach((element) => {
        element.addEventListener(type, callBackFunction);
      });
    }
  }

  public getChildren(): any {
    return document.getElementById(this.id)?.children;
  }

  public deleteChildren(): any {
    const children = document.getElementById(this.id)?.children;
    if (children) {
      Array.from(children).forEach((element) => {
        element.remove();
      });
    }
  }

  public getInnerText(): string {
    const element: any = document.getElementById(this.id);
    return element.innerText;
  }

  public setInnerText(value: string): void {
    const element: any = document.getElementById(this.id);
    element.innerText = value;
  }

  public insertHtml(data: string, location = "beforeend"): void {
    const element: any = document.getElementById(this.id);
    element.insertAdjacentHTML(location, data);
  }

  public setSrc(src: string): void {
    const element: any = document.getElementById(this.id);
    element.src = src;
  }

  public setHref(href: string): void {
    const element: any = document.getElementById(this.id);
    element.href = href;
  }
}
