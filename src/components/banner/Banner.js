import germanSelfiePng from "../../assets/images/german-selfie-png.png";
import pdfGerman from "../../assets/documents/CVGERMAN2022.pdf";
import "./Banner.css";
import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <div
      className="banner_container"
      style={{
        textAlign: "center",
        marginTop: "48px",
      }}
    >
      <picture className="banner_picture">
        <img className="banner_img" src={germanSelfiePng} alt="german-selfie" />
      </picture>
      <div className="banner_name_wrapper">
        <div>Hola!</div>
        <div>Mi nombre es</div>
        <div className="banner_name">Germán González</div>
      </div>
      <div className="banner_role_wrapper">
        <ul className="banner_role_dynamic_text">
          <li>
            <span>Software Engineer</span>
          </li>
          <li>
            <span>Web Developer</span>
          </li>
          <li>
            <span>Big Data Developer</span>
          </li>
        </ul>
      </div>
      <Button
        className="banner_cv"
        href={pdfGerman}
        download="CV_GERMAN_GONZALEZ_GARZON"
        variant="contained"
        color="primary"
      >
        Descargar CV
      </Button>
    </div>
  );
};

export default Banner;
