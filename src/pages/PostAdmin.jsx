import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormNewPost, TextArea } from "../components/NewPost.element";

import { useForm } from "react-hook-form";
import { Label } from "../components/Profile.element";
import { ButtonSubmit } from "../components/Button.element";
import { Input } from "../components/Login.element";
import { API } from "../services/API";
import { HeroEditBackground } from "../components/PostAdmin.element";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";

// FORMULARIO PARA EDITAR EL ARTICULO

const PostAdmin = () => {
  const { articulo } = useContext(JwtContext);

  const defaultValues = {
    titulo: articulo.titulo,
    autor: articulo.autor,
    contenido: articulo.contenido,
    image: articulo.image,
    resumen: articulo.resumen,
  };

  const navigate = useNavigate();
  const { id } = useParams();

  const { register, handleSubmit } = useForm();

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("titulo", data.titulo);
    formData.append("autor", data.autor);
    formData.append("contenido", data.contenido);
    formData.append("resumen", data.resumen);
    data.image[0] ? formData.append("image", data.image[0]) : <></>;
    API.patch(`/articulo/${id}`, formData).then((res) => {
      if (res) {
        navigate("/profile");
      }
    });
  };

  return (
    <>
      <HeroEditBackground>
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
        <div className="container_image_profile">
          <img className="profile-img" src={articulo.image} alt="post image" />
        </div>
        <FormNewPost onSubmit={handleSubmit(formSubmit)}>
          <Label className="LabelPost" htmlFor="titulo">
            Post title
          </Label>

          <Input
            className="LabelPost"
            type="text"
            id="titulo"
            name="titulo"
            defaultValue={defaultValues.titulo}
            {...register("titulo")}
          />

          <Label className="LabelPost" htmlFor="autor">
            {" "}
            Author{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="autor"
            name="autor"
            defaultValue={defaultValues.autor}
            {...register("autor")}
          />
          <Label className="LabelPost" htmlFor="resumen">
            {" "}
            Resume{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="resumen"
            name="resumen"
            defaultValue={defaultValues.resumen}
            {...register("resumen")}
          />

          <Label className="LabelPost" htmlFor="contenido">
            {" "}
            Content{" "}
          </Label>
          <TextArea
            className="container_description"
            type="text"
            id="contenido"
            name="contenido"
            cols="30"
            rows="13"
            defaultValue={defaultValues.contenido}
            {...register("contenido")}
          />

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

export default PostAdmin;
