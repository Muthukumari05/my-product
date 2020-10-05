import React from 'react';
import { Card } from 'react-bootstrap';

import './Item.css';

const Item = (props) => {
	
	return (

		<div>
			<Card>
					  <Card.Img variant="top" src={`../assets/images/${props.img}.jpg`} height="120px" width="auto"  alt='product' />
					  <Card.Body className="pad">
						
						<Card.Text>
							<span>{props.name}</span><br/>
							<span>${props.price}</span>
							  
						</Card.Text>
						
						
					  </Card.Body>
			</Card>			
		</div>
		
	);
}

export default Item;