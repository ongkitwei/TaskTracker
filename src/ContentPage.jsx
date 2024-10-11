import { Fragment, useContext, useEffect, useState } from "react";
import TodoTask from "./TodoTask";
import { FiFilter } from "react-icons/fi";
import Modal from "./Modal";
import { createContext } from "react";
import { ModalContext } from "./context/ModalContext";

export const MyContext = createContext();

function ContentPage() {
  const { show, setShow } = useContext(ModalContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  console.log(data);

  return (
    <>
      <div className="mt-[60px] ml-[140px] mr-[140px] flex flex-col justify-start w-full">
        <div className="border-b-2 border-gray-150 pb-5">
          <header className="text-2xl">To-Do</header>
        </div>
        <div className="pt-4 pb-2 flex flex-row">
          <button
            className="bg-blue-700 text-white py-[2px] px-[15px] rounded-lg hover:bg-blue-600"
            onClick={() => setShow(true)}
          >
            + New Task
          </button>
          <button className="flex items-center bg-white ml-4 border-2 border-gray-150 rounded-lg px-[10px] py-[2px]">
            <FiFilter className="mr-[10px]" />
            <span>Filter</span>
          </button>
        </div>
        <TodoTask />
      </div>
      <Modal show={show} onClose={() => setShow(false)} />
    </>
  );
}

export default ContentPage;
