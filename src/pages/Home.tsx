import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  component={motion.h1}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    background: (theme) =>
                      theme.palette.mode === "dark"
                        ? "linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)"
                        : "linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Hi, I'm Your Name
                </Typography>
                <Typography
                  component={motion.p}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  variant="h4"
                  color="text.secondary"
                  sx={{ mb: 4 }}
                >
                  Full Stack Developer
                </Typography>
                <Typography
                  component={motion.p}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4, maxWidth: 600 }}
                >
                  I create beautiful and functional web applications using
                  modern technologies. Passionate about crafting exceptional
                  user experiences and solving complex problems.
                </Typography>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    component={RouterLink}
                    to="/projects"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mr: 2 }}
                  >
                    View My Work
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="outlined"
                    size="large"
                  >
                    Contact Me
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              component={motion.div}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background: (theme) =>
                      theme.palette.mode === "dark"
                        ? "linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)"
                        : "linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)",
                    borderRadius: "50%",
                    filter: "blur(100px)",
                    opacity: 0.3,
                    zIndex: -1,
                  },
                }}
              >
                {/* Add your hero image or illustration here */}
                <Box
                  component="img"
                  src="/path-to-your-image.png"
                  alt="Hero illustration"
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxWidth: 600,
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        sx={{ py: 8 }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
            Featured Projects
          </Typography>
          <Grid container spacing={4}>
            {/* Add your featured projects here */}
            {[1, 2, 3].map((item) => (
              <Grid key={item} item xs={12} md={4}>
                <Box
                  component={motion.div}
                  whileHover={{ y: -10 }}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: "background.paper",
                    boxShadow: (theme) =>
                      theme.palette.mode === "dark"
                        ? "0 4px 20px rgba(0,0,0,0.5)"
                        : "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    Project {item}
                  </Typography>
                  <Typography color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
