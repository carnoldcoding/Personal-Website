import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar' 
import IntroSection from '../components/Intro'
import InfoSection from '../components/Info'
import {homeObjOne} from '../components/Info/Data';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <IntroSection />
        <InfoSection {...homeObjOne}/>
        </>
    )
}

export default Home
