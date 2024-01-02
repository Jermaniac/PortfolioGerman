import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import moodWebAppGif from "assets/gifs/moodWebApp.gif";
import moodMobileAppGif from "assets/gifs/moodMobileApp.gif";
import pricingCryptoAppGif from "assets/gifs/pricingCryptoApp.gif";

const Projects = () => {
  return (
    <Box
      className="projects"
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        padding: { xs: "30px", md: "48px" },
      }}
    >
      <Grid container spacing={4} style={{ maxWidth: "1200px" }}>
        <Grid item xs={12}>
          <h1>Projects</h1>
        </Grid>
        <Grid item xs={12} md={6} style={{ display: "flex" }}>
          <Card style={{ display: "grid" }}>
            <CardMedia
              component="img"
              image={moodWebAppGif}
              alt="mood_web_app_gif"
              sx={{ maxHeight: { md: "286px" } }}
            />
            <CardContent sx={{ padding: "24px" }}>
              <h2>Facial expression recognition web</h2>
              <p>
                This project is about a website that recognizes seven facial
                expressions (angry, disgusted, scared, happy, sad, surprised,
                neutral) from a face photograph using a convolutional neural
                network trained by me.
              </p>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                size="small"
                href="https://expression-test.vercel.app/"
                variant="contained"
                color="primary"
              >
                CHECK PROJECT
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
            <CardContent sx={{ padding: "24px" }}>
              <h2>Mood App</h2>
              <p>
                This is a mobile application that recognizes seven facial
                expressions (angry, disgusted, scared, happy, sad, surprised,
                neutral) from a face photograph. You can either choose an image
                from the gallery or take a photo using the device&apos;s camera.
                This recognition is done using a convolutional neural network
                trained by me.
              </p>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                size="small"
                href="https://github.com/gggarzon/TrabajoFinGradoGerman/tree/master/MoodApp"
                variant="contained"
                color="primary"
              >
                CHECK PROJECT
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
            <CardContent sx={{ padding: "24px" }}>
              <h2>Crypto Pricing web</h2>
              <p>
                It&apos;s a very simple web that displays real-time prices for
                10 cryptocurrencies. The data used belongs to the Messari API.
              </p>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                size="small"
                href="https://test-ms.vercel.app/"
                variant="contained"
                color="primary"
              >
                CHECK PROJECT
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
