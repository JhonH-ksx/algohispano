import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavbarContrastProvider from "context/NavbarContrastContext";
import Navbar from "components/Navbar";
import Home from "pages/Home";

function AppRoutes () {
  return (
    <BrowserRouter>
      <div>
        <NavbarContrastProvider>
          <Navbar />
        </NavbarContrastProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<p>Roadmap Que sigue la comunidad</p>} />
          <Route path="/calendar" element={<p> *Calendario del mes actual donde se muestren las fchas de los eventos (reuniones, compentecias, charlas, upsolving, etc)</p>} />
          <Route path="/competitions" element={<p> *Competencias activas e historial de las demás</p>} />
          {/* <Route path="/post/:id" element={<p>Post</p>} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      </BrowserRouter>
  )
}

export default AppRoutes;
