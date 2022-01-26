import Comment from "./Comment";
const CommentsSection = () => {
  return (
    <div className="flex flex-col gap-4 mb-10 pt-2 w-full dark:text-gray-200 dark:bg-gray-800 bg-white">
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentsSection;
