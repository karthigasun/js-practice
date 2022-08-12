//TO CHECK WHETHER NUMBER IS MULTIPLE OF 7 COMPARE TWO NUMBERS

let a,b;

a=parseInt(prompt("Give the Value"));

b=parseInt(prompt("Give the Value"));

if(a>b){
    console.log("A is Greater",a);
}
else{
    console.log("B is Greater",b);
}

if(a%7==0){
    console.log("The Number A is Multiple of 7",a);
}
else{
    console.log("The NumberA is Not Multiple of 7",a);
}

if(b%7==0){
    console.log("The Number B is  Multiple of 7",b);
}
else{
    console.log("The Number B is Not Multiple of 7",b);
}