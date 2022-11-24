import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";

import { dracula } from "@uiw/codemirror-theme-dracula";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { atomone } from "@uiw/codemirror-theme-atomone";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { xcodeLight } from "@uiw/codemirror-theme-xcode";

function CodeEditor({ language, value, setEditorState, theme }) {

  const [isTheme, setTheme] = useState(dracula);

  useEffect(() => {
    if (theme === 'dracula') {setTheme(dracula)}
    else if (theme === 'darcula') {setTheme(darcula)}
    else if (theme === 'atomone') {setTheme(atomone)}
    else if (theme === 'sublime') {setTheme(sublime)}
    else {setTheme(xcodeLight)}

  }, [theme])

  const handleChange = (value) => {
    setEditorState(value);
  };

  return (
    <div className="mt-5 h-56 ">
      <div style={{ marginBottom: "10px" }}></div>

      <CodeMirror
        value={value}
        height="300px"
        theme={isTheme}
        extensions={[language]}
        onChange={handleChange}
      />

      {/* <ControlledEditorComponent
        onBeforeChange={handleChange}
        value= {value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: theme,
          autoCloseTags: true,
          autoCloseBrackets: true, 
        }}
      /> */}
    </div>
  );
}

export default CodeEditor;
