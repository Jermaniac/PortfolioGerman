import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";

import dataExperience from "@/data/experience.json";
import TimelineItemComponent from "./TimelineItemComponent";

const Progression = () => {
    return (
        <Box
            className="progression_container"
            sx={{
                textAlign: "center",
                display: "grid",
                justifyContent: "center",
            }}
        >
            <h1>Experience</h1>
            <Grid
                container
                style={{ maxWidth: "1200px", margin: "0px auto 120px auto" }}
            >
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
                            {dataExperience &&
                                dataExperience.map((experienceItem) => (
                                    <TimelineItemComponent
                                        key={experienceItem.id}
                                        experienceItem={experienceItem}
                                    />
                                ))}
                        </Timeline>
                    </Collapse>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Progression;
