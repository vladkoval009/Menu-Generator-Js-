const menu = {
    //Method 1
    addDishToCourse(courseName,dishName,dishPrice){
    const dish = {
      name: courseName,
      price: dishName
    };
    return this._courses[courseName].push(dish);
  },
   //Method 2
    getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return(dishes[randomIndex])

  },
   //Method 3
   generateRandomMeal() {
     const appetizers = this.getRandomDishFromCourse('appetizers');
     const mains = this.getRandomDishFromCourse('mains');
     const desserts = this.getRandomDishFromCourse('desserts');
     const totalPrice = appetizers.price + mains.price + desserts.price;
     return(`Your meal is ${appetizers.name},${mains.name}, and ${desserts.name}, and the total price is ${totalPrice}`);
   },

   //Arrays to store the random choices.

  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers(){
     return (_courses.appetizers)
  },
  get mains(){
     return (_courses.mains)
  },
  get desserts(){
     return (_courses.desserts)
  },
  
  set appetizers(appetizerIn){
    this._courses.appetizers = appetizerIn
  },
  set main(mainIn){
    this._courses.main = mainIn
  },
  set desserts(dessertIn){
    this._courses.desserts = dessertsIn
  },
  //Empty getter
  get courses(){
    return(
      {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    )
  }
}

menu.addDishToCourse('appetizers','salad', 4.00);
menu.addDishToCourse('mains','steak', 24.00);
menu.addDishToCourse('desserts','cake', 5.00);

const meal = menu.generateRandomMeal();

console.log(meal)
