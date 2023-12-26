import * as THREE from "three";
import App from "../App";

export default class World {
  constructor() {
    this.app = new App();
    this.scene = this.app.scene;

    this.setSphere();
    this.loop();
  }

  setSphere() {
    this.sphereMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
    );

    this.scene.add(this.sphereMesh);
  }

  loop() {
    this.sphereMesh.rotation.y += 0.01;
  }
}
