import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { JwtContext } from "../context/jwtContext";
import { API } from "../services/API";
import {
  HeroProfile,
  ProfileSection,
  ImageProfile,
  FormGroupProfile,
  ButtonSubmit,
} from "../components/Profile.element";
import { Label, Input } from "../components/Login.element";
import { SubMenuDiv, SubMenuUl } from "../components/SubMenu.element";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { user, logout } = useContext(JwtContext);
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const defaultValues = {
    nick: user.nick,
    image: user.image,
  };

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("nick", data.nick);

    // formData.append("searchCouple", data.searchCouple);
    data.image[0] ? formData.append("image", data.image[0]) : <></>;
    API.patch(`/user/${user._id}`, formData).then((res) => {
      logout();
      if (res) {
        navigate("/");
      }
    });
  };

    const notify = () =>
    toast.success("Profile updated, please log in", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });


  

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
      <HeroProfile>
        <ProfileSection className="profile">
          <ImageProfile className="container_profile">
            <div className="container_image_profile">
              <img className="profile-img" src={user.image} alt="User image" />
            </div>
            <div className="container_info_profile">
              <FormGroupProfile onSubmit={handleSubmit(formSubmit)}>
                <div className="formprofile">
                  <Label htmlFor="nick">nick</Label>
                  <Input
                    type="text"
                    id="nick"
                    name="nick"
                    {...register("nick")}
                    defaultValue={defaultValues.nick}
                  ></Input>
                </div>
                <div className="formprofile">
                  <label>Image</label>
                  <input
                    type="file"
                    id="file-input"
                    {...register("image")}
                  ></input>
                  <label
                    for="file-input"
                    className="file-button"
                    id="image"
                    name="image"
                  >
                    Select File
                  </label>
                  <ButtonSubmit onClick={notify} type="submit">Edit Profile</ButtonSubmit>
                </div>
              </FormGroupProfile>
            </div>
          </ImageProfile>
        </ProfileSection>
      </HeroProfile>
    </>
  );
};

export default Profile;
