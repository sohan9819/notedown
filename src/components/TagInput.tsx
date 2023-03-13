import React, { Dispatch, SetStateAction, useState } from "react";
import { IoMdClose } from "react-icons/io";

type TagInputProps = {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
};

const TagInput = ({ tags, setTags }: TagInputProps) => {
  const [tagInput, setTagInput] = useState("");

  return (
    <div className="flex w-full max-w-xl flex-wrap gap-2 rounded-md bg-base-300 p-2 ">
      {tags &&
        tags.map((tag, index) => (
          <button className="btn-sm btn gap-2" key={index}>
            {tag}
            <span className="badge badge-error">
              <IoMdClose
                className="text-xl"
                onClick={() => {
                  setTags((prev) => prev.filter((value, id) => id !== index));
                }}
              ></IoMdClose>
            </span>
          </button>
        ))}
      <input
        type="text"
        placeholder={
          tags.length >= 10
            ? "You can have maximum 10 tags only"
            : "Add tags here"
        }
        maxLength={10}
        className="input-bordered input-primary input input-sm w-full max-w-xs"
        onKeyDown={(e) => {
          switch (e.key) {
            case "Enter":
              tagInput ? setTags((prev) => [...prev, tagInput]) : "";
              setTagInput("");
              break;
            case "Backspace":
              !tagInput ? setTags((prev) => [...prev.slice(0, -1)]) : "";
              break;

            default:
              break;
          }
        }}
        onChange={(e) => {
          tags.length >= 10 ? "" : setTagInput(e.target.value);
        }}
        value={tagInput}
        // disabled={tags.length >= 10}
      />
    </div>
  );
};

export default TagInput;
