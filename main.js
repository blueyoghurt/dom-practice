// function setInputAsTitle() {
//   var title = document.getElementById("title");
//   var input = document.getElementsByTagName("input")[0];
//
//   var value = input.value;
//   var result = 2 * value;
//
//   title.textContent = result;
// }

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");

  // attach a click handler to the set submitConvert button
  document.getElementById("submitConvert").addEventListener("click", function() {
    console.log('clicked');
    // Check which radio button is selected and apply formula accordingy
    var optionSelected = document.getElementsByClassName("radioButton");
      if (optionSelected[0].checked){
        convertToF();
        } else {
          convertToC();
      }
  });

  // attach a click handler to the clear button
  // document.getElementById("clear").addEventListener("click", function() {
  //   console.log("blue button clicked");
  //   var block = document.getElementById("block");
  //   block.classList.remove("red");
  //   block.classList.add("blue");
  // });



  // attach a click handler to the red button
  // document.getElementById("red").addEventListener("click", function() {
  //   console.log("red button clicked");
  //   var block = document.getElementById("block");
  //   block.classList.remove("blue");
  //   block.classList.add("red");
  // });

  function convertToC () {
    var input = document.getElementById("value-to-convert");
    var convertC = document.getElementById("results");

    var result = (input.value - 32) / 1.8;
    convertC.textContent = result;
    backgroundColor(result,input.value);
    console.log(result, " C");
  }

  function convertToF () {
    var input = document.getElementById("value-to-convert");
    var convertC = document.getElementById("results");

    var result = (input.value * 1.8) +32;
    convertC.textContent = result;
    backgroundColor(input.value,result);
    console.log(result, " F");
  }

  function backgroundColor(x,y) {
    if (x > 30 || y > 86) {
      document.getElementById("results-box").style.backgroundColor = "Red";
      console.log("turnRed");
    } else {
      document.getElementById("results-box").style.backgroundColor = "Blue";
      console.log("turnBlue");
      }

  }
});
