import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import laptopWithBackground from "../../assets/images/laptop_with_background.jpg";

function About() {
  return (
    <Box
      className="about_container"
      style={{ textAlign: "center", padding: "24px", marginTop: "100px" }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <div className="about_img_container" style={{ position: "relative" }}>
            <div
              className="about_img_background"
              style={{
                position: "absolute",
                backgroundColor: "#2666CF",
                borderRadius: "50px",
              }}
            ></div>
            <Box
              component="img"
              sx={{
                maxWidth: { xs: "100%" },
                maxHeight: { xs: "100%" },
                borderRadius: "50px",
                position: "relative",
              }}
              alt="laptop_with_background"
              src={laptopWithBackground}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="div">
            ¿Quién soy?
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            Graduado en Ingeniería del Software por la Universidad Politécnica
            de Madrid. Tengo experiencia como desarrollador web tanto en la
            parte frontend con JavaScript (React/Angular) como en la parte
            backend con Java (SpringBoot). Actualmente me dedico al desarrollo
            Software orientado al Big Data.
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
}

export default About;
