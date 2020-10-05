import React from 'react';
import { Container } from 'react-bootstrap';
import './TopList.css';

const TopList = (props) => {
	
	
	return (
		<div className ="d-flex bottom">
			<div className="mr-1">
				<img src={`../assets/images/${props.img}.jpg`} height="70px" width="50px" />
			</div>
			<div>
					<span className="left">{props.name}</span><br />
					<span className="left_star">
					{props.rate.map(item => 
					
					<img  src="../../assets/images/star.jpg" height="15px" width="auto" />
					
					)}
							

		
					
					</span><br />
					<span className="left">${props.price}</span>
					
			</div>
		
		</div>

		
		
	);
}

export default TopList;