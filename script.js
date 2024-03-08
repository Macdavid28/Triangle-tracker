function triangleTracker() {
  const firstInput = parseInt(document.getElementById("input1").value);
  const secondInput = parseInt(document.getElementById("input2").value);
  const thirdInput = parseInt(document.getElementById("input3").value);
  // Not a  triangle
  if (
    (firstInput === 0 && secondInput === 0 && thirdInput === 0) ||
    firstInput + secondInput <= thirdInput ||
    secondInput + thirdInput <= firstInput ||
    thirdInput + firstInput <= secondInput
  ) {
    document.getElementById("result").innerHTML = "Not a triangle";
  }
  // Equilateral Triangle
  else if (
    (firstInput === secondInput && secondInput === thirdInput) ||
    (thirdInput === firstInput && firstInput === secondInput) ||
    (secondInput === thirdInput && thirdInput === firstInput)
  ) {
    document.getElementById("result").innerHTML = "Equilateral Triangle";
  }
  // Isosceles Triangle
  else if (
    firstInput === secondInput ||
    secondInput === thirdInput ||
    firstInput === thirdInput
  ) {
    document.getElementById("result").innerHTML = "Isosceles Triangle";
  }
  // Scalene Triangle
  else if (
    (firstInput != secondInput &&
      secondInput != thirdInput &&
      firstInput != thirdInput &&
      firstInput + secondInput > thirdInput) ||
    secondInput + thirdInput > firstInput ||
    thirdInput + secondInput > firstInput
  ) {
    console.log("Scalene Triangle");
    document.getElementById("result").innerHTML = <i>"Scalene Triangle"</i>;
  }
}
