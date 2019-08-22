

export default class Smoothie {
  constructor(data) {
    this.name = data.name
    this.size = data.size
    this.price = data.price
    this.ingrediants = data.ingrediants
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `
      <div class="col-4">
          <h1>name</h1>
          <h4>size</h4>
          <h4>price</h4>
          <ul>Ingrediants
            <li>Peanut Butter</li>
            <li>Banana</li>
            <li>Chocolate</li>
          </ul>
          <img src="imgUrl" alt="">
        </div>
    `
  }
}