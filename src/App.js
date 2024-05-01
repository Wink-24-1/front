import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
// import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="w-96 h-svh m-auto border">
      <Header />
      {/* <ChatBot /> */}

      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/list" element={<ListPage />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
