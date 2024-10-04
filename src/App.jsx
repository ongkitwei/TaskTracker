import SideBar from './SideBar';
import ContentPage from './ContentPage';

function App() {

  return (
    <div className="flex flex-r border-t-2 border-gray-150 mt-[3px]">
      <SideBar />
      <ContentPage />
    </div>
  )
}

export default App;
