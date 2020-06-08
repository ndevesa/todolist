/*
Nicolas D. 2020
www.nicolasdev.com
www.linkedin.com/in/nicolasdevesa
________________________________________
Simple ToDo List App with Vanilla JS
*/
window.addEventListener('load', ()=>{

    //let and const for global variables, var for local variables (like the Date inside the add_task event listener)
    let all_lists = document.querySelector('.todo_list');
    let add_task = document.querySelector('#add_task');
    let current_list_title = document.querySelector('.current_list_title');
    let message = document.querySelector('.messages');
    //Had to use a counter to display or hide the "Nothing to do" o "Current list" titles.
    let list_count = 0;

    //Add a new task
    add_task.addEventListener('click', ()=> {
        //Grab the value from the input.
        task_content = document.querySelector('#task_text').value;
        //Cheking if the input its not empty.
        if(task_content == ''){
            alert('Add some tasks! :(');
            
        }else if (task_content.length <= 4){
            alert('At least 5 characters please');
        }
        else{
            current_list_title.textContent = 'Current list';
            //Check if it works on the console with console.log(task_content);

            //Get current date and clean the formatting.
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = today.getFullYear();
            var hour = today.getHours();
            var min = today.getMinutes();
            var create_hour = hour + ':' + min;
            today = mm + '/' + dd + '/' + yyyy;

            //Creates a new list and add the single-todo-list class.
            
            //NOTE: Im using LET and not VAR here to create all the variables because maybe sometime i have to change this values using another function OUTSIDE (not locally) this add_task event listener.
        
            let new_list = document.createElement('li');
            new_list.classList.add('single-todo-list');

            //Creates the title and date markup for the task added.
            let task_date = document.createElement('h5');
            let task_title = document.createElement('p');

            //Creates X to delete task
            let completed = document.createElement('i');
            completed.classList.add('fa','fa-lg', 'fa-close');
            completed.setAttribute('title', 'This task is complete!');
            
            //Add the title and date to the specific fields.
            linebreak = document.createElement("br");
            task_date.append(today, linebreak, create_hour);
            task_title.append(task_content);
        
            //Add the title, date and "close/delete/complete" task button to the created list.
            new_list.appendChild(completed);
            new_list.appendChild(task_title);
            new_list.appendChild(task_date);

            //Call specific function by clicking on the arrow icon.
            completed.addEventListener('click', completeTask, false);
            //Add complete list to the main container in the HTML to display it on the frontend.
            all_lists.appendChild(new_list);

            //Clear input placeholder.
            task_text.value = "";
            //Increase list counter and check on the console.
            list_count++;
            console.log(list_count);

            //Messages :)
            if (list_count == 2 ){
                message.textContent = 'Chill :)';
            }else if (list_count == 3 ){
                message.textContent = 'What a busy day! :D';
            }else if(list_count == 4){
                message.textContent = 'You can do it!!';
            }else if(list_count > 4){
                message.textContent = 'Nothing is impossible...';
            }
        }   
    })//addeventlistener_add_task

    //Delete a task
    function completeTask(e){
        //Delete the actual task
        e.currentTarget.parentNode.remove();
    
        //Return a random message when complete a task.
        var mensajes = ['Killing it!', 'Nice! :)', 'Youre doing it great :D', 'Amazing!', 'Stunning!!', 'Wonderful', 'Yes!!'];
        var item = mensajes[Math.floor(Math.random() * mensajes.length)];
        message.textContent = item;

        //Decrease counter to see when its 1 to display "Almost done" message.
        list_count--;
        if(list_count == 1){
            message.textContent = 'Almost done! :O'; 
        }else if(list_count == 0){
            //Remove the "Current List" title if tasks = zero and get back the "Nothing to do" title.
            current_list_title.textContent = 'Congrats! :D';
            message.textContent = '';
        }else{
            current_list_title.textContent = 'Current list';   
        }
    }//CompleteTask


})