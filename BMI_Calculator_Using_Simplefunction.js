//BMI Calculator Using Simple Fuction
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight,height){
    var bmi=weight/Math.pow(height,2) //Math.pow(height,2) = height*height
    return Math.round(bmi)

}
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

 

bmi should equal 20 when it's rounded to the nearest whole number.*/
