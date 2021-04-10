import React from 'react';
import './sidebarRow.css';


function SidebarRow({selected,Icon,title}) {
	return (
		<div className={`sidebarRow ${selected && "selected"}`}> {/*see here when selected is true then className="sidebarRow selected" and 
																	when false then className ="sidebarRow selected" as false && "selected" =false*/} 
			<Icon className='sidebarRow__icon'/>  { /*see if we write <icon/> then we wont get the icon as component should be capitalized */}
			<h2 className='sidebarRow__title'>{title}</h2>
			
		</div>
	)
}

export default SidebarRow;