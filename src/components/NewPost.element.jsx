import styled from "@emotion/styled";

export const NewPostHero = styled.div`
  width: 100%;
  /* height: 100vh; */
  background-image: url("https://cdn.wallpapersafari.com/68/24/CT52xM.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  padding-top: 100px;
`;

export const FormNewPost = styled.form`
  width: 300px;
  height: 1200px;
  display: flex;
  flex-direction: column;
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
`;
