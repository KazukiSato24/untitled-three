import * as THREE  from "./build/three.module.js";

let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 
    50,
    innerWidth / innerHeight,
    0.1,
    3000
  );

  renderer = new THREE.WebGLRenderer();
  document.body.appendChild(renderer.domElement);
  renderer.setSize(Window.innerWidth, window.innerHeight);

  renderer.add(scene, camera);
};