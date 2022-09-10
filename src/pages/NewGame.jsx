import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/Login.element";
import { NewPostHero } from "../components/NewPost.element";
import { ButtonSubmit, Label } from "../components/Profile.element";
import { SubMenuDiv, SubMenuUl } from "../components/SubMenu.element";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import { FormNewPostGame, TextAreaGame } from "../components/NewGame.element";

const NewGame = () => {
  let navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("year", data.year);
    formData.append("type", data.type);
    formData.append("pegi", data.pegi);
    formData.append("company", data.desarrolladora);
    formData.append("description", data.descripcion);
    formData.append("image", data.image[0]);
    API.post("/juego/create", formData).then((res) => {
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
          <Link className="SubMenuA" to="/edit-posts">
            Edit Posts
          </Link>
          <Link className="SubMenuA" to="/new-game">
            New Game
          </Link>
          <Link className="SubMenuA" to="/new-plattform">
            New Plattform
          </Link>
          <Link className="SubMenuA" to="/edit-plattform">
            Edit Plattform
          </Link>
        </SubMenuUl>
      </SubMenuDiv>
      <NewPostHero>
        <FormNewPostGame onSubmit={handleSubmit(onSubmit)}>
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
            Game name
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="name"
            name="name"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name?.type === "required" && (
            <p className="errorMessage">This field is required</p>
          )}
          <Label className="LabelPost" htmlFor="year">
            {" "}
            Year{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="year"
            name="year"
            {...register("year", {
              required: true,
            })}
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
            {...register("type", {
              required: true,
            })}
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
            {...register("pegi", {
              required: true,
            })}
          />
          <Label className="LabelPost" htmlFor="company">
            {" "}
            company{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="company"
            name="company"
            {...register("desarrolladora", {
              required: true,
            })}
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
          />
          <ButtonSubmit type="submit">Create a new game</ButtonSubmit>
        </FormNewPostGame>
      </NewPostHero>
    </>
  );
};

export default NewGame;
