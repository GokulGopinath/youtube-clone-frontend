import React from 'react';
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar'; 
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';


function ChannelRow( {image,channel,verified,subs,noOfVideos,descrpition}) {
	return (
		<div className='channelRow'>
			<Avatar
				alt={channel}
				src={image}
				className='channelRow__logo'
			/>

			{/*for text*/}
			<div className='channelRow__text'>
				<h4>{channel } {verified && <CheckCircleOutlinedIcon/>} </h4>
				<p>
					{subs} subscribers • {noOfVideos} videos
				</p>
				<p>
					{descrpition}
				</p>

			</div>



			
		</div>
	)
}

export default ChannelRow;