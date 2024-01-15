import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const StoreCTA = React.lazy(() => import("pages/StoreCTA"));
const Cart = React.lazy(() => import("pages/Cart"));
const AboutUsOne = React.lazy(() => import("pages/AboutUsOne"));
const StorePage = React.lazy(() => import("pages/StorePage"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const ComponentsOne = React.lazy(() => import("pages/ComponentsOne"));
const Components = React.lazy(() => import("pages/Components"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/components" element={<Components />} />
          <Route path="/componentsone" element={<ComponentsOne />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/storepage" element={<StorePage />} />
          <Route path="/aboutusone" element={<AboutUsOne />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/storecta" element={<StoreCTA />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
