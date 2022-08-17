//PRINT N PRIME NUMBERS

let n,i,a,b;
n= parseInt(prompt("Give the Value"));

console.log(n);
a=0;


for (i=2;n>i;i++) {
    if (n%i==0) {
         a=1;
        break;
}
}  
if(a==1){

    console.log("Not prime number");
}
else{

    console.log("Prime Number");
}
   


