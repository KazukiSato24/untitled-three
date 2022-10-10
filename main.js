import * as THREE  from "./build/three.module.js";

let scene, camera, renderer;

window.addEventListener("load", init);

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 
    50,
    innerWidth / innerHeight,
    0.1,
    3000
  );

  camera.position.set(0, 0, 20);

  renderer = new THREE.WebGLRenderer();
  document.body.appendChild(renderer.domElement);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

  const rectangleBox = new THREE.Mesh(new THREE.BoxGeometry (5, 1, 1), material);
  scene.add(rectangleBox);

  renderer.render(scene, camera);
};