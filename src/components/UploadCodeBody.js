import React, { useEffect, useState } from "react";
import CodeEditor from "./Detail/CodeEditor";
import OutputDisplay from "./Detail/OutputDisplay";
import Theme from "./Detail/Theme";
import Toggle from "./Detail/Toggle";

import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

function UploadCodeBody({uploadHandler}) {
  const [openedEditor, setOpenedEditor] = useState("html");

  const [code, setCode] = useState([]);

  const [isHtml, setHtml] = useState(localStorage.getItem("html") || '' );
  const [isCss, setCss] = useState(localStorage.getItem("css") || '');
  const [isJs, setJs] = useState(localStorage.getItem("js") || '');
  const [srcDoc, setSrcDoc] = useState(``);

  const [theme, setTheme] = useState("dracula");
  

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

  const onThemeChange = (theme) => {
    setTheme(theme);
  };

  useEffect(() => {
    setCode(() => [
      {
        language: "html",
        code: isHtml,
      },
      {
        language: "css",
        code: isCss,
      },
      {
        language: "js",
        code: isJs,
      },
    ]);

    localStorage.setItem("html", isHtml);
    localStorage.setItem("css", isCss);
    localStorage.setItem("js", isJs);

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


  function onUploadHandler(e) {
    e.preventDefault();
    uploadHandler({ title: localStorage.getItem("title") , description: localStorage.getItem("description") , tags: localStorage.getItem("tags"), code });
    localStorage.removeItem('title');
    localStorage.removeItem('description');
    localStorage.removeItem('tags');
    localStorage.removeItem('html');
    localStorage.removeItem('css');
    localStorage.removeItem('js');
  }

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

      <button className="bg-[#7868E6] px-9 py-2 my-10 text-white rounded-2xl float-right" onClick={onUploadHandler} >
        Publish Now
      </button>
    </main>
  );
}

export default UploadCodeBody;
