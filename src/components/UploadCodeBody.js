import React, { useEffect, useState } from "react";
import CodeEditor from "./Detail/CodeEditor";
import OutputDisplay from "./Detail/OutputDisplay";
import Theme from "./Detail/Theme";
import Toggle from "./Detail/Toggle";

import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

function UploadCodeBody() {
  const [openedEditor, setOpenedEditor] = useState("html");

  const [isHtml, setHtml] = useState("");
  const [isCss, setCss] = useState("");
  const [isJs, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState(``);

  const [theme, setTheme] = useState("dracula");

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

  const onThemeChange = (theme) => {
    setTheme(theme);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${isHtml}</body>
            <style>${isCss}</style>
            <script>${isJs}</script>
          </html>
        `
      );
    }, 250);

    return () => clearTimeout(timeOut);
  }, [isHtml, isCss, isJs]);

  return (
    <main className="px-5 sm:px-10 md:px-28 lg:px-52">
      <h2 className="text-center mt-10 text-xl font-bold">
        Upload your source code
      </h2>
      <Toggle onToggleClick={onTabClick} />
      <Theme onChangeTheme={onThemeChange} />

      <div className="editor-container">
        {openedEditor === "html" ? (
          <CodeEditor
            language={html()}
            displayName="HTML"
            value={isHtml}
            theme={theme}
            setEditorState={setHtml}
          />
        ) : openedEditor === "css" ? (
          <CodeEditor
            language={css()}
            displayName="CSS"
            value={isCss}
            theme={theme}
            setEditorState={setCss}
          />
        ) : (
          <CodeEditor
            language={javascript({ jsx: true })}
            displayName="JS"
            value={isJs}
            theme={theme}
            setEditorState={setJs}
          />
        )}
      </div>

      <OutputDisplay srcDoc={srcDoc} />

      <button className="bg-[#7868E6] px-9 py-2 my-10 text-white rounded-2xl float-right">
        Publish Now
      </button>
    </main>
  );
}

export default UploadCodeBody;
