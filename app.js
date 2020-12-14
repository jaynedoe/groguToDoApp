
// on clicking submit, obtain form inputs and create new to do item row

$('#submit-btn').on('click', printItem);

function printItem(){

  let output;
  let itemDescription = $("#todo-description").val();
  let itemPriority = $('#todo-priority').val();

  switch (itemPriority) {
    case '1':
      itemPriority = "High";
      break;
    case '2':
      itemPriority = "Medium";
      break;
    case '3':
      itemPriority = "Low";
      break;
    default:
      break;
  }

  let itemCompleteBy = $('#complete-by').val();
  
  //calculate days to complete

  let completeByDate = new Date(itemCompleteBy);
  let todayDate = new Date();
  let difference = completeByDate - todayDate;
 
  let daysToComplete = difference / 86400000;
  let roundedDaysToComplete = Math.round(daysToComplete);

  //add in todo rows based on input

  let checkBox = "<div class='form-check'>";
  checkBox += "<input class='form-check-input ml-2' type='checkbox' value='' id='todo-check'>";
  
  output += "<tr><td>" + itemDescription + "</td><td>" + itemPriority + "</td><td>" + itemCompleteBy;     
  output += "</td><td>"  + roundedDaysToComplete + "</td><td>" + checkBox + "</td></tr>";
  tableBody = $("#todo-table");
  tableBody.append(output);
}

//select all rows that have the checked button checked and remove

$('#delete-check').on('click', function(){
  
  $('#todo-table tr').filter(':has(:checkbox:checked)').remove();

});  





