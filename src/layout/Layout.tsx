import { Box, Container, useTheme as useMuiTheme } from "@mui/material";
import { ReactNode } from "react";
import Navbar from "./Navbar/index";
import Footer from "./Footer/index";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const theme = useMuiTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Navbar />
      <Container
        component={motion.main}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        maxWidth="lg"
        sx={{
          flex: 1,
          py: { xs: 4, md: 8 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
