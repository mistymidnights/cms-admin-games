import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FormNewPost } from "../components/NewPost.element";
import { SubMenuDiv, SubMenuUl } from "../components/SubMenu.element";
import { useForm } from "react-hook-form";
import { ButtonSubmit, Label } from "../components/Profile.element";
import { Input } from "../components/Login.element";
import { API } from "../services/API";
import { HeroEditBackground } from "../components/PostAdmin.element";

import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { TextAreaGame } from "../components/NewGame.element";

// FORMULARIO PARA EDITAR EL JUEGO

const GameAdmin = () => {
  const { game } = useContext(JwtContext);
  console.log(game);

  //TODO//
  const defaultValues = {
    name: game.name,
    year: game.year,
    type: game.type,
    pegi: game.pegi,
    desarrolladora: game.desarrolladora,
    plataforma: game.plataforma,
    descripcion: game.descripcion,
    image: game.image,
  };

  console.log(game);

  let navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("year", data.year);
    formData.append("type", data.type);
    formData.append("pegi", data.pegi);
    formData.append("dev", data.desarrolladora);
    formData.append("plataforma", data.plataforma);
    formData.append("description", data.descripcion);
    formData.append("image", data.image[0]);
    API.patch(`/juego/${id}`, formData).then((res) => {
      if (res) {
        navigate("/profile");
      }
    });
  };
  return (
    <>
      <SubMenuDiv>
        <SubMenuUl>
          <Link className="SubMenuA" to="/new-post">
            New Post
          </Link>
          <Link className="SubMenuB" to="/edit-posts">
            Edit Posts
          </Link>
          <Link className="SubMenuA" to="/new-game">
            New Game
          </Link>
          <Link className="SubMenuB" to="/edit-game">
            Edit Game
          </Link>
          <Link className="SubMenuA" to="/new-plattform">
            New Plattform
          </Link>
          <Link className="SubMenuB" to="/edit-plattform">
            Edit Plattform
          </Link>
        </SubMenuUl>
      </SubMenuDiv>
      <HeroEditBackground>
        <FormNewPost onSubmit={handleSubmit(onSubmit)}>
          <h1 className="titleEditAdmin">EDIT GAME</h1>
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

          <Label className="LabelPost" htmlFor="name">
            Name
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="name"
            name="name"
            {...register("name")}
            defaultValue={defaultValues.name}
          />

          <Label className="LabelPost" htmlFor="year">
            {" "}
            Year{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="year"
            name="year"
            {...register("year")}
            defaultValue={defaultValues.year}
          />

          <Label className="LabelPost" htmlFor="type">
            {" "}
            Type{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="type"
            name="type"
            {...register("type")}
            defaultValue={defaultValues.type}
          />
          <Label className="LabelPost" htmlFor="pegi">
            {" "}
            PEGI{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="pegi"
            name="pegi"
            {...register("pegi")}
            defaultValue={defaultValues.pegi}
          />
          <Label className="LabelPost" htmlFor="dev">
            {" "}
            Dev{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="dev"
            name="dev"
            {...register("desarrolladora")}
            defaultValue={defaultValues.desarrolladora}
          />
          <Label className="LabelPost" htmlFor="plattform">
            {" "}
            Plattform{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="plattform"
            name="plattform"
            {...register("plataforma")}
            defaultValue={defaultValues.plataforma}
          />
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
            {...register("descripcion")}
            defaultValue={defaultValues.descripcion}
          />

          <ButtonSubmit type="submit">Edit post</ButtonSubmit>
        </FormNewPost>
      </HeroEditBackground>
    </>
  );
};

export default GameAdmin;
