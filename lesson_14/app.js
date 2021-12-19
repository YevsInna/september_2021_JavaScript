// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі
function getUp (isWorkingDay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (isWorkingDay){
                resolve('It is time to get up!')
            }
            reject('Today is weekend');
        }, 1000);
    });
};
function doMorningExercises(exercise){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (exercise){
                resolve(`Do ${exercise}`);
            };
            reject ('No yoga')
        }, 2000);
    } );
};
function takeShower(shower){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(shower);
            },1500);
    });
};
function goEat(food){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (food){
                resolve (`I am eating ${food}`)
            };
            reject('Today without breakfast');
        }, 1300);
    });
};
function goWork(job){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (job){
                resolve('I am working')
            };
            reject('Today is weekend');

        },4000);
    });
};
function study(tasks){
    return new Promise((resolve) => {
        setTimeout(()=>{
          resolve('I am studying every day');
        },3000);
    });
};
function goSleep(time){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (time>=23){
                resolve('It is time to sleep');
            };
            reject ('It is not time to sleep yet');
        },1600);
    });
};

async function routine(){
    try{
        const morning = await getUp(true);
        console.log(morning);
        const sport = await doMorningExercises('yoga!!!');
        console.log(sport);
        const bathroom = await takeShower('Wash, brush teeth, take a shower');
        console.log(bathroom);
        const breakfast = await goEat('coffee with sandwich');
        console.log(breakfast);
        const result = await goWork(true);
        console.log(result);
        const dinner = await goEat('pasta and salad');
        console.log(dinner);
        const lessons = await study('I am studying every day');
        console.log(lessons);
        const night = await goSleep(20);
        console.log(night);

    }
    catch(e){
        console.error(e)
    }
};
routine();

// getUp(true)
//     .then(morning=>{
//         console.log(morning);
//         return doMorningExercises('yoga!!!')
//     })
//     .then(sport=>{
//         console.log(sport);
//         return takeShower('Wash, brush teeth, take a shower');
//     })
//     .then(bathroom =>{
//         console.log(bathroom);
//         return goEat('coffee with sandwich')
//     })
//     .then(breakfast=>{
//         console.log(breakfast);
//         return goWork(true);
//     })
//     .then(result=>{
//         console.log(result)
//         return goEat('pasta and salad')
//     })
//     .then(dinner=>{
//         console.log(dinner);
//         return study()
//     })
//     .then(lessons=>{
//         console.log(lessons);
//         return goSleep(21)
//     })
//     .then(night=>{
//         console.log(night)
//     })
//     .catch(reason => {
//         console.error(reason, 'ERROR')
//     });





// Код з лекції:
// const p1 = new Promise((resolve, reject) => {
//   reject(1)
// })
//
// const p2 = new Promise(resolve => {
//   resolve(2)
// })

// Promise.all([p2, p1])
//   .then(res => {
//     console.log(res);
//   })
//   .catch(e => {
//     console.log(' ERRRRR', e)
//   })

// Promise.allSettled([p2, p1])
//   .then(res => {
//     console.log(res);
//   })


