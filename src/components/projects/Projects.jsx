import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projectsData";

const Projects = () => {
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
                {projectsData.map((project, index) => (
                    <Grid item xs={12} lg={6} key={index}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;
