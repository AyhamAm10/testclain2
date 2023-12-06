
import Footer from './componant/Footer'
import Mainpage from './pages/Mainpage'
import { useEffect, useState } from 'react'
import Foraplicants from './pages/Foraplicants'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Services from './pages/Services'
import Test from './pages/Test'
import Navbar from './componant/nav'
import Connectus from './pages/Connectus';
import Aboutas from './pages/Aboutas';


function App() {

  const [openlist, setopenlist] = useState(false);
  const [myservice, setmyservice] = useState(null)

  const handelopen = () => {
    openlist ?
      setopenlist(false) : setopenlist(true)
  }
  const handelclose = () => {
    openlist ? null : setopenlist(false)
  }


  return (
    <>
      {/* <Header handelclose={handelclose} handelopen={handelopen} />
      <Hiddenlist openlist={openlist}/> */}
     <Navbar/>
      <Routes>
        <Route path="/" exact element={<Mainpage />} />
        <Route path="/services" element={<Test setmyservice={setmyservice} myservice={myservice} />} />
        <Route path="/about" element={<Aboutas  />} />
        <Route path="/order" element={<Foraplicants myservice={myservice} />} />
        <Route path="/connect" element={<Connectus  />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
