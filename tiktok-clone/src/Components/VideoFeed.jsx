import { useSelector, useDispatch } from "react-redux";
import { likeVideo, dislikeVideo } from "../Redux/videoSlice";

const VideoFeed = () => {
  const videos = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  return (
    <div className="h-screen overflow-scroll rounded-md">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <video src={video.url} controls className="w-full h-96" />
          <div className="flex justify-between p-4">
            <button onClick={() => dispatch(likeVideo(video.id))}>
              👍 {video.likes}
            </button>
            <button onClick={() => dispatch(dislikeVideo(video.id))}>
              👎 {video.dislikes}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoFeed;
