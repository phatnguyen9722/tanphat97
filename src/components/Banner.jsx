import skull from "../assets/skull.png";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__content">
        <h1> "Fly with creativity's wings of imagination"</h1>
        <h3> Welcome to my page! </h3>
        <p> I'm Phat, a Web Developer</p>
      </div>
      <div className="banner__image">
        <Link to="/about">
          <img src={skull} alt="Here is for warrior" />
        </Link>
      </div>
    </section>
  );
}
