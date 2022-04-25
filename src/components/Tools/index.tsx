import { SetStateAction, useEffect, useState } from "react";
import { api } from "../../services/api";
import { ButtonModal, ButtonsArea, Card, customStyles, Main } from "./styles";
import Modal from "react-modal";
import { getToken } from "../../utils/auth";

interface Props {
  toolTag: TypeTools[];
}

type TypeTools = {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
};

Modal.setAppElement("#root");
export const Tools = (Props: Props) => {
  const [toolList, setToolList] = useState<Array<TypeTools>>([]);
  const [modal, setModal] = useState(false);
  const [idTool, setIdTool] = useState(0);
  const token = getToken();

  const getTools = async () => {
    await api
      .get("tools", { params: { token: token } })
      .then((response: { data: SetStateAction<TypeTools[]>; }) => setToolList(response.data));
  };

  const handleOpenModal = (id: number) => {
    setModal(true);
    setIdTool(id);
  };
  useEffect(() => {
    getTools()
  }, [])
  
  const handleCloseModal = async () => {
    setModal(false);
  };

  const handleDeleteTool = async () => {
    await api.delete(`tools/${idTool}`, { data: { token } });
    window.location.reload();
    setModal(false);
  };

  return (
    <Main>
      {Props.toolTag.length !== 0 && (
        <span>
          {Props.toolTag.map((item) => {
            return (
              <Card key={item.id}>
                <div>
                  <h2>
                    <a href={item.link}>{item.title}</a>
                  </h2>
                  <button onClick={() => handleOpenModal(item.id)}>
                    x Deletar
                  </button>
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
                {item.tags.map((item: any) => {
                  return <span>{`#${item}`}</span>;
                })}
              </Card>
            );
          })}
        </span>
      )}

      {Props.toolTag.length == 0 && (
        <span>
          {toolList.map((item: TypeTools) => {
            return (
              <Card>
                <div>
                  <h2>
                    <a href={item.link}>{item.title}</a>
                  </h2>
                  <button onClick={() => handleOpenModal(item.id)}>
                    x Deletar
                  </button>
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
                {item.tags.map((item: any) => {
                  return <span>{`#${item}`}</span>;
                })}
              </Card>
            );
          })}
        </span>
      )}
      <Modal isOpen={modal} style={customStyles}>
        <h2>Excluir ferramenta</h2>
        <hr />
        <p>Deseja realmente excluir essa ferramenta?</p>
        <ButtonsArea>
          <ButtonModal onClick={handleCloseModal}>Cancelar</ButtonModal>
          <ButtonModal className="buttonDel" onClick={handleDeleteTool}>
            Sim
          </ButtonModal>
        </ButtonsArea>
      </Modal>
    </Main>
  );
};
