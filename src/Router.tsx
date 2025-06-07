import {Routes, Route} from 'react-router-dom'
import DefaultLayout from './DefaultLayout'
import { HomeComponent } from './pages/Home'
import LoginForm from './pages/Login'
import RegisterForm from './pages/Register'
import ForumPage from './pages/Forum'
import IndividualPostComponent from './pages/Forum/components/IndividualPost'
import PublicPostComponent from './pages/Forum/components/PublicPost'
import { DonationTableComponent } from './pages/DonationTable'
const RouterApp = () => {
  return (
    <Routes>
        <Route path='/' element={<DefaultLayout/>}>
            <Route path='/' element={<HomeComponent/>}/>
            <Route path='/loginForm' element={<LoginForm/>}/>
            <Route path='/registerForm' element={<RegisterForm/>}/>
            <Route path='/forumPage' element={<ForumPage/>}/>
            <Route path="/individualPost/:id" element={<IndividualPostComponent />} />
            <Route path='/publicPost' element={<PublicPostComponent/>}/>
             <Route path='/dataDonation' element={<DonationTableComponent/>}/>
        </Route>
    </Routes>
  )
}

export default RouterApp