import { StyleComposer } from "../../../presentation/helpers/composers/style-composer";

export function makeStyleComposerFactory(): StyleComposer {
  const globals = ["./src/presentation/styles/global/global.css"];
  const colors = [
    "./src/presentation/styles/colors/background-colors.css",
    "./src/presentation/styles/colors/border-colors.css",
  ];
  const components = [
    "./src/presentation/styles/components/title.css",
    "./src/presentation/styles/components/input.css",
    "./src/presentation/styles/components/button.css",
    "./src/presentation/styles/components/paragraph.css",
    "./src/presentation/styles/components/div.css",
    "./src/presentation/styles/components/image.css",
    "./src/presentation/styles/components/label.css",
    "./src/presentation/styles/components/form.css",
    "./src/presentation/styles/components/anchor.css",
    "./src/presentation/styles/components/select.css",
  ];
  const pages = [
    "./src/presentation/styles/pages/home-page.css",
    "./src/presentation/styles/pages/loggedUser-page.css",
    "./src/presentation/styles/pages/login-page.css",
    "./src/presentation/styles/pages/register-page.css",
    "./src/presentation/styles/pages/profileList-page.css",
    "./src/presentation/styles/pages/profileCreation-page.css",
    "./src/presentation/styles/pages/homeAdmin-page.css",
    "./src/presentation/styles/pages/usersAdmin-page.css",
    "./src/presentation/styles/pages/userEditionAdmin-page.css",
    "./src/presentation/styles/pages/gameEditionAdmin-page.css",
    "./src/presentation/styles/pages/gameCreationAdmin-page.css",
    "./src/presentation/styles/pages/gameView-page.css",
    "./src/presentation/styles/pages/gameList-page.css",
    "./src/presentation/styles/pages/favoriteGames-page.css",
  ];

  return new StyleComposer([...globals, ...colors, ...components, ...pages]);
}
