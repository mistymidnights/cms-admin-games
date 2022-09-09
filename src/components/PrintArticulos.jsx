import React from "react";
import { FiEdit, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";

const PrintArticulos = (singleArticulo) => {
  const { setArticulo } = useContext(JwtContext);
  console.log(singleArticulo);

   const setArticulofunction =()=> {
    setArticulo(singleArticulo.singleArticulo)
   }

  return (
    <div className="divArtCont">
      <div className="btn-container">
        <h3>{singleArticulo.singleArticulo.titulo}</h3>
        <p>{singleArticulo.singleArticulo.updatedAt}</p>
      </div>
      <div className="btn-delete-container">
        {" "}
        {/* //cambiar delete a update */}
        <button onClick={setArticulofunction()}>
        <Link
          to={`/articulo/post-admin/${singleArticulo.singleArticulo._id}
          `}
          className="btn-delete"
          // onClick={editArticulo(singleArticulo)}
        >
          <FiEdit />
        </Link>
        </button>
        <Link
          to={`/articulo/post-admin/${singleArticulo.singleArticulo._id}`}
          className="btn-delete"
          // onClick={editArticulo(singleArticulo)}
        >
          <FiX />
        </Link>
      </div>
    </div>
  );
};

export default PrintArticulos;
