import React from 'react'
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className='footer-wrap'>
            <div className='contact-info-wrap'>
                <span className='contact-text'>Contact me:</span>
                <div className='contact-info'>
                    <a 
                        href="mailto:timoxin.artur@gmail.com"
                        className='contact-data'
                    >
                        timoxin.artur@gmail.com
                    </a>
                    <div className='contact-data'>@artur_timoxin</div>
                    <div className='contact-data'>+380 96 3227 922</div>
                </div>
            </div>
            <div className='foooter-logo-wrap'>
                <img className='logo-icon' src={Logo} alt='logo' />
                <span className='brand-name'>TEST TASK</span>
            </div>
        </footer>
    )
}

export default Footer;