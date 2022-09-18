import React from "react";
import { Input } from "../components/Login.element";
import { NewPostHero } from "../components/NewPost.element";
import { Label } from "../components/Profile.element";
import { ButtonSubmit } from "../components/Button.element";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import { FormNewPostGame } from "../components/NewGame.element";
import { TextArea } from "../components/NewPost.element";
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
    formData.append("desarrolladora", data.desarrolladora);
    formData.append("plataformas", data.plataformas);
    formData.append("video", data.video);
    formData.append("descripcion", data.descripcion);
    formData.append("image", data.image[0]);
    API.post("/juego/create", formData).then((res) => {
      if (res) {
        navigate("/profile");
      }
    });
  };

  return (
    <>
      <NewPostHero>
        <FormNewPostGame onSubmit={handleSubmit(onSubmit)}>
          <img
            src="https://i.ibb.co/yQbzgDV/NEWgameW.png"
            alt="titulo_editpost"
            className="w_titu_newGame"
          />
          <img
            src="https://i.ibb.co/FhS9H0G/NEWgameb.png"
            alt="titulo_editpost"
            className="b_titu_newGame"
          />

          <Label className="LabelPost" htmlFor="name">
            Game name
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="name"
            name="name"
            {...register("name")}
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
            {...register("pegi")}
          />
          <Label className="LabelPost" htmlFor="desarrolladora">
            {" "}
            Dev{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="desarrolladora"
            name="desarrolladora"
            {...register("desarrolladora")}
          />
          <Label className="LabelPost" htmlFor="plataformas">
            {" "}
            Plattform{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="plataformas"
            name="plataformas"
            {...register("plataformas")}
          />

          <Label className="LabelPost" htmlFor="video">
            {" "}
            VIDEO{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="video"
            name="video"
            {...register("video")}
          />
          <Label className="LabelPost" htmlFor="descripcion">
            {" "}
            Description{" "}
          </Label>

          <TextArea
            className="container_description"
            type="text"
            id="descripcion"
            name="descripcion"
            cols="30"
            rows="13"
            {...register("descripcion")}
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

          <ButtonSubmit type="submit">Create a new game</ButtonSubmit>
        </FormNewPostGame>
      </NewPostHero>
    </>
  );
};

export default NewGame;
