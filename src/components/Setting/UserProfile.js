import React, { useEffect, useRef, useState } from "react";

function UserProfile() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <>
      <label className="w-fit">
        {preview ? (
          <div className="grid grid-cols-[70px_1fr] gap-5">
            <img
              src={preview}
              className="w-16 h-16 bg-orange-500 rounded-full"
              alt=""
              onClick={() => {
                setImage(null);
              }}
            />
            <button
              className="bg-[#7868E6] text-white rounded-xl w-[120px] h-11 mt-3 py-2"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              Upload Now
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-[60px_1fr] gap-5">
            <img
              src={preview}
              className="w-16 h-16 bg-orange-500 rounded-full"
              alt=""
              onClick={() => {
                setImage(null);
              }}
            />
            <button
              className="bg-[#7868E6] text-white rounded-xl w-[120px] h-11 mt-3 py-2"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              Select Avatar
            </button>
          </div>
        )}
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.slice(0, 5) === "image") {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
      </label>
    </>
  );
}

export default UserProfile;
