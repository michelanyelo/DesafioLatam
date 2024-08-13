const randomNumber = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}

// primera promesa
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(1) }, randomNumber(500, 2000));
});

// segunda promesa
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(2) }, randomNumber(500, 2000));
});
// tercera promesa
const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(3) }, randomNumber(500, 2000));
});

Promise.race([promesa1, promesa2, promesa3])
    .then(response => {
        console.log(response);
    })