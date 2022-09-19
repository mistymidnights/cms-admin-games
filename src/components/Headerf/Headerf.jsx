import "./Headerf.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../../context/jwtContext";
import { ButtonLogoutBIG } from "../Button.element";

const toggleSidenav = () => {
  document.querySelector(".main-menu").classList.toggle("show");
  const line1__bars = document.querySelector(".line1__bars-menu");
  const line2__bars = document.querySelector(".line2__bars-menu");
  const line3__bars = document.querySelector(".line3__bars-menu");

  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
};

const darkmode = () => {
  const btnSwitch = document.querySelector("#switch");
  btnSwitch.classList.toggle("active");
  document.body.classList.toggle("dark");
};

const Headerf = () => {
  const { user, logout } = useContext(JwtContext);
  let navigate = useNavigate();
  return (
    <>
      <div className="menu-btn">
        <div className="bars__menu" onClick={toggleSidenav}>
          <span className="line1__bars-menu"></span>
          <span className="line2__bars-menu"></span>
          <span className="line3__bars-menu"></span>
        </div>
      </div>
      <div className="wrapper">
        <header>
          <nav className="main-nav">
            <div className="container_image_logo_header">
              <div className="logo_nav">
                <img
                  src="https://i.ibb.co/SR6Vfq3/pngegg.png"
                  alt="logo"
                  className="b_img_logi"
                />
                <img
                  src="https://cdn.discordapp.com/attachments/993445344358699118/1020235067760586762/Akira-PNGshadow.png"
                  alt="logo"
                  className="w_img_logi"
                />
                <button className="switch" id="switch" onClick={darkmode}>
                  <span>
                    <i className="fas fa-sun"></i>
                  </span>
                  <span>
                    <i className="fas fa-moon"></i>
                  </span>
                </button>
              </div>
              {/* 
              {/* -------dark mode ------------ */}
            </div>

            <ul className="main-menu">
              <li className="button_mascotas" onClick={toggleSidenav}>
                <Link to="/">
                  <button className="button_li_nav_home">HOME</button>
                </Link>
              </li>

              {user ? (
                <>
                  <li>
                    <div className="dropdown">
                      <button className="button_li_nav">POST</button>
                      <div class="dropdown-content">
                        <li className="button_navUno" onClick={toggleSidenav}>
                          <Link to="/new-post">New post</Link>
                        </li>
                        <li className="button_navDos" onClick={toggleSidenav}>
                          <Link to="/edit-posts">Edit posts</Link>
                        </li>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button className="button_li_nav">GAME</button>
                      <div class="dropdown-content">
                        <li className="button_navUno" onClick={toggleSidenav}>
                          <Link to="/new-game">New game</Link>
                        </li>
                        <li className="button_navDos" onClick={toggleSidenav}>
                          <Link to="/edit-game">Edit game</Link>
                        </li>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="dropdown">
                      <button className="button_li_nav">PLATTFORM</button>
                      <div class="dropdown-content">
                        <li className="button_navUno" onClick={toggleSidenav}>
                          <Link to="/new-plattform">New plattform</Link>
                        </li>
                        <li className="button_navDos" onClick={toggleSidenav}>
                          <Link to="/edit-plattform">Edit plattform</Link>
                        </li>
                      </div>
                    </div>
                  </li>
                  <li className="button_mascotas" onClick={toggleSidenav}>
                    <Link to="/profile">
                      <button className="button_li_nav_profile">PROFILE</button>
                    </Link>
                  </li>
                </>
              ) : null}

              <div className="div_father_control">
                <div className="control">
                  {user ? (
                    <>
                      <p className="welcome">Welcome {user.name}</p>
                      <div className="container_imagen_logout">
                        {user.avatar !== "undefined" ? (
                          <div className="image_control">
                            <img
                              className="image_control_image"
                              src={user?.image}
                              alt="User Avatar"
                            />
                          </div>
                        ) : null}

                        <button
                          onClick={() => logout() & navigate("/")}
                          className="button_logout_control"
                        >
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <ul>
                        <div
                          onClick={toggleSidenav}
                          className="login_container"
                        >
                          <Link to="/login" className="login_container">
                            <button className="button_login_control">
                              Login
                            </button>
                          </Link>
                        </div>
                      </ul>
                      <div className="logo_noUser">
                        <img
                          src="https://i.ibb.co/SR6Vfq3/pngegg.png"
                          alt="logo"
                          className="noUser_logo"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Headerf;
