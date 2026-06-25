import { createContext, useState } from "react";

export const FavoritesContext =
  createContext();

export const FavoritesProvider = ({
  children,
}) => {
  const [favorites, setFavorites] =
    useState([]);

  const addFavorite = (item) => {
    const exists = favorites.find(
      (fav) => fav.id === item.id
    );

    if (!exists) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(
      favorites.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};