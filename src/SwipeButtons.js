import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@material-ui/icons/Clear';
import StarIcon from '@material-ui/icons/Star';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButtons.css';
import { Favorite } from '@material-ui/icons';

function SwipeButtons() {
	function reload() {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	}
	function clear() {
		
	}

	return (
		<div className='swipeButtons'>
			<div className='buttonsClick'>
				<IconButton className='swipeButtons__replay' onClick={reload}>
					<ReplayIcon fontSize='large' />
				</IconButton>
				<IconButton className='swipeButtons__clear' onClick={clear}>
					<ClearIcon fontSize='large' />
				</IconButton>
				<IconButton className='swipeButtons__star'>
					<StarIcon fontSize='large' />
				</IconButton>
				<IconButton className='swipeButtons__favorite'>
					<Favorite fontSize='large' />
				</IconButton>
				<IconButton className='swipeButtons__lightning'>
					<FlashOnIcon fontSize='large' />
				</IconButton>
			</div>
		</div>
	);
}

export default SwipeButtons;
