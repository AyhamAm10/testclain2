import React, { useState } from 'react'
import img5 from "../assets/img5.jpg"
import { Link } from 'react-router-dom'
import Cardservice from './Cardservice'
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import data from '../data/data'
const Services = ({setmyservice}) => {
    

    const [items , setitems] = useState(data)

    const handeloption = (e) => {
        setmyservice(e)
        console.log(e)

    }


  return (
    <motion.dev
        initial ={{x: "-100vw" , opacity : 0}}
        animate={{ x: 0 , opacity : 1 }}
        transition={{ duration: 0.5 }}
    >
    <div className="services">
    <div className="bg-services d-flex align-items-center justify-content-center" style={{ backgroundImage: `url('${img5}')` }}>
                <h1 className='white'>Services 01</h1>
            </div>
            
            
        <div className="container">
                <div className="row">
                    {
                        items.map((service , index) => (

                            <div className="col-6 col-md-3 col-lg-2 reletive mt-50 serv" onClick={() => { handeloption(service) }}>
                                <Link to={'/order'}>
                                <Cardservice service={service} />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

    </div>
    </motion.dev
    
    >
  )
}

export default Services

