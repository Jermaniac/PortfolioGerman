import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import moodWebAppGif from '../../assets/moodWebApp.gif'

function Projects() {
    return (
        <>
          <Typography
            variant="h3"
            component="div"
            style={{textAlign:"center", padding:"24px"}}
          >
            Proyectos
          </Typography>

            <Grid container item xs={12} spacing={2} sx={{padding:"24px"}}>
                <Grid item xs={12} md={6} sx={{textAlign:"center"}}>
                    <Typography
                    variant="h6"
                    component="div"
                    style={{textAlign:"center"}}>
                        Reconocimiento de expresiones faciales
                    </Typography>
                    <img style={{maxWidth:"100%"}} src={moodWebAppGif} alt="mood_web_app_gif" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography
                    variant="body1"
                    component="div"
                    style={{textAlign:"center"}}>
                        Se trata de una aplicación que reconoce siete expresiones faciales (enfadado, disgustado, asustado, feliz, triste,
                        sorprendido, neutral) a partir de la fotografía de un rostro utilizando una red neuronal convolucional o CNN.&nbsp;
                        <Link href="https://expression-test.vercel.app/">Link proyecto</Link>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
  }

  export default Projects;