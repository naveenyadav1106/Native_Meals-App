import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
});

export default function FavoritesContextProvider({ children }) {
    const [favoritesMealIds, setfavoritesMealIds] = useState([])

    function addFavorite(id) {
        setfavoritesMealIds((prevalues) => [...prevalues, id]
        );
    }

    function removeFavorite(id) {
        setfavoritesMealIds((prevalues) => prevalues.filter(mealId => mealId !== id)
        )
    }

    const value = {
        ids: favoritesMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>

}
