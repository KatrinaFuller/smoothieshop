import SmoothieController from "./controllers/SmoothieController.js";


class App {
  constructor(data) {
    console.log("Hello from main.js")
    this.controllers = {
      smoothieController: new SmoothieController()
    }
  }
}

window["app"] = new App()