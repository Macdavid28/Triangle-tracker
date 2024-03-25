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
    (secondInput === thirdInput &&
      thirdInput === firstInput &&
      firstInputSquared + secondInputSquared > thirdInputSquared &&
      secondInputSquared + thirdInputSquared > firstInputSquared &&
      firstInputSquared + thirdInputSquared > secondInputSquared)
  ) {
    document.getElementById("result").innerHTML = "Acute Equilateral Triangle";
  }

  // Isosceles Triangle
  else if (
    firstInput === secondInput ||
    secondInput === thirdInput ||
    firstInput === thirdInput
  ) {
    if (
      firstInputSquared + secondInputSquared > thirdInputSquared &&
      secondInputSquared + thirdInputSquared > firstInputSquared &&
      firstInputSquared + thirdInputSquared > secondInputSquared
    ) {
      document.getElementById("result").innerHTML = "Acute Isosceles Triangle";
    } else if (
      firstInputSquared + secondInputSquared === thirdInputSquared ||
      secondInputSquared + thirdInputSquared === firstInputSquared ||
      firstInputSquared + thirdInputSquared === secondInputSquared
    ) {
      document.getElementById("result").innerHTML =
        "Right Angled  Isosceles Triangle";
    } else if (
      firstInputSquared + secondInputSquared < thirdInputSquared ||
      secondInputSquared + thirdInputSquared < firstInputSquared ||
      firstInputSquared + thirdInputSquared < secondInputSquared
    ) {
      document.getElementById("result").innerHTML = "Obtuse Isosceles Triangle";
    } else {
      document.getElementById("result").innerHTML = "Isosceles Triangle";
    }
  }
  // // Scalene Triangle
  else if (
    (firstInput != secondInput &&
      secondInput != thirdInput &&
      firstInput != thirdInput &&
      firstInput + secondInput > thirdInput) ||
    secondInput + thirdInput > firstInput ||
    thirdInput + secondInput > firstInput
  ) {
    if (
      firstInputSquared + secondInputSquared > thirdInputSquared &&
      secondInputSquared + thirdInputSquared > firstInputSquared &&
      firstInputSquared + thirdInputSquared > secondInputSquared
    ) {
      document.getElementById("result").innerHTML = "Acute Scalene Triangle";
    } else if (
      firstInputSquared + secondInputSquared === thirdInputSquared ||
      secondInputSquared + thirdInputSquared === firstInputSquared ||
      firstInputSquared + thirdInputSquared === secondInputSquared
    ) {
      document.getElementById("result").innerHTML =
        "Right Angled  Scalene Triangle";
    } else if (
      firstInputSquared + secondInputSquared < thirdInputSquared ||
      secondInputSquared + thirdInputSquared < firstInputSquared ||
      firstInputSquared + thirdInputSquared < secondInputSquared
    ) {
      document.getElementById("result").innerHTML = "Obtuse Scalene Triangle";
    } else {
      document.getElementById("result").innerHTML = "Scalene Triangle";
    }
  }
}
