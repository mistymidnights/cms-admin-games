import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormNewPost } from "../components/NewPost.element";
import { useForm } from "react-hook-form";
import { ButtonSubmit, Label } from "../components/Profile.element";
import { Input } from "../components/Login.element";
import { API } from "../services/API";
import { HeroEditBackground } from "../components/PostAdmin.element";
import { TextAreaGame } from "../components/NewGame.element";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";

// FORMULARIO PARA EDITAR EL JUEGO

const GameAdmin = () => {
  const { id } = useParams();
  const { game } = useContext(JwtContext);

  const defaultValues = {
    name: game.name,
    year: game.year,
    type: game.type,
    pegi: game.pegi,
    desarrolladora: game.desarrolladora,
    plataforma: game.plataformas,
    descripcion: game.descripcion,
    video: game.video,
  };

  const navigate = useNavigate();

  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("year", data.year);
    formData.append("type", data.type);
    formData.append("pegi", data.pegi);
    formData.append("desarrolladora", data.desarrolladora);
    formData.append("plataformas", data.plataformas);
    formData.append("video", data.video);
    formData.append("descripcion", data.descripcion);
    data.image[0] ? formData.append("image", data.image[0]) : <></>;
    API.patch(`/juego/${id}`, formData).then((res) => {
      if (res) {
        navigate("/profile");
      }
    });
  };
  return (
    <>
      <HeroEditBackground>
        <div className="container_image_profile">
          <img className="profile-img" src={game.image} alt="game image" />
        </div>
        {/* -------------------------FORMULARIO---------------------------- */}
        <FormNewPost onSubmit={handleSubmit(formSubmit)}>
          <h1 className="titleEditAdmin">EDIT GAME</h1>

          {/* -----------------------NAME------------------------ */}
          <Label className="LabelPost" htmlFor="name">
            Name
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="name"
            name="name"
            defaultValue={defaultValues.name}
            {...register("name")}
          />

          {/* -----------------------YEAR------------------------ */}
          <Label className="LabelPost" htmlFor="year">
            {" "}
            Year{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="year"
            name="year"
            defaultValue={defaultValues.year}
            {...register("year")}
          />
          {/* -----------------------TYPE------------------------ */}
          <Label className="LabelPost" htmlFor="type">
            {" "}
            Type{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="type"
            name="type"
            defaultValue={defaultValues.type}
            {...register("type")}
          />
          {/* -----------------------PEGI------------------------ */}
          <Label className="LabelPost" htmlFor="pegi">
            {" "}
            PEGI{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="pegi"
            name="pegi"
            defaultValue={defaultValues.pegi}
            {...register("pegi")}
          />
          {/* ---------------------DEV------------------------ */}
          <Label className="LabelPost" htmlFor="dev">
            {" "}
            Dev{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="dev"
            name="dev"
            defaultValue={defaultValues.desarrolladora}
            {...register("desarrolladora")}
          />
          {/* ---------------------PLATTFORM------------------------ */}
          <Label className="LabelPost" htmlFor="plattform">
            {" "}
            Plattform{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="plattform"
            name="plattform"
            defaultValue={defaultValues.plataforma}
            {...register("plataformas")}
          />
          {/* ---------------------VIDEO------------------------ */}
          <Label className="LabelPost" htmlFor="video">
            {" "}
            VIDEO{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="video"
            name="video"
            defaultValue={defaultValues.video}
            {...register("video")}
          />
          {/* ---------------------DESCRIPCION------------------------ */}
          <Label className="LabelPost" htmlFor="descripcion">
            {" "}
            Description{" "}
          </Label>
          <TextAreaGame
            className="container_description"
            type="text"
            id="descripcion"
            name="descripcion"
            cols="30"
            rows="13"
            defaultValue={defaultValues.descripcion}
            {...register("descripcion")}
          />
          {/* -----------------------IMAGEN------------------------ */}
          <Label>Image</Label>
          <input type="file" id="file-input" {...register("image")}></input>
          <Label
            for="file-input"
            className="file-button"
            id="image"
            name="image"
          >
            Select File
          </Label>

          <ButtonSubmit type="submit">Edit post</ButtonSubmit>
        </FormNewPost>
      </HeroEditBackground>
    </>
  );
};

export default GameAdmin;
