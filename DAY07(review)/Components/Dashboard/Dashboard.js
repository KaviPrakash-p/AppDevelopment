import { useSelector } from 'react-redux';
import Navbar from '../../Layout/Navbar/Navbar';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import './Dashboard.css';
import { selectUser } from '../../Redux/UserSlice';

function Dashboard() {
     const users = useSelector(selectUser);
     return (
          <>
               <div className="DashboardBorder">
                    <div className="DashboardNavBar"><Navbar/></div>
                    <div className="DashboardSideBar">
                         <Sidebar/>
                    </div>
                    <div className="DashboardContent">
                         <h1 style={{color:"white", margin:"50px"}}>Welcome to your Dashboard {users.username}</h1>
                    </div>
                    <div className="DashboardFooter"></div>
               </div>
          </>
     );
   }
   
   export default Dashboard;