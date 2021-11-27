// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname , email, phone){
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone

};
let users = [];
users.push(new User(1,'Inna', 'Yevsieienkova', 'evs@gmal.com', 380506789452),
            new User(2,'Max', 'Yevsieienkov', 'max@gmal.com', 380506789452),
            new User(3,'Ivan', 'Ivanov', 'ivan@gmal.com', 380506789452),
            new User(4,'Serg', 'Sergeev', 'serg@gmal.com', 380506789452),
            new User(5,'Piter', 'Piterov', 'piter@gmal.com', 380506789452),
            new User(6,'Jonh', 'Jonkovych', 'jonh@gmal.com', 380506789452),
            new User(7,'Ann', 'Ankovych', 'ann@gmal.com', 380506789452),
            new User(8,'Lora', 'Lorko', 'lora@gmal.com', 380506789452),
            new User(9,'Din', 'Dinko', 'din@gmal.com', 380506789452),
            new User(10,'Kat', 'Katenko', 'kat@gmal.com', 380506789452),

    )
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filtrUsers = (arr)=>{
    return arr.filter((value)=>value.id%2===0)
}
console.log(filtrUsers(users));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortUsers = (arr) => {
  return arr.sort((a,b)=>a.id -b.id)
};
console.log(sortUsers(users));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client{
       constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];
clients.push(new Client(1, 'Oleh', 'Tghjl', 'ahj@fgh.com', 380507459862, ['milk', 'water']),
            new Client(2,'Olya', 'Rdwes', 'etuy@hkj.com', 380507459862, ['tickets', 'bag', 'glass']),
            new Client(3,'Ivan', 'Ivanov', 'ivan@gmal.com', 380506789452, ['smartphone', 'toys', 'wine', 'sweets']),
            new Client(4,'Serg', 'Sergeev', 'serg@gmal.com', 380506789452, ['rise', 'pasta', 'pizza','beer']),
            new Client(5,'Piter', 'Piterov', 'piter@gmal.com', 380506789452, ['dress', 'TV','cat']),
            new Client(6,'Jonh', 'Jonkovych', 'jonh@gmal.com', 380506789452, ['shampoo','fairy','ariel','mascara']),
            new Client(7,'Ann', 'Ankovych', 'ann@gmal.com', 380506789452, ['umbrella', 'pen','coat']),
            new Client(8,'Lora', 'Lorko', 'lora@gmal.com', 380506789452, ['salt', 'bread', 'cheese','sausage']),
            new Client(9,'Din', 'Dinko', 'din@gmal.com', 380506789452, ['chandelier', 'carpet', 'dishes', 'books']),
            new Client(10,'Kat', 'Katenko', 'kat@gmal.com', 380506789452, ['pillow', 'blanket', 'curtains'])
    );
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortClients = (arr)=>{
    return arr.sort((a,b)=>a.order.length-b.order.length)
};
console.log(sortClients(clients));


