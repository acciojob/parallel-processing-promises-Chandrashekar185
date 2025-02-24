//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
function downloadImages() {
  const loadingDiv = document.getElementById("loading");
  const errorDiv = document.getElementById("error");
  const outputDiv = document.getElementById("output");

  // Show loading spinner
  loadingDiv.style.display = "block";
  errorDiv.style.display = "none";
  outputDiv.innerHTML = ""; 
  Promise.all(imageUrls.map(downloadImage))
    .then((images) => {

      loadingDiv.style.display = "none";

    
      images.forEach((img) => outputDiv.appendChild(img));
    })
    .catch((error) => {
    
      loadingDiv.style.display = "none";
      errorDiv.style.display = "block";
      errorDiv.textContent = error.message;
    });
}

downloadImages();

