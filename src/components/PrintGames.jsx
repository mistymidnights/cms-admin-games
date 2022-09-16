import React from "react";
import { FiEdit, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";

const PrintGames = (singleGame) => {
  const { setGame } = useContext(JwtContext);
  let navigate = useNavigate();

  const setGamefunction = () => {
    setGame(singleGame.singleGame);
    localStorage.removeItem("game");
    localStorage.setItem("game", JSON.stringify(singleGame.singleGame));
    const savedGame = localStorage.getItem("game");
    const ValueEdit = JSON.parse(savedGame);
    setGame(ValueEdit);
  };

  const deleteGame = () => {
    API.delete(`/juego/${singleGame.singleGame._id}`).then((res) => {
      if (res) {
        navigate("/profile");
      }
    });
  };
  return (
    <div className="divArtCont">
      <div className="btn-container">
        <h3>{singleGame.singleGame.name}</h3>
        <p>{singleGame.singleGame.year}</p>
      </div>
      <div className="btn-delete-container">
        {" "}
        {/* //cambiar delete a update */}
        <button className="btnOnclickEdit" onClick={setGamefunction}>
          <Link
            to={`/edit-game/${singleGame.singleGame._id}
          `}
            className="btn-delete"
          >
            <FiEdit />
          </Link>
        </button>
        <button className="btnOnclickEdit" onClick={deleteGame}>
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default PrintGames;
