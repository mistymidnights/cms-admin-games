import styled from "@emotion/styled";

export const HeroProfile = styled.div`
  height: 100vh;
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
`;

export const HeroProfileContainer = styled.div`
  width: 400px;
  height: 600px;
  background-color: #ffffff;
  color: black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleProfile = styled.h1`
  color: black;
  letter-spacing: 3px;
`;

export const ProfileSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageProfile = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const FormGroupProfile = styled.form`
  color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 50px auto;
  height: 100%;
  gap: 30px;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: #1d1b1b;
  display: block;
  font-weight: bolder;
`;

export const ButtonRED = styled.button`
  padding: 0.5em;
  color: #ffffff;
  background: #621515;
  border: none;
  border-radius: 10px;
  width: 50%;
  height: 60px;
  margin-bottom: 0.5em;
  margin-top: 40px;
  &&:hover {
    background-color: #991e1e;
  }
`;
