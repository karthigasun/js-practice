//Print grade based on the students marks

let a;

a=parseInt(prompt("Give the Marks"));

if(a==100){
    console.log("The Grade A+",a)
}

else if(a>=90){
    
    console.log("The Grade Is A:",a)
}
else if(a>=80){
    console.log("The Grade Is B:",a);
}

else if(a>=60){
    console.log("The Grade Is C:",a);

}
else if(a>=35){
    console.log("The Grade is D",a);
}
else{
    console.log("Fail",a)
}

