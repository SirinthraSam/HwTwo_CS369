import { NavLink, Outlet } from "react-router-dom"; 
import Logo from "../img/logo.png"
import './MainLayout.css'
const MainLayout = () => { 
    return ( 
       
        <div className="container">
            <div className="navbar">
                <div className="leftSide">
                    <img src={Logo}/>
                </div>
                <div className="rightSide">
                <nav>
                    <NavLink to="/">All</NavLink>&nbsp;   
                    <NavLink to="beak">Breakfast</NavLink>&nbsp;
                    <NavLink to="/products">Lunch</NavLink>&nbsp;
                    <NavLink to="/dinner">Dinner</NavLink>&nbsp;
                      
                
                </nav>
            </div>
        </div>                   
            
            <div className="container">
                <Outlet /> {/* your content will be shown in the Outlet */}
            </div>
            <footer>-----------------</footer>
        </div>
    );
};
export default MainLayout;