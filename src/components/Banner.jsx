import skull from "../assets/skull.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__content">
        {/* <h1> "Fly with creativity's wings of imagination"</h1> */}
        <h3 className="greet"> Welcome to my page </h3>
        <h3> I'm </h3>
        <h1> Phat Nguyen Tan</h1>
        <p className="position"> React Web Developer </p>
        <p className="place"> From Ho Chi Minh City, Viet Nam </p>
        <div className="icon">
          <div className="icon__facebook icon__elements">
            <Link to="https://www.youtube.com">
              <FaFacebook />
            </Link>
          </div>
          <div className="icon__github icon__elements">
            <Link to="https://www.youtube.com">
              <FaGithub />
            </Link>
          </div>
          <div className="icon__linkedIn icon__elements">
            <Link to="https://www.youtube.com">
              <FaLinkedinIn />
            </Link>
          </div>
          <div className="icon__youtube icon__elements">
            <Link to="https://www.youtube.com">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className="banner__image">
        <Link to="/about">
          <img src={skull} alt="Here is for warrior" />
        </Link>
      </div>
    </section>
  );
}
