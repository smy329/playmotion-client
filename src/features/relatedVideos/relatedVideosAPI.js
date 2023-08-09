import axiosInstance from '../../utils/axios';

// videos?id_ne=1&&_limit=3&&tags_like=java&&tags_like=vscode

export const getRelatedVideos = async ({ tags, id }) => {
  const limit = 5;
  let queryString =
    tags.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;
  const response = await axiosInstance.get(`/videos?${queryString}`);

  return response.data;
};
