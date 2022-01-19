import germanSelfie from "../../assets/german-selfie.jpeg"
import "./Banner.css"

function Banner() {
    return (
        <div className="banner_container">
            <picture className="banner_picture">
                <img className="banner_img" src={germanSelfie} alt="german-selfie"/>
            </picture>
            <h2 className="banner_name">GERMÁN GONZÁLEZ GARZÓN</h2>
            <h3 className="banner_position">Web Developer</h3>
        </div>
    );
  }

  export default Banner;