import { api } from '@/api/client';
import { Art, IGetArtsReq } from '@/models/arts.model';
import { fields, fieldsDetails } from '@/utils/fields';
import { Pagination } from '@/models/common.model';

export namespace ArtsApi {
  export const getArts = async (params: IGetArtsReq) => {
    const { data } = await api.get<Pagination<Art[]>>(
      `artworks${params.search ? '/search' : ''}`,
      {
        params: {
          ...params,
          page: params.pageParam,
          q: params.search,
          fields: fields.join(','),
        },
      }
    );
    return data;
  };

  export const getArtById = async (id: string | number) => {
    const { data } = await api.get<Pagination<Art>>(`artworks/${id}`, {
      params: {
        fields: fieldsDetails.join(','),
      },
    });
    return data;
  };
}
