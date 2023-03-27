class Hamburger {
  
 static stuffing = {

  TOPPING_MAYO:{
  type: "TOPPING_MAYO",
  price: 300,
  ccal: 400,
},

  TOPPING_SPICE:{
  type: "TOPPING_SPICE",
  price: 500,
  ccal: 700,
}
 }

constructor({name = "burger", size = m, price = 400} = {}) {
this._name = name;  
this._size = size;
this._price = price;
}
get name() {
  return this._name
}

get size() {
  return this._size
  };

get price() {
    return this._price
    };

set name(newName) {
  this._name = newName;
}   

set size(newSize){
  this._size = newSize;
};

set price(newPrize){
  this._price = newPrize;
}

 addSize(newSize){
  this.size.push(newSize)
  }

 removeSize(sizeToRemove) {
  this.size.splice(this.size.indexOf(sizeToRemove), 1);
    }

  getTotalPrice(){
  return this.price * counter ;
    }  
  }


const ham = new Hamburger({name: cheesburger, size: s, price: 200});
console.log(ham);


//addTopping(){} // Добавляє добавку до гамбургера. Можна добавити декілька добавок при умові, що вони валідні
//removeTopping(){} //Видалити добавку, при умові, що вона раніше була добавлена.
//getStuffing(){} //геттер, має повернути this.toppings = [....]
//calculatePrice(){} // взнати вартість замовлення
//calculateCalories(){} //взнати калорійність гамбургера
//showError(){} // метод, який може показувати 2 помилки - якщо передали невірний розмір або начинка не існує 
                    //(При видалені або додаванні)
                    





















                