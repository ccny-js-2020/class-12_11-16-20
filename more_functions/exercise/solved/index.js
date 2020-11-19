/*

  1. create a function that appends all items in a string array to an unordered list
     the function should take 2 parameters:
      - array: the array that you will be looping through and appending its contents to the dom
      - string: the id or class value of the html unordered list element that you will be appending the list item (li) to
  2. create a function that appends all the items in an object array to a table
    the function should take 2 parameters:
    - array: the array that you will be looping through and appending its contents to the dom
    - string: the id or class value of the html table element that you will be appending the tr, th, and td to

*/
//1
function appendArrayToOrderedListJQuery(array, divToAppendTo){
  var ul = $("<ul>");
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] == "string"){
      var li = $("<li>");
      li.text(array[i]);
      ul.append(li);
    }
  }
  $(divToAppendTo).append(ul);
}

var names = ["Jamie", "Robyn", "Abe", "Jay"];

appendArrayToOrderedListJQuery(names, ".append-ordered-list-here");

//2
function appendEmployeeArrayToTable(array, divToAppendTo){
  var table = $("<table>");

  var headerTr = $("<tr>");
  // ** this is the dynamic way to append the object keys as headers to the table **
  // var objectKeys = Object.keys(array[0])
  // for(var i = 0; i < objectKeys.length; i++){
  //   var th = $("<th>");
  //   th.text(objectKeys[i]);
  //   headerTr.append(th);
  // }
  var nameTh = $("<th>");
  var ageTh = $("<th>");

  nameTh.text("name");
  ageTh.text("age");

  headerTr.append(nameTh).append(ageTh);

  table.append(headerTr);

  // ** this is the dynamic way to append all values in the object array to the table **
  // for(var i = 0; i < array.length; i++){
  //   var tr = $("<tr>");
  //   for(var j in array[i]){
  //     var td = $("<td>");
  //     td.text(array[i][j]);
  //     tr.append(td);
  //   }
  //   table.append(tr);
  // }
  for(var i = 0; i < array.length; i++){
    var tr = $("<tr>");
    var nameTd = $("<td>");
    var ageTd = $("<td>");
    nameTd.text(array[i].name);
    ageTd.text(array[i].age);
    tr.append(nameTd).append(ageTd);
    table.append(tr);
  }


  $(divToAppendTo).append(table);
}

var employees = [
  {
    name: "Rob",
    age: 65
  },
  {
    name: "Rachel",
    age: 62
  },
  {
    name: "Tim",
    age: 32
  }
];

appendEmployeeArrayToTable(employees, ".append-table-here")
