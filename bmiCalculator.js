//BMI calculator


var bmi = bmiCalculator(123, 2);
function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);

  if (bmi < 18.5) {
    alert("Your BMI is " + bmi + ", so you are underweight.");
  }

  if (bmi === 18.5 && 24.9) {
    alert("Your BMI is " + bmi + ", so you have normal weight.");
  }
  if (bmi > 24.9) {
    alert("Your BMI is " + bmi + ", so you are overweight.");
  }
  else {
    return bmiCalculator;
  }
}