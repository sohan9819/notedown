import { NextPage } from "next";
import { MdPreview } from "react-icons/md";

const CreateNote: NextPage = () => {
  return (
    <>
      <form className="flex flex-col gap-2 py-4 px-2">
        <div className="flex flex-col items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Note Title"
            className="input-bordered input-primary input w-full max-w-xs"
          />
          {/* <input
            type="file"
            className="file-input-bordered file-input-primary file-input w-full max-w-xs"
          /> */}
          <textarea
            className="textarea-primary textarea w-full max-w-md resize-none "
            placeholder="Describtion within 100 words"
            maxLength={100}
          ></textarea>
        </div>
        <div className="flex h-[calc(100vh-4rem)] w-full">
          <div className="card rounded-box grid h-full flex-grow place-items-center bg-base-300">
            content
          </div>
          <div className="divider divider-horizontal">
            <MdPreview className="text-6xl" />
          </div>
          <div className="card rounded-box grid h-full flex-grow place-items-center bg-base-300">
            content
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
