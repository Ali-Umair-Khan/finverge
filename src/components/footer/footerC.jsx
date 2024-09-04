/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import './footer.scss';

 const FooterComponent = () => {
    return(
        <div className='footer'>
            <div className='footer__image'>
                <img src='finverge.png' alt='finverge' />
            </div>
            <div className='footer__details'>
                <div className='footer__details-qr'>
                    <div className='footer__detail-qr--img'>
                        <img src='/qr_code.svg' alt='qr code'/>
                    </div>
                    <div className='footer__details-qr--text'>
                            <p>Scan to download App on the Playstore and Appstore.</p>
                            <div className='footer__details-qr--text-img'>
                                <img src='/google.svg' alt="playstore icon" />
                                <img src='/apple.svg' alt="apple icon" />
                            </div>
                    </div>              
                </div>
                
                <div>
                    <p>ABOUT</p>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                </div>
                <div>
                    <p>SUBSCRIPTIONS</p>
                    <p>Subscribe to us</p>
                    <p>Gift X Magazine</p>
                </div>
                <div>
                    <p>PROFESSIONALS</p>
                    <p>Post a Project</p>
                    <p>Promote Your Work</p>
                </div>
            </div>
            <div className='footer__copyright'>
                <p>&copy; 2023 Finverge Ventures, Inc. All rights reserved.</p>
                <div className='footer__copyright-links'>
                    <Link href='/'>Privacy</Link>
                    <Link href='/'>Sitemap</Link>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent