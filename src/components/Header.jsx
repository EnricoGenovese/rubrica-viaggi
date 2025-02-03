import HeaderStyle from "../style/Header.module.css";
import { NavLink } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";

function Header() {
    return (
        <header className={`px-1 px-3 d-flex justify-content-between align-items-center text-white ${HeaderStyle.sticky}`}>



            <NavLink to={`/`} className="d-flex align-items-center gap-3 text-decoration-none border-none">
                <img src="https://img.icons8.com/?size=100&id=Tu5w6McTElFO&format=png&color=000000" alt="logo-viaggi" style={{ width: "50px", height: "50px" }} />
            </NavLink>

            <h2>Booroad</h2>

            <div className=""> <FcBusinessman /><span className="ps-1" style={{ fontSize: "0.9rem" }}>Admin</span></div>
        </header>
    )
}

export default Header;