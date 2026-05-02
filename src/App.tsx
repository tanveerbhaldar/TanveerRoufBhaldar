import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Projects from "./page/Project";
import Teams from "./page/Teams";
import Properties from "./page/Properties";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* project */}
          <Route
            path="/admin/project"
            element={<Projects />}
          />

          {/* properties */}
          <Route
            path="/admin/properties"
            element={<Properties/>}
          />

          {/* Teams */}
          <Route
            path="/admin/team"
            element={<Teams />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}