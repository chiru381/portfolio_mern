import { Route, Routes } from "react-router-dom";
import colorTokens from "./tokens/color/color-tokens.json";

import Homepage from "./pages/homepage/Homepage";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import classes from "./App.module.css";
import ProjectsPage from "./pages/projectspage/ProjectsPage";
import CertificatesPage from "./pages/certificatespage/CertificatesPage";
import SkillsPage from "./pages/skillspage/SkillsPage";
import { ThemeProvider, useTheme } from "stelios";
import VariantProvider from "./components/VariantProvider/VariantProvider";
import ExperiencePage from "./pages/experiencepage/ExperiencePage";
import EducationPage from "./pages/educationpage/EducationPage";
import ProjectDetails from "./components/projectset/ProjectDetails";

const AppContent = () => {
  const theme = useTheme()?.theme;
  const colorPalette = theme?.colorPalette || {};
  const appearance = colorPalette.primary?.appearance || "light";

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: appearance === "light" ? "white" : "#202124",
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/project/:id"
          element={<ProjectDetails type="projects" />}
        />
        <Route path="/projects/" element={<ProjectsPage />} />
        <Route path="/certificates/" element={<CertificatesPage />} />
        <Route path="/skills/" element={<SkillsPage />} />
        <Route path="/experience/" element={<ExperiencePage />} />
        <Route path="/education/" element={<EducationPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <div className={classes.app}>
      <VariantProvider>
        <ThemeProvider
          accents={{
            primary: colorTokens.accent.primary,
            black: colorTokens.accent.black,
          }}
          appearance={colorTokens.appearance}
        >
          <Header />
          <AppContent />
          <Footer />
        </ThemeProvider>
      </VariantProvider>
    </div>
  );
}

export default App;
