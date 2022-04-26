import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import moodWebAppGif from "../../assets/moodWebApp.gif";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

function Projects() {
  return (
    <>
      <Typography
        variant="h3"
        component="div"
        style={{ textAlign: "center", padding: "24px" }}
      >
        Proyectos
      </Typography>

      <Grid container spacing={4} style={{ padding: "24px" }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image={moodWebAppGif}
              alt="mood web app gif"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Reconocimiento de expresiones faciales en web
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image={moodWebAppGif}
              alt="mood web app gif"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mood App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Se trata de una aplicación móvil que reconoce siete expresiones
                faciales (enfadado, disgustado, asustado, feliz, triste,
                sorprendido, neutral) a partir de la fotografía de un rostro que
                puedes escoger de la galería o bien tomarte una foto desde la
                cámara del dispositivo utilizando una red neuronal convolucional
                o CNN.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/gggarzon/TrabajoFinGradoGerman/tree/master/MoodApp">
                VER PROYECTO
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Projects;
