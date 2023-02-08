const plusbtnEL = document.querySelector(".fa-plus");
const xmarkbtnEL = document.querySelector(".fa-xmark");
const submitbtnEL = document.querySelector(".submit");
const inputEL = document.querySelector("#input-list");
const editinput = document.querySelector("#edit-input");
const editbutton = document.createElement("button");
const ulEL = document.querySelector(".todo-list");




const dateEL = new Date();

let day = dateEL.getDate();
document.querySelector("#day").innerHTML = day;

let month = dateEL.toLocaleString("default", { month: "long" });
document.querySelector("#month").innerHTML = month;

let year = dateEL.getFullYear();
document.querySelector("#year").innerHTML = year;

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = weekdays[dateEL.getDay()];
document.querySelector("#date").innerHTML = date;



function plusbtn() {
    document.querySelector("footer").style.display = "block";
};

plusbtnEL.addEventListener("click",plusbtn);


function exit() {
    document.querySelector("footer").style.display = "none";
};

xmarkbtnEL.addEventListener("click", exit);




function submit() {
    
    const todoDIV = document.createElement("div");
    todoDIV.classList.add("todo-div");

    const todoLI = document.createElement("li");
    todoLI.classList.add("todo-li");
    todoDIV.appendChild(todoLI);

    const checkBTN = document.createElement("input");
   checkBTN.setAttribute("type", "checkbox")
    checkBTN.classList.add("check");
    todoDIV.appendChild(checkBTN);

    const deleteBTN = document.createElement("button");
    deleteBTN.classList.add("delete-btn");
    deleteBTN.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    todoDIV.appendChild(deleteBTN);

    const checked = document.createElement("button");
    checked.classList.add("edit-btn");
    checked.innerHTML = `<i class="fa-solid fa-check"></i>`;
    todoDIV.appendChild(checked);

    ulEL.appendChild(todoDIV);

    todoLI.textContent = inputEL.value;
    inputEL.value = "";


    deleteBTN.addEventListener("click",()=> {
        todoLI.remove();
        checkBTN.remove();
        checked.remove();
        deleteBTN.remove();
    });

    checkBTN.addEventListener("click",() => {
        checkBTN.style.display = "none";
        checked.style.display = "block";

    });


};

submitbtnEL.addEventListener("click", submit);

