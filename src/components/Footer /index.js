import React from 'react'

import {FaFacebook, FaInstagram, FaYoutube, FaTwitter,FaLinkedin} from 'react-icons/fa'

import  {FooterContainer, FooterWrap,FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,
SocialMediaWrap,
SocialLogo,
WebsiteRights,
SocialIcons,
SocialIconLink} from './FooterElements' 

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>  About us </FooterLinkTitle>
                       
                            <FooterLink to='/sigin'>How it Works</FooterLink>
                            <FooterLink to='/sigin'>Testimonials</FooterLink>
                            <FooterLink to='/sigin'>Carreers</FooterLink>
                            <FooterLink to='/sigin'>Investors</FooterLink>
                            <FooterLink to='/sigin'>Terms of Service</FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>  About us </FooterLinkTitle>
                       
                            <FooterLink to='/sigin'>How it Works</FooterLink>
                            <FooterLink to='/sigin'>Testimonials</FooterLink>
                            <FooterLink to='/sigin'>Carreers</FooterLink>
                            <FooterLink to='/sigin'>Investors</FooterLink>
                            <FooterLink to='/sigin'>Terms of Service</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>  About us </FooterLinkTitle>
                       
                            <FooterLink to='/sigin'>How it Works</FooterLink>
                            <FooterLink to='/sigin'>Testimonials</FooterLink>
                            <FooterLink to='/sigin'>Carreers</FooterLink>
                            <FooterLink to='/sigin'>Investors</FooterLink>
                            <FooterLink to='/sigin'>Terms of Service</FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>  About us </FooterLinkTitle>
                       
                            <FooterLink to='/sigin'>How it Works</FooterLink>
                            <FooterLink to='/sigin'>Testimonials</FooterLink>
                            <FooterLink to='/sigin'>Carreers</FooterLink>
                            <FooterLink to='/sigin'>Investors</FooterLink>
                            <FooterLink to='/sigin'>Terms of Service</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        dolla

                    </SocialLogo>
                    <WebsiteRights>dolla {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                 <SocialIcons>
                    <SocialIconLink href="/" target="blank" aria-label="Facebook">
                        <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="blank" aria-label="Instagram">
                        <FaInstagram/>
                    </SocialIconLink>
                        <SocialIconLink href="/" target="blank" aria-label="Youtube">
                        <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="blank" aria-label="Twitter">
                        <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="blank" aria-label="Linkedin">
                        <FaLinkedin/>
                        </SocialIconLink>


                 </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
