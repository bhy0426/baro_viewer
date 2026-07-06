import { Routes, Route } from "react-router-dom";
import './App.css';
import MainMenu from "./pages/MainMenu";
import Create from "./pages/Create";
import MyRoom from "./pages/MyRoom";
import Info from "./pages/Info";
import Settings from "./pages/Settings";
import Footer from "./components/Footer";

const App = () => {
    return(
        <> 
            <Routes>
                <Route path="/" element={<MainMenu />}></Route>
                <Route path="/create" element={<Create />}></Route>
                <Route path="/myroom" element={<MyRoom />}></Route>
                <Route path="/info" element={<Info />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
            </Routes>
            <Footer />
        </>
    );
};

export default App;