function triangleTracker() {
  firstInput = document.getElementById("input1").value;
  secondInput = document.getElementById("input2").value;
  thirdInput = document.getElementById("input3").value;
  //
  if (
    (firstInput === secondInput && secondInput === thirdInput) ||
    (thirdInput === firstInput && firstInput === secondInput) ||
    (secondInput === thirdInput && thirdInput === firstInput)
  ) {
    document.getElementById("result").innerHTML = "Equilateral ";
  }
}
