

export default class Smoothie {
  constructor(data) {
    this.name = data.name
    this.size = data.size || null
    this.price = data.price || "$5"
    this.ingrediants = data.ingrediants || []
    // this.imgUrl = data.imgUrl
  }

  getTemplate(index) {
    let template =
      `
      <div class="col-sm-4 border">
          <h1>${this.name}</h1>
          <h4>Size: ${this.size}</h4>
          <h4>Price: ${this.price}</h4>
          <ul>`
    template += this.drawIngrediants(index)
    template += `    </ul>
        <form onsubmit="app.controllers.smoothieController.addIngrediant(event, ${index})">
          <div class="form-group">
            <label for="ingrediant">ingrediant</label>
            <input type="text" class="form-control" name="ingrediant" placeholder="smoothie ingrediant" required>
            </div>
            <button type="submit"> + </button>
          </form>
          <button type="button" onclick="app.controllers.smoothieController.deleteSmoothie(${index})"> X </button>  
      </div>
    `
    return template
  }

  drawIngrediants(smoothieIndex) {
    let ingrediantTemplate = ""
    this.ingrediants.forEach((t, ingrediantIndex) => {
      ingrediantTemplate += `<li>${t}<span onclick="app.controllers.smoothieController.deleteIngrediant(${smoothieIndex}, ${ingrediantIndex})"> X </span></li>`
    });
    return ingrediantTemplate
  }
}