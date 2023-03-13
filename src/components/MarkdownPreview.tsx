import React from "react";
import ReactMarkdowm from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

type MarkdownPreviewProps = {
  className?: string;
  noteMarkdown: string | "";
};

const MarkdownPreview = ({ className, noteMarkdown }: MarkdownPreviewProps) => {
  return (
    // <article className={className}>
    // <ReactMarkdowm>
    //   {noteMarkdown ? noteMarkdown : "Heres the preview for the markdowwn"}
    // </ReactMarkdowm>
    // </article>

    // className={"whitespace-pre-wrap"}

    <article className={`prose  lg:prose-xl  ${className ? className : ""}`}>
      <ReactMarkdowm
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
      >
        {noteMarkdown ? noteMarkdown : "Heres the preview for the markdown"}
      </ReactMarkdowm>
    </article>

    // <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
    //   <div className="card-body m-0 p-3">
    //     <div className={`collapse-arrow collapse-open collapse`}>
    //       <div className="collapse-content">
    //         <article className="prose lg:prose-xl">
    //           <ReactMarkdowm>{noteMarkdown}</ReactMarkdowm>
    //         </article>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MarkdownPreview;
