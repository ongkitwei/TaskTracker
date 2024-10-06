import React, { useContext } from 'react';
import { MyContext } from './contentPage';

function TodoTask() {
  const {
    todosTitle, settodosTitle, 
    todosDescrip, settodosDescrip, 
    todosPior, settodosPior
  } = useContext(MyContext);

  return (
    <div>
      {todosTitle.map((todo, index) => (
      <div className="border-2 border-gray-300 mt-3 rounded-lg p-2 flex flex-row items-center justify-between">
        <div className="flex flex-col">
            <div className="flex items-center">
              <input type="checkbox" className="mr-1"/>
              <header className="font-semibold text-lg">{todo}</header>
            </div>
            <div>
              <i className="pl-4 text-gray-400 text-[15px]">{todosDescrip[index]}</i>
            </div>
          </div>
          <div>
            <button className={`border-2 p-1 rounded-lg ${todosPior[index]=="High" ? " border-red-400 text-red-400 bg-red-100" 
              : todosPior[index]=="Medium" ? "border-orange-400 text-orange-400 bg-orange-100" 
              : "border-yellow-400 text-yellow-400 bg-yellow-100"}`}>{todosPior[index]}</button>
        </div>        
      </div>
      ))}
    </div>

  );
}

export default TodoTask;
