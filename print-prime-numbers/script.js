//PRINT N PRIME NUMBERS

let n,i,a,b;
n= parseInt(prompt("Give the Value"));

console.log(n);


for (i=0; i <=n; i++) {
    a=0;

    // looping through 2 to user input number
    for (b=2;b<i;b++) {
        if (i%b==0) {
            a=1;
            break;
        }
    }  

    // if number greater than 1 and not divisible by other numbers
    if (i>1 &&a==0) {
        console.log(i);
    }
}    
