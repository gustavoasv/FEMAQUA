import { render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter} from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

it("should have labels texts and a button entrar", () => {
  render(<Login />);
  const inputLogin = screen.queryByText("Login");
  const inputSenha = screen.queryByText("Senha");
  const button = screen.queryByText("Entrar");
  expect(inputLogin).toBeTruthy();
  expect(inputSenha).toBeTruthy();
  expect(button).toBeTruthy();
});

it("should render home page"), async () => {
 const {container} = render(
     <MemoryRouter>
      <Login />
     </MemoryRouter>
  );
  const Input = container.getElementsByTagName('input')[0]
  const InputSenha = container.getElementsByTagName('input')[1]
 const button = container.getElementsByTagName('button')[0]

 userEvent.type(Input, 'admin@admin.com')
 userEvent.type(InputSenha, 'admin123')
 userEvent.click(button)

 await waitFor(() => {
  expect(<Home />)

 })
}
