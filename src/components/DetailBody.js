import React, { useEffect, useState } from "react";
import CodeEditor from "./Detail/CodeEditor";
import Description from "./Detail/Description";
import OutputDisplay from "./Detail/OutputDisplay";
import Theme from "./Detail/Theme";
import Toggle from "./Detail/Toggle";
import UserStatus from "./Detail/UserStatus";

import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

function DetailBody() {
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
    <main className="px-5 sm:px-10 ">
      <h2 className="mt-8 text-xl sm:text-3xl">Title is...</h2>
      <UserStatus />
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
      <Description />
      <button className="hidden sm:block bg-[#7868E6] px-9 py-2 mb-10 text-white rounded-2xl">
        Back
      </button>
    </main>
  );
}

export default DetailBody;
