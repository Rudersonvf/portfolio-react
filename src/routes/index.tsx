import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/Main/Home";
import About from "../pages/Main/About";
import Projects from "../pages/Main/Projects";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Navigate to='/home' />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects/>} />
      </Route>
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  );
}
