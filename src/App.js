import "./app.scss";
import { Route, Routes } from "react-router-dom";

import WithWidget from "./pages/WithWidget";
import WithoutWidget from "./pages/WithoutWidget";
import Layout from "./pages/Layout";
import Test from "./components/Test";
import Home from "./pages/Home";
import Widget from "./components/Widget";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import Login from "./pages/login/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/messeges" element={<Layout />}></Route>
        <Route path="/notifications" element={<Layout />}></Route>
        <Route path="/bookmarks" element={<Layout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Layout />}></Route>
      </Routes>
      {/* <Test /> */}
    </div>
  );
}

export default App;
