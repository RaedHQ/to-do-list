//task counter for setting unique id for each task
let tasksCounter = 1;

const addTask = () =>{
    //each task represented by "li" that contains paragraph and two buttons contained in two divs
    const task = document.getElementById("task").value;
    const priority = document.getElementById("priority").value;
    
    const listedTask = document.createElement("li");
    listedTask.classList.add("list-group-item", "col-10" ,"m-auto" ,"d-flex" ,"flex-row","justify-content-between");

    //First div
    const paragraphDiv = document.createElement("div");
    paragraphDiv.classList.add("col-8");

    const taskDescription = document.createElement("p")
    taskDescription.innerText = task;
    taskDescription.classList.add("text-break","fs-3","fw-semibold");

    paragraphDiv.appendChild(taskDescription);
    listedTask.appendChild(paragraphDiv);

    //Second div
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("col-3");

    const doneButton = document.createElement("button");
    doneButton.classList.add("btn","btn-success");
    doneButton.setAttribute("onclick","markAsDone(this.id)");
    doneButton.setAttribute("id",`done-${tasksCounter}`);
    doneButton.innerText = "Done"

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn","btn-danger");
    deleteButton.setAttribute("onclick","deleteTask(this.id)");
    deleteButton.setAttribute("id",`delete-${tasksCounter}`);
    deleteButton.innerText = "Delete"

    buttonsDiv.appendChild(doneButton);
    buttonsDiv.appendChild(deleteButton);
    listedTask.appendChild(buttonsDiv);

    switch(priority){
        case "high":
            listedTask.classList.add("list-group-item-danger")
            break;
        case "medium":
            listedTask.classList.add("list-group-item-warning")
            break;
        case "low":
            listedTask.classList.add("list-group-item-success")
    }

    listedTask.setAttribute("id",`task-${tasksCounter++}`);
    document.querySelector("ul").appendChild(listedTask)
}
const markAsDone = (clicked_id) =>{
    //The function adds text decoration -line through- to the paragraph  ->  replace the done button with undone button
    document.getElementById(clicked_id).parentElement.previousElementSibling.firstChild.classList.add("text-decoration-line-through")
    const unDoneButton = document.createElement("button");
    unDoneButton.classList.add("btn","btn-success");
    unDoneButton.innerText = "Undone";
    unDoneButton.setAttribute("onclick","markAsUndone(this.id)");
    document.getElementById(clicked_id).parentElement.appendChild(unDoneButton)
    document.getElementById(clicked_id).remove()
    unDoneButton.id = clicked_id;
}
const markAsUndone = (clicked_id) =>{
    document.getElementById(clicked_id).parentElement.previousElementSibling.firstChild.classList.remove("text-decoration-line-through")
    const doneButton = document.createElement("button");
    doneButton.classList.add("btn","btn-success");
    doneButton.innerText = "Done";
    doneButton.setAttribute("onclick","markAsDone(this.id)");
    document.getElementById(clicked_id).parentElement.appendChild(doneButton)
    document.getElementById(clicked_id).remove()
    doneButton.id = clicked_id;
}
const deleteTask = (clicked_id) =>{
    document.getElementById(clicked_id).parentElement.parentElement.remove()
}