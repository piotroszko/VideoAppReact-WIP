import VideoPlayer from "../../components/VideoPlayer/VideoPage";
import VideoPageInfo from "./videoPageInfo/VideoPageInfo";

const  VideoPage = () => {
    return (
        <div className="">
            <div className="bg-black">
                <VideoPageInfo></VideoPageInfo>
                <VideoPlayer></VideoPlayer>
            </div>
            
        </div>
    );
}

export default VideoPage;