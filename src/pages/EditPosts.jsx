import React, { useEffect, useState } from "react";
import { HeroEdit } from "../components/EditPosts.element";
import PrintArticulos from "../components/PrintArticulos";
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
    });
  };

  useEffect(() => {
    getAllArticulos();
  });

  return (
    <>
      <HeroEdit>
        <img
          src="https://i.ibb.co/bNgTMks/sakura-1.png"
          alt="titulo_editpost"
          className="b_titu_editPost"
        />
        <img
          src="https://i.ibb.co/jGv4c3Y/sakura.png"
          alt="titulo_editpost"
          className="w_titu_editPost"
        />

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
