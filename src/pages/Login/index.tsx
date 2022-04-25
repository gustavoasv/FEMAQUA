import { useState } from "react";
import { api } from "../../services/api";
import { doLogin } from "../../utils/auth";
import {
  AsideRight,
  ButtonArea,
  Form,
  FormArea,
  Input,
  MainLogin,
  Texts,
} from "./styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = async () => {
    try {
      const request = await api.post("auth/login", { email, password });
      const response = await request.data;
      doLogin(response.access_token);
    } catch (error) {
      if (error) {
        alert("Usuário não autorizado ou campos vazios!");
      }
    }
  };

  return (
    <MainLogin>
      <FormArea>
        <Texts>
          <h1>FEMAQUA</h1>
          <p>Ferramentas maravilhosas que adoro</p>
        </Texts>
        <Form>
          <label id="Email">Login</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label id="Senha">Senha</label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <ButtonArea>
            <button onClick={handleSubmitLogin}>Entrar</button>
          </ButtonArea>
        </Form>
      </FormArea>
      <AsideRight></AsideRight>
    </MainLogin>
  );
};
