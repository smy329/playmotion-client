import { getVideos } from './videosAPI';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: '',
};

// async thunk
//when we dispath async thunk, we can send only one parameter. So if we want to send multiple parameter, we can send it as object
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async ({ tags, search }) => {
  const videos = await getVideos(tags, search);
  return videos;
});

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videosSlice.reducer;
