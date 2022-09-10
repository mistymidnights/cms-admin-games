import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeroEdit } from "../components/EditPosts.element";
import PrintGames from "../components/PrintGames";
import { SubMenuDiv, SubMenuUl } from "../components/SubMenu.element";
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
      <SubMenuDiv>
        <SubMenuUl>
          <Link className="SubMenuA" to="/new-post">
            New Post
          </Link>
          <Link className="SubMenuA" to="/edit-posts">
            Edit Posts
          </Link>
          <Link className="SubMenuA" to="/new-game">
            New Game
          </Link>
          <Link className="SubMenuA" to="/edit-game">
            Edit Game
          </Link>
          <Link className="SubMenuA" to="/new-plattform">
            New Plattform
          </Link>
          <Link className="SubMenuA" to="/edit-plattform">
            Edit Plattform
          </Link>
        </SubMenuUl>
      </SubMenuDiv>
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
