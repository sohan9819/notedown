import React, { Dispatch, SetStateAction } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { dracula } from "@uiw/codemirror-themes-all";

type MarkdownEditorProps = {
  className?: string;
  noteMarkdown: string | "";
  setNoteMarkdown: Dispatch<SetStateAction<string>>;
};

const MarkdownEditor = ({
  className,
  noteMarkdown,
  setNoteMarkdown,
}: MarkdownEditorProps) => {
  return (
    <CodeMirror
      value={noteMarkdown}
      width="20vw"
      height="100vh"
      minWidth="100%"
      minHeight="30vh"
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      onChange={(value) => void setNoteMarkdown(value)}
      theme={dracula}
      placeholder="Take your notes here // example :  #Hello world"
      className={className}
    />
  );
};

export default MarkdownEditor;
