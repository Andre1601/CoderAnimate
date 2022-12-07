import React from "react";

function SubmitButton({updateHandler}) {
  return (
    <button
      className="bg-[#7868E6] px-5 py-2 my-10 text-white rounded-xl float-right sm:col-span-2 "
      onClick={updateHandler}
    >
      Save Changes
    </button>
  );
}

export default SubmitButton;
