//QUARDTIC EQUATION
let a,b,c,root1,x,y,z;
a=parseInt(prompt("Give the A Value"));
b=parseInt(prompt("Give the B Value"));
c=parseInt(prompt("Give the C Value"));

root1=((b**2)-(4*a*c));

x=Math.sqrt(root1);

y=(-b+x)/(2*a);
z=(-b-x)/(2*a);
console.log("Positive answer is",y);
console.log("Negative answer is",z);

