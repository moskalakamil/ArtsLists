export interface IGetArtsReq {
  pageParam?: number;
  limit: number | string;
  search?: string;
}

export interface Art {
  artist_display: string;
  artist_id: number;
  artist_title: string;
  title: string;
  category_titles: string[];
  classification_titles: string[];
  description: string;
  dimensions: string;
  id: number;
  image_id: string;
  is_zoomable: boolean;
  latitude: null;
  latlon: null;
  longitude: null;
  subject_titles: [];
  technique_titles: [];
}
