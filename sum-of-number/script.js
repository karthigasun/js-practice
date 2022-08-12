//TO FIND SUM OF NUMBER

let n,rem,sum;
n=parseInt(prompt("Give the value"));
sum=0;

while(n>0){
    n=parseInt(n);
    rem=n%10;
    sum=sum+rem;
    n=n/10;
}
console.log(sum);