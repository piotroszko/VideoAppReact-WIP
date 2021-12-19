import VideoPlayer from "../../components/VideoPlayer/VideoPage";
import VideoPageInfo from "./videoPageInfo/VideoPageInfo";

const  VideoPage = () => {
    return (
        <div className="">
            <VideoPageInfo></VideoPageInfo>
            <VideoPlayer></VideoPlayer>
        </div>
    );
}

export default VideoPage;