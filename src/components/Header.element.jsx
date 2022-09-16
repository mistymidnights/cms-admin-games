import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #000000;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderBtnLogin = styled.button`
  width: 70px;
  height: 30px;
  background-color: #a12323;
  color: black;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  &&:hover {
    background-color: white;
  }
`;

export const HeaderBtnLogout = styled.button`
  width: 70px;
  height: 30px;
  background-color: #a12323;
  color: black;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  &&:hover {
    background-color: white;
  }
`;

export const TitleHeader = styled.h2`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
`;

export const CustomName = styled.span`
  color: #922323;
  padding-left: 20px;
`;

export const MiniProfile = styled.div`
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
