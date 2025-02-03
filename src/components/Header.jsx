import HeaderStyle from "../style/Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className={`px-1 ps-3 ${HeaderStyle.sticky}`}>

            <div className="">

                <NavLink to={`/`} className="d-flex align-items-center gap-3 text-decoration-none border-none">
                    <img src="https://img.icons8.com/?size=100&id=Tu5w6McTElFO&format=png&color=000000" alt="logo-viaggi" style={{ width: "50px", height: "50px" }} />
                    <h2 className="text-white text-center w-100">Booroad</h2>
                </NavLink>

            </div>



        </header>
    )
}

export default Header;