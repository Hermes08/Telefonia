import React, {useState} from 'react'
import Video from '../../video/video.mp4'
import {Button} from '../ButtonElements';
import {HeroContainer,HeroBg,VideoBg, HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight} from './HeroElements.js'

const HeroSection = () => {

const [hover, setHover]= useState(false);
    const onHover = ()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src= {Video} type='video/mp4'></VideoBg>

            </HeroBg>
            <HeroContent>
                <HeroH1>Lead Generation Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and receive $200 in credit towards
                    your next payment </HeroP>
                   <HeroBtnWrapper>
                       <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get started {hover ? <ArrowForward/> :<ArrowRight/>}

                           </Button></HeroBtnWrapper> 
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
