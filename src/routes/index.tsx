import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/Main/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
