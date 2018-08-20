//backend business logic
//construtor fx

function List(tasks) {
  this.tasks = tasks
}
List.prototype.enteredTask = function() {
  return this.tasks;
}

// var inputtedTasks = ["tasks"];
// List.tasks.forEach(function(inputtedTask) {
//   console.log(inputtedTask.tasks + " Tasks Remaining:");
//     console.log(tasks);
//   });
//   console.log("\n");

// user interface logic
$(document).ready(function() {
  $("form#inputList").submit(function(event) {
    event.preventDefault();
    //Places:
    var inputtedToDo = $("input#toDo").val();

    var newList = new List(inputtedToDo);
    $("ul#outputLists").append("<li><span class='outputList'>" + newList.enteredTask() + "<input type='checkbox' name='work-transportation' value='bike' id='check'><br>" + "</span></li>");

    $("input#toDo").val("");
    $("#remove").click(function() {
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#outputLists').toggle(workTransportationMode + "<br>");
    });
  });
    $(".outputList").last().click(function() { console.log("Check box if task is done.");
    $("#show-lists").show();
    $("#show-lists h2").text(newList.tasks);
    $(".new-task").text(newList.tasks);

    });
  });
});
