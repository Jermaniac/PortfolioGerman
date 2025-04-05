import React, { useRef } from "react";
import { Card, CardContent, CardMedia, CardActions, Button, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

const ProjectCard = ({ project }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <Card
            sx={{
                transition: "transform 0.3s",
                "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                },
                cursor: "pointer",
            }}
            onClick={() => window.open(project.demoLink, "_blank")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CardMedia
                component="video"
                loop
                muted
                src={project.videoSrc}
                alt={project.alt}
                ref={videoRef}
            />
            <CardContent sx={{ px: "36px" }}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "6px",
                    }}
                >
                    {project.codeLink && (
                        <Button
                            color="secondary"
                            variant="outlined"
                            size="small"
                            startIcon={<GitHubIcon />}
                            href={project.codeLink}
                            target="_blank"
                        >
                            Code
                        </Button>
                    )}
                    {project.demoLink && (
                        <Button
                            color="primary"
                            variant="outlined"
                            size="small"
                            startIcon={<PublicIcon />}
                            href={project.demoLink}
                            target="_blank"
                        >
                            Demo
                        </Button>
                    )}
                </CardActions>
                <Divider />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "16px",
                    }}
                >
                    {project.techStack.map((tech, index) => (
                        <img
                            key={index}
                            src={tech.logo}
                            alt={`${tech.name} Logo`}
                            width={25}
                            height={25}
                            style={{ marginRight: "10px" }}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
