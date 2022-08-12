//Print factorial series

let x,n,fac; 
n=parseInt(prompt("Give the value of Number"));
fac=1;

for(i=n;i>0;i--){

    x=(i*fac);

    fac=x;
    
}
console.log(fac);

