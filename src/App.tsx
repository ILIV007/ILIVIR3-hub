import { Routes, Route } from "react-router-dom";
import { Navbar } from "@components/layout/Navbar";
import { Footer } from "@components/layout/Footer";
import { ScrollProgress } from "@components/layout/ScrollProgress";
import { Home } from "@pages/Home";
import { Projects } from "@pages/Projects";
import { ProjectDetails } from "@pages/ProjectDetails";
import { Lab } from "@pages/Lab";
import { NotFound } from "@pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen bg-deep-navy text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
