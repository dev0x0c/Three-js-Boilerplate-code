import * as THREE from '../three/three.module.js';

init();
var scene,camera,renderer;

function init(){
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,0.1,1000);
    camera.position.z = 5;
    
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

//create graphics
createGFX();
var boxGeo,boxMat,box;

function createGFX(){
    boxGeo = new THREE.BoxBufferGeometry(1.5,1.5,1.5);
    boxMat = new THREE.MeshLambertMaterial();
    box = new THREE.Mesh(boxGeo,boxMat);
    scene.add(box);
}

//create lights eg. Point,Spot,Directional,Ambient,Area lights;
lightning();
var ambLight,dirLight;

function lightning(){
    ambLight = new THREE.AmbientLight({color:0xffffff},0.6);
    scene.add(ambLight);
    dirLight = new THREE.DirectionalLight({color:0xffffff},0.8);
    scene.add(dirLight);
}

//run stuff
function run(){
    requestAnimationFrame(run);
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    box.rotation.z += 0.01;
    renderer.render(scene,camera);
}
run();