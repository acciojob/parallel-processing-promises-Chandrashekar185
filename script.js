const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(imageObj) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageObj.url;

    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${imageObj.url}`));
  });
}

function downloadImages() {
  const loadingDiv = document.getElementById("loading");
  const errorDiv = document.getElementById("error");
  const outputDiv = document.getElementById("output");

  // Show loading spinner
  loadingDiv.style.display = "block";
  errorDiv.style.display = "none";
  outputDiv.innerHTML = ""; 

  Promise.all(images.map(downloadImage))
    .then((loadedImages) => {
      loadingDiv.style.display = "none";

      loadedImages.forEach((img) => outputDiv.appendChild(img));
    })
    .catch((error) => {
      loadingDiv.style.display = "none";
      errorDiv.style.display = "block";
      errorDiv.textContent = error.message;
    });
}

btn.addEventListener("click", downloadImages);
