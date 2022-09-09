import React from "react";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import {
  HeroLogin,
  HeroLoginContainer,
  FormGroup,
  Label,
  Input,
  InputSubmit,
} from "../components/Login.element";

const Login = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const { setJwt, setUser } = useContext(JwtContext);

  const formSubmit = (formData) => {
    API.post("/user/login", formData).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.userInDb));
      setJwt(res.data.token);
      setUser(res.data.userInDb);
      if (res.data.token) {
        navigate(`/user/:id`);
      }
    });
  };

  return (
    <HeroLogin>
      <HeroLoginContainer>
        <FormGroup onSubmit={handleSubmit(formSubmit)}>
          <Label htmlFor="nick">nick</Label>
          <Input
            type="text"
            id="nick"
            name="nick"
            {...register("nick")}
          ></Input>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            title="Minimo 6 caracteres, debe contener al menos una letra mayuscula,
         al menos una minuscula y debe tener un caracter especial"
            pattern="^(?=.*[A-Z])(?=.*[.!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$"
            {...register("password")}
          ></Input>
          <Label className="submit"></Label>
          <InputSubmit type="submit"></InputSubmit>
        </FormGroup>
      </HeroLoginContainer>
    </HeroLogin>
  );
};

export default Login;
