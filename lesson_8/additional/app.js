// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let allClasses = [];
function reCall(startElement){
    if (startElement.children.length){
        for (const item of startElement.children) {
            if (item.classList.length){
                for (const itemElement of item.classList) {
                    allClasses.push(itemElement)
                };
            };
            reCall(item);
        };
    };
};
reCall(document.body);
console.log(allClasses);

