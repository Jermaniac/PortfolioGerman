import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import moodWebDemoVideo from "assets/videos/mood-web-demo.mp4";
// import moodMobileDemoVideo from "assets/gifs/moodMobileApp.gif";
import pricingCryptoDemoVideo from "assets/videos/pricing-crypto-demo.mp4";
import urlShortenerDemoVideo from "assets/videos/url-shortener-demo.mp4";

import astroLogo from "assets/svg/astro.svg";
import tailwindLogo from "assets/svg/tailwind.svg";
import nodeJsLogo from "assets/svg/nodejs.svg";
import pythonLogo from "assets/svg/python.svg";
import reactLogo from "assets/svg/react.svg";
import javaLogo from "assets/svg/java.svg";
import androidLogo from "assets/svg/android.svg";

import { useRef } from "react";
import { CardActionArea } from "@mui/material";

const Projects = () => {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        textAlign: "center",
        padding: { xs: "30px", md: "48px" },
      }}
    >
      <h1>Projects</h1>
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: { xs: "500px", lg: "900px" },
        }}
      >
        <Grid item xs={12} lg={6}>
          <Card
            sx={{
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <CardActionArea href="https://expression-test.vercel.app/">
              <CardMedia
                component="video"
                loop
                muted
                alt="url-shortener-app"
                src={moodWebDemoVideo}
                ref={(el) => (videoRefs.current[0] = el)}
              />
              <CardContent sx={{ px: "60px" }}>
                <h2>Facial recognition web</h2>
                <p>
                  This is a web that recognizes seven facial expressions (angry,
                  disgusted, scared, happy, sad, surprised, neutral) from a face
                  photo using a convolutional neural network trained by me.
                </p>
                <Divider />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "16px",
                  }}
                >
                  <img
                    src={pythonLogo}
                    alt="Python Logo"
                    width={25}
                    height={25}
                    style={{ marginRight: "10px" }}
                  />
                  <img
                    src={reactLogo}
                    alt="React Logo"
                    width={25}
                    height={25}
                    style={{ marginRight: "10px" }}
                  />
                  <img
                    src={tailwindLogo}
                    alt="Tailwind Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card
            sx={{
              height: "100%",
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <CardActionArea
              href="https://url-shortener-frontend-xi.vercel.app/"
              sx={{ height: "100%" }}
            >
              <CardMedia
                component="video"
                loop
                muted
                src={urlShortenerDemoVideo}
                alt="url-shortener-app"
                ref={(el) => (videoRefs.current[1] = el)}
              />
              <CardContent sx={{ px: "60px" }}>
                <h2>Url Shortener</h2>
                <p>
                  Introducing the renowned URL shortener project! Simply paste
                  your long URL and receive a concise, shareable link to share
                  with friends. The definitive software project!
                </p>
                <Divider />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "16px",
                  }}
                >
                  <img
                    src={nodeJsLogo}
                    alt="NodeJs Logo"
                    width={25}
                    height={25}
                    style={{ marginRight: "10px" }}
                  />
                  <img
                    src={astroLogo}
                    alt="Astro Logo"
                    width={25}
                    height={25}
                    style={{ marginRight: "10px" }}
                  />
                  <img
                    src={tailwindLogo}
                    alt="Tailwind Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card
            sx={{
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <CardActionArea href="https://expression-test.vercel.app/">
              <CardMedia
                component="video"
                loop
                muted
                src={moodWebDemoVideo}
                alt="url-shortener-app"
                ref={(el) => (videoRefs.current[2] = el)}
              />
              <CardContent sx={{ px: "60px" }}>
                <h2>Mood App</h2>
                <p>
                  This is a mobile application that recognizes seven facial
                  expressions from a face photograph. You can either choose an
                  image from the gallery or take a photo using the device&apos;s
                  camera.
                </p>
                <Divider />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "16px",
                  }}
                >
                  <img
                    src={javaLogo}
                    alt="Java Logo"
                    width={25}
                    height={25}
                    style={{ marginRight: "6px" }}
                  />
                  <img
                    src={androidLogo}
                    alt="Android Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card
            sx={{
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
            <CardActionArea
              href="https://test-ms.vercel.app/"
              sx={{ height: "100%" }}
            >
              <CardMedia
                component="video"
                loop
                muted
                src={pricingCryptoDemoVideo}
                alt="url-shortener-app"
                ref={(el) => (videoRefs.current[3] = el)}
              />
              <CardContent sx={{ px: "60px" }}>
                <h2>Crypto Pricing web</h2>
                <p>
                  It&apos;s a very simple web that displays real-time prices for
                  10 cryptocurrencies. Shows bid price and ask price. The data
                  used belongs to the Messari API.
                </p>
                <Divider />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "16px",
                  }}
                >
                  <img
                    src={reactLogo}
                    alt="React Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
