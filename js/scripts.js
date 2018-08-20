//backend business logic
//construtor fx

function List(tasks) {
  this.tasks = tasks
}
List.prototype.enteredTask = function() {
  return this.tasks;
}

// user interface logic
$(document).ready(function() {
  $("form#inputList").submit(function(event) {
    event.preventDefault();
    //Places:
    var inputtedToDo = $("input#toDo").val();

    var newList = new List(inputtedToDo);
    $("ul#outputLists").append("<li><span class='outputList'>" + newList.enteredTask() + "<input type='checkbox' name='working-list' value= 'checkbox' id='check'><br>" + "</span></li>");

    $("input#toDo").val("");
    $("#remove").click(function() {
    $("input:checkbox[name=working-list]:checked").each(function(){
     $(this).parent().parent().hide();

    });
  });
    $(".outputList").last().click(function() { console.log("Check box if task is done.");
    $("#show-lists").show();
    $("#show-lists h2").text(newList.tasks);
    $(".new-task").text(newList.tasks);

    });
  });
});
