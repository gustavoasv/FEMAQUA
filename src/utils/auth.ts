export const isLogged = (): boolean => {
  const token = localStorage.getItem("@user:femaqua");
  return token ? true : false;
};

export const doLogin = (token: string): void => {
  localStorage.setItem("@user:femaqua", token);
  window.location.href = "/";
};

export const getToken = (): string | null => {
  const token = localStorage.getItem("@user:femaqua");
  return token;
};
