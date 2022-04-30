import { render, screen} from "@testing-library/react";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";


it("should have labels texts and a button entrar", () => {
  render(<Login />);
  const inputLogin = screen.queryByText("Login");
  const inputSenha = screen.queryByText("Senha");
  const button = screen.queryByText("Entrar");
  expect(inputLogin).toBeTruthy();
  expect(inputSenha).toBeTruthy();
  expect(button).toBeTruthy()

});

it("should render home page and add new tool", () => {
  render(<Home />)

  const InputName = screen.getByText('+ Novo')
  expect(InputName).toBeTruthy()
})