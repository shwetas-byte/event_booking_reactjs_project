import { Outlet } from "react-router-dom";
import Public_nav from "./public_nav";
import Private_nav from "./private_nav";
import { Footer } from "./footer";

export default function Layout() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    return (
        <>
            {isLoggedIn ? <Private_nav /> : <Public_nav />}
            <Outlet />
            <Footer/>
        </>
    );
}