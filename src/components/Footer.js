import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import { Link } from "react-router-dom";

import "../styles/components/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon />{" "}     {/*Social media icons for the footer*/}
      </div>
      <p>
        {" "}
        &copy; 2021 - Group 1 - 13 <br /> Find out more about us{" "}
        <Link to={"/about"}> here </Link>
      </p>
    </div>
  );
}

export default Footer;
