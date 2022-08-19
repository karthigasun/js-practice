//CHECK THE NUMBER IS PRIME OR NOT

let a,n,i;

n= parseInt(prompt("Give the Positive Value"));
a=0;

if (n===1) {
    console.log("1 is not prime number");
}


else if (n>1) {


    for (i=2; i<n; i++) {
        if (n%i== 0) {
            a=1;
            break;
        }
    }

    if (a==1) {
        console.log("This is not a Prime Number",n);
    } else {
        console.log("This is Prime Number",n);
    }
}
