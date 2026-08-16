import { Outlet } from "react-router-dom";
import Private_nav from "./private_nav";
import { Footer } from "./footer";

export default function Private_Layout(){
    return(
        <>
            <Private_nav/>
                <Outlet/>
            {/* <Footer/> */}
        </>
    )
}