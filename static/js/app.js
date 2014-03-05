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
            url: document.url,
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
});
