import { useNavigate } from 'react-router-dom';
import './DashboardNavbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../Redux/UserSlice';
import { LogoutIcon } from '../../Images/svg/Svg';
import { LinkBox } from '../../Images/elements/Elements';
import logo from '../../Images/png/logo-tm/logo-black.png';

function Dashboarddashboard() {
     const navigate = useNavigate();
     const users = useSelector(selectUser);
     const dispatch = useDispatch();
     const handleLogout = () => {
          dispatch(logout());
          navigate("/");
     }
     return(
          <>
               <div className="dashboard navbar border">
                    <div className="dashboard navbar box">
                         <div className="box left">
                              <img className="left" src={logo} alt='RecipeHub'/>
                              <h1 className='right'>RecipeHub</h1>
                         </div>
                         <div className="box center">
                              <LinkBox name='link' text='Home' onClick={()=>{navigate('/')}}/>
                              <LinkBox name='link' text='Recipes' onClick={()=>{navigate('/')}}/>
                              <LinkBox name='link' text='About Us' onClick={()=>{navigate('/about-us')}}/>
                              <LinkBox name='link' text='Contact' onClick={()=>{navigate('/contact')}}/>
                         </div>
                         <div className="box right">
                              {users ? 
                                   <>
                                        <div className="left" onClick={handleLogout}>
                                             <LogoutIcon className="logout"/>
                                        </div>
                                        <div className="right"><p>{users.username}</p></div>
                                   </> :
                                   <>
                                        <LinkBox name='top' text='Signup/' onClick={()=>{navigate('/signup')}}/>
                                        <LinkBox name='top' text='Login'   onClick={()=>{navigate('/login')}} />
                                   </>
                              }
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Dashboarddashboard;