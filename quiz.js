/* Create a `tree` function that should build a pine tree out of a character in
the Chrome dev tools console. */
function tree() {

/* ## It accepts a single object as an argument. The object should have two
key/value pairs. */
  var Obj = {

    /* A key that specifies the height of the pine tree.
    The value for the height of the tree should be from user input in a `<input
    type="text">` field in the DOM. */
    height: document.getElementById("height").value,

    /* A key that specifies which character to use to build the pine tree.
    The character to use should be from user input in a `<input type="text">`
    field in the DOM. */
    decoration: document.getElementById("decoration").value
  }
  console.clear();

  /* If either of the input fields does not have a value in it when the user
  presses the enter key, or presses the button, then display an alert stating
  that both fields must have a value.*/
  if (Obj.height === "" || Obj.decoration === "") {
    alert("Both fields must have a value!");
  } else {
    for (var i = 0; i < Obj.height; i++) {
      var newDecoration = 2 * i + 1;
      var space = (Obj.height - 1) - i;
      console.log(" ".repeat(space) + Obj.decoration.repeat(newDecoration));
    }
  }
}

/* Once the user enters in a number, and a character, the user can either then
just press the enter key _(as long as the cursor is in one of the input
fields)_, or click a button that is labeled "Grow your tree" and the tree
should be shown in the console. This requires you to add an event listener to
the button, as well as an event listener for the enter/return key. */

// SUBMIT BUTTON
document.getElementById("GrowTree").addEventListener("click", tree);

//SUBMIT BY "PRESSING ENTER"
document.getElementById("height").addEventListener("keypress", function(enter) {
  if (enter.keyCode === 13) {tree();}
});
document.getElementById("decoration").addEventListener("keypress",
  function(enter) {
  if (enter.keyCode === 13) {tree();}
});

