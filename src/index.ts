
// import { AmbientLight, BoxGeometry, Camera, Mesh, MeshStandardMaterial, PerspectiveCamera, Scene, SpotLight, WebGLRenderer } from 'three';


// const scene: Scene = new Scene();
// const camera: Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer: WebGLRenderer = new WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// const geometry: BoxGeometry = new BoxGeometry(1, 1, 1)
// const material: MeshStandardMaterial = new MeshStandardMaterial({ color: 0x00ffff })
// const cube: Mesh = new Mesh(geometry, material);

// const light: SpotLight = new SpotLight(0xffffff);
// const ambientLight: AmbientLight = new AmbientLight(0xffffff, 0.5);

// light.position.set(1, 1, 1);

// scene.add(cube);
// scene.add(light);
// scene.add(ambientLight);

// camera.position.z = 2;

// function animate() {
//     cube.rotateX(0.01)
//     cube.rotateY(0.02)
//     renderer.render(scene, camera);
// }
// renderer.setAnimationLoop(animate);

// import { GameEntity } from 'custom-three-engine';


// const gameEntity: InstanceType<typeof GameEntity> = new GameEntity([new DisplayModifier()]);

// const gameEntity: InstanceType<typeof GameEntity> = GameEntityMixin<GameEntity>();

import { GameEntity, DisplayModifier, HealthModifier } from 'custom-three-engine'
import { AmbientLight, BoxGeometry, Camera, Mesh, MeshStandardMaterial, PerspectiveCamera, Scene, SpotLight, WebGLRenderer } from 'three';

const scene: Scene = new Scene();
const camera: Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 2;

const renderer: WebGLRenderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const gameEntity = GameEntity(DisplayModifier, HealthModifier)

const light: SpotLight = new SpotLight(0xffffff);
const ambientLight: AmbientLight = new AmbientLight(0xffffff, 0.5);

light.position.set(1, 1, 1);

scene.add(gameEntity.mesh);
scene.add(light);
scene.add(ambientLight);

function animate() {
    gameEntity.mesh.rotateX(0.01)
    gameEntity.mesh.rotateY(0.02)
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
