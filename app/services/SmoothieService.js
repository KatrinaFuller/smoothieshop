import Smoothie from "../models/Smoothie.js";


// Private
let _state = {
  smoothies: [new Smoothie({
    name: "Peanut Butter Cup",
    size: "Medium",
    price: 5,
    ingrediants: ["peanut butter", "banana", "chocolate"],
    imgUrl: "https://www.pumpkinnspice.com/wp-content/uploads/2015/11/chocolate-peanut-butter-cup-smoothie1.jpg"
  })]
}


// Public
export default class SmoothieService {
  constructor() {
    console.log("Hello from Smoothie Service")
  }

  get Smoothie() {
    return _state.smoothies.map(smoothie => new Smoothie(smoothie))
  }
}