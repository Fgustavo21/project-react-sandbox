import React from "react";
import "./styles.css";
import MinhaImagem from "./images/rottweiler.jpg";

function ProfileImage() {
  return (
    <div className="profile-image">
      <img src={MinhaImagem} alt="Imagem de perfil" />
    </div>
  );
}

export default ProfileImage;
