import React from "react";
import { FiEdit, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";

const PrintGames = (singleGame) => {
  const { setGame } = useContext(JwtContext);
  //   console.log(singlePlataforma);

  const setGamefunction = () => {
    setGame(singleGame.singleGame);
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
        <button className="btnOnclickEdit" onClick={setGamefunction()}>
          <Link
            to={`/edit-game/${singleGame.singleGame._id}
          `}
            className="btn-delete"
          >
            <FiEdit />
          </Link>
        </button>
        <Link
          to={`/edit-game/${singleGame.singleGame._id}`}
          className="btn-delete"
        >
          <FiX />
        </Link>
      </div>
    </div>
  );
};

export default PrintGames;
