import * as THREE  from "./build/three.module.js";

let scene, camera;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 
    50,
    innerWidth / innerHeight,
    0.1,
    3000
  );
}