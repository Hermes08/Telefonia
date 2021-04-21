import React from 'react'
import icon1 from '../../images2/svg-1.svg'
import icon2 from '../../images2/svg-2.svg'
import icon3 from '../../images2/svg-3.svg'




import {
    ServicesContainer,
    ServicesH1,
    ServicesCard,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
    
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
             <ServicesWrapper>
                 <ServicesCard>
                     <ServicesIcon src={icon1}/>
                     <ServicesH2>Reduces Expenses</ServicesH2>
                     <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>

                 </ServicesCard>
                 <ServicesCard>
                     <ServicesIcon src={icon2}/>
                     <ServicesH2>Virtual Offices</ServicesH2>
                     <ServicesP>You can access our platform anywhere in the world</ServicesP>

                 </ServicesCard>
                 <ServicesCard>
                     <ServicesIcon src={icon3}/>
                     <ServicesH2>Premiun</ServicesH2>
                     <ServicesP>Unlock our spcial membership that returns 5% cash back.</ServicesP>

                 </ServicesCard>

             </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
