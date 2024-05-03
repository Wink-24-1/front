import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import ListPage from "./pages/ListPage";
import PwModal from "./components/PwModal";

function App() {

  return (
    <div className="w-96 m-auto border pb-3">
      <Header />
      {/* <ChatBot /> */}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/123" element={<PwModal state={1}/>} />

        <Route path="/list" element={<ListPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
