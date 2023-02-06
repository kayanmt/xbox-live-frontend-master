import { RouteComposer } from "../../../presentation/helpers/composers/route-composer";

export function makeRouteComposerFactory(): RouteComposer {
  return new RouteComposer([
    { componentId: "menuDiv-home", route: "/home-page" },
    { componentId: "menuDiv-favoriteGames", route: "/favorite-games" },
    { componentId: "menuDiv-gameList", route: "/game-list" },
    { componentId: "header-userInfo-userImage", route: "/logged-user" },
    { componentId: "loginForm-buttonsDiv-registerButton", route: "/register" },
    {
      componentId: "registerForm-buttonsDiv-closeButtonButton",
      route: "/login",
    },
    { componentId: "profileList-addProfileButton", route: "/profile-creation" },
    {
      componentId: "profileCreationForm-buttonsDiv-closeButton",
      route: "/profile-list",
    },
    {
      componentId: "adminHeader-buttonsDiv-returnButton",
      route: "/profile-list",
    },
    {
      componentId: "adminHeader-buttonsDiv-gamesButton",
      route: "/games-admin",
    },
    {
      componentId: "adminHeader-buttonsDiv-usersButton",
      route: "/users-admin",
    },
    {
      componentId: "adminGameList-gamesDiv-addGameButton",
      route: "/game-creation-admin",
    },
    {
      componentId: "gameCreationAdminForm-buttonsDiv-returnButton",
      route: "/games-admin",
    },
  ]);
}
