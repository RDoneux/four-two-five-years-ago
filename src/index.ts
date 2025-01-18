
import {BoxGeometry, Camera, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, SpotLight, WebGLRenderer} from 'three';

const scene: Scene = new Scene();
const camera: Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer: WebGLRenderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry: BoxGeometry = new BoxGeometry(1,1,1)
const material: MeshBasicMaterial = new MeshBasicMaterial({color: 0x00ff00})
const cube: Mesh = new Mesh(geometry, material);

const light: SpotLight = new SpotLight(0xffffff);

scene.add(cube);
scene.add(light);

camera.position.z = 2;

function animate() {
    cube.rotateX(0.01)
    cube.rotateY(0.02)
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);