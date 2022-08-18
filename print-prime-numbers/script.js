// //PRINT N PRIME NUMBERS

let a = parseInt(prompt('Enter lower number: '));
let b= parseInt(prompt('Enter higher number: '));


for (let i=a; i <=b; i++) {
    let c = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            c= 1;
            break;
        }
    }


    if (i > 1 && c == 0) {
        console.log(i);
    }
}