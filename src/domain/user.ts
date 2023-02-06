import { Profile } from "./profile";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  profiles: Profile[];
};
