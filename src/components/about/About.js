import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import laptopWithBackground from "../../assets/images/laptop_with_background.jpg";

//TODO: fix background
const About = () => {
  return (
    <Box
      className="about_container"
      style={{
        textAlign: "center",
        margin: "96px auto",
        display: "flex",
        justifyContent: "center",
      }}
      sx={{ padding: { xs: "24px", md: "48px" } }}
    >
      <Grid container style={{ maxWidth: "1200px" }}>
        <Grid item xs={12} lg={6}>
          <Box
            component="img"
            sx={{
              width: "auto",
              maxWidth: { xs: "100%", sm: "400px", lg: "550px" },
              maxHeight: { xs: "100%", sm: "300px" },
              borderRadius: "50px",
            }}
            alt="laptop_with_background"
            src={laptopWithBackground}
          />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ paddingRight: { lg: "56px" } }}>
          <Typography variant="h3" component="div">
            ¿Quién soy?
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            Graduado en Ingeniería del Software por la Universidad Politécnica
            de Madrid. Aunque he trabajado en proyectos Big Data con tecnologías
            como Spark y Scala. Actualmente me dedico al desarrollo web con
            JavaScript tanto en la parte frontend (React/Angular) como en la
            parte backend (NodeJS).
          </Typography>
          <br />
          <Typography variant="h6" component="div">
            ¡Siempre dispuesto a aceptar nuevos retos y absorber todo el
            conocimiento que pueda!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
