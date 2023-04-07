import { NavLink, Outlet } from "react-router-dom"; 
const LogoLayout = () => { 
    return ( 
        <div className="container">
            <nav>
            <NavLink to="/home" >Logo</NavLink>&nbsp;
            </nav>
            <div className="container">
                <Outlet /> {/* your content will be shown in the Outlet */}
            </div>
            
        </div>
    );
};
export default LogoLayout;



