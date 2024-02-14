import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { Vector3 } from "@babylonjs/core/Maths/math";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Mesh } from "@babylonjs/core/Meshes/mesh";

// Side-effects only imports allowing the standard material to be used as default.
import "@babylonjs/core/Materials/standardMaterial";
// Side-effects only imports allowing Mesh to create default shapes (to enhance tree shaking, the construction methods on mesh are not available if the meshbuilder has not been imported).
import "@babylonjs/core/Meshes/Builders/sphereBuilder";
import "@babylonjs/core/Meshes/Builders/boxBuilder";
import "@babylonjs/core/Meshes/Builders/groundBuilder";
import { ArcRotateCamera, DirectionalLight, ShadowGenerator } from "@babylonjs/core";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
const engine = new Engine(canvas);
var scene = new Scene(engine);

// This creates and positions a free camera (non-mesh)
// var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
const camera = new ArcRotateCamera("Camera", -3 * Math.PI / 4, Math.PI / 3, 50, Vector3.Zero(), scene);
camera.attachControl(canvas, true);


// This targets the camera to scene origin
camera.setTarget(Vector3.Zero());

// This attaches the camera to the canvas
camera.attachControl(canvas, true);

// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

let direction: Vector3 = new Vector3(0,-1,1)
let  directionalLight = new DirectionalLight("dir", direction, scene);
directionalLight.position = new Vector3(0, 15, -30);

const shadowGenerator = new ShadowGenerator(1024, directionalLight);

// Default intensity is 1. Let's dim the light a small amount
light.intensity = 0.1;

// Our built-in 'sphere' shape. Params: name, subdivs, size, scene
var sphere = Mesh.CreateSphere("sphere1", 16, 2, scene);
shadowGenerator.addShadowCaster(sphere,true);

// Move the sphere upward 1/2 its height
sphere.position.y = 1;

// Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
let ground = Mesh.CreateGround("ground1", 10, 10, 2, scene);
ground.receiveShadows = true;

let newPos: Vector3 = new Vector3(0,1,0)
setInterval(() => {
    if(light.intensity < 0.7){
        light.intensity = light.intensity + 0.01;
    } else {
        light.intensity = 0.1;
    }
},200)
setInterval(() => {
    ground.rotate(newPos,0.1)
},1000)

engine.runRenderLoop(() => {
    scene.render();
});
