import React, { useEffect, useState } from "react";
import { HeroEdit } from "../components/EditPosts.element";
import PrintPlataformas from "../components/PrintPlataformas";
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
      <HeroEdit>
        <h1 className="titleEditAdmin">EDIT PLATTFORM</h1>
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
