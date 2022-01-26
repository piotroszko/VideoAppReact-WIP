import React, { useState } from "react";
import "./Comment.css";
const CommentForm = () => {
  const [title, setTitle] = useState("");
  const [commentText, setCommentText] = useState("");

  const [isFormVis, setIsFormVis] = useState(false);

  return (
    <div
      className={` ${isFormVis ? "pt-10" : "pt-1"} bg-white dark:bg-gray-800 w-full flex flex-col`}
    >
      <div
        className={`${
          isFormVis ? "gap-2 sm:gap-10" : "gap-2"
        } w-full flex justify-center scaley1 shadow-sm pb-3 `}
      >
        <img
          alt=""
          className={` ${
            isFormVis ? "scale-full" : "scale-half"
          } animateScale2 w-24 h-24 block rounded-3xl self-start`}
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
        />
        <div className="flex w-1/2 sm:w-1/3">
          <button
            onClick={() => setIsFormVis(true)}
            className={` ${
              isFormVis ? "scaley-0 hidden" : "scaley-full"
            } select-none whitespace-nowrap shadow-md p-2 h-1/2 self-center dark:bg-gray-700`}
          >
            {" "}
            <p className="mx-4 dark:text-gray-200"> Napisz komentarz </p>{" "}
          </button>
          <form
            className={` ${
              isFormVis ? "flex scaley-full  w-full" : "scaley-0 hidden w-0"
            } flex-col animateScale8`}
          >
            <input
              className="mx-auto p-2 w-full text-lg shadow-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Tytuł"
              type="text"
              name="title"
            />
            <textarea
              className="mt-1 mx-auto p-2 w-full shadow-md"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Treść"
              type="text"
              name="commentText"
              required
            />
            <div className="flex select-none">
              <button
                onClick={() => setIsFormVis(false)}
                className="ml-0 mr-auto mt-2 p-1 dark:text-gray-200 text-xs font-bold dark:bg-gray-600 shadow-md sm:text-base"
                type="submit"
              >
                Anuluj
              </button>
              <button
                className="ml-auto mr-0 mt-2 p-1 dark:text-gray-200 text-xs font-bold dark:bg-gray-600 shadow-md sm:text-base"
                type="submit"
              >
                Dodaj komentarz
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
