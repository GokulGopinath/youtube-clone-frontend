import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';
import profile from './profile.jpg';
import ml from './ml.jpg';

function RecommendedVideos() {
	return (
		<div className='recommendedVideos'>
			<h2>Recommendations</h2>
			<div className='recommendedVideos__videos'>

				<VideoCard
				title='Learn the machine learning foundation in 1 month'
				views='10M views'
				timestamp="3 days ago"
				channelImage={profile}
				channel='Gokus tech'
				image={ml}
				/>

				<VideoCard
					title='Learn the machine learning foundation in 1 month'
					views='10M views'
					timestamp="3 days ago"
					channelImage={profile}
					channel='Gokus tech'
					image={ml}
				/>

				<VideoCard
					title='Learn the machine learning foundation in 1 month'
					views='10M views'
					timestamp="3 days ago"
					channelImage={profile}
					channel='Gokus tech'
					image={ml}
				/>

				<VideoCard
					title='Learn the machine learning foundation in 1 month'
					views='10M views'
					timestamp="3 days ago"
					channelImage={profile}
					channel='Gokus tech'
					image={ml}
				/>

				<VideoCard
					title='Learn the machine learning foundation in 1 month'
					views='10M views'
					timestamp="3 days ago"
					channelImage={profile}
					channel='Gokus tech'
					image={ml}
				/>

				<VideoCard
					title='Learn the machine learning foundation in 1 month'
					views='10M views'
					timestamp="3 days ago"
					channelImage={profile}
					channel='Gokus tech'
					image={ml}
				/>

				<VideoCard
					title='Learn the machine learning foundation in 1 month'
					views='10M views'
					timestamp="3 days ago"
					channelImage={profile}
					channel='Gokus tech'
					image={ml}
				/>

				
			</div>
			

			
		</div>
	);
}

export default RecommendedVideos;