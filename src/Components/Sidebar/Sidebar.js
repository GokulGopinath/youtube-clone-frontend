import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
	return (
		<div className='sidebar'>
			
			<SidebarRow selected={true} Icon={HomeIcon} title='home'/> {/*see we are passing component as prop but remember component should be capital so we write Icon  and not icon*/}
			<SidebarRow Icon={WhatshotIcon} title='Trending'/>
			<SidebarRow Icon={SubscriptionsIcon} title='subscription'/> 
			<hr/>
			<SidebarRow Icon={VideoLibraryIcon} title='Video Library'/> 
			<SidebarRow Icon={HistoryIcon} title='History'/> 
			<SidebarRow Icon={OndemandVideoIcon} title='Your videos'/> 
			<SidebarRow Icon={WatchLaterIcon} title='Watch Later'/> 
			<SidebarRow Icon={ThumbUpAltOutlinedIcon} title='Liked videos'/> 
			<SidebarRow Icon={ExpandMoreOutlinedIcon} title='show more'/>
			<hr/> 


			
		</div>
	);
}

export default Sidebar
