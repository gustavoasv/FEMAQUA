import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Tools } from "../components/Tools";
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

it("should render home page and check button text and placeholder text", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const DeleteButtons = screen.getByText("+ Novo");
  const placeHolderInput = screen.getAllByPlaceholderText("Buscar por tag");

  expect(DeleteButtons).toBeInTheDocument();
  expect(placeHolderInput).toBeTruthy();
});
