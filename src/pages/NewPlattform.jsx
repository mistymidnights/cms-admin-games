import React from "react";
import { useNavigate } from "react-router-dom";
import { FormNewPost, NewPostHero } from "../components/NewPost.element";

// import { API } from "../services/API";
import { useForm } from "react-hook-form";
import { ButtonSubmit, Label } from "../components/Profile.element";
import { Input } from "../components/Login.element";
import { API } from "../services/API";

const NewPlattform = () => {
  let navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("company", data.company);
    formData.append("year", data.year);
    formData.append("image", data.image[0]);
    API.post("/plataforma/create", formData).then((res) => {
      if (res) {
        navigate("/profile");
      }
    });
  };

  return (
    <>
      <NewPostHero>
        <FormNewPost onSubmit={handleSubmit(onSubmit)}>
          <h1 className="titleEditAdmin">NEW PLATTFORM</h1>
          <Label className="LabelPost" htmlFor="name">
            Name
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
          <Label className="LabelPost" htmlFor="company">
            {" "}
            Company{" "}
          </Label>
          <Input
            className="LabelPost"
            type="text"
            id="company"
            name="company"
            {...register("company", {
              required: true,
            })}
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
            {...register("year", {
              required: true,
            })}
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

          <ButtonSubmit type="submit">Create a new plattform</ButtonSubmit>
        </FormNewPost>
      </NewPostHero>
    </>
  );
};

export default NewPlattform;
