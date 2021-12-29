import Comment from "./Comment";
const  CommentsSection = () => {
    return (
        <div className="bg-white w-full mb-10 pt-2 flex flex-col gap-4">
            <Comment/>
            <Comment/>
        </div>
    );
}

export default CommentsSection;