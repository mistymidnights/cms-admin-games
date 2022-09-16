import styled from "@emotion/styled";

export const HeroLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroLoginContainer = styled.div`
  width: 400px;
  height: 600px;
  background-color: #ffffff;
  color: black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormGroup = styled.form`
  color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 50px auto;
  height: 100%;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: #000000;
  background: #dcdcdc72;
  border: none;
  font-weight: bold;
  font-size: 14px;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 0.5em;
  &&:focus {
    border-color: black solid 2px;
  }

  @media (max-width: 1200px) {
    &&:focus {
      border-color: black solid 2px;
    }
  }
`;

export const InputSubmit = styled.input`
  padding: 0.5em;
  color: #ffffff;
  background: #000000;
  border: none;
  border-radius: 10px;
  width: 30%;
  height: 60px;
  margin-bottom: 0.5em;
  margin-top: 40px;
  &&:hover {
    color: black;
    background-color: #87b7e1;
  }
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: #000000;
  display: block;
`;
