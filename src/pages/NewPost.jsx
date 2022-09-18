import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FormNewPost,
  NewPostHero,
  TextArea,
} from "../components/NewPost.element";
// import { API } from "../services/API";
import { useForm } from "react-hook-form";
import { Label } from "../components/Profile.element";
import { ButtonSubmit } from "../components/Button.element";
import { Input } from "../components/Login.element";
import { API } from "../services/API";

const NewPost = () => {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("titulo", data.titulo);
    formData.append("autor", data.autor);
    formData.append("contenido", data.contenido);
    formData.append("resumen", data.resumen);
    formData.append("image", data.image[0]);
    API.post("/articulo/create", formData).then((res) => {
      if (res) {
        navigate("/profile");
      }
    });
  };

  return (
    <>
      <NewPostHero>
        <FormNewPost onSubmit={handleSubmit(onSubmit)}>
          <img
            src="https://i.ibb.co/gS14Kys/NEWPOSTB.png"
            alt="titulo_editpost"
            className="w_titu_newPost"
          />
          <img
            src="https://i.ibb.co/6bzbJ0r/NEWPOSTW.png"
            alt="titulo_editpost"
            className="b_titu_newPost"
          />
          <Label className="LabelPost" htmlFor="titulo">
            Post title
          </Label>

          <Input
            className="LabelPost"
            type="text"
            id="titulo"
            name="titulo"
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
          <ButtonSubmit type="submit">Create a new post</ButtonSubmit>
        </FormNewPost>
      </NewPostHero>
    </>
  );
};

export default NewPost;
