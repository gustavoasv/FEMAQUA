import { isLogged } from "./utils/auth";

type Children = {
  children: JSX.Element;
};

export const RequireAuth = ({ children }: Children) => {
  const Logged = isLogged()
  if (Logged) {
    return children
  } else {
    window.location.href = '/login'
    console.log(Logged)
    return null;
  }
};