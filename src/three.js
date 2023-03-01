import * as THREE from 'three';

//Scene - holds camera and lights

const scene = new THREE.Scene();
// Camera -- perspective

const camera = new THREE.PerspectiveCamera(75, window.innerHeight / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position(setZ(30));

renderer.render(scene, camera);

///// object

const geomatry = new THREE.TorusGeometry(10, 3, 16, 100);
// wrapping paper
const material = new THREE.MeshBasicMaterial({ color: 'red', wireframe: true });

scene.add(torus);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
