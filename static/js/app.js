$(document).ready(function(){
    var formSubmitButton = $("#form_submit");
    formSubmitButton.on("click", function(event){
        event.preventDefault(); //prevent the browser form submissions from happening
        
        $.ajax({
            url: "/",
            method: "POST",
            data: $("form#todo_list_form").serialize(),
        }).done(function(data){
             var list = $("#todo-list")[0];
            // var list = document.getElementById('todo-list'); 
            list.innerHTML = data;
            console.log(data);
            var name = $("#name")[0];
            name.value = "";
        }).fail(function(data){
            alert('Fail!!!');
        });
    });

    var formSubmitButton2 = $("#new_item");
    formSubmitButton2.on("click", function(event){
        event.preventDefault(); //prevent the browser form submissions from happening
        
        $.ajax({
            url: location.href,
            method: "POST",
            data: $("form#todo-item-form").serialize(),
        }).done(function(data){
            var list = $("#todo-list")[0];
            // var list = document.getElementById('todo-list'); 
            list.innerHTML = data;
            console.log(data);
            var name = $("#textbox")[0];
            name.value = "";
        }).fail(function(data){
            alert('Fail!!!');
        });
    });

    var checkedBoxes = $(".todocheckboxes");
    checkedBoxes.on('click', function(event){
        event.preventDefault();

        $.ajax({
            url: location.href+'/todo_item/'+ this.value +'/done',
            method: "POST",
            data: this.value
            //$(checkedBoxes.value)
        }).done(function(data){
            //console.log("You clicked on " + data + " and checked is: " + data.checked);
            console.log(data);

            // console.log(data);

        }).fail(function(data){
            alert('Fail!!!');
        });
        
            // $("label#task").serialize() <label id="task" for="item">{{item.task}}</label>

        



    });





});