import {Route,Routes} from 'react-router-dom'
import PublicLayout from './assets/components/public_layout'
import { Home } from './assets/components/home'
import { Explore_events } from './assets/components/explore_events'
import { About } from './assets/components/about'
import { Contact } from './assets/components/contact'
import { Login } from './assets/components/login'
import { Sign_up } from './assets/components/signup'
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
      </Routes>

    </>
  )
}
export default App