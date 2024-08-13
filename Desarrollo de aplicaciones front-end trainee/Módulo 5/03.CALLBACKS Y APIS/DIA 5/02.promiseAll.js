const promise1 = 1;
const promise2 = Promise.resolve(2);
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 1000);
});

Promise.all([promise1, promise2, promise3])
    .then(response => {
        for (let i in response) {
            console.log(response[i]);
        }
    })