import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './Header'
import MyWork from './MyWork'
import About from './About'
import Connect from './Connect'


const App = () => {
  return (
    <>
     <Router>
       <Routes>
        <Route path='/' element={<Header/>}>
          <Route path="/" element={<MyWork/>} />
          <Route path="/About" element={<About/>} />
          <Route path='/Connect' element={<Connect/>}/>
         </Route>
       </Routes>
     </Router>
    </>
  )
}

export default App