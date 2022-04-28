import germanSelfie from "../../assets/german-selfie.jpeg";
import pdfGerman from "../../assets/CVGERMAN2022.pdf";
import "./Banner.css";
import Button from "@mui/material/Button";

function Banner() {
  return (
    <>
      <div className="banner_container">
        <picture className="banner_picture">
          <img className="banner_img" src={germanSelfie} alt="german-selfie" />
        </picture>
        <div className="banner_name">GERMÁN GONZÁLEZ GARZÓN</div>
        <div class="banner_role_wrapper">
          <div class="static_text"> I'm</div>
          <ul class="dynamic_text">
            <li>
              <span>Germán González</span>
            </li>
            <li>
              <span>a Software Developer</span>
            </li>
            <li>
              <span>a Data Engineer</span>
            </li>
          </ul>
        </div>
        <Button
          className="banner_cv"
          href={pdfGerman}
          download="CV_GERMAN_GONZALEZ_GARZON"
          variant="contained"
          style={{ backgroundColor: "#2666CF", fontFamily: "Rubik" }}
        >
          Descargar CV
        </Button>
      </div>
    </>
  );
}

export default Banner;
