import { Link } from "react-router-dom";
import { ButtonRED } from "../components/Profile.element";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";

const Home = () => {
  const { user } = useContext(JwtContext);
  return (
    <>
      <div id="home">
        <div class="welcome_home_div">
          <h1 className="welcome_h1">WELCOME TO CMS AKIRA GAME</h1>
          {user ? (
            <>
              <ButtonRED className="button_red">
                <Link to="/profile" className="Login_link">
                  PROFILE
                </Link>
              </ButtonRED>
            </>
          ) : (
            <>
              <ButtonRED className="button_red">
                <Link to="/login" className="Login_link">
                  Do you have an account?
                </Link>
              </ButtonRED>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
