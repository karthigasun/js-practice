//ASCENDING AND DESCENDING ORDER OF 3 NUMBERS
let a,b,c;

a=parseInt(prompt("Give the Value"));
b=parseInt(prompt("Give the Value"));
c=parseInt(prompt("Give the Value"));

if((a>b)&&(a>c)){
    if(b>c){
        console.log("The Ascending order is",c,b,a);
        console.log("The Dsecending order is",a,b,c);
    }

    else{
        console.log("The Ascending order is",a,b,c);
        console.log("The Dsecending order is",c,b,a);
    } 
}
if((b>a)&&(b>c)){
    if(c>a){
        console.log("The Ascending order is",a,c,b);
        console.log("The Dsecending order is",b,c,a);
    }

else{
        console.log("The Ascending order is",b,c,a);
        console.log("The Dsecending order is",a,c,b);
}
}
if((c>a)&&(c>b)){
    if(b>a){
        console.log("The Ascending order is",a,b,c);
        console.log("The Dsecending order is",c,b,a);
    }

else{
        console.log("The Ascending order is",c,b,a);
        console.log("The Dsecending order is",a,b,c);
}
}