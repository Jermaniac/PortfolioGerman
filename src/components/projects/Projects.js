import React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import moodWebAppGif from "../../assets/gifs/moodWebApp.gif";
import moodMobileAppGif from "../../assets/gifs/moodMobileApp.gif";
import pricingCryptoAppGif from "../../assets/gifs/pricingCryptoApp.gif";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Projects = () => {
  return (
    <Box
      className="projects_container"
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        bgcolor: 'background.lighter',
        padding: { xs: "24px", md: "48px" }
      }}
    >
      <Grid container spacing={4} style={{ maxWidth: "1200px"}}>
        <Grid item xs={12}>
          <Typography variant="h3" component="div">
            Proyectos
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} style={{ display: "flex" }}>
          <Card style={{ display: "grid" }}>
            <CardMedia
              component="img"
              image={moodWebAppGif}
              alt="mood_web_app_gif"
              sx={{ maxHeight: { md: "286px" } }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" color="text.terciary">
                Reconocimiento de expresiones faciales en web
              </Typography>
              <Typography variant="body1" color="text.terciary" >
                Se trata de una web que reconoce siete expresiones faciales
                (enfadado, disgustado, asustado, feliz, triste, sorprendido,
                neutral) a partir de la fotografía de un rostro utilizando una
                red neuronal convolucional o CNN.
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                size="small"
                href="https://expression-test.vercel.app/"
                variant="contained"
                color="primary"
              >
                VER PROYECTO
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} style={{ display: "flex" }}>
          <Card style={{ display: "grid" }}>
            <CardMedia
              component="img"
              image={moodMobileAppGif}
              alt="mood_android_app_gif"
              sx={{ maxHeight: { md: "286px" } }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" color="text.terciary">
                Mood App
              </Typography>
              <Typography variant="body1" color="text.terciary">
                Se trata de una aplicación móvil que reconoce siete expresiones
                faciales (enfadado, disgustado, asustado, feliz, triste,
                sorprendido, neutral) a partir de la fotografía de un rostro que
                puedes escoger de la galería o bien tomarte una foto desde la
                cámara del dispositivo utilizando una red neuronal convolucional
                o CNN.
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                size="small"
                href="https://github.com/gggarzon/TrabajoFinGradoGerman/tree/master/MoodApp"
                variant="contained"
                color="primary"
              >
                VER PROYECTO
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} style={{ display: "flex" }}>
          <Card style={{ display: "grid" }}>
            <CardMedia
              component="img"
              image={pricingCryptoAppGif}
              alt="crypto_pricing_app_gif"
              sx={{ maxHeight: { md: "286px" } }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" color="text.terciary">
                Crypto Pricing App
              </Typography>
              <Typography variant="body1" color="text.terciary">
                Se trata de una app muy simple que muestra los precios en tiempo
                real de 10 criptomonedas. Los datos usados pertenecen a la api
                de Messari.
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                size="small"
                href="https://test-ms.vercel.app/"
                variant="contained"
                color="primary"
              >
                VER PROYECTO
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
