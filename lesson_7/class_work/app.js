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
class Car{
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
let car2 = new Car('Q5', 'Audi ', 2020, 190, 2);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку