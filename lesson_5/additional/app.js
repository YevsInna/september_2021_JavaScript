// - Дано натуральное число n. Выведите все числа от 1 до n.
// let n = 10;
// let i = 1;
// while (i<=n){
//     console.log(i)
//     i++;
// }


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.
// let a = 9;
// let b = 1;
// if (a<b) {
//     i = a;
//     while (i <= b) {
//         console.log(i)
//         i++;
//     };
// }else if (a>b)
// {
//     i=a;
//     while (i>=b){
//         console.log(i)
//         i--;
//     };
// };




// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//


// let numbers = [9,8,0,4];
// let index = 0;
// index = 1;
// index = 2;
// const foo = (arr,i)=>{
//     for (let j = 0; j < arr.length; j++) {
//         if (j===i){
//         arr[j]=arr[j+1];
        // arr[j+1] = arr[j-1]???????????????????????????????????????????
//         }
//     }
//     console.log(arr);
// };
// foo(numbers,index);




// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let array = [7,4,0,6,0,1,0];
const moveZeroToTheEnd = (arr)=>{
let newArray = []
    for (let i = 0; i < arr.length; i++) {
       if (arr[i]!==0){
         newArray.push(arr [i]);
       }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]=== 0){
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
}
moveZeroToTheEnd(array);

