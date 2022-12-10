import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Devices from "./pages/Devices";
import Market from './pages/Market';
import Settings from './pages/Settings';
import Images from "./pages/Images";

export default function TheRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="devices" element={<Devices />} />
            <Route path="market" element={<Market />} />
            <Route path="settings" element={<Settings />} />
            <Route path="images" element={<Images />} />
        </Routes>
    );
}