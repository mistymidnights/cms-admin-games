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

// FORMULARIO PARA EDITAR EL JUEGO

const PlattformAdmin = () => {
  const { plattform } = useContext(JwtContext);
  console.log(plattform);

  const defaultValues = {
    name: plattform.name,
    year: plattform.year,
    company: plattform.company,
    image: plattform.image,
  };

  console.log(plattform);

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
    formData.append("company", data.company);
    data.image[0] ? formData.append("image", data.image[0]) : <></>;
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
      <HeroEditBackground>
        <h1 className="titleEditAdmin">EDIT PLATTFORM</h1>
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

          <Label className="LabelPost" htmlFor="company">
            {" "}
            Company{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="company"
            name="company"
            {...register("company")}
            defaultValue={defaultValues.company}
          />
          <ButtonSubmit type="submit">Edit post</ButtonSubmit>
        </FormNewPost>
      </HeroEditBackground>
    </>
  );
};

export default PlattformAdmin;
