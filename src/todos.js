let todoArray = [
    [
     {
     title: "Gym",
     priority: "Medium",
     dueDate: "2024-04-10",
     description: "Its Leg Day",
     },
     { 
     title: "Work on Project",
     priority: "Medium",
     dueDate: "2024-04-12",
     description: "Fix bugs"
     },
     {
     title: "Feed the cat",
     priority: "High",
     dueDate: "2024-04-24",
     description: "Treat also!"
     }
  ]
]

localStorage.setItem("myTodos",JSON.stringify(todoArray))

function display(){

    // let todos=JSON.parse(localStorage.getItem("myTodos"))
    const storedTodoArrayJSON = localStorage.getItem("myTodos");
    const storedTodoArray = JSON.parse(storedTodoArrayJSON);

    console.log(storedTodoArray);
    // result.innerHTML=`${todos[0].title}`


        // Clear any existing tasks from the container
        result.innerHTML = "";
    
        // Iterate over the nested arrays and objects within todoArray
        storedTodoArray.forEach(subArray => {
            subArray.forEach(task => {
                // Create elements for task details
                const taskElement = document.createElement("div");
                taskElement.innerHTML = `
                    <h3>Title: ${task.title}</h3>
                    <p>Priority: ${task.priority}</p>
                    <p>Due Date: ${task.dueDate}</p>
                    <p>Description: ${task.description}</p>
                    <hr>
                `;
                // Append task element to the container
                return result.appendChild(taskElement);
            });
        });
    }
    
    // let form = document.querySelector('.form');

    // let todo;
    let index = 0;

    // function addToDo(Todo){
    //     // todoArray.push(Todo)
    //     todoArray[index].push(Todo)
    //     // let array = JSON.parse(localStorage.getItem("myTodos"));

    // // array[index].push(Todo);

    // localStorage.setItem("myTodos", JSON.stringify(todoArray))
    // display()
    //     // localStorage.setItem("myTodos",JSON.stringify(todoArray))

    // }
    function handleToDoSubmit(){

        let title = document.querySelector('#title').value;
        let priority = document.querySelector("#priority").value;
        let description = document.querySelector('#description').value;
        let dueDate = document.querySelector('#dueDate').value; 
        
        // todo = createTodoObject(title, priority, description, dueDate);
        // console.log(todo);
        const newTodo   = new todo(title, priority, description,dueDate);
        console.log(newTodo);
        todoArray[index].push(newTodo)
        localStorage.setItem("myTodos", JSON.stringify(todoArray))
        // display()
        // addToDo(newTodo);
        // addToDo(index, todo);
        // populateToDoArrayStorage(index,todo);
       
    }
    function todo(title, priority, description, dueDate){

            this.title= title,
            this.priority = priority,
            this.description= description,
            this.dueDate= dueDate
    
    }
    
    
export { display, handleToDoSubmit }

