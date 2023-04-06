function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, resultado) {
    return resultado(num1, num2);
}

console.log(calc(4,5,sum));

// setTimeout es un callback porque recibe una funcion como args
setTimeout(function () {
    console.log("Hola JavaScript");
}, 5000)

function gretting(name, lastname) {
    console.log(`Hola ${name} ${lastname}`);
}

// setTimeout(gretting, 2000, "Alexis", "Hernandez");

function execCallback(callback, time, name, lastname) {
    console.log(setTimeout(callback, time, name, lastname));
}

execCallback(gretting, 2000, "Alexis", "Tenorio");