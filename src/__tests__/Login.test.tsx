import { Login } from "../pages/Login/index";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";


it("should have labels texts and a button entrar", () => {
  render(<Login />);
  const inputLogin = screen.queryByText("Login");
  const inputSenha = screen.queryByText("Senha");
  const button = screen.queryByText("Entrar");
  expect(inputLogin).toBeTruthy();
  expect(inputSenha).toBeTruthy();
  expect(button).toBeTruthy()

});

it("should click in the button entrar and render home page", () => {
  const { container } = render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const inputEmail = container.getElementsByTagName('input')[0]
  const inputSenha = container.getElementsByTagName('input')[1]
  const button = container.getElementsByTagName("button")[0];

  fireEvent.change(inputEmail, {target: {value: 'admin@admin.com'}})
  fireEvent.change(inputSenha, {target: {value: 'admin123'}})

  fireEvent.click(button)
  
  const TitleInScreen = screen.queryByText('Ferramentas Maravilhosas que Adoro')
  expect(TitleInScreen).toBeInTheDocument()
 
});

