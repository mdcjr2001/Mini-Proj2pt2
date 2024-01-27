import { Route, Routes } from "react-router-dom";
import AccountBox from "../components/accountBox";
import { SignupForm } from "../components/accountBox/signupForm";
import Mainpage from "../pages/feed/mainpage";
import NBA from "../pages/feed/nba";
import NFL from "../pages/feed/nfl";
import UFC from "../pages/feed/ufc";
import Profile from "../pages/profile";
import Sidebar from "../components/sidebar";
import Settings from "../pages/settings";
 
function AppRoutes(props) {
    return (
        <Routes>
            {}
            <Route index element={<AccountBox {...props} /> } />
            <Route path='/Mainpage' element={<Mainpage {...props} />}/>
            <Route path='/NBA' element={<NBA {...props} />}/>
            <Route path='/NFL' element={<NFL {...props} />}/>
            <Route path='/UFC' element={<UFC {...props} />}/>
            <Route path='/Profile' element={<Profile {...props} />}/>
            <Route path='/Sidebar' element={<Sidebar {...props} />}/>
            <Route path='/Settings' element={<Settings {...props} />}/>
        </Routes>
    )
    
}

export default AppRoutes;