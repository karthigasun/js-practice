let x=[];
let n,s,sum,avg;

s=0

n=parseInt(prompt("value"))

for(i=0; i<n; i++){

    x[i]=parseInt(prompt("value"));

    sum=x[i]+s;
    s=sum;

}

console.log(x);
console.log(sum);

