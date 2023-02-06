import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeRouteComposerFactory } from "../../factories/routes/route-composer-factory";

export function RouteComposer() {
  const navigate = useNavigate();
  const routes = makeRouteComposerFactory();

  function setRoute(route: string): void {
    navigate(route);
  }

  useEffect(() => {
    routes.compose(setRoute);
  });

  return <></>;
}
