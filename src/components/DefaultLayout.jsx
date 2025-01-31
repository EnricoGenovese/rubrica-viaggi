import { Outlet } from "react-router-dom";
// import { useGlobalContext } from "../contexts/GlobalContext.jsx";
// import Loader from "../components/Loader.jsx";
import Header from "../components/Header.jsx";


export default function DefautlLayout() {
    // const { isLoading } = useGlobalContext();  
    return (
        <>
            <Header />

            {/* {isLoading && <Loader />} */}
            <main>
                <Outlet />
            </main>

        </>
    )
}