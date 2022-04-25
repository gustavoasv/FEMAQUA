import styled from "styled-components";

export const Form = styled.div`
  max-width: 100%;
  height: auto;
  box-shadow: 2px 4px 15px 6px rgba(0, 0, 0, 0.33);
  border-radius: 9px;
  padding: 10px;
  margin: auto;

  label {
    margin: 0 0 10px 0;
  }

  @media (min-width: 320px) and (max-width: 720px) {
    width: 90%;
  }
`;

export const GlobalContent = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 98%;
  padding: 5px 0 5px 5px;
  background-color: #f5f4f6;
  border: 1px solid #ccc;
  color: #170c3a;
  display: block;
  outline: 0;
`;

export const FormContents = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
`;
export const FormInputArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    width: 100%;
    margin: 0 auto;
  }

  textarea {
    width: 99%;
    margin: 30px auto;
    height: 110px;
    background-color: #f5f4f6;
    border: 1px solid #ccc;
    color: #170c3a;
    outline: 0;
  }
`;

export const TopInputs = styled.div`
  display: flex;
  .firstInput {
    width: 95%;
  }
`;

export const ButtonArea = styled.div`
  width: 99.5%;
  display: flex;
  justify-content: flex-end;
  height: auto;

  button {
    height: 60px;
    width: 170px;
    cursor: pointer;
    background: #2f55cc;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 9px;
  }
`;
