import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccordionPage from "./components/AccordionPage";
import SwitchPage from "./components/SwitchPage";
import CustomizedSnackbars from "./components/CustomizedSnackbars";
import DashboardLayoutBasic from "./components/DashboardLayoutBasic";

const NavbarPage = lazy(() => import("./components/NavbarPage"));
const ModalPage = lazy(() => import("./components/ModalPage"));
const Loading = lazy(() => import("./components/Loading"));
const MediaCard = lazy(() => import("./components/MediaCard"));
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div><Loading /></div>}>
      
        <Routes>
          <Route path="/" element={<NavbarPage />} />
          <Route path="/projects" element={<MediaCard />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <ModalPage />
      <AccordionPage />
      <SwitchPage />
      <CustomizedSnackbars />
      <DashboardLayoutBasic />
      </Suspense>
    </Router>
  );
}

export default App;
