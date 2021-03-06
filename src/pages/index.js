import React , {useState} from 'react'
import Footer from '../components/Footer '
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjone, homeObjTwo , homeObjThree, } from '../components/InfoSection/Data'
import Navbar from '../components/NavBar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'

const Home = () => {

    const [isOpen , setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        < Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjone}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        {/* <InfoSection {...homeObjFour}/>
        <InfoSection {...homeObjFive}/>
        <InfoSection {...homeObjSix}/>
        <InfoSection {...homeObjSeven}/> */}
        <Services></Services>
       <Footer/>
            
        </>
       
    )
}

export default Home
