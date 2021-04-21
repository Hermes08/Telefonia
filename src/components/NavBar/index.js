import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavBtn,
    NavBtnLink, 
    NavbarContainer , 
    NavLogo, 
    MobileIcon , 
    NavMenu, 
    NavItem,
    NavLinks} from './NavbarElements.js'

const  Navbar = ({toggle}) => {

    const [scrollNav, SetScrollNav] = useState(false)

    const changeNav= ()=>{
        if(window.scrollY >= 80){
            SetScrollNav(true)
        }
        else{
            SetScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)},[])
       
       
    return (
     <>
        <Nav scrollNav={scrollNav}>

            <NavbarContainer>
                <NavLogo to='/'>
                    leads
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign up</NavLinks>
                    </NavItem>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to = "/signin"> Sign in </NavBtnLink>
                </NavBtn>
           </NavbarContainer>
        </Nav>
     </>
     );
};

export default Navbar
