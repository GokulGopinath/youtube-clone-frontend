import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import ml_logo from './ml logo.jpg';
import VideoRow from './VideoRow';
import thumbnail from './thumbnail.jpg';

function SearchPage() {
	return (
		<div className='searchPage'>
			<div className='searchPage__filter'>
				<TuneOutlinedIcon/>
				<h2>Filter</h2>				
			</div>
			<hr/>
			<ChannelRow
			image={ml_logo}
			channel='ML learners'
			verified                      /*see this is equivalent to verified={true}*/ 
			subs='800k'
			noofvideos='400'
			descrpition='Learn ml from scratch. The videos focus primarily on the workings of the popular machine learning models from the root level. The viewers get to know about training models, hyperparameter tuning, and other challenges that surface while building an ML pipeline.'

			/>
			<hr/>
			<VideoRow
			views='10M'
			subs='5M'
			description='The videos focus primarily on the workings of the popular machine learning models from the root level. The viewers get to know about training models, hyperparameter tuning, and other challenges that surface while building an ML pipeline.'
			timestamp='5 seconds ago'
			channel='ML learners'
			title='Learn about Simple Linear Regression'
			image={thumbnail}

			/>
			<VideoRow
			views='10M'
			subs='5M'
			description='The videos focus primarily on the workings of the popular machine learning models from the root level. The viewers get to know about training models, hyperparameter tuning, and other challenges that surface while building an ML pipeline.'
			timestamp='5 seconds ago'
			channel='ML learners'
			title='Learn about Simple Linear Regression'
			image={thumbnail}

			/>
			<VideoRow
			views='10M'
			subs='5M'
			description='The videos focus primarily on the workings of the popular machine learning models from the root level. The viewers get to know about training models, hyperparameter tuning, and other challenges that surface while building an ML pipeline.'
			timestamp='5 seconds ago'
			channel='ML learners'
			title='Learn about Simple Linear Regression'
			image={thumbnail}

			/>
			<VideoRow
			views='10M'
			subs='5M'
			description='The videos focus primarily on the workings of the popular machine learning models from the root level. The viewers get to know about training models, hyperparameter tuning, and other challenges that surface while building an ML pipeline.'
			timestamp='5 seconds ago'
			channel='ML learners'
			title='Learn about Simple Linear Regression'
			image={thumbnail}

			/>
			
			<VideoRow
			views='10M'
			subs='5M'
			description='The videos focus primarily on the workings of the popular machine learning models from the root level. The viewers get to know about training models, hyperparameter tuning, and other challenges that surface while building an ML pipeline.'
			timestamp='5 seconds ago'
			channel='ML learners'
			title='Learn about Simple Linear Regression'
			image={thumbnail}

			/>
			<VideoRow
			views='10M'
			subs='5M'
			description='The videos focus primarily on the workings of the popular machine learning models from the root level. The viewers get to know about training models, hyperparameter tuning, and other challenges that surface while building an ML pipeline.'
			timestamp='5 seconds ago'
			channel='ML learners'
			title='Learn about Simple Linear Regression'
			image={thumbnail}

			/>
			<VideoRow
			views='10M'
			subs='5M'
			description='The videos focus primarily on the workings of the popular machine learning models from the root level. The viewers get to know about training models, hyperparameter tuning, and other challenges that surface while building an ML pipeline.'
			timestamp='5 seconds ago'
			channel='ML learners'
			title='Learn about Simple Linear Regression'
			image={thumbnail}

			/>
			
		</div>
	)
}

export default SearchPage;