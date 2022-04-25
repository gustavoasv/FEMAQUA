export const isLogged = (): boolean => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};

export const doLogin = (token: string): void => {
  localStorage.setItem("token", token);
  window.location.href = "/";
};

export const getToken = (): string | null => {
  const token = localStorage.getItem("token");
  return token;
};
