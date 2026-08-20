import { useState } from 'react';
import "./App.css";

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from "./pages/HomePage";
import ModelsPage from "./pages/ModelsPage";
import FavoritesPage from "./pages/FavoritesPage";

import SignUpPage from './pages/SignUpPage';

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [favoriteIds, setFavoriteIds] = useState([]);

  function toggleFavorite(id) {
    console.log("SAVE 클릭:", id);
    setFavoriteIds((prev) =>
        prev.includes(id)
            ? prev.filter((favoriteId) => favoriteId !== id)
            : [...prev, id]
    );
}
  function changePage(page) {
    setCurrentPage(page);
  }

  return (
    <>
    <Header onNavigate={changePage} />
    {currentPage==="home" && (<HomePage />)}

    {currentPage === "signup" && (
      <SignUpPage />
    )}

    {currentPage === "models" && (
    <ModelsPage
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
    />
    )}

    {currentPage === "favorites" && (
    <FavoritesPage
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
    />
    )}
    <Footer />
    </>
  )
}

export default App;
