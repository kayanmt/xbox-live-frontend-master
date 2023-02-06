import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RouteComposer } from "./components/routes";
import { FavoriteGames } from "./pages/favoriteGames-page";
import { GameList } from "./pages/gameList-page";
import { GameView } from "./pages/gameView-page";
import { Homepage } from "./pages/home-page";
import { LoggedUser } from "./pages/loggedUser-page";
import { Login } from "./pages/login-page";
import { ProfileCreation } from "./pages/profileCreation-page";
import { ProfileList } from "./pages/profileList-page";
import { Register } from "./pages/register-page";
import { Validator } from "./helpers/validator-helper";
import { GamesAdmin } from "./pages/gamesAdmin-page";
import { HomeAdmin } from "./pages/homeAdmin-page";
import { GameCreationAdmin } from "./pages/gameCreationAdmin";
import { UsersAdmin } from "./pages/usersAdmin-page";
import { GameEditionAdmin } from "./pages/gameEditionAdmin";
import { UserEditionAdmin } from "./pages/userEditionAdmin-page";
import { StyleComposer } from "./components/styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    {/* <StyleComposer /> */}
    <RouteComposer />
    <Validator />
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile-list" element={<ProfileList />} />
      <Route path="profile-creation" element={<ProfileCreation />} />
      <Route path="logged-user" element={<LoggedUser />} />
      <Route path="favorite-games" element={<FavoriteGames />} />
      <Route path="game-list" element={<GameList />} />
      <Route path="game-view" element={<GameView />} />
      <Route path="home-page" element={<Homepage />} />
      <Route path="home-admin" element={<HomeAdmin />} />
      <Route path="games-admin" element={<GamesAdmin />} />
      <Route path="users-admin" element={<UsersAdmin />} />
      <Route path="game-creation-admin" element={<GameCreationAdmin />} />
      <Route path="game-edition-admin" element={<GameEditionAdmin />} />
      <Route path="user-edition-admin" element={<UserEditionAdmin />} />
    </Routes>
  </BrowserRouter>
);
