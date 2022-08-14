//CHECK THE NUMBER IS PRIME OR NOT

let a,n,i;

n= parseInt(prompt("Give the Positive Value"));
a= true;

if (n=== 1) {
    console.log("1 is not prime number");
}


else if (n>1) {


    for (i=2; i<n; i++) {
        if (n%i== 0) {
            a= false;
            break;
        }
    }

    if (a) {
        console.log("This is Prime Number",n);
    } else {
        console.log("This Number is not Prime",n);
    }
}
