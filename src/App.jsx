import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Pages from "./Pages";
import Users from "./Users";
import Navigation from "./Navigation";

export default function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="pages/*" element={<Pages />} />
                <Route path="users/*" element={<Users />} />
            </Routes>
        </div>
    );
}
