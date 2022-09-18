import styled from "@emotion/styled";

export const NewPostHero = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  padding-top: 20px;
`;

export const FormNewPost = styled.form`
  width: 300px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

export const TextArea = styled.textarea`
  font-size: 18px;
  padding: 0.5em;
  color: #000000;
  background: #ffffffcc;
  border: none;
  border-radius: 10px;
  margin-bottom: 0.5em;
  height: 300px;
  width: 100%;
`;
