const generatebtn = document.getElementById("generate-btn");
const input = document.getElementById("user-input");
const down = document.querySelector(".download-button");
const sizeelem = document.getElementById("qr-size");
const form = document.getElementById("main-url-form");
function showspin() {
  document.querySelector(".loader").style.display = "block";
}
function endspin() {
  document.querySelector(".loader").style.display = "none";
}
function generate(url, size) {
  const urlimg = document.querySelector(".qrcode");
  urlimg.setAttribute(
    "src",
    `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${url}`
  ).urlimg.style.display = "block";
  return;
}

const mainfunc = () => {
  const url = input.value;
  const size = sizeelem.value;
  if (url.length > 0) {
    showspin();
    setTimeout(() => {
      endspin();
      generate(url, size);
    }, 2000);
  } else {
    alert("Enter Valid Text or URL.");
    return;
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  mainfunc();
});
