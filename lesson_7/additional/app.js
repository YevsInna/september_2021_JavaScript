// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//               street: 'Kulas Light',
//               suite: 'Apt. 556',
//               city: 'Gwenborough',
        //       zipcode: '92998-3874',
        //       geo: {
                //       lat: '-37.3159',
        //               lng: '81.1496'
//              }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
            //     name: 'Romaguera-Crona',
            //     catchPhrase: 'Multi-layered client-server neural-net',
            //     bs: 'harness real-time e-markets'
//               }
// }
function User(id,name,username,email,street,suite,city,zipcode,lat,lng,phone,website,companyName,catchPhrase,bs){
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {
        street:street,
        suite:suite,
        city:city,
        zipcode:zipcode}
        this.address.geo = {
            lat: lat,
            lng: lng
        };
    this.phone = phone;
    this.website = website;
    this.company = {
        name: companyName,
        catchPhrase:catchPhrase,
        bs:bs,
    };
};




// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
function Tag (titleOfTag,action,titleOfAttribut,actionOfAttribut,titleOfAttribut2,actionOfAttribut2){
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attributs = [
         {
            titleOfAttribut: titleOfAttribut,
            actionOfAttribut: actionOfAttribut,
    },
        {
            titleOfAttribut2: titleOfAttribut2,
            actionOfAttribut2: actionOfAttribut2,
        }
    ]
};
let tagA = new Tag('a','предназначен для создания ссылок','href',
    'Задает адрес документа, на который следует перейти.', 'title',
    'Добавляет всплывающую подсказку к тексту ссылки.');
console.log(tagA);

let tagDiv = new Tag('div', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого.', 'align',
    'Задает выравнивание содержимого тега div.', 'title',
    'Добавляет всплывающую подсказку к содержимому.');
console.log(tagDiv);

let tagH1 = new Tag ('h1', 'представляет собой наиболее важный заголовок первого уровня',
    'align', 'Определяет выравнивание заголовка.', 'class',
    'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
console.log(tagH1);

let tagSpan = new Tag('span', 'предназначен для определения строчных элементов документа.', 'id',
    'Указывает имя стилевого идентификатора.', 'title', 'Описывает содержимое элемента в виде всплывающей подсказки.');
console.log(tagSpan);

let tagInput = new Tag ('input', 'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом input предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.',
    'value', 'Значение элемента.', 'placeholder', 'Выводит подсказывающий текст.');
console.log(tagInput);

let tagForm = new Tag('form', 'Связывает поле с формой по её идентификатору.', 'id',
    'Указывает имя стилевого идентификатора.', 'style', 'Применяется для определения стиля элемента с помощью правил CSS.');
console.log(tagForm);

let tagOption = new Tag('option', ' определяет отдельные пункты списка, создаваемого с помощью контейнера select.',
    'label', 'Указание метки пункта списка.', 'value',
    'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.');
console.log(tagOption);

let tagSelect = new Tag('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
    'name', 'Имя элемента для отправки на сервер или обращения через скрипты.',
    'required', 'Список обязателен для выбора перед отправкой формы.');
console.log(tagSelect);