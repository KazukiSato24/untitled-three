import * as THREE  from "./build/three.module.js";

let scene, camera, renderer, pointLight;

window.addEventListener("load", init);

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 
    50,
    innerWidth / innerHeight,
    0.1,
    3000
  );

  camera.position.set(0, 5, 30);
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
  document.body.appendChild(renderer.domElement);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const material = new THREE.MeshPhysicalMaterial({
    color: 808080,
    roughness: 0,
    clearcoat: 1,
    metalness: 0.5
  });

  const rectangleBox = new THREE.Mesh(new THREE.BoxGeometry (15, 0.5, 15), material);
  scene.add(rectangleBox);

  const sphere = new THREE.Mesh (new THREE.SphereGeometry(2, 36, 30), material);
  sphere.position.set(0, 2, 0);
  scene.add(sphere);

  pointLight = new THREE.PointLight(0xfffff, 2);
  pointLight.position.set(50, 50, 50);
  scene.add(pointLight);

  animate();
};

const animate = () =>{
  pointLight.position.set(
    200 * Math.sin(Date.now() / 500),
    200 * Math.sin(Date.now() / 700),
    200 * Math.cos(Date.now() / 500),
  );

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};