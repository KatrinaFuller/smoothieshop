import SmoothieService from "../services/SmoothieService.js";


// Private
let _smoothieController = new SmoothieService()

function _draw() {
  let template = ``
  let smoothies = _smoothieController.Smoothie

  smoothies.forEach(smoothie => {
    template += smoothie.Template
  })

  document.querySelector("#smoothie").innerHTML = template
}


// Public
export default class SmoothieController {
  constructor() {
    console.log("Hello from Smoothie Controller")
  }
}