import { createContext } from "react";

type IUser = {
  name: string;
  email: string;
};

type IUserContext = {
  user: IUser | null;
  setUser: (userData: IUser) => void;
};

const UserContext = createContext<IUserContext>({ user: null, setUser: () => {}});

export default UserContext;
