import React, { useState, useEffect } from "react";
import { t } from "i18next";

const TagInput = ({ outputTags, initialTags }) => {
  const aviableCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const [inputTag, setInputTag] = useState("");
  const [tags, setTags] = useState([]);
  const AddTag = () => {
    if (!tags.includes(inputTag)) {
      outputTags([...tags, inputTag]);
      setTags((old) => [...old, inputTag]);
      setInputTag("");
    }
  };
  const handleTagChange = (e) => {
    if (e.target.value.slice(-1) === "," || e.target.value.slice(-1) === "+") {
      AddTag();
    } else if (aviableCharacters.includes(e.target.value.slice(-1))) {
      setInputTag(e.target.value);
    }
  };
  const deleteTag = (value) => {
    outputTags(tags.filter((t) => t !== value));
    setTags(tags.filter((t) => t !== value));
  };
  useEffect(() => {
    if (initialTags) {
      setTags(initialTags);
    }
  }, [initialTags]);
  return (
    <>
      <label htmlFor="tags" className="mt-6 dark:text-gray-200 text-gray-800 text-lg font-semibold">
        {t("tags")}
      </label>
      <div className="mt-1 mx-auto" id="tags">
        <div className="relative">
          <input
            value={inputTag}
            onChange={(e) => {
              handleTagChange(e);
            }}
            className="block px-4 py-2 w-full dark:text-gray-200 text-gray-700 leading-tight dark:bg-gray-700 bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none appearance-none focus:ring-1 focus:ring-blue-500"
            placeholder={t("enterTags")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                AddTag();
              }
            }}
          />
          <div
            className={`${inputTag !== "" && inputTag.length > 2 ? "" : "hidden"}`}
            onClick={() => {
              AddTag();
            }}
          >
            <div className="absolute z-40 left-0 mt-2 w-full">
              <div className="py-1 text-sm dark:bg-gray-600 bg-white border border-gray-300 rounded shadow-lg">
                <button className="block px-5 py-1 hover:text-white hover:bg-indigo-600 cursor-pointer">
                  {t("addTag")}
                  <span className="font-bold">{inputTag}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:placeholder-gray-800 placeholder-gray-500 mb-2 mx-auto w-3/4 dark:text-gray-200">
        {tags.length > 0
          ? tags.map((t) => (
              <div
                key={t}
                className="inline-flex items-center mr-1 mt-2 w-max text-sm bg-gray-300 dark:bg-gray-600 rounded overflow-hidden"
              >
                <span className="ml-2 mr-1 px-1 max-w-xs leading-relaxed truncate" x-text="tag">
                  {t}
                </span>
                <button
                  className="inline-block align-middle w-6 h-8 text-gray-500 dark:text-gray-700 bg-gray-400 dark:bg-gray-400 focus:outline-none"
                  onClick={() => deleteTag(t)}
                >
                  <svg
                    className="mx-auto w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
                    />
                  </svg>
                </button>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default TagInput;
