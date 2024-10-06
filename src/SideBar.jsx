import { PiSmileyLight } from "react-icons/pi";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineTask } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { GrIntegration } from "react-icons/gr";


function SideBar() {
    const sideBarContent = ["Welcome", "Dashboard", "Tasks", "People", "Reports", "Billing", "Integrations"];
    const sideBarImg = [<PiSmileyLight/>, <AiOutlineDashboard />, <MdOutlineTask/>, <BsPeople/>, <BsGraphUpArrow/>, <AiOutlineDollar/>, <GrIntegration/>];
    const sideBarEventHandler = [welcomePage, dashboardPage, tasksPage, peoplePage, reportsPage, billingPage, integrationsPage];

    function welcomePage(){
        console.log("welcome");
    }
    function dashboardPage(){
        console.log("dashboard");
    }
    function tasksPage(){
        console.log("Tasks");
    }
    function peoplePage(){
        console.log("people");
    }
    function reportsPage(){
        console.log("reports");
    }
    function billingPage(){
        console.log("billing");
    }
    function integrationsPage(){
        console.log("integrations");
    }
    function profilePage(){
        console.log("profile");
    }

    return (
    <div className="h-screen w-[300px] border-r-2 border-gray-150" >
        <div className="flex justify-end p-[30px] items-center">
            <p className="hover: cursor-pointer">&lt;&lt;</p>
        </div>
        <div className="flex flex-col ml-5 mr-30 border-t-2 border-gray-150 pt-6">
            {sideBarContent.map((item, index) => 
            <a className="flex pb-[25px] hover: cursor-pointer items-center" key={index} onClick={sideBarEventHandler[index]}>
                <div className="mr-2">{sideBarImg[index]}</div>
                {item}
            </a>
        )} 
        </div>

    </div>

  )
}

export default SideBar;
