import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<header className='header'>
			<img className="header__logo" src='/assets/icons/way.svg' alt="" />
			<h2 className="header__title">Social network</h2>
			<input className="header__input-search" type="search" name="" id="" />

			<div className='auth__cont'>
				{props.isAuth ? props.login : <NavLink to={'/login'}>
					Login
				</NavLink>}

			</div>
		</header>
	)
}

export default Header;