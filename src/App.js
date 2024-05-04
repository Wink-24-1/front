import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import CategoryListPage from "./pages/CategoryListPage";
import ChatBot from "./components/ChatBot";
function App() {
  return (
    <div className="w-96 m-auto border pb-3">
      <Header />
      <ChatBot />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:category/:id" element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/list/:categoryName" element={<CategoryListPage />} />

        <Route path="/detail/:id" element={<DetailPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
