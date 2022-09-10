import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeroEdit } from "../components/EditPosts.element";
import PrintPlataformas from "../components/PrintPlataformas";
import { SubMenuDiv, SubMenuUl } from "../components/SubMenu.element";
import { API } from "../services/API";

const EditPlattform = () => {
  const [allPlattforms, setAllPlattforms] = useState([]);
  // const filteredArticulo = allArticulos.filter(
  //   (articulo) =>
  //     articulo.titulo.toLowerCase().includes(filterArticulo) ||
  //     articulo.autor.toLowerCase().includes(filterArticulo)
  // );

  const getAllPlattforms = async () => {
    API.get("/plataforma/").then((res) => {
      setAllPlattforms(res.data.data.plataforma);
      console.log(res.data.data.plataforma);
    });
  };

  useEffect(() => {
    getAllPlattforms();
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
          <Link className="SubMenuA" to="/new-plattform">
            New Plattform
          </Link>
          <Link className="SubMenuA" to="/edit-plattform">
            Edit Plattform
          </Link>
        </SubMenuUl>
      </SubMenuDiv>
      <HeroEdit>
        {allPlattforms.map((plataforma) => {
          return (
            <PrintPlataformas
              singlePlataforma={plataforma}
              key={plataforma.name}
            />
          );
        })}
      </HeroEdit>
    </>
  );
};

export default EditPlattform;
