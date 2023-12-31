import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/UserSlice';

function Navbar() {
     const navigate = useNavigate();
     const users = useSelector(selectUser);
     return(
          <>
               <div className="navbar border">
                    <div className="navbar box">
                         <div className="navbar links">
                              <div className="accounts link" onClick={()=>{navigate('/dashboard')}}>
                                   <div className="image"></div>
                                   <div className="text"><p>Dashboard</p></div>
                              </div>
                              <div className="accounts link" onClick={()=>{navigate('/accounts')}}>
                                   <div className="image"></div>
                                   <div className="text"><p>Accounts</p></div>
                              </div>
                              <div className="reports link">
                                   <div className="image"></div>
                                   <div className="text"><p>Reports</p></div>
                              </div>
                              <div className="seasonal-recipe link">
                                   <div className="image"></div>
                                   <div className="text"><p>Sesonal Recipe</p></div>
                              </div>
                         </div>
                         <div className="navbar userinfo">
                              <div className="image"></div>
                              <div className="text"><p>{users.username}</p></div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Navbar;