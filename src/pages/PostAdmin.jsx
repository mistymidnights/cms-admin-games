import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FormNewPost,
  NewPostHero,
  TextArea,
} from "../components/NewPost.element";
import { SubMenuDiv, SubMenuUl } from "../components/SubMenu.element";
import { useForm } from "react-hook-form";
import { ButtonSubmit, Label } from "../components/Profile.element";
import { Input } from "../components/Login.element";
import { API } from "../services/API";
import { HeroEditBackground } from "../components/PostAdmin.element";

const PostAdmin = () => {
  let navigate = useNavigate();
  const { id } = useParams();

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
    API.patch(`/articulo/${id}`, formData).then((res) => {
      if (res) {
        navigate("/user/:id");
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
          <Link className="SubMenuA" to="/edit-posts">
            Edit Posts
          </Link>
        </SubMenuUl>
      </SubMenuDiv>
      <HeroEditBackground>
        <h1 className="titleEditAdmin">EDIT POST</h1>
        <FormNewPost onSubmit={handleSubmit(onSubmit)}>
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
          <ButtonSubmit type="submit">Edit post</ButtonSubmit>
        </FormNewPost>
      </HeroEditBackground>
    </>
  );
};

export default PostAdmin;
