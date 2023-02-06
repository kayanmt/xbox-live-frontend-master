import { Game } from "./game";

export type Profile = {
  id: string;
  title: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  favoriteGames: string[];
  Game: Game[];
};
