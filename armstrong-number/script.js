//CHECK THE NUMBER IS ARMSTRONG OR NOT

let a,n,sum,rem;

sum=0;

n=parseInt(prompt("Give 3 digit value"));
a=n;

while(a>0){

   rem=a%10;

    sum +=rem*rem*rem;

    a=parseInt(a/10);

}

// console.log(n);
if(sum==n){

    console.log("The Number is Armstrong",n);
}
else{
    console.log("The Number is Not Armstrong",n)
}
