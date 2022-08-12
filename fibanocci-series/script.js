//Print fibanocci series


let a,b,c,n;
a=0;
b=1
n=parseInt(prompt("Give the value"));
console.log(a);
console.log(b);


for(i=0;i<n-2;i++){
    c= (a+b);
    
    a=b;
    b=c;

    console.log(c);
}

