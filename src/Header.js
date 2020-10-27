import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';
import { Forum } from '@material-ui/icons';

function Header() {
	return (
		<div className='header'>
			<IconButton>
				<PersonIcon className='header__icon' fontSize='large' />
			</IconButton>

			<img
				src='https://seeklogo.com/images/T/tinder-logo-6451FE2578-seeklogo.com.png'
				alt='Tinder logo'
				className='header__logo'
				style={{ height: '40px' }}
			/>

			<IconButton>
				<Forum className='header__icon' fontSize='large' />
			</IconButton>
		</div>
	);
}

export default Header;
