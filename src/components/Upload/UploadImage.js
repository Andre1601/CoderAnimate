import React, { useRef, useState, useEffect } from "react";
import { MdImage } from "react-icons/md";

function UploadImage() {
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
    <label
      id="image_input"
      className="flex flex-col border-solid border-2 justify-center items-center border-[#7868E6] rounded-lg mt-6 h-[260px] sm:h-80 lg:h-[500px] cursor-pointer"
    >
      {preview ? (
        <img
          src={preview}
          className="object-cover border-solid border-y-2 justify-center items-center border-[#7868E6] h-[260px] sm:h-80 lg:h-[500px]"
          alt=""
          onClick={() => {
            setImage(null);
          }}
        />
      ) : (
        <button
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}
        >
          <MdImage className="mx-auto text-8xl sm:text-9xl text-[#7868E6]" />
          <h3 className="text-[10px] sm:text-base">
            Drag and drop an image, or Browser
          </h3>
          <h3 className="text-[10px] sm:text-base font-extralight">
            ??? or higher recommended
          </h3>
        </button>
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
  );
}

export default UploadImage;
