//Fizz Buzz Game
var add=[];
var count=1;

function Fizzbuzz(){
    
    if(count % 3===0 && count % 5===0)
{
    add.push("FizzBuzz");
}
    else if(count%3===0){
         add.push("Fizz")

}else if(count%5===0){
     add.push("Buzz")

}else{
      add.push(count);
}
 count++;
 console.log(add);
   
}
