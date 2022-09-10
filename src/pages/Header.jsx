import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import {
  CustomName,
  HeaderContainer,
  HeaderNav,
  TitleHeader,
  HeaderBtnLogout,
  MiniProfile,
} from "../components/Header.element";

const Header = () => {
  const { user, logout } = useContext(JwtContext);
  let navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <HeaderNav>
          <ul className="navMenu">
            {user ? (
              <>
                <Link to="/" className="linkTitle">
                  Welcome back <CustomName>{user.name}!</CustomName>
                </Link>
                <div className="rightHeaderContainer">
                  <li className="li_avatar">
                    <MiniProfile className="avatar_container">
                      {user.avatar != "undefined" ? (
                        <Link to="/profile">
                          <img
                            className="miniProfile"
                            src={user?.image}
                            alt="Pet Avatar"
                          />
                        </Link>
                      ) : null}
                    </MiniProfile>
                  </li>
                  <li>
                    <HeaderBtnLogout
                      onClick={() => logout() & navigate("/")}
                      className="button_logout_control"
                    >
                      Logout
                    </HeaderBtnLogout>
                  </li>
                </div>
              </>
            ) : (
              <>
                <TitleHeader>
                  {" "}
                  <Link to="/" className="linkTitle">
                    {" "}
                    Welcome back!
                  </Link>
                </TitleHeader>
                {/* <li>
                  <HeaderBtnLogin to="/">Log in</HeaderBtnLogin>
                </li> */}
              </>
            )}
          </ul>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default Header;
