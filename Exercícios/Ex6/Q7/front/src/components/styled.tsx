import styled from "styled-components";

export const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 450px;
  background-color: rgb(202, 225, 169);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  input {
    padding: 10px 20px;
    border: none;
    outline: 1px solid grey;
  }

  button {
    background-color: red;
  }
`;
