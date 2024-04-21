import { display, handleToDoSubmit } from "./todos"; 
import { handleModal } from "./modal";
import "./style.css";


const result = document.getElementById("result")
const dfltPrjct = document.getElementById("dfltPrjct")
    dfltPrjct.addEventListener('click',()=>{
        // result.append(display([]))
        display()
    })

    let addToDo = document.querySelector('#addToDo');
    addToDo.addEventListener('click', handleModal)

display()
let form = document.querySelector('.form');
form.addEventListener('submit', handleToDoSubmit)

