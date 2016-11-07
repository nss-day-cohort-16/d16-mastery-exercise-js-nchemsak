function TreeObj() {
  // The object should have two key/value pairs. */
  var obj = {
    /* A key that specifies the height of the pine tree.
    The value for the height of the tree should be from user input in a `<input
    type="text">` field in the DOM. */
    height: document.getElementById("height").value,

    /* A key that specifies which character to use to build the pine tree.
    The character to use should be from user input in a `<input type="text">`
    field in the DOM. */
    decoration: document.getElementById("decoration").value
  }
      tree(obj);
}

function tree(obj) {
  console.clear();
  /* If either of the input fields does not have a value in it when the user
  presses the enter key, or presses the button, then display an alert stating
  that both fields must have a value.*/
  if (obj.height === "" || obj.decoration === "") {
    alert("Both fields must have a value!");
  } else {
    for (var i = 0; i < obj.height; i++) {
      var newDecoration = 2 * i + 1;
      var space = (obj.height - 1) - i;
      console.log(" ".repeat(space) + obj.decoration.repeat(newDecoration));
    }
  }
}

// SUBMIT BUTTON
document.getElementById("GrowTree").addEventListener("click", TreeObj);

//SUBMIT BY "PRESSING ENTER"
function enter(){
document.getElementById("height").addEventListener("keypress", function(obj) {
  if (obj.keyCode === 13) {TreeObj();}
});
document.getElementById("decoration").addEventListener("keypress",
  function(obj) {
  if (obj.keyCode === 13) {TreeObj();}
});
}

enter();
