let wrap = document.getElementsByClassName('wrap')[0];
let goodsFromLS = localStorage.getItem('goods');
let goods = JSON.parse(goodsFromLS);
// console.log(goods);

for (const good of goods) {
  let divElement = document.createElement('div');
  divElement.classList.add('card');
  let name = document.createElement('h3');
  name.innerText = `${good.name}`;
  let count = document.createElement('h3');
  count.innerText = `Кількість товару - ${good.count}`;
  let picture = document.createElement('img');
  picture.src = `${good.picture}`;

  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Видалити товар';

  let deleteItem = (id, arr) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          arr.splice(i, 1)
        };
      };
    };
  deleteBtn.addEventListener('click', () => {
    deleteItem (good.id, goods);
      localStorage.setItem('goods',JSON.stringify(goods))
    })

  wrap.appendChild(divElement);
  divElement.appendChild(name);
  divElement.appendChild(count);
  divElement.appendChild(picture);
  divElement.appendChild(deleteBtn);
};

let btnDelete = document.createElement('button');
btnDelete.innerText = 'Видалити все';
document.body.appendChild(btnDelete);

btnDelete.onclick = function (){
  localStorage.removeItem('goods');
  };




