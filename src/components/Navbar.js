import React from "react";
import profile from "../assets/jid_profil.jpg";
import { BiMessage } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="profilePic">
        <img src={profile} alt="" className="profilePicImage" />
      </div>
      <div className="navBarIcons">
        <BiMessage className="navBarIcon" />
        <HiOutlineMenu className="navBarIcon" />
      </div>
    </div>
  );
};

export default Navbar;
