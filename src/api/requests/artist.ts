import { api } from '@/api/client';
import { fieldArtist } from '@/utils/fields';
import { Artist } from '@/models/artist.model';
import { Pagination } from '@/models/common.model';

export namespace ArtistApi {
  export const getArtistById = async (id: string | number) => {
    const { data } = await api.get<Pagination<Artist>>(`agents/${id}`, {
      params: { fields: fieldArtist },
    });
    return data;
  };
}
