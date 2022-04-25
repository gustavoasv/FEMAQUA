import styled from "styled-components";

interface Props {
  show: boolean
}

export const Main = styled.div`
  max-width: 60%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 320px) and (max-width: 704px) {
    max-width: 95%;
    h2{
      font-size: 14px;
    }
  }
  
`;

export const MainContents = styled.div`
  background-color: #fff;
  width: 80%;
  height: 90%;
`;

export const Titles = styled.div`
  width: 100%;
  height: 90px;
  line-height: 10px;
`;
export const ActionsArea = styled.div<Props>`
  width: 100%;
  height: 50px;
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: space-between;

  input {
    width: 170px;
    padding: 10px 10px 10px 5px;
  }

  button {
    width: 120px;
    height: 40px;
    cursor: pointer;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 120px;
  margin: 10px 0 10px 0;
  border-radius: 2px;
  border: 1px solid #000;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 20px;

    h2 {
      color: blue;
    }

    p {
      word-break: break-all;

    }
  }
  button {
    height: 30px;
    width: 100px;
    cursor: pointer;
    background-color: #F95E5A;
    color: #fff;
    outline: 0;
    border: 0;
  }

  span {
    margin: 0 10px 0 10px;
    color: blue;
    font-weight: bold;
  }
`;
