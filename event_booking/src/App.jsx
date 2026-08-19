import { Routes, Route } from "react-router-dom";
import Layout from "./assets/components/Layout";
import { Home } from "./assets/components/home";
import { Explore_events } from "./assets/components/explore_events";
import { About } from "./assets/components/about";
import { Contact } from "./assets/components/contact";
import { Login } from "./assets/components/login";
import { Sign_up } from "./assets/components/signup";
import View_details from "./assets/components/view_details";
import My_bookings from "./assets/components/my_booking";
import Wishlist from "./assets/components/wishlist";
import Profile from "./assets/components/profile";
import Booking from "./assets/components/booking";
import Review from "./assets/components/review";
import Confirma from "./assets/components/confirm";
import Setting from "./assets/components/setting";
import Notification from "./assets/components/notification";




function App() {
    return (
        <Routes>

            <Route element={<Layout />}>

                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore_events />} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />

                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Sign_up/>} />

                <Route path="/view/:id" element={<View_details />} />

                <Route path="/book" element={<My_bookings />} />
                <Route path="/wish" element={<Wishlist />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/review" element={<Review />} />
                <Route path="/confirm" element={<Confirma />} />
                <Route path="/settings" element={<Setting />} />
                <Route path="/notification" element={<Notification />} />

            </Route>

        </Routes>
    );
}

export default App;