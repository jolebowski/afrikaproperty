import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (propertyId: string) => void;
  isFavorited: (propertyId: string) => boolean;
  getFavorites: () => string[];
  clearAllFavorites: () => void;
  favoritesCount: number;
  unreadCount: number;
  markAsRead: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

const STORAGE_KEY = 'capvert_favorites';

export function FavoritesProvider({ children }: { children: ReactNode }) {
  // Initialiser les favoris depuis localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (error) {
      console.error('Erreur lors du chargement initial des favoris:', error);
    }
    return [];
  });

  const [unreadCount, setUnreadCount] = useState(0);

  // Sauvegarder dans localStorage à chaque modification
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des favoris:', error);
    }
  }, [favorites]);

  const toggleFavorite = (propertyId: string) => {
    const isRemoving = favorites.includes(propertyId);

    if (isRemoving) {
      // Retirer des favoris
      setFavorites(prev => prev.filter(id => id !== propertyId));
    } else {
      // Ajouter aux favoris
      setFavorites(prev => [...prev, propertyId]);
      // Incrémenter le compteur non lu
      setUnreadCount(prev => prev + 1);
    }
  };

  const isFavorited = (propertyId: string) => {
    return favorites.includes(propertyId);
  };

  const getFavorites = () => {
    return favorites;
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    setUnreadCount(0);
  };

  const markAsRead = () => {
    setUnreadCount(0);
  };

  const value = {
    favorites,
    toggleFavorite,
    isFavorited,
    getFavorites,
    clearAllFavorites,
    favoritesCount: favorites.length,
    unreadCount,
    markAsRead
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    // Retourner des valeurs par défaut si pas dans le provider
    // Cela permet d'utiliser PropertyCard partout sans erreur
    return {
      favorites: [],
      toggleFavorite: () => {},
      isFavorited: () => false,
      getFavorites: () => [],
      clearAllFavorites: () => {},
      favoritesCount: 0,
      unreadCount: 0,
      markAsRead: () => {}
    };
  }
  return context;
}