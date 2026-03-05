import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import Home from "./Pages/Home/Home.jsx";
import Work from "./Pages/Work/Work.jsx";
import About from "./Pages/About/About.jsx";
import TheProject from "./Components/TheProject/TheProject.jsx";
import { LoadingProvider } from "./Context/LoadingContext.jsx";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LoadingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="works" element={<Work />} />
            <Route path="about" element={<About />} />
            <Route path="theproject/:id" element={<TheProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  </React.StrictMode>
);

