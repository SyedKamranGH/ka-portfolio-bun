import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import { Homepage } from "./pages/Homepage";
// import { ExperienceDetail } from "./pages/ExperienceDetail";
import { ThemeProvider as CustomThemeProvider } from "./context/ThemeContext";
import "./assets/scss/app.scss";
import ExperienceDetail from "./pages/ExperienceDelail/index";

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="experience/:id" element={<ExperienceDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
};

export default App;
