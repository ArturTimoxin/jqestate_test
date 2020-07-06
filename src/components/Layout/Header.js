import React from 'react'
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className='header-wrap'>
            <div className='logo-wrap'>
                <img className='logo-icon' src={Logo} alt='logo' />
                <span className='brand-name'>TEST TASK</span>
            </div>
        </header>
    )
}

export default Header;