import * as THREE  from "./build/three.module.js";
import { OrbitControls } from "./controls/OrbitControls.js"

let scene, camera, renderer, pointLight, orbitControls;

window.addEventListener("load", init);

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 
    50,
    innerWidth / innerHeight,
    0.1,
    3000
  );

  camera.position.set(20, 15, 40);
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
  document.body.appendChild(renderer.domElement);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const material = new THREE.MeshPhysicalMaterial({
    color: 0X998877,
    roughness: 0,
    clearcoat: 1,
    metalness: 0.5
  });

  const rectangleBox = new THREE.Mesh(new THREE.BoxGeometry (20, 0.2, 20), material);
  rectangleBox.receiveShadow = true;
  scene.add(rectangleBox);

  const sphere = new THREE.Mesh (new THREE.SphereGeometry(2, 36, 30), material);
  sphere.position.set(0, 5, 0);
  sphere.castShadow = true;
  scene.add(sphere);

  pointLight = new THREE.PointLight(0xfffff, 2);
  pointLight.position.set(50, 50, 50);
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 2048;
  pointLight.shadow.mapSize.height = 2048;
  scene.add(pointLight);
  
  const directionalLight = new THREE.DirectionalLight(0x0fffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDamping = true;
  orbitControls.dampingFactor = 0.2;
  animate();
};

const animate = () =>{
  pointLight.position.set(
    200 * Math.sin(Date.now() / 500),
    200 * Math.sin(Date.now() / 700),
    200 * Math.cos(Date.now() / 500),
  );

  orbitControls.update();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};