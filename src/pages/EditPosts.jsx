import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeroEdit } from "../components/EditPosts.element";
import PrintArticulos from "../components/PrintArticulos";
import { SubMenuDiv, SubMenuUl } from "../components/SubMenu.element";
import { API } from "../services/API";

const EditPosts = () => {
  const [allArticulos, setAllArticulos] = useState([]);
  // const filteredArticulo = allArticulos.filter(
  //   (articulo) =>
  //     articulo.titulo.toLowerCase().includes(filterArticulo) ||
  //     articulo.autor.toLowerCase().includes(filterArticulo)
  // );

  const getAllArticulos = async () => {
    API.get("/articulo/").then((res) => {
      setAllArticulos(res.data.data.articulo);
      console.log(res.data.data.articulo);
    });
  };

  useEffect(() => {
    getAllArticulos();
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
        </SubMenuUl>
      </SubMenuDiv>
      <HeroEdit>
        {allArticulos.map((articulo) => {
          return (
            <PrintArticulos singleArticulo={articulo} key={articulo.titulo} />
          );
        })}
      </HeroEdit>
    </>
  );
};

export default EditPosts;
