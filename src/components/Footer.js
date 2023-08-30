import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
      </div>
      <p>
        {" "}
        &copy; 2021 - Group 1 - 13 <br /> Find out more about us
      </p>
    </div>
  );
}

export default Footer;
