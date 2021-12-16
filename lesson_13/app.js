// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)

// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
let goods = document.forms.goods;
goods.onsubmit = function (e){
    e.preventDefault();
    let name = this.name.value;
    let count = this.count.value;
    let picture = this.picture.value;
    let good = {name, count, picture};
    let goodsArray = JSON.parse(localStorage.getItem('goods'));
    if (!goodsArray){
        goodsArray = [];
        goodsArray.push(good);
        localStorage.setItem('goods', JSON.stringify(goodsArray));
    } else{
        goodsArray.push(good);
        localStorage.setItem('goods', JSON.stringify(goodsArray));
    };
};


// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html,
// при переході на який відобразити на сторінці всі товари.

// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар





