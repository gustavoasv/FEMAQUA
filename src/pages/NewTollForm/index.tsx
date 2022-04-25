import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderTitles } from "../../components/HeaderTitles";
import { api } from "../../services/api";
import { getToken } from "../../utils/auth";
import {
  ButtonArea,
  Form,
  FormContents,
  FormInputArea,
  GlobalContent,
  Input,
  TopInputs,
} from "./styles";


export const NewToolForm = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();
  const token = getToken();
  const tagArray = tags.split(" ");

  const handleSubmitTool = async () => {
    try {
      await api.post("tools", {
        token: token,
        title: name,
        link: link,
        description: description,
        tags: tagArray,
      });
      navigate("/");
    } catch (error) {
      if (error) {
        alert("Dados inválidos ou campos vazios" || error)
      }
    }
  };
  return (
    <>
      <GlobalContent>
        <HeaderTitles />
        <Form>
          <FormContents>
            <h2>Nova ferramenta</h2>
            <hr />
            <FormInputArea>
              <TopInputs>
                <label>
                  Nome
                  <Input className="firstInput"  value={name} onChange={e => setName(e.target.value)}/>
                </label>
                <label>
                  Link
                  <Input value={link} onChange={e => setLink(e.target.value)} />
                </label>
              </TopInputs>
              <textarea value={description} onChange={e => setDescription(e.target.value)} />
              <label>
                Tags
                <Input value={tags} onChange={e => setTags(e.target.value)} />
              </label>
              <hr />
              <ButtonArea>
                <button onClick={handleSubmitTool}>Salvar</button>
              </ButtonArea>
            </FormInputArea>
          </FormContents>
        </Form>
      </GlobalContent>
    </>
  );
};
