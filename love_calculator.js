//Love calculator in javascript
// 
var he_name= prompt("Enter your name");
var she_name= prompt("Enter your name");
var lovecal = he_name+she_name;
var love=Math.random(lovecal)*100;
var result=Math.floor(love)+1;
if(result>75){
	alert("Your Love Score is "+ result + " % " + "Love to Each other");
}else
{
	alert("Your Love Score is "+ result + " % ");
}
