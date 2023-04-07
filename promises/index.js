// Promesas (3 estados: pendientes, cumplido, rechazado)

const promise = new Promise(function (resolve, reject) {
    resolve("Bien!");
});

const cows = 5;

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm!`);
    }else {
        reject("There is no cows on the farm!");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log("Finally");
});