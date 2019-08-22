import Smoothie from "../models/Smoothie.js";


// Private
let _state = {
  smoothies: [new Smoothie({
    name: "Peanut Butter Cup",
    size: "Medium",
    price: 5,
    ingrediants: ["peanut butter", "banana", "chocolate"],
  })]
}


// Public
export default class SmoothieService {
  deleteIngrediant(smoothieIndex, ingrediantIndex) {
    _state.smoothies[smoothieIndex].ingrediants.splice(ingrediantIndex, 1)
    this.saveSmoothies()
  }

  deleteSmoothie(index) {
    _state.smoothies.splice(index, 1)
    this.saveSmoothies()
  }

  addIngrediant(newIngrediant, smoothieIndex) {
    _state.smoothies[smoothieIndex].ingrediants.push(newIngrediant)
    this.saveSmoothies()
  }
  addSmoothie(newSmoothie) {
    _state.smoothies.push(new Smoothie(newSmoothie))
    this.saveSmoothies()
  }

  constructor() {
    // console.log("Hello from Smoothie Service")
    this.loadSmoothies()
  }

  get Smoothie() {
    return _state.smoothies.map(smoothie => new Smoothie(smoothie))
  }

  loadSmoothies() {
    let savedSmoothies = JSON.parse(localStorage.getItem("smoothies"))
    if (savedSmoothies) {
      _state.smoothies = savedSmoothies
    }
  }

  saveSmoothies() {
    localStorage.setItem("smoothies", JSON.stringify(_state.smoothies))
  }
}