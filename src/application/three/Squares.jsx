import React from 'react';
import * as THREE from 'three';
import UvGridOpenGLJPG from './uv_grid_opengl.jpg';

export function Squares(props) {
  var container;

  var scene, renderer;

  var group;

  function createMesh(geometry, material, position, x, y, z, rx, ry, rz, s) {
    const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial(material));

    mesh.position.set(x, y, z - position); // -125 -75
    mesh.rotation.set(rx, ry, rz);
    mesh.scale.set(s, s, s);
    group.add(mesh);
  }

  function addShape(geometrics, materials, positions, x, y, z, rx, ry, rz, s) {
    for (let i = 0; i < 3; i++) {
      createMesh(geometrics[i - 1], materials[i - 1], positions[i - 1], x, y, z, rx, ry, rz, s);
    }
  }

  const loader = new THREE.TextureLoader();

  const texture = loader.load(UvGridOpenGLJPG);
  // it's necessary to apply these settings in order to correctly display the texture on a shape geometry
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(0.008, 0.008);

  // Square

  const SQUARE_LENGTH = 80;

  const SquareShape = new THREE.Shape()
    .moveTo(0, 0)
    .lineTo(0, SQUARE_LENGTH)
    .lineTo(SQUARE_LENGTH, SQUARE_LENGTH)
    .lineTo(SQUARE_LENGTH, 0)
    .lineTo(0, 0);

  const EXTRUDE_SETTINGS = {
    depth: 8,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 1,
    bevelThickness: 1,
  };

  const MATERIALS = [
    { side: THREE.DoubleSide, map: texture },
    { color: 0x0040f0, side: THREE.DoubleSide },
    { color: 0x0040f0 },
  ];
  const POSITIONS = [175, 125, 75];

  const GEOMETRICS = [
    // flat shape with texture
    new THREE.ShapeBufferGeometry(SquareShape),
    // flat shape
    new THREE.ShapeBufferGeometry(SquareShape),
    // extruded shape
    new THREE.ShapeBufferGeometry(SquareShape, EXTRUDE_SETTINGS),
  ];

  container = document.createElement('div');
  document.body.appendChild(container);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 150, 500);
  scene.add(camera);

  const light = new THREE.PointLight(0xffffff, 0.8);
  camera.add(light);

  group = new THREE.Group();
  group.position.y = 50;
  scene.add(group);

  addShape(GEOMETRICS, MATERIALS, POSITIONS, 150, 100, 0, 0, 0, 0, 1); // addShape(shape, extrudeSettings, color, x, y, z, rx, ry, rz, s)

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    renderer.render(scene, camera);
  }
  //   init();
  animate();

  return <div></div>;
}
