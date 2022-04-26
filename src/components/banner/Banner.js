import germanSelfie from "../../assets/german-selfie.jpeg"
import pdfGerman from "../../assets/CVGERMAN2022.pdf"
import "./Banner.css"
import Button from '@mui/material/Button';

function Banner() {
    return (
        <div className="banner_container">
            <picture className="banner_picture">
                <img className="banner_img" src={germanSelfie} alt="german-selfie" />
            </picture>
            <h2 className="banner_name">GERMÁN GONZÁLEZ GARZÓN</h2>
            <h3 className="banner_position">Software Developer</h3>
            <Button className="banner_cv" href={pdfGerman} download="CV_GERMAN_GONZALEZ_GARZON" variant="contained">Descargar CV</Button>
        </div>
    );
  }

  export default Banner;