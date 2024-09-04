/* eslint-disable @next/next/no-img-element */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressBook,
    faCalendarCheck,
    faMap,
    faWindowMinimize,
    faBars,
    faUser
} from "@fortawesome/free-solid-svg-icons";
// import Link from 'next/link'
import Card from '../H/card';
import './style.css'
// import ResponsiveMenu from '../navbar/resMenu2.jsx';
import AppreciationCards from "../appreciation/appCards";
import {pricing} from '../data.js';
import PricingComponent from '../pricing/priceComponent.jsx';
import FaqComponent from '../faq/faqComponent';
import FooterComponent from '../footer/footerC';
import MaskText from '@/UI/MaskText';
const Hero = () => {
    return(
         <div className='container'>
                <div className='hero__section'>
                    {/* <h1>A powerful solution to grow your startup. Fast!</h1> */}
                    <MaskText phrases="A powerful solution to grow your startup. Fast!" tag='h1'/>
                    <h3>Organize, collaborate, and track progress seamlessly with our
                    one-stop-shop startup growth tool.</h3>
                    <div className='hero__cards'>
                    {/* <FontAwesomeIcon icon={faAddressBook} />
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    <FontAwesomeIcon icon={faMap} /> */}
                        <Card icon={faAddressBook} name='Cold Email' text='send cold emails, automate follow ups, and get real responses' icon_color='grey'/>
                        <Card icon={faCalendarCheck} name='Sales Assistant' text='Incorporate automation and testing into your work flow to reach your target audience' icon_color='grey'/>
                        <Card icon={faMap} name='Agency' text='Run campaigns for all your clients from one panel, perfect fpor agencies' icon_color='grey'/>
                    </div>         
                </div>

                <div className='hero__companies-detail'>
                    <div className='hero__companies'>
                        <h1>trusted by over 900+ professional</h1>
                        <div className='hero__companies-names'>
                            <h1>Rexim Well</h1>
                            <h1>secar</h1>
                            <h1>LiveChat24</h1>
                        </div>
                    </div>
                    <h1>Our products are tailored to act as your perfect online manager, helping you in all organizational tasks.</h1>
                    <p>Start with cold email and more whenever you need.</p>
                </div>

                <div className='hero__video'>
                    <h1>See how it works and get started in less than 2 minutes</h1>
                    <div className='hero__video-vid'>
                        <img src='video__th-01.webp' alt="" className='hero__video-img'/>
                    </div>
                    <button className='hero__video-btn'>Get started</button>
                </div>
                
                <div className='hero__appreciation'>
                    <h1>You dont have to take our word at face value; witness the accomplishments of businesses akin to your own.</h1>
                    <div className='hero__appreciation_cards'>
                        <AppreciationCards 
                        text="''Our business has seen a significant increase in productivity since we started using the Growth app.''"
                        name='Lionel Murray'
                        company='Roger Friends'
                        />
                        <AppreciationCards 
                        text="''As a small business owner, it's important to have a tool that can help me keep track of everything. The Growth app has been a lifesaver for me, allowing me to manage my contacts, schedule appointments, and track progress all in one place..''"
                        name='Ted Smith'
                        company='Piscars'
                        />
                        <AppreciationCards 
                        text="''The dashboards and reporting feature has provided valuable insights into our performance and helped us make data-driven decisions. It's a game changer for us.''"
                        name='Steve Todd'
                        company='Rostar'
                        />
                    </div>
                </div>

                <div className='hero__pricing'>
                    <h1>Pricing</h1>
                    <h3>Start free and scale while you grow. No hidden fees. Unlimited users for free.</h3>
                    <div className='hero__pricing_details'>
                        <div className="hero__pricing-details-c"><PricingComponent features={pricing[0]}/></div>
                        <div className="hero__pricing-details-c"><PricingComponent features={pricing[1]}/></div>
                    </div>
                </div>

                <div className='hero__faq'>
                    <FaqComponent/>
                </div>

                <div className='hero__footer'>
                    <FooterComponent/>
                </div>
         </div>
    )
}

export default Hero