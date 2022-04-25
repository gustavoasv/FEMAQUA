import styled from "styled-components";

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '490px',
    height: '200px',
    borderRadius: '9px',
  },
};
export const Main = styled.div`
`
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

export const ButtonModal = styled.div`
  border: 1px solid #ccc;
  margin: 0 10px 0 0;
  width: 70px;
  height: auto;
  padding: 15px  20px;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
`

export const ButtonsArea = styled.div`
 display: flex;
 justify-content: flex-end;
 .buttonDel {
   background-color:  #F95E5A;
   color: white;
 }
`