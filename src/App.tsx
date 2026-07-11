import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "@components/layout/Navbar";
import { Footer } from "@components/layout/Footer";
import { ScrollProgress } from "@components/layout/ScrollProgress";
import { Home } from "@pages/Home";
import { ErrorBoundary } from "@components/ErrorBoundary";

// Lazy-load secondary routes — keeps the Home bundle small.
const Projects = lazy(() => import("@pages/Projects").then((m) => ({ default: m.Projects })));
const ProjectDetails = lazy(() => import("@pages/ProjectDetails").then((m) => ({ default: m.ProjectDetails })));
const Lab = lazy(() => import("@pages/Lab").then((m) => ({ default: m.Lab })));
const NotFound = lazy(() => import("@pages/NotFound").then((m) => ({ default: m.NotFound })));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent-cyan/30 border-t-accent-cyan rounded-full animate-spin" aria-label="Loading" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-deep-navy text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={
            <ErrorBoundary fallback={<PageFallback />}>
              <Suspense fallback={<PageFallback />}>
                <Projects />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/project/:slug"
          element={
            <ErrorBoundary fallback={<PageFallback />}>
              <Suspense fallback={<PageFallback />}>
                <ProjectDetails />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/lab"
          element={
            <ErrorBoundary fallback={<PageFallback />}>
              <Suspense fallback={<PageFallback />}>
                <Lab />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
