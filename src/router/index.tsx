import { Routes, Route } from "react-router-dom";
import { Home } from "@pages/Home";
import { Projects } from "@pages/Projects";
import { ProjectDetails } from "@pages/ProjectDetails";
import { Lab } from "@pages/Lab";
import { NotFound } from "@pages/NotFound";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:slug" element={<ProjectDetails />} />
      <Route path="/lab" element={<Lab />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
