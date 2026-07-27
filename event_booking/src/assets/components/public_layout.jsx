import { Outlet } from "react-router-dom"
import { Public_nav } from "./public_nav"
import { Footer } from "./footer"

const PublicLayout=()=>{
    return(
        <>
            <Public_nav/>
                <Outlet/>
            <Footer/>
        </>
    )
}
export default PublicLayout