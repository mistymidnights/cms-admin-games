import React, { useEffect, useState } from "react";
import { HeroEdit } from "../components/EditPosts.element";
import PrintGames from "../components/PrintGames";

import { API } from "../services/API";

const EditGame = () => {
  const [allGames, setAllGames] = useState([]);
  console.log(allGames);

  const getAllGames = async () => {
    API.get("/juego/").then((res) => {
      setAllGames(res.data.data.juego);
      console.log(res.data.data.juego);
    });
  };

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <>
      <HeroEdit>
        <img
          src="https://i.ibb.co/vDSm0HY/editplattfom-3.png"
          alt="titulo_editpost"
          className="b_titu_editGame"
        />
        <img
          src="https://i.ibb.co/Q8PdmSP/editplattfom-2.png"
          alt="titulo_editpost"
          className="w_titu_editGame"
        />

        {allGames.map((game) => {
          return <PrintGames singleGame={game} key={game.name} />;
        })}
      </HeroEdit>
    </>
  );
};

export default EditGame;
