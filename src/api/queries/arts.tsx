import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { ArtsApi } from '@/api/requests/arts';
import { IGetArtsReq } from '@/models/arts.model';
import { queryKeys } from '@/api/queryKeys';

export const useGetArts = (params: IGetArtsReq) =>
  useInfiniteQuery({
    queryFn: async ({ pageParam }) =>
      await ArtsApi.getArts({ ...params, pageParam }),
    getNextPageParam: (lastPage) => {
      if (
        lastPage.pagination.current_page + 1 >
        lastPage.pagination.total_pages
      ) {
        return undefined;
      }
      return lastPage.pagination.current_page + 1;
    },
    initialPageParam: 1,
    queryKey: [queryKeys.arts, params.limit, params.search],
  });

export const useGetArtById = (id: number | string) =>
  useQuery({
    queryFn: async () => await ArtsApi.getArtById(id),
    queryKey: [queryKeys.arts, id],
  });
