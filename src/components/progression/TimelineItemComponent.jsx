import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";

const TimelineItemComponent = ({ experienceItem }) => {
    return (
        <TimelineItem>
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
                <Typography variant="h5" component="span" color="text.terciary">
                    {experienceItem.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {experienceItem.entity}
                </Typography>
                <Typography variant="subtitle1" component="span" color="text.terciary">
                    {experienceItem.periodFrom} - {experienceItem.periodTo}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
};

export default TimelineItemComponent;
