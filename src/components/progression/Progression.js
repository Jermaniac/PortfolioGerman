import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";

import Grid from "@mui/material/Grid";

//TODO: animation collapse
const Progression = () => {
  return (
    <Box
      className="progression_container"
      style={{
        textAlign: "center",
        width: "100%",
        margin: "96px auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container style={{ maxWidth: "1200px" }}>
        <Grid item xs={12}>
          <Typography variant="h4" component="div">
            Trayectoria
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Collapse in={true} orientation="vertical">
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  MAYO 2022 - ACTUALIDAD
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary" variant="outlined">
                    <BusinessCenterIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Scalian
                  </Typography>
                  <Typography>Big Data Developer</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="text.secondary"
                >
                  ENERO 2022 - MAYO 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <BusinessCenterIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Indra
                  </Typography>
                  <Typography>Backend Developer</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="text.secondary"
                >
                  FEBRERO 2021 - DICIEMBRE 2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary" variant="outlined">
                    <BusinessCenterIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "primary" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Capgemini
                  </Typography>
                  <Typography>Frontend Developer</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="text.secondary"
                >
                  OCTUBRE 2020 - FEBRERO 2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "primary" }} />
                  <TimelineDot color="primary">
                    <BusinessCenterIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Sermicro
                  </Typography>
                  <Typography>Técnico de sistemas</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="text.secondary"
                >
                  DICIEMBRE 2019 - MARZO 2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "primary" }} />
                  <TimelineDot color="primary" variant="outlined">
                    <BusinessCenterIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Babel
                  </Typography>
                  <Typography>Backend Developer / Intern</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="text.secondary"
                >
                  SEPTIEMBRE 2016 - JULIO 2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "primary" }} />
                  <TimelineDot color="primary">
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    U.P.M
                  </Typography>
                  <Typography>Estudiante</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Collapse>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Progression;
