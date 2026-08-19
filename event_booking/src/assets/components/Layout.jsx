import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Public_nav from "./public_nav";
import Private_nav from "./private_nav";
import { Footer } from "./footer";

export default function Layout() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        () => localStorage.getItem("isLoggedIn") === "true"
    );

    useEffect(() => {
        function checkLoginStatus() {
            setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
        }

        window.addEventListener("authChange", checkLoginStatus);
        window.addEventListener("storage", checkLoginStatus);

        return () => {
            window.removeEventListener("authChange", checkLoginStatus);
            window.removeEventListener("storage", checkLoginStatus);
        };
    }, []);

    return (
        <>
            {isLoggedIn ? <Private_nav /> : <Public_nav />}
            <Outlet />
            <Footer />
        </>
    );
}