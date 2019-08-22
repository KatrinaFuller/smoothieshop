import SmoothieService from "../services/SmoothieService.js";


// Private
let _smoothieController = new SmoothieService()


// Public
export default class SmoothieController {
  constructor() {
    console.log("Hello from Smoothie Controller")
  }
}