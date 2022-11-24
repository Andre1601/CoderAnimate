import React from "react";

function Theme({onChangeTheme}) {
  const themeArray = ["dracula", "darcula", "atomone", "sublime", "xcode"];

  return (
    <div className="flex mt-3">
      <h2 className="mr-3">Theme</h2>
      <select
        className="flex bg-[#7868E6] text-white px-2 text-xs  rounded items-center relative cursor-pointer"
        name="theme"
        onChange={(el) => {
          onChangeTheme(el.target.value);
        }}
      >
        {themeArray.map((theme) => (
          <option key={theme.toString()} value={theme}>{theme}</option>
        ))}
      </select>
    </div>
  );
}

export default Theme;
