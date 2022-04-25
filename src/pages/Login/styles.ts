import styled from "styled-components";

export const MainLogin = styled.div`
  max-width: 980px;
  height: 90vh;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const FormArea = styled.div`
  background-color: #fff;
  width: 90%;
  height: 90%;
  margin-top: 40px;
  padding: 30px;

  @media (min-width: 320px) and (max-width: 609px) {
    margin: 0 auto;
  }
`;

export const AsideRight = styled.div`
  width: 70%;
  height: 100%;
  background-color: blue;

  @media (min-width: 320px) and (max-width: 408px) {
    display: none;
    margin: 0 0 0 30px;
    background: red;
  }
`;

export const Texts = styled.div`
  line-height: 2px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 17px;
    font-weight: bold;
  }

  @media (min-width: 320px) and (max-width: 726px) {
    p{
      font-size: 13px;
  }
}
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0 10px 5px;
  background-color: #dedce1;
  border: 1px solid #f5f4f6;
  outline: 0;
`;

export const Form = styled.div`
  display: flex;
  max-width: 360px;
  flex-direction: column;
  margin: 90px 0 0 0;

  label {
    margin: 10px 0 10px 0;
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0 0 0;
  justify-content: flex-end;

  button {
    width: 120px;
    height: 40px;
    cursor: pointer;
    background-color: #e1e7fd;
    border: 0;
    outline: 0;
    color: #365df0;
  }
`;
