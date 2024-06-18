import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import laptopWithBackground from "assets/images/laptop_with_background.webp";

const About = () => {
  return (
    <Box
      className="about"
      sx={{
        textAlign: "center",
        margin: "60px auto 120px auto",
        display: "flex",
        justifyContent: "center",
        padding: { xs: "24px", md: "48px" },
      }}
    >
      <Grid container sx={{ maxWidth: { xs: "500px", lg: "1000px" } }}>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            sx={{
              maxWidth: { xs: "90%", md: "475px", lg: "400px" },
              borderRadius: "50px",
            }}
            alt="laptop_with_background"
            src={laptopWithBackground}
          />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ p: { xs: 4, md: 5, lg: 0 } }}>
          <h1 style={{ marginTop: 0 }}>About me</h1>
          <p>
            <strong>+3 years experienced sofware engineer</strong> proficient in
            frontend (React/Angular) and backend (NodeJS/Java) development.
          </p>
          <p>
            Specialized in crafting excellent user experiences and scalable
            applications. Also, competent in Big Data projects with Spark and
            Scala. Excited about tech innovation, I bring creativity and
            technical proficiency to deliver high-quality solutions.
          </p>
          <p>
            <strong>
              Always ready to accept new challenges and absorb all the knowledge
              I can!
            </strong>
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
