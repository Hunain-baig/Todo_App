const input = document.getElementById("input")
const ul = document.getElementById("listOfTodo");
const list = []


//* Add Todo function
function addTodo(){
    if (input.value === "") {
        Swal.fire("Please Enter Todo");
        return
    }
    list.push(input.value)
    input.value = ""
    renderTodo()
}



//* Render Todo function
function renderTodo(){
     ul.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        ul.innerHTML += `<li>${list[i]} <div class="btn-container"> <button class="btn" onclick="deletetodo(${i}) ">Delete</button> <button class="btn" onclick="editTodo(${i}) ">Edit</button> </div></li>`;
    }
}



//* Delete specific Todo function
function deletetodo(i){
    list.splice(i,1)
    renderTodo()
}



//* Edit Todo function
// function editTodo(i){
//     let edititedValue = prompt("Enter Edited Value")
//     list.splice(i,1,edititedValue)
//     renderTodo()
// }


async function editTodo (i){
  const result = await Swal.fire({
  input: "text",
  inputLabel: "Please Enter Edited Todo",
  inputPlaceholder: "Enter New  Todo Here",
});
if (result.value) {
   list[i] = result.value
   renderTodo()
}
}



//* Delete All Todo function
function deleteAll() {
    list.length = [];
    renderTodo(); 
}




