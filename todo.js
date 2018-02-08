var todo_list = [];

var listBtn = document.querySelector("#list-btn");
var display = document.querySelector("#display-rect");

listBtn.addEventListener("click", function (){
  //creates a button element

    var removebtn = document.createElement("button");
    removebtn.textContent = "X";
    removebtn.classList.add("btn-info", "rmBtn"); //styles button

    removebtn.addEventListener("click", function(){
      ((this.parentNode).parentNode).removeChild(this.parentNode);
    });

    var input =  document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");

    //bootstrap wrapper form-group for the input
    var formGroup = document.createElement("div");
    formGroup.classList.add("form-group", "style_input");

    //adds input and label to wrapper
    formGroup.appendChild(input);

    //makes the submit button for the form
    var submit_btn = document.createElement("button");
    submit_btn.classList.add("btn-info", "submit");
    submit_btn.innerHTML = "Add!";

    var unli = document.createElement("ul");

    submit_btn.addEventListener("click", function(){
      var value = input.value;
      if (value.trim() !== ''){

        var toDoEle = document.createElement("div");

        var toDoSpan = document.createElement("span");

        toDoSpan.innerHTML = "<li>" + value + "</li>";
        toDoSpan.classList.add("toDo");


         toDoSpan.addEventListener("mouseout", function(){
            this.classList.remove("toDo-unact");
            this.classList.add("toDo");
          });

        toDoSpan.addEventListener("mouseover", function(){
          this.classList.remove("toDo");
          this.classList.add("toDo-unact");
        });

        toDoSpan.addEventListener("click", function (){
          this.classList.toggle("strikeout");
        });
        toDoSpan.addEventListener("dblclick", function (){
          (this.parentNode).removeChild(this);
        });

        toDoEle.appendChild (toDoSpan);
        unli.appendChild(toDoEle);
      }

      input.value ="";
    });



    //creates list-box element and adds remove button
    var element = document.createElement("div");
    element.appendChild(removebtn);
    element.appendChild(formGroup);
    element.appendChild(submit_btn);
    element.appendChild(unli);

    //styles todolist box
    element.classList.add("display");

    display.appendChild(element);

    //initializes the last element of the array;

    todo_list.push(element);

});
