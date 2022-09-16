import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormNewPost } from "../components/NewPost.element";
import { useForm } from "react-hook-form";
import { ButtonSubmit, Label } from "../components/Profile.element";
import { Input } from "../components/Login.element";
import { API } from "../services/API";
import { HeroEditBackground } from "../components/PostAdmin.element";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";

// FORMULARIO PARA EDITAR EL JUEGO

const PlattformAdmin = () => {
  const { id } = useParams();
  const { plattform } = useContext(JwtContext);

  const defaultValues = {
    name: plattform.name,
    year: plattform.year,
    company: plattform.company,
    image: plattform.image,
  };

  const navigate = useNavigate();

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
    API.patch(`/plataforma/${id}`, formData).then((res) => {
      if (res) {
        navigate("/profile");
      }
    });
  };
  return (
    <>
      <HeroEditBackground>
        <div className="container_image_profile">
          <img
            className="profile-img"
            src={plattform.image}
            alt="plattform image"
          />
        </div>
        <h1 className="titleEditAdmin">EDIT PLATTFORM</h1>
        <FormNewPost onSubmit={handleSubmit(onSubmit)}>
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

export default PlattformAdmin;
