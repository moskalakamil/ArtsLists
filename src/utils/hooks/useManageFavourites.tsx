import { useFavourites } from '@/store/favourites';
import { Art } from '@/models/arts.model';
import { useCallback } from 'react';

export const useManageFavourites = () => {
  const { favourites, setFavourites } = useFavourites();

  const isFavourite = useCallback(
    (artId?: number) => favourites.some((art: Art) => art.id === artId),
    [favourites]
  );

  const manageFavourites = (art: Art) => {
    if (isFavourite(art.id)) {
      const newFavourites = favourites.filter((fav) => fav.id !== art.id);
      setFavourites(newFavourites);
    } else {
      setFavourites([...favourites, art]);
    }
  };

  return { isFavourite, manageFavourites };
};
