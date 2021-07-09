//buy milk using function

function getmilk(money){
console.log("buy"+ calcbottles(money,1.5)+"bottle of milk");
return calcchange(money,1.5);
}
function calcbottles(startingmoney,costperbottle){
    var numberofbottle=Math.floor(startingmoney/costperbottle);
    return numberofbottle;
}
function calcchange(startingamount,costperbottle){
    var change= startingamount % costperbottle;
    return change;
}
console.log("Hello" + getmilk(5) + "change");