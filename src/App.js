import React from 'react';
import './App.css';
import StickyHeader from './Components/StickyHeader/StickyHeader.js';
import Sidebar from './Components/Sidebar/Sidebar.js';
import RecommendedVideos from './Components/RecommendedVideos/RecommendedVideos.js';
import SearchPage from './Components/SearchPage/SearchPage.js';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'; //see how we wrote BrowserRouter as Router ie assigning new name to BrowserRouter
function App() {
  return (
    <div className="app">

    	<Router>
    		<StickyHeader/>   {/*see this is common in all the the pages*/}

    		<Switch>


    			<Route path='/Search'>   {/*Note if we place route="/" at the start ie instead of "/Search" then always the "/" route will be run */}
                
    				<div className='app__page'>
				       	<Sidebar/>
				       	
				       	<SearchPage/>
			      	</div>
    			</Route>

    			<Route path='/'>
                
    				<div className='app__page'>
				       	<Sidebar/>
				      	<RecommendedVideos/>
			      	</div>
			      	        
    			</Route>

    		</Switch>

    	</Router>
      
      
      	

      
    </div>
  );
}

export default App;
