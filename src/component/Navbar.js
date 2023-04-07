
import Logo from "../img/logo.png"

function Navbar(){
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo} />
            </div>
            <div className="rightside"></div>
        </div>

    );
}