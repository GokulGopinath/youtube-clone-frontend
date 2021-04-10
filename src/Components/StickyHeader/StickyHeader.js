import React,{useState} from 'react';
import { Link } from 'react-router-dom';import './StickyHeader.css'
import MenuSharpIcon from '@material-ui/icons/MenuSharp'; //importing 3 - icon or menu icon
import SearchIcon from '@material-ui/icons/Search'; //importing search icon
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp'; //importing video call icon
import AppsIcon from '@material-ui/icons/Apps'; // importing 9 dots icon
import NotificationsIcon from '@material-ui/icons/Notifications'; //importing bell icon
import profile from './profile.jpg';  //importing profile photo
import Avatar from '@material-ui/core/Avatar'; //for our profile pic

function StickyHeader() {
	const [inputSearch,setInputSearch] = useState("");		/* This is the way we define the state and here we have inputSearch as the data 
															and setInputSearch is used to update the data*/

	function updateInputField(event){    //see on any change in the input field this this fn is called
		setInputSearch(event.target.value);

	}



	return (
		<div className='header'>


			<div className='header__left'>
				<MenuSharpIcon className='header__menu'/>
				<Link to= {"/"}>
					<img  className="header__logo" //named like this as we are inside header we have logo
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1200px-YouTube_Logo.svg.png" 
					alt=""
					/>

				</Link>
				
			</div>

			<div className="header__input">
				<input value={inputSearch} onChange={updateInputField} placeholder="Search" type="text"  />


				<Link to={`/Search/${inputSearch}`}>
			
					<SearchIcon  className='header__inputButton'/>	
				 </Link>
			</div>

			<div className="header__icons"> { /*as soon we enclose in div tags the children are no longer display flex so we need to apply it again*/}
				<VideoCallSharpIcon className="header__icon" />
				<AppsIcon className="header__icon" />
				<NotificationsIcon className="header__icon" />
				<Avatar
				className='header__avatar'
				alt=""
				src={profile}
				/>


			</div>

			
			
			
			
		</div>
	)
}

export default StickyHeader