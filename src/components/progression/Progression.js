import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";

import dataExperience from "data/experience.json";

//TODO: animation collapse
const Progression = () => {
  return (
    <Box
      className="progression_container"
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        style={{ maxWidth: "1200px", margin: " 60px auto 120px auto" }}
      >
        <Grid item xs={12}>
          <h1>Experience</h1>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Collapse in={true} orientation="vertical">
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
                px: "42px",
              }}
            >
              {dataExperience
                ? dataExperience.map((experienceItem) => (
                    <TimelineItem key={experienceItem.id}>
                      <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                          {experienceItem.education ? (
                            <SchoolIcon color="primary" />
                          ) : (
                            <BusinessCenterIcon color="primary" />
                          )}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography
                          variant="h5"
                          component="span"
                          color="text.terciary"
                        >
                          {experienceItem.entity}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          {experienceItem.title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="span"
                          color="text.terciary"
                        >
                          {experienceItem.periodFrom} -{" "}
                          {experienceItem.periodTo}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))
                : null}
            </Timeline>
          </Collapse>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Progression;
