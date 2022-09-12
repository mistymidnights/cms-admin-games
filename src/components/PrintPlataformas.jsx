import React from "react";
import { FiEdit, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";

const PrintPlataformas = (singlePlataforma) => {
  const { setPlattform } = useContext(JwtContext);
  //   console.log(singlePlataforma);

  const setPlattformfunction = () => {
    setPlattform(singlePlataforma.singlePlataforma);
  };
  

  return (
    <div className="divArtCont">
      <div className="btn-container">
        <h3>{singlePlataforma.singlePlataforma.name}</h3>
        <p>{singlePlataforma.singlePlataforma.company}</p>
      </div>
      <div className="btn-delete-container">
        {" "}
        {/* //cambiar delete a update */}
        <button className="btnOnclickEdit" onClick={setPlattformfunction()}>
          <Link
            to={`/edit-plattform/${singlePlataforma.singlePlataforma._id}
          `}
            className="btn-delete"
          >
            <FiEdit />
          </Link>
        </button>
        <Link
          to={`/edit-plattform/${singlePlataforma.singlePlataforma._id}`}
          className="btn-delete"
        >
          <FiX />
        </Link>
      </div>
    </div>
  );
};

export default PrintPlataformas;
