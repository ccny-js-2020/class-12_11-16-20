/*
  - Takes an array as an argument and returns:
    - a new array
    - a string from that array
*/

var fruits = ["apple", "orange", "kiwi", "banana", "blueberry", "blackberry", "raspberry"];

//creating a function that remove a specific string from an array
//this function requires two inputs/parameters ... an array (array) and a string (fruit)
//using splice, which you can remove from an array at a certain index: https://www.w3schools.com/jsref/jsref_splice.asp ... At Position x, remove y items
function removeFruitFromArray(array, fruit){
  var indexOfFruit = array.indexOf(fruit);
  if(indexOfFruit > -1){
    array.splice(indexOfFruit, 1);
  }
}

//invoking removeFruitFromArray functions with 2 parameters ... the fruits array and the string "kiwi"
console.log(removeFruitFromArray(fruits, "kiwi"));
//logging what the array value is after calling that function. See what is missing from the array?
console.log(fruits);


function createOrderedListStringFromArray(array){
  console.log(typeof array)
  //validating that the input parameter is an array
  if(typeof array == "object"){
    //creating my string variable and starting it off with the html of an ordered list
    var orderedListHtmlString = "<ol>";
    //looping through the input array
    for(var i = 0; i < array.length; i++){
      //appending to the string variable, wrapping all the items in the array in an li tag
      orderedListHtmlString += "<li>" + array[i] + "</li>";
    }
    //closing my ordered list string
    orderedListHtmlString += "</ol>";

    //returning my ordered list html string as the value of this function
    return orderedListHtmlString;
  } else {
    //if an array is not input, then return an empty string
    return "";
  }
}

//logging the value of the function
console.log(createOrderedListStringFromArray(fruits));

//appending the return result of the function to the html
$("body").html(createOrderedListStringFromArray(fruits));
