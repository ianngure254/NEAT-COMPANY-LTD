// import Header from './components/Header'
// import Heros from './components/Heros'
// import Flow from './components/Flow'
// import Testimonials from'./components/Testimonials'
// import Least from './components/Least'


// function App() {
  
//   return (
  
//     <>
// <Header />
// <Heros />
// <Flow />
// <Testimonials />
// <Least />


//     </>
    
//   )
// }

// export default App


import { Outlet } from 'react-router-dom' // Important!
import Header from './components/Header'


import Least from './components/Least'

function App() {
  return (
    <>
      <Header />
    
      <main>
        {/* This Outlet is where Menu, Product, etc. will appear */}
        <Outlet /> 
      </main>
      <Least />
    </>
  )
}

export default App
