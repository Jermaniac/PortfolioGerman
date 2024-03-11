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
      <Grid container style={{ maxWidth: "1200px" }}>
        <Grid item xs={12} lg={6}>
          <Box
            component="img"
            sx={{
              width: "auto",
              maxWidth: { xs: "90%", sm: "312px", md: "500px" },
              maxHeight: { xs: "100%", sm: "312px", md: "400px" },
              borderRadius: "50px",
            }}
            alt="laptop_with_background"
            src={laptopWithBackground}
          />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ p: 2 }}>
          <h1 style={{ marginTop: 0 }}>About me</h1>
          <p>
            <strong>+2 years experienced web developer</strong> proficient in
            frontend (React/Angular) and backend (NodeJS) development.
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
