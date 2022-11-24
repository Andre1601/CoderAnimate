const image_input = document.querySelector("#image_input");
let uploaded_image = "";

image_input.addEventListener("change", () => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    console.log(uploaded_image);

    image_input.style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
