import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import ListPage from "./pages/ListPage";
// import ChatBot from "./components/ChatBot";

function App() {
  let menuState = useSelector(state => state.menuState);
  return (
    <div className="w-96 h-svh m-auto border">
      <Header />
      {/* <ChatBot /> */}

      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/list" element={<ListPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
