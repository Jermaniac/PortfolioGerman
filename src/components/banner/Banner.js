import { useContext } from "react";
import germanSelfieWebp from "assets/images/german-selfie-webp.webp";
import pdfGerman from "assets/documents/CVGERMAN2022.pdf";
import "./Banner.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { ThemeContext } from "contexts/ThemeContext";

const HEXA_BLACK_COLOR = "#121212";
const HEXA_WHITE_COLOR = "#ffffff";

const getColorValues = (mode) => {
  const colorSchemes = {
    light: [HEXA_WHITE_COLOR, HEXA_BLACK_COLOR],
    dark: [HEXA_BLACK_COLOR, HEXA_WHITE_COLOR],
  };

  const [themeHarmonyColor, themeContrastColor] = colorSchemes[mode];
  return { themeHarmonyColor, themeContrastColor };
};

const Banner = () => {
  const { mode } = useContext(ThemeContext);
  const { themeHarmonyColor, themeContrastColor } = getColorValues(mode);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box className="banner">
          <picture className="banner__picture">
            <img
              className="banner__picture banner__picture--img"
              src={germanSelfieWebp}
              alt="german-selfie"
            />
          </picture>
          <div className="banner__name">
            <h4 className="banner__name--item">¡Hello!</h4>
            <h4 className="banner__name--item">My name is</h4>
            <h4 className="banner__name--item-fullname">Germán</h4>
          </div>
          <div className="banner__role">
            <ul
              className="banner__role--dynamic_text"
              style={{
                "--bgColor": themeHarmonyColor,
                "--borderColor": themeContrastColor,
              }}
            >
              <li className="banner__role--dynamic_text--item">
                <h4>Web Developer</h4>
              </li>
              <li className="banner__role--dynamic_text--item">
                <h4>Software Engineer</h4>
              </li>
              <li className="banner__role--dynamic_text--item">
                <h4>Big Data Developer</h4>
              </li>
            </ul>
          </div>
          <Button
            className="banner__cv"
            href={pdfGerman}
            download="CV_GERMAN_GONZALEZ_GARZON"
            variant="contained"
            color="primary"
            sx={{ margin: 6 }}
          >
            Download CV
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
