import { useContext, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Switch from "@mui/material/Switch";

import MailIcon from "@mui/icons-material/Mail";
import MoreIcon from "@mui/icons-material/MoreVert";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { ThemeContext } from "contexts/ThemeContext";

const hoverButtonStyles = {
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
};

const CONTACT_MAIL = "german.gonzalezggarzon@gmail.com";

const Header = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const { colorMode } = useContext(ThemeContext);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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

  const switcherThemeButton = (
    <Switch
      sx={hoverButtonStyles}
      onClick={() => {
        colorMode.toggleColorMode();
      }}
      icon={<DarkModeIcon />}
      checkedIcon={<LightModeIcon />}
    />
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={mobileMenuId}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>{mailIconButton}</MenuItem>
      <MenuItem>{linkedinIconButton}</MenuItem>
      <MenuItem>{githubIconButton}</MenuItem>
    </Menu>
  );

  return (
    <Box className="header_container" sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Germán González Garzón
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {mailIconButton}
            {linkedinIconButton}
            {githubIconButton}
          </Box>
          <Box sx={{ display: { xs: "flex" } }}>{switcherThemeButton}</Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="terciary"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};

export default Header;
