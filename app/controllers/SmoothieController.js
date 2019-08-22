import SmoothieService from "../services/SmoothieService.js";


// Private
let _smoothieService = new SmoothieService()

function _draw() {
  let template = ``
  let smoothies = _smoothieService.Smoothie

  smoothies.forEach((smoothie, index) => {
    template += smoothie.getTemplate(index)
  })

  document.querySelector("#smoothie").innerHTML = template
}


// Public
export default class SmoothieController {
  constructor() {
    // console.log("Hello from Smoothie Controller")
    _draw()
  }

  addSmoothie(event) {
    event.preventDefault()
    let form = event.target
    let newSmoothie = {
      name: form.name.value
    }
    _smoothieService.addSmoothie(newSmoothie)
    _draw()
  }

  addTopping(event, smoothieIndex) {
    event.preventDefault()
    let form = event.target
    let newIngrediant = form.ingrediant.value
    _smoothieService.addIngrediant(newIngrediant, smoothieIndex)
    _draw()
  }

  deleteSmoothie(index) {
    _smoothieService.deleteSmoothie(index)
    _draw()
  }

  deleteIngrediant(smoothieIndex, ingrediantIndex) {
    _smoothieService.deleteIngrediant(smoothieIndex, ingrediantIndex)
    _draw()
  }
}