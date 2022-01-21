import Comment from "./Comment";
const  CommentsSection = () => {
    return (
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 w-full mb-10 pt-2 flex flex-col gap-4">
            <Comment/>
            <Comment/>
        </div>
    );
}

export default CommentsSection;