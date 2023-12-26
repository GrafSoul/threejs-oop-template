import { createStore } from "zustand/vanilla";

const assetsToLoad = [
  {
    id: "earth",
    type: "texture",
    path: "/textures/2k_earth_daymap.jpg/",
  },
];

const assetStore = createStore((set) => ({
  assetsToLoad,
  loadAssets: {},
  addLoadAsset: (asset, id) =>
    set((state) => ({
      loadedAssets: {
        ...state.loadedAssets,
        [id]: asset,
      },
    })),
}));

export default assetStore;
