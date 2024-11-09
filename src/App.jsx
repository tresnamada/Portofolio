import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./pages/Navbar";
import Home from "./pages/HomePage";
import About from "./component/About";
import SkillPage from "./pages/SkillPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./component/Contact";

const pageTransition = {
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" },
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
              transition={{ duration: 0.5 }}
            >
              <SkillPage />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
              transition={{ duration: 0.5 }}
            >
              <ProjectPage />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
              transition={{ duration: 10 }}
            >
              <ContactPage />
            </motion.div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
