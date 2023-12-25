import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";

const Footer = () => {
  return (
    <Box
      className="footer_container"
      style={{
        textAlign: "center",
      }}
    >
      <AppBar position="relative" color="primary" style={{ height: "24px" }}>
        Jermaniac
      </AppBar>
    </Box>
  );
};

export default Footer;
