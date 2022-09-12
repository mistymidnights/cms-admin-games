import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FormNewPost } from "../components/NewPost.element";
import { SubMenuDiv, SubMenuUl } from "../components/SubMenu.element";
import { useForm } from "react-hook-form";
import { ButtonSubmit, Label } from "../components/Profile.element";
import { Input } from "../components/Login.element";
import { API } from "../services/API";
import { HeroEditBackground } from "../components/PostAdmin.element";
import { useEffect, useState } from "react";
import { TextAreaGame } from "../components/NewGame.element";

// FORMULARIO PARA EDITAR EL JUEGO

const GameAdmin = () => {
  const { id } = useParams();
  const [ gameDetail, setGameDetail ] = useState();
  const getGame = async () => {
    const raw = await API.get(`/juego/${id}`)
    setGameDetail(raw.data.data.juego);
    };
  
  
    useEffect(() => {
    getGame()
   
    });
  


  //TODO//
  const defaultValues = {
    name: gameDetail?.name,
    year: gameDetail?.year,
    type: gameDetail?.type,
    pegi: gameDetail?.pegi,
    desarrolladora: gameDetail?.desarrolladora,
    plataforma: gameDetail?.plataforma,
    descripcion: gameDetail?.descripcion,
    image: gameDetail?.image,
  };



  let navigate = useNavigate();
  

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
        <FormNewPost onSubmit={handleSubmit(formSubmit)}>
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
            defaultValue={defaultValues.name}
            {...register("name")}
            
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
            defaultValue={defaultValues.year}
            {...register("year")}
            
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
            defaultValue={defaultValues.type}
            {...register("type")}
            
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
            defaultValue={defaultValues.pegi}
            {...register("pegi")}
            
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
            defaultValue={defaultValues.desarrolladora}
            {...register("desarrolladora")}
            
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
            defaultValue={defaultValues.plataforma}
            {...register("plataforma")}
            
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
            defaultValue={defaultValues.descripcion}
            {...register("descripcion")}
            
          />

          <ButtonSubmit type="submit">Edit post</ButtonSubmit>
        </FormNewPost>
      </HeroEditBackground>
    </>
  );
};

export default GameAdmin;
