import React from "react";
import { FiEdit, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";

const PrintPlataformas = (singlePlataforma) => {
  const { setPlattform } = useContext(JwtContext);
  let navigate = useNavigate();

  const setPlattformfunction = () => {
    setPlattform(singlePlataforma.singlePlataforma);
    localStorage.removeItem("plattform");
    localStorage.setItem(
      "plattform",
      JSON.stringify(singlePlataforma.singlePlataforma)
    );
    const savedPlattform = localStorage.getItem("plattform");
    const ValueEdit = JSON.parse(savedPlattform);
    setPlattform(ValueEdit);
  };

  const deletePlaform = () => {
    API.delete(`/plataforma/${singlePlataforma.singlePlataforma._id}`).then(
      (res) => {
        if (res) {
          navigate("/profile");
        }
      }
    );
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
        <button className="btnOnclickEdit" onClick={setPlattformfunction}>
          <Link
            to={`/edit-plattform/${singlePlataforma.singlePlataforma._id}
          `}
            className="btn-delete"
          >
            <FiEdit />
          </Link>
        </button>
        <button className="btnOnclickEdit" onClick={deletePlaform}>
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default PrintPlataformas;
