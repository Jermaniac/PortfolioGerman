import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import laptopWithBackground from "../../assets/images/laptop_with_background.jpg";

//TODO: fix background
function About() {
  return (
    <Box
      className="about_container"
      style={{
        textAlign: "center",
        marginTop: "96px",
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
