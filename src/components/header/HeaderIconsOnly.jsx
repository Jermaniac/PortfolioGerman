import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const hoverButtonStyles = {
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
};

const CONTACT_MAIL = "german.gonzalezggarzon@gmail.com";

const HeaderIconsOnly = () => {

  const mailIconButton = (
    <IconButton
      sx={hoverButtonStyles}
      color="inherit"
      href={`mailto:${CONTACT_MAIL}`}
    >
      <MailIcon />
    </IconButton>
  );

  const linkedinIconButton = (
    <IconButton
      sx={hoverButtonStyles}
      color="inherit"
      href="https://www.linkedin.com/in/germ%C3%A1n-gonz%C3%A1lez-garz%C3%B3n-8807a2162/"
      target="_blank"
    >
      <LinkedInIcon />
    </IconButton>
  );

  const githubIconButton = (
    <IconButton
      sx={hoverButtonStyles}
      color="inherit"
      href="https://github.com/Jermaniac"
      target="_blank"
    >
      <GitHubIcon />
    </IconButton>
  );

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2}}>
      {mailIconButton}
      {linkedinIconButton}
      {githubIconButton}
    </Box>
  );
};

export default HeaderIconsOnly;