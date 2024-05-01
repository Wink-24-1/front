import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import ListPage from "./pages/ListPage";

function App() {

  return (
    <div className="w-96 m-auto border pb-3">
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
