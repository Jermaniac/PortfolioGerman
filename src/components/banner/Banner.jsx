import germanSelfieWebp from "/images/german-selfie-webp.webp";
import computerAndCoffeWebp from "/images/computer_code_and_coffe.webp";
import pdfGerman from "/documents/CV_GERMAN_GONZALEZ_GARZON.pdf";
import "./Banner.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import HeaderIconsOnly from "../header/HeaderIconsOnly";

const Banner = () => {

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: -1
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${computerAndCoffeWebp})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
            zIndex: -2
          }}
        />

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
            <h1 className="banner__name--item-fullname" style={{ fontSize: "3rem" }}>Germán González</h1>
          </div>
          <div className="banner__role">
            <div className="banner__role-container">
              <h4>Software Engineer</h4>
            </div>
            <div className="short-right-border"/>
          </div>
          <Button
            className="banner__cv"
            href={pdfGerman}
            download="CV_GERMAN_GONZALEZ_GARZON"
            variant="contained"
            color="primary"
            sx={{
              margin: 6,
              fontSize: "1rem",
              padding: 2,
              background: "linear-gradient(90deg, #1976d2, #42a5f5)",
              color: "white",
              borderRadius: "8px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s, box-shadow 0.3s",
              '&:hover': {
                transform: "scale(1.1)",
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
                background: "linear-gradient(90deg, #42a5f5, #1976d2)",
              },
            }}
          >
            Download CV
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
