// let a = 1;
// function global() {
//     console.log(a);
//     function interno() {
//         console.log(a);
//     }
//     interno();
// }

function local() {
    var a = 2;
    function interna() {
        console.log(a);
    }
    console.log(a);
    interna();
}

local();
console.log(a);