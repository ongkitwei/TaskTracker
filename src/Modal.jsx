import { useState, createContext, useRef, useEffect, useContext } from "react";
import { FaTasks } from "react-icons/fa";
import TodoTask from "./TodoTask";
import { MyContext } from "./contentPage";

function Modal({show, onClose}){
  // decided not to use object in state cos too messy
  const {
    todosTitle, settodosTitle, 
    todosDescrip, settodosDescrip, 
    todosPior, settodosPior
  } = useContext(MyContext);

  function handleAddButton(){
    let newtodosTitle = document.getElementById("title-id").value;
    let newtodosDescrip = document.getElementById("description-id").value;
    let newtodosP = document.getElementById("p-level").value;

    settodosTitle(todosTitle => [...todosTitle, newtodosTitle]);
    settodosDescrip(todosDescrip => [...todosDescrip, newtodosDescrip]);
    settodosPior(todosPior => [...todosPior, newtodosP]);
    console.log(todosTitle);
    onClose();
 }

  if(!show){
    return null;
  }
  
  else{
    return(
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white w-[500px] h-[500px] rounded-xl p-5">
          <header className="font-bold text-2xl pb-8 flex items-center">
          <FaTasks className="mr-4" />
          ADD NEW TASK</header>
          <form>
            <div className="mb-3">
              <label className="font-semibold">Title:</label><br></br>
              <input type="text" className="rounded-lg mt-1 w-full border-2 p-1" id="title-id"></input>
            </div>
            <div>
              <label className="font-semibold">Description:</label><br></br>
              <textarea type="text" className="rounded-lg w-full h-[150px] border-2 p-1 mt-1" id="description-id"></textarea>
            </div>


            <select name="priority" id="p-level" className="mt-5 font-semibold">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <div className="pt-[50px] flex flex-row justify-around">
              <button className="py-1 px-7 border-2 border-gray-300 rounded-lg" onClick={onClose}>CANCEL</button>
              <button className="py-1 px-10 bg-blue-400 rounded-lg hover:bg-blue-300" type="submit" onClick={handleAddButton}>ADD</button>
            </div>

          </form>
        </div>
      </div>
    )
}
}

export default Modal;