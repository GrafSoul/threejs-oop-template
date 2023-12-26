import * as THREE from "three";

import Camera from "./Camera";
import Renderer from "./Renderer";

import World from "./World/World";

import Loop from "./Utils/Loop";
import Resize from "./Utils/Resize";

import AssetLoader from "./Utils/AssetLoader";
import Preloader from "./UI/Preloader";

let instance = null;
export default class App {
  constructor() {
    if (instance) return instance;
    instance = this;

    // Canvas
    this.canvas = document.querySelector(".threejs");
    this.scene = new THREE.Scene();

    // Assets Loader & Preloader
    this.assetLoader = new AssetLoader();
    this.preloader = new Preloader();

    // World
    this.world = new World();

    // Camera & Renderer
    this.camera = new Camera();
    this.renderer = new Renderer();

    // Utils
    this.loop = new Loop();
    this.resize = new Resize();
  }
}
