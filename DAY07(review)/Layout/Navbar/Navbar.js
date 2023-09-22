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