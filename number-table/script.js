//PRINT TABLE OF GIVEN NUMBER

let a,b,c;
a=parseInt(prompt("Give the Value of Table"));
c=parseInt(prompt("Give the Value to Number"))

for(i=1;i<=c;i++){
    
    b=(a*i);
    console.log(i,"*",a,"=",b);
}