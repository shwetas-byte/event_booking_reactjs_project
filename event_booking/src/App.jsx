import {Route,Routes} from 'react-router-dom'
import PublicLayout from './assets/components/public_layout'
import { Home } from './assets/components/home'
import { Explore_events } from './assets/components/explore_events'
import { About } from './assets/components/about'
import { Contact } from './assets/components/contact'
import { Login } from './assets/components/login'
import { Sign_up } from './assets/components/signup'


import Private_Layout from './assets/components/private_layout'
import My_bookings from './assets/components/my_booking'
import Wishlist from './assets/components/wishlist'
import Notification from './assets/components/notification'
import Profile from './assets/components/profile'
function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={<PublicLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/explore' element={<Explore_events/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Sign_up/>}/>
          
        </Route> 

        <Route path='/' element={<Private_Layout/>}>
          <Route path='/book' element={<My_bookings/>}/>
          <Route path='/wish' element={<Wishlist/>}/>
          <Route path='/notification' element={<Notification/>}/>
          <Route path='/profile' element={<Profile/>}/>

        </Route>
      </Routes>

    </>
  )
}
export default App