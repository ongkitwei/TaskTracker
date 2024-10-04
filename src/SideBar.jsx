import DashboardIcon from "./assets/dashboard-icon.png";
import WelcomeIcon from  "./assets/welcome-icon.png";
import TaskIcon from "./assets/task-icon.png";
import PeopleIcon from "./assets/people-icon.png";
import ReportIcon from "./assets/reports-icon.png";
import BillingIcon from "./assets/billing-icon.png";
import IntegrationIcon from "./assets/integration-icon.png";

function SideBar() {
    const sideBarContent = ["Welcome", "Dashboard", "Tasks", "People", "Reports", "Billing", "Integrations"];
    const sideBarImg = [WelcomeIcon, DashboardIcon, TaskIcon, PeopleIcon, ReportIcon, BillingIcon, IntegrationIcon];
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
            <a className="flex pb-[25px] hover: cursor-pointer" key={index} onClick={sideBarEventHandler[index]}>
                <img className="w-5 mr-2" src={sideBarImg[index]}></img>
                {item}
            </a>
        )} 
        </div>

    </div>

  )
}

export default SideBar;
