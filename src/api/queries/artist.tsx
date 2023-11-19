import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/api/queryKeys';
import { ArtistApi } from '@/api/requests/artist';

export const useGetArtistById = (id: number | string) =>
  useQuery({
    queryFn: async () => await ArtistApi.getArtistById(id),
    queryKey: [queryKeys.artist, id],
  });
