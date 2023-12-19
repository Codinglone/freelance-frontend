import React from 'react'
import Home from './components/pages/Home'
import './App.css'
import Support from './components/pages/Support'
import Services from './components/pages/Services'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { FrontEndEnums } from './components/utils/enum'
import About from './components/pages/About'
import Team from './components/pages/Team'
import Teamview from './components/pages/teamview'
import TeamCategory from './components/pages/teamcategory'
import Community from './components/pages/community'
import Gallery from './components/pages/gallery'
import Addservice from './components/pages/addservice'

// dashboard routes
import Signin from './components/pages/dashboard/signin'
import Dashboard from './components/pages/dashboard/navbar'
import WelcomeHome from './components/pages/dashboard/welcomepage'
import Freelances from './components/pages/dashboard/freelances'
import Addemployee from './components/pages/dashboard/addemployee'
import Addfreelance from './components/pages/dashboard/addfreelance'
import Newservice from './components/pages/dashboard/newservice'
import Employeeall from './components/pages/dashboard/employeeall'
import Serviceadd from './components/pages/dashboard/serviceadd'
import EmployeeHome from './components/pages/dashboard/employeehome'
import FreelanceHome from './components/pages/dashboard/freelancehome'
import OurFreelanceHome from './components/pages/dashboard/ourfreelance'
function App () {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/findjob" element={<About/>} />
        <Route path="/joincommunity" element={<Community/>} />
        <Route path="/addservice" element={<Addservice/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/teamview/:id/:serviceName" element={<Teamview/>} />
        <Route path="/temcategory/:id" element={<TeamCategory/>} />
        {/* dashboard routes */}
        <Route path="/signin" element={<Signin/>} />
        <Route path="/welcome" element={
          <Dashboard>
            <WelcomeHome />
          </Dashboard>
        }/>
        <Route path="/employeehome" element={
          <Dashboard>
            <EmployeeHome />
          </Dashboard>
      }/>
          <Route path="/freelancehome" element={
          <Dashboard>
            <FreelanceHome />
          </Dashboard>
      }/>
      <Route path="/freelances" element={
      <Dashboard>
        <Freelances />
        </Dashboard>}/>
      <Route path="/addemployee" element={
          <Dashboard>
            <Addemployee />
          </Dashboard>
        }/>
<Route path="/addfreelance" element={
          <Dashboard>
            <Addfreelance />
          </Dashboard>
      }/>
      <Route path="/addservice" element={
          <Dashboard>
            <Addservice />
          </Dashboard>
      }/>
            <Route path="/employeeall" element={
          <Dashboard>
            <Employeeall />
          </Dashboard>
      }/>
            <Route path="/addservi" element={
          <Dashboard>
            <Addservice />
          </Dashboard>
      }/>
           <Route path="/newservice" element={
          <Dashboard>
            <Newservice />
          </Dashboard>
      }/>
         <Route path="/serviceadd" element={
          <Dashboard>
            <Serviceadd />
          </Dashboard>
      }/>
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/ourteam" element={
            <Dashboard>
                <OurFreelanceHome />
            </Dashboard>
        }/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
