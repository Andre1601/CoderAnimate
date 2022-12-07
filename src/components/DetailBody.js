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
import { getProject, getUser } from "../utils/network-data";
import { useParams } from "react-router-dom";

function DetailBody() {
  const [openedEditor, setOpenedEditor] = useState("html");

  const [dataUser, setDataUser] = useState('');
  const [data, setData] = useState('');

  const [isHtml, setHtml] = useState("");
  const [isCss, setCss] = useState("");
  const [isJs, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState(``);

  const [theme, setTheme] = useState("dracula");

  async function getUserData(uid) {
    const { data } = await getUser(uid);
    setDataUser(data)
  }

  let {id} = useParams();


  React.useEffect(() => {
    async function getProjectData(id) {
      const { data } = await getProject(id);
      setHtml(data.code[0].code)
      setCss(data.code[1].code)
      setJs(data.code[2].code)
      setData(data)
      getUserData(data.uid)

    }
    getProjectData(id)

  }, [])


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
      <h2 className="mt-8 text-xl sm:text-3xl">{data.title}</h2>
      <UserStatus data={dataUser} post={data} />
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
      <Description data={data} />
      <button className="hidden sm:block bg-[#7868E6] px-9 py-2 mb-10 text-white rounded-2xl">
        Back
      </button>
    </main>
  );
}

export default DetailBody;
