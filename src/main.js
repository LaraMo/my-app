// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  //@ts-ignore
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill('')
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill('').forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load(
  'https://raw.githubusercontent.com/fireship-io/threejs-scroll-animation-demo/main/space.jpg'
);
scene.background = spaceTexture;

// Avatar

const laraTexture = new THREE.TextureLoader().load(
  'https://media.licdn.com/dms/image/C5603AQHN7WkldLinYA/profile-displayphoto-shrink_400_400/0/1627862179235?e=1682553600&v=beta&t=BeUNGCP__TEKJB12qtyzm-DKspWzLmaguO-sZgJ_Rlw'
);

const lara = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: laraTexture }));

scene.add(lara);

// Avatar

const coffee = new THREE.TextureLoader().load(
  'https://hips.hearstapps.com/hmg-prod/images/cup-of-coffee-on-colored-background-royalty-free-image-875681938-1543862983.jpg?crop=0.680xw:1.00xh;0.164xw,0&resize=1200:*'
);

const coffeeMesh = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: coffee }));

scene.add(coffeeMesh);

const a = new THREE.TextureLoader().load(
  'https://hips.hearstapps.com/hmg-prod/images/cup-of-coffee-on-colored-background-royalty-free-image-875681938-1543862983.jpg?crop=0.680xw:1.00xh;0.164xw,0&resize=1200:*'
);

const b = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: a }));

scene.add(b);
// medium

const moonTexture = new THREE.TextureLoader().load(
  'https://findingtom.com/images/uploads/what-is-medium-com/article-image-00.jpeg'
);

// medium

const workTexture = new THREE.TextureLoader().load(
  'https://images.axios.com/xE5p3aDRx2VhhROoQulS8NS5dPg=/365x56:4800x2549/1920x1080/2021/07/28/1627492583815.jpg'
);

const workMesh = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: workTexture }));

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    // normalMap: normalTexture,
  })
);

scene.add(moon);
scene.add(workMesh);

moon.position.z = 20;
moon.position.setX(-10);

lara.position.z = -5;
lara.position.x = 2;

workMesh.position.x = 22;
// workMesh.position.y = 10;

coffeeMesh.position.x = -10;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  lara.rotation.y += 0.01;
  lara.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  lara.rotation.x += 0.01;
  lara.rotation.y += 0.005;
  lara.rotation.z += 0.01;

  coffeeMesh.rotation.x += 0.01;
  coffeeMesh.rotation.y += 0.005;
  coffeeMesh.rotation.z += 0.01;

  workMesh.rotation.x += 0.01;
  workMesh.rotation.y += 0.005;
  workMesh.rotation.z += 0.01;

  moon.rotation.x += 0.005;

  // controls.update();

  renderer.render(scene, camera);
}

animate();
