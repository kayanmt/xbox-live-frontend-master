type Route = {
  componentId: string;
  route: string;
};

export class RouteComposer {
  private readonly routes: Route[];

  constructor(routes: Route[]) {
    this.routes = routes;
  }

  public compose(callbackFunction: (route: string) => void): void {
    this.routes.map((route) => {
      document
        .getElementById(route.componentId)
        ?.addEventListener("click", () => {
          callbackFunction(route.route);
        });
    });
  }
}
