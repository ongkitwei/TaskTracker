import SideBar from "./SideBar";
import ContentPage from "./ContentPage";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <div className="flex flex-r border-t-2 border-gray-150 mt-[3px]">
        <SideBar />
        <ContentPage />
      </div>
    </ModalProvider>
  );
}

export default App;
