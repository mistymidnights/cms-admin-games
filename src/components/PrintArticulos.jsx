import React from "react";
import { FiEdit, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { API } from "../services/API";
import { useNavigate } from "react-router-dom";

const PrintArticulos = (singleArticulo) => {
  let navigate = useNavigate();
  const { setArticulo } = useContext(JwtContext);

  const setArticulofunction = () => {
    setArticulo(singleArticulo.singleArticulo);
    localStorage.removeItem("articulo");
    localStorage.setItem(
      "articulo",
      JSON.stringify(singleArticulo.singleArticulo)
    );
    const savedArticulo = localStorage.getItem("articulo");
    const ValueEdit = JSON.parse(savedArticulo);
    setArticulo(ValueEdit);
  };

  const deletePost = () => {
    API.delete(`/articulo/${singleArticulo.singleArticulo._id}`).then((res) => {
      if (res) {
        navigate("/profile");
      }
    });
  };

  return (
    <div className="divArtCont">
      <div className="btn-container">
        <h3>{singleArticulo.singleArticulo.titulo}</h3>
        <p>{singleArticulo.singleArticulo.updatedAt}</p>
      </div>
      <div className="btn-delete-container">
        {" "}
        {/* //cambiar delete a update */}
        <button className="btnOnclickEdit" onClick={setArticulofunction}>
          <Link
            to={`/articulo/post-admin/${singleArticulo.singleArticulo._id}
          `}
            className="btn-delete"
            // onClick={editArticulo(singleArticulo)}
          >
            <FiEdit />
          </Link>
        </button>
        <button className="btnOnclickEdit" onClick={deletePost}>
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default PrintArticulos;
