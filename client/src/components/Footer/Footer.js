import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="footerContainer">
      <footer className="my-footer">
        <div className="my-container">
          <div className="my-row">
            <div className="footer-col">
              <h4>website</h4>
              <ul>
                <li>
                  <Link to={"library"} className="link-button">
                    library
                  </Link>
                </li>
                <li>
                  <Link to={"recommended"} className="link-button">
                    recommended
                  </Link>
                </li>
                <li>
                  <Link to={"search"} className="link-button">
                    search
                  </Link>
                </li>
                <li>
                  <Link to={"profile"} className="link-button">
                    profile
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>library</h4>
              <ul>
                <li>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={"https://reactjs.org/"}
                    className="link-button"
                  >
                    react
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={"https://nodejs.org/en/"}
                    className="link-button"
                  >
                    nodejs
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={
                      "https://github.com/thelinmichael/spotify-web-api-node"
                    }
                    className="link-button"
                  >
                    spotify-web-api-node
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Sponsor</h4>
              <ul>
                <li>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={
                      "https://developer.spotify.com/documentation/web-api/"
                    }
                    className="link-button"
                  >
                    Spotify API
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={"https://www.youtube.com/c/WebDevSimplified"}
                    className="link-button"
                  >
                    Webdev Simplified
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={"https://www.facebook.com/ryderdinh47"}
                    className="link-button"
                  >
                    Anh Quang Anh
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={"https://www.facebook.com/nguyencuong21520"}
                    className="link-button"
                  >
                    Anh Cuong
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow me</h4>
              <div className="social-links">
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  href={"https://github.com/duc-minh-droid"}
                >
                  <AiFillGithub className="link-button" />
                </a>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  href={
                    "https://www.facebook.com/people/Duc-Minh-Ng/100078227723246/"
                  }
                >
                  <FaFacebook className="link-button" />
                </a>
                {/* bug  */}
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  href={"https://www.linkedin.com/in/duc-minh30122005/"}
                >
                  <div className="link-button">
                    <FaLinkedinIn size={30} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
