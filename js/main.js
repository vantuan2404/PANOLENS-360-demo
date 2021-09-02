const panoImage = document.querySelector(".wrapper .pano-img");
const panoImage2 = document.querySelector(".wrapper .pano-2");
const panoImage3 = document.querySelector(".wrapper .pano-3");
const panoImage4 = document.querySelector(".wrapper .pano-4");

let img = "../assets/tree-img-360-1.jpg";
const img2 = "../assets/tree-img-360-2.jpg";
const img3 = "../assets/tree-img-360-3.jpg";
const img4 = "../assets/tree-img-360-4.jpg";

const panorama = new PANOLENS.ImagePanorama(img);
const panorama2 = new PANOLENS.ImagePanorama(img2);
const panorama3 = new PANOLENS.ImagePanorama(img3);
const panorama4 = new PANOLENS.ImagePanorama(img4);

function ViewPanolens(panoRama, panoImage) {
  const viewer = new PANOLENS.Viewer({
    container: panoImage,
    setZoom: 5,
    controlBar: false,
    controlButtons: [],
    autoHideControlBar: true,
    autoHideInfospot: false,
    horizontalView: false,
    cameraFov: 80,
    reverseDragging: false,
    enableReticle: false,
    dwellTime: 1500,
    autoReticleSelect: true,
    viewIndicator: false,
    indicatorSize: 30,
    output: "overlay",
    autoRotateSpeed: 0.5,
    autoRotate: true,
  });
  viewer.add(panoRama);
}

ViewPanolens(panorama, panoImage);
ViewPanolens(panorama2, panoImage2);
ViewPanolens(panorama3, panoImage3);
ViewPanolens(panorama4, panoImage4);

// text loader
const text = document.querySelector(".caption h1");
text.innerHTML = text.innerText
  .split("")
  .map(
    (x, i) =>
      `<span style="animation:valleyText ${i + 1}s infinite linear;  left:${
        (i + 1) * 5
      }%; ">${x}</span>`
  )
  .join("");
