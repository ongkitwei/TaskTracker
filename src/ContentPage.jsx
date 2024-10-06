import { Fragment, useState } from 'react';
import TodoTask from './TodoTask';
import { FiFilter }  from "react-icons/fi";
import Modal from './Modal';
import { createContext } from 'react';

export const MyContext = createContext();

function ContentPage() {
  // state for opening and closing modal
  const [showModal, setModal] = useState(false);

  // state for Modal.jsx
  const[todosTitle, settodosTitle] = useState([]);
  const[todosDescrip, settodosDescrip] = useState([]);
  const[todosPior, settodosPior] = useState([]);

  return (
    <MyContext.Provider value={{todosTitle, settodosTitle, todosDescrip, settodosDescrip, todosPior, settodosPior}}>
    <div className="mt-[60px] ml-[140px] mr-[140px] flex flex-col justify-start w-full">
        <div className="border-b-2 border-gray-150 pb-5">
            <header className="text-2xl">To-Do</header>
        </div>
        <div className="pt-4 pb-2 flex flex-row">
          <button className="bg-blue-700 text-white py-[2px] px-[15px] rounded-lg hover:bg-blue-600" onClick={() => setModal(true)}>+ New Task</button>
          <button className="flex items-center bg-white ml-4 border-2 border-gray-150 rounded-lg px-[10px] py-[2px]">
            <FiFilter className="mr-[10px]"></FiFilter>
            <span>Filter</span>
          </button>
        </div>
      <TodoTask />
      </div>
      <Modal show={showModal} onClose={() => setModal(false)}/>
    </MyContext.Provider>
  )
}

export default ContentPage;
