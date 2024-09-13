import { createSlice } from "@reduxjs/toolkit";

const initialVideos = [
  { id: 1, url: "video1.mp4", likes: 0, dislikes: 0 },
  { id: 2, url: "video2.mp4", likes: 0, dislikes: 0 },
];

const videoSlice = createSlice({
  name: "videos",
  initialState: initialVideos,
  reducers: {
    likeVideo: (state, action) => {
      const video = state.find((v) => v.id === action.payload);
      if (video) video.likes += 1;
    },
    dislikeVideo: (state, action) => {
      const video = state.find((v) => v.id === action.payload);
      if (video) video.dislikes += 1;
    },
  },
});

export const { likeVideo, dislikeVideo } = videoSlice.actions;
export default videoSlice.reducer;
