import germanSelfieWebp from "/images/german-selfie-webp.webp";
import computerAndCoffeWebp from "/images/computer_code_and_coffe.webp";
import pdfGerman from "/documents/CV_GERMAN_GONZALEZ_GARZON.pdf";
import "./Banner.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import HeaderIconsOnly from "../header/HeaderIconsOnly";

const Banner = () => {

  return (
    <Box
      sx={{
        height: "100vh",
        background: `url(${computerAndCoffeWebp}) no-repeat center center`,
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.7)",
          opacity: 0.9
        }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", verticalAlign: "middle" }}>
        <HeaderIconsOnly />
        <Box className="banner">
          <picture className="banner__picture">
            <img
              className="banner__picture banner__picture--img"
              src={germanSelfieWebp}
              alt="german-selfie"
            />
          </picture>
          <div className="banner__name">
            <h2 className="banner__name--item">¡Hello!</h2>
            <h2 className="banner__name--item">My name is</h2>
            <h1 className="banner__name--item-fullname">Germán González</h1>
          </div>
          <div className="banner__role">
            <div className="banner__role-container">
              <h4>Software Engineer</h4>
            </div>
            <div className="short-right-border" />
          </div>
          <Button
            className="banner__cv"
            href={pdfGerman}
            download="CV_GERMAN_GONZALEZ_GARZON"
            variant="contained"
            color="primary"
            sx={{
              fontSize: {
                xs: "0.7rem",
                sm: "0.8rem",
                lg: "1rem",
              }
            }}
          >
            Download CV
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
