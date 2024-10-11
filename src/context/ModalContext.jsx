import React, { useState, createContext } from "react";

export const ModalContext = createContext({});

// Create a Context Provider component
const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState([]);
  const [desc, setDesc] = useState([]);
  const [priority, setPriority] = useState([]);

  return (
    <ModalContext.Provider
      value={{
        show,
        title,
        desc,
        priority,
        setShow,
        setTitle,
        setDesc,
        setPriority
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
