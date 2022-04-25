import { useCallback, useEffect, useState } from "react";
import { HeaderTitles } from "../../components/HeaderTitles";
import { NewToolForm } from "../NewTollForm";
import { Tools } from "../../components/Tools";
import { api } from "../../services/api";
import { getToken } from "../../utils/auth";
import { ActionsArea, Main, MainContents, Titles } from "./styles";
import { useNavigate } from "react-router-dom";

type TypeTools = {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
};

let requestTimer: NodeJS.Timeout;

export const Home = () => {
  const [newTool, setNewTool] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [tagListFiltered, setTagListFiltered] = useState<TypeTools[]>([]);
  const [tag, setTag] = useState("");
  const goNewTool = useNavigate()
  const token = getToken();
  const openFormNewTool = () => {
    goNewTool('/newtool')
    setShowInput(false);
  };
  
  useEffect(() => {
    const getToolByTag = async () => {
      await api
        .get(`tools?tag=${tag}`, { params: { token } })
        .then((response) => setTagListFiltered(response.data));
    };

    if (requestTimer) {
      clearTimeout(requestTimer);
    }
    requestTimer = setTimeout(getToolByTag, 900);
  }, [tag]);

  return (
    <Main>
      <MainContents>
        <HeaderTitles />
        <ActionsArea show={showInput}>
          <input
            placeholder="Buscar por tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <button onClick={openFormNewTool}>+ Novo</button>
        </ActionsArea>
        {!newTool && <Tools toolTag={tagListFiltered} />}
        {newTool && <NewToolForm />}
      </MainContents>
    </Main>
  );
};
