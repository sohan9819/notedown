import { NextPage } from "next";
import { MdPreview } from "react-icons/md";
import { MarkdownEditor, MarkdownPreview, TagInput } from "~/components";
import { defautlMarkdown } from "~/utils/markdownDefault";
import { FormEvent, useState } from "react";

const CreateNote: NextPage = () => {
  const [title, setTitle] = useState<string>("" as string);
  const [tags, setTags] = useState<string[]>([]);
  const [noteMarkdown, setNoteMarkdown] = useState<string>(
    defautlMarkdown as string
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && tags.length > 0 && noteMarkdown) {
      // console.log({
      //   title,
      //   tags,
      //   noteMarkdown,
      // });
    } else {
      // console.log("PLEASE FILL ALL THE FIELDS");
    }
  };

  return (
    <>
      <form
        className="flex min-h-[calc(100vh-65.5px-68px)] flex-col gap-4  py-4 px-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <input
            value={title}
            type="text"
            placeholder="Note Title"
            className="input-bordered input-primary input w-full max-w-xs"
            onChange={(e) => void setTitle(e.target.value)}
          />
          <TagInput tags={tags} setTags={setTags} />
        </div>
        <div className="flex   w-full flex-col lg:flex-row">
          <div className="card rounded-box grid h-full max-h-[25rem] w-full  place-items-center overflow-scroll bg-base-300">
            <MarkdownEditor
              className="h-full w-full p-2"
              noteMarkdown={noteMarkdown}
              setNoteMarkdown={setNoteMarkdown}
            />
          </div>
          <div className="divider lg:divider-horizontal">
            <MdPreview className="text-6xl" />
          </div>
          <div className="card rounded-box grid h-full max-h-[25rem] w-full overflow-scroll bg-base-300 p-2 text-left">
            <MarkdownPreview
              className="leading-1 block h-full w-full"
              noteMarkdown={noteMarkdown}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <button type="submit" className="btn-secondary btn">
            Save Note
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateNote;
