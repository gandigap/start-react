import React from 'react';
import logo from '../../assets/icons/way.svg'

const Header = () => {
	return (
		<header className='header'>
			<img className="header__logo" src={logo} alt="" />
		</header>
	)
}

export default Header;