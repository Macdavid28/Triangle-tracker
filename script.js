function triangleTracker() {
  const firstInput = parseInt(document.getElementById("input1").value);
  const secondInput = parseInt(document.getElementById("input2").value);
  const thirdInput = parseInt(document.getElementById("input3").value);
  const firstInputSquared = Math.pow(firstInput, 2);
  const secondInputSquared = Math.pow(secondInput, 2);
  const thirdInputSquared = Math.pow(thirdInput, 2);
  // Not a  triangle
  if (
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
    document.getElementById("result").innerHTML = "Scalene Triangle";
  }
  //  Acute Triangle
  if (
    firstInputSquared + secondInputSquared > thirdInputSquared &&
    secondInputSquared + thirdInputSquared > firstInputSquared &&
    firstInputSquared + thirdInputSquared > secondInputSquared
  ) {
    document.getElementById("result").prepend("Acute ");
  }
  // Right Angle
  if (
    firstInputSquared + secondInputSquared === thirdInputSquared ||
    secondInputSquared + thirdInputSquared === firstInputSquared ||
    firstInputSquared + thirdInputSquared === secondInputSquared
  ) {
    document.getElementById("result").prepend("Right Angled ");
  } else {
    document.getElementById("result").prepend("Obtuse ");
  }
}
