import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

import assetStore from "./AssetStore";
export default class AssetLoader {
  constructor() {
    this.assetStore = assetStore.getState();
    this.assetsToLoad = this.assetStore.assetsToLoad;
    this.addLoadAsset = this.assetStore.addLoadAsset;

    this.instantiateLoader();
    this.startLoading();
  }

  instantiateLoader = () => {
    this.dracoLoader = new DRACOLoader();
    this.dracoLoader.setDecoderPath("/draco/");
    this.gltfLoader = new GLTFLoader();
    this.gltfLoader.setDRACOLoader(this.dracoLoader);
    this.textureLoader = new THREE.TextureLoader();
  };

  startLoading = () => {
    this.assetsToLoad.forEach((asset) => {
      if (asset.type === "texture") {
        this.textureLoader.load(asset.path, (loadedAsset) => {
          this.addLoadAsset(loadedAsset, asset.id);
        });
      }
    });

    this.assetsToLoad.forEach((asset) => {
      if (asset.type === "model") {
        this.gltfLoader.load(asset.path, (loadedAsset) => {
          this.addLoadAsset(loadedAsset, asset.id);
        });
      }
    });
  };
}
