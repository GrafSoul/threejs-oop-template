import { sizesStore } from "../Utils/Store";

export default class Resize {
  constructor() {
    this.setState = sizesStore.setState;

    const { setState } = sizesStore;

    window.addEventListener("resize", () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
      });
    });
  }
}
