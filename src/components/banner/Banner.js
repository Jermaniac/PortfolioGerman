import React from "react";
import germanSelfiePng from "../../assets/images/german-selfie-png.png";
import pdfGerman from "../../assets/documents/CVGERMAN2022.pdf";
import "./Banner.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Banner = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          bgcolor: "background.lighter",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box className="banner_container">
          <picture className="banner_picture">
            <img
              className="banner_img"
              src={germanSelfiePng}
              alt="german-selfie"
            />
          </picture>
          <div className="banner_name_wrapper">
            <Typography variant="h3" color="text.primary">
              ¡Hola!
            </Typography>
            <Typography variant="h3" color="text.secondary">
              Mi nombre es
            </Typography>
            <Typography variant="h3" color="text.secondary">
              Germán González
            </Typography>
          </div>
          <div className="banner_role_wrapper">
            <ul className="banner_role_dynamic_text">
              <li>
                <Typography variant="h4" component="span" color="text.terciary">
                  Software Engineer
                </Typography>
              </li>
              <li>
                <Typography variant="h4" component="span" color="text.terciary">
                  Web Developer
                </Typography>
              </li>
              <li>
                <Typography variant="h4" component="span" color="text.terciary">
                  Big Data Developer
                </Typography>
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
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Banner;
