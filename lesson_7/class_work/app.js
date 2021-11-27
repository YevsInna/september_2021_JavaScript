// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, engine){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function (){
        console.log(`модель автомобіля - ${this.model}, виробник - ${this.producer},
         рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}км/год, об'єм двигуна - ${this.engine}.`)
    };
    this.increaseMaxSpeed = function (newSpeed){
        console.log(`нова швидкість - ${this.maxSpeed + newSpeed}км/год`)
    };
    this.changeYear = function (newValue){
        this.year = newValue;
        console.log(this.year)
    };
    this.addDriver = function (driver){
        this.driver = driver;
    }
};

let car = new Car('Passat B8', 'Volkswagen', 2021, 200, 2);
car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2020);
car.addDriver({name:'Inna', experience: 5})
console.log(car);



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2{
      constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
          this.drive = function (){
              console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
          };
          this.info = function (){
              console.log(`модель автомобіля - ${this.model}, виробник - ${this.producer},
         рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}км/год, об'єм двигуна - ${this.engine}.`)
          };
          this.increaseMaxSpeed = function (newSpeed){
              console.log(`нова швидкість - ${this.maxSpeed + newSpeed}км/год`)
          };
          this.changeYear = function (newValue){
              this.year = newValue;
              console.log(this.year)
          };
          this.addDriver = function (driver){
              this.driver = driver;
          };
    };
};
let car2 = new Car('Q5', 'Audi ', 2020, 190, 1.8);
car2.drive();
car2.info();
car2.increaseMaxSpeed(80);
car2.changeYear(2021);
car2.addDriver({name:'Max', experience: 10})
console.log(car2);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka{
    constructor(name, age,footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };
};
let popelushki = [];
popelushki.push(new Popelushka('Liza',20, 37),
                new Popelushka('Olya',16, 36),
                new Popelushka('Nadya',15, 33),
                new Popelushka('Marysya',21, 38),
                new Popelushka('Dasha',19, 36),
                new Popelushka('Lena',22, 35),
                new Popelushka('Bohdana',11, 34),
                new Popelushka('Larisa',62, 36),
                new Popelushka('Tamara',29, 42),
                new Popelushka('Kristina',30, 39),
)
console.log(popelushki);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name,age,shoes){
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    };
};
let prince = new Prince('William', 35, 39)
console.log(prince);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for(let item of popelushki){
    if(item.footSize === prince.shoes){
        console.log(`З принцом ${prince.name} повинна бути попелюшка ${item.name}`);
    };
};
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const popelushka = popelushki.find((value) => value.footSize === prince.shoes);
console.log(popelushka);