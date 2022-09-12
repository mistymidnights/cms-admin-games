import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormNewPost,
  NewPostHero,
  TextArea,
} from "../components/NewPost.element";
import { SubMenuDiv, SubMenuUl } from "../components/SubMenu.element";
// import { API } from "../services/API";
import { useForm } from "react-hook-form";
import { ButtonSubmit, Label } from "../components/Profile.element";
import { Input } from "../components/Login.element";
import { API } from "../services/API";

const NewPost = () => {
  let navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("titulo", data.titulo);
    formData.append("autor", data.autor);
    formData.append("contenido", data.contenido);
    formData.append("image", data.image[0]);
    API.post("/articulo/create", formData).then((res) => {
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
      <NewPostHero>
        <FormNewPost onSubmit={handleSubmit(onSubmit)}>
          <h1 className="titleEditAdmin">NEW POST</h1>
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

          <Label className="LabelPost" htmlFor="titulo">
            Post title
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="titulo"
            name="titulo"
            {...register("titulo", {
              required: true,
            })}
          />
          {errors.titulo?.type === "required" && (
            <p className="errorMessage">This field is required</p>
          )}
          <Label className="LabelPost" htmlFor="autor">
            {" "}
            Author{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="autor"
            name="autor"
            {...register("autor", {
              required: true,
            })}
          />
          {errors.autor?.type === "required" && (
            <p className="errorMessage">Please enter your name/company</p>
          )}
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
          <ButtonSubmit type="submit">Create a new post</ButtonSubmit>
        </FormNewPost>
      </NewPostHero>
    </>
  );
};

export default NewPost;
