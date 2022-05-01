import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import moodWebAppGif from "../../assets/gifs/moodWebApp.gif";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Projects() {
  return (
    <Box
      className="projects_container"
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
      sx={{ padding: { xs: "24px", md: "48px" } }}
    >
      <Grid container spacing={4} style={{ maxWidth: "1200px" }}>
        <Grid item xs={12}>
          <Typography variant="h4" component="div">
            Proyectos
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} style={{ display: "flex" }}>
          <Card style={{ display: "grid" }}>
            <CardMedia
              component="img"
              image={moodWebAppGif}
              alt="mood_web_app_gif"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Reconocimiento de expresiones faciales en web
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Se trata de una web que reconoce siete expresiones faciales
                (enfadado, disgustado, asustado, feliz, triste, sorprendido,
                neutral) a partir de la fotografía de un rostro utilizando una
                red neuronal convolucional o CNN.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://expression-test.vercel.app/">
                VER PROYECTO
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} style={{ display: "flex" }}>
          <Card style={{ display: "grid" }}>
            <CardMedia
              component="img"
              image={moodWebAppGif}
              alt="mood_android_app_gif"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Mood App
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Se trata de una aplicación móvil que reconoce siete expresiones
                faciales (enfadado, disgustado, asustado, feliz, triste,
                sorprendido, neutral) a partir de la fotografía de un rostro que
                puedes escoger de la galería o bien tomarte una foto desde la
                cámara del dispositivo utilizando una red neuronal convolucional
                o CNN.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/gggarzon/TrabajoFinGradoGerman/tree/master/MoodApp"
              >
                VER PROYECTO
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
