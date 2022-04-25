import { SetStateAction, useEffect, useState } from "react";
import { HeaderTitles } from "../../components/HeaderTitles";
import { NewToolForm } from "../NewTollForm";
import { Tools } from "../../components/Tools";
import { api } from "../../services/api";
import { getToken } from "../../utils/auth";
import { ActionsArea, Main, MainContents } from "./styles";
import { useNavigate } from "react-router-dom";

type TypeTools = {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
};

let requestTimer: number

export const Home = () => {
  const [newTool, setNewTool] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [tagListFiltered, setTagListFiltered] = useState<TypeTools[]>([]);
  const [tag, setTag] = useState("");
  const goNewTool = useNavigate();
  const token = getToken();

  const openFormNewTool = () => {
    goNewTool("/newtool");
    setShowInput(false);
  };

  useEffect(() => {
    const getToolByTag = async () => {
      await api
        .get(`tools?tag=${tag}`, { params: { token } })
        .then((response: { data: SetStateAction<TypeTools[]>; }) => setTagListFiltered(response.data));
    };

    if (requestTimer) {
      clearTimeout(requestTimer);
    }
    requestTimer = setTimeout(getToolByTag, 900) as unknown as number
  }, [tag]);

  return (
    <Main>
      <MainContents>
        <HeaderTitles />
        <ActionsArea show={showInput}>
          <input
            placeholder="Buscar por tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)} />
          <button onClick={openFormNewTool}>+ Novo</button>
        </ActionsArea>
       <Tools toolTag={tagListFiltered} />
      </MainContents>
    </Main>
  );
};
