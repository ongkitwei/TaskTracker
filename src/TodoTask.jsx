import React, { useContext } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { ModalContext } from "./context/ModalContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

function TodoTask() {
  const { title, setTitle, desc, setDesc, priority, setPriority } =
    useContext(ModalContext);

  return (
    <div>
      {title.map((todo, index) => (
        <div
          key={index}
          className="border-2 border-gray-300 mt-3 rounded-lg p-2 flex flex-row items-center justify-between transform hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 transition duration-500 hover:scale-110"
        >
          <div className="flex flex-col">
            <div className="flex items-center">
              <input type="checkbox" className="mr-1" />
              <header className="font-semibold text-lg">{todo}</header>
            </div>
            <div className="pl-4">
              <i className="text-gray-700 text-[13px]">{desc[index]}</i>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <button
              className={`border-2 p-1 mr-2 rounded-xl ${
                priority[index] == "High"
                  ? " border-red-400 text-red-400 bg-red-100"
                  : priority[index] == "Medium"
                  ? "border-orange-400 text-orange-400 bg-orange-100"
                  : "border-yellow-400 text-yellow-400 bg-yellow-100"
              }`}
            >
              {priority[index]}
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <SlOptionsVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="hover:cursor-pointer">
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:cursor-pointer">
                  Delete
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:cursor-pointer">
                  Shift up
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:cursor-pointer">
                  Shift down
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoTask;
