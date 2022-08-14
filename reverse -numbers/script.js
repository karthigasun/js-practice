// Numbers in Reverse

let a,sum,b,c;

    a=parseInt(prompt("Give the Value"));
    sum = 0;
    while(a > 0)
    {
      b = a % 10;
      sum = sum * 10 + b;
      a = parseInt(a / 10);
    }
    console.log(sum);
