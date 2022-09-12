import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FormNewPost,
  TextArea,
} from "../components/NewPost.element";
import { SubMenuDiv, SubMenuUl } from "../components/SubMenu.element";
import { useForm } from "react-hook-form";
import { ButtonSubmit, Label } from "../components/Profile.element";
import { Input } from "../components/Login.element";
import { API } from "../services/API";
import { HeroEditBackground } from "../components/PostAdmin.element";
import { useEffect, useState } from "react";


// FORMULARIO PARA EDITAR EL ARTICULO

const PostAdmin = () => {

  const [ articuloDetail, setArticuloDetail ] = useState();

  const getArticulo = async () => {
  const raw = await API.get(`/articulo/${id}`)
  setArticuloDetail(raw.data.data.articulo);
  };


  useEffect(() => {
  getArticulo()
  },[]);

  const defaultValues = {
    titulo: articuloDetail?.titulo,
    autor: articuloDetail?.autor,
    contenido: articuloDetail?.autor,
    image: articuloDetail?.image,
  };




  let navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
  } = useForm();

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("titulo", data.titulo);
    formData.append("autor", data.autor);
    formData.append("contenido", data.contenido);
    data.image[0] ? formData.append("image", data.image[0]) : <></>;
    API.patch(`/articulo/${id}`, formData).then((res) => {
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
          <h1 className="titleEditAdmin">EDIT POST</h1>
          
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
          <ButtonSubmit type="submit">Edit post</ButtonSubmit>
        </FormNewPost>
      </HeroEditBackground>
    </>
  );
};

export default PostAdmin;
