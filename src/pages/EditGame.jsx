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
        <h1 className="titleEditAdmin">EDIT GAME</h1>
        {allGames.map((game) => {
          return <PrintGames singleGame={game} key={game.name} />;
        })}
      </HeroEdit>
    </>
  );
};

export default EditGame;
