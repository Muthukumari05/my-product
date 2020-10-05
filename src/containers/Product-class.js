import React,{ Component } from "react";
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';


import './Product.css';
import RangeBar from '../../components/RangeBar/RangeBar';
import DropdownSorting from '../../components/Dropdown/Dropdown';
import Item from '../../components/Item/Item';
//import Products from '../../ProductList';
import { useStateValue } from '../../context/StateProvider';


class Product extends Component{
	
	const [{products} ] = useStateValue();
	
	state = {
    value: {
      start: 30,
      end: 150,
    },
	sortingValue:'Default Sorting'
	
  };
	
	onChangeValue = (value) => {
    this.setState({ value:value });
  };


	onSortingChange = event => {
    const sorting = event.target.innerHTML;
    this.setState({ sortingValue:sorting });
	}
	
	render(){
			  
		
		return(
		<Container>
			<Row>
				<Col className="mt-3">
					<div className="d-flex">
						<div className="mr-auto"><h4>Products</h4></div>
						<div className="addProduct"><Button  variant="danger" >Add product</Button></div>
					</div>
				
				</Col>
			</Row>
			
			<Row className="mt-3">
				<Col xs={6} md={3} className="mt-2">
					<div className="categories">CATEGORIES</div>
					<Card className="mt-2 cards">
						<ListGroup variant="flush">
						<ListGroup.Item>Books</ListGroup.Item>
						<ListGroup.Item>T-Shirts</ListGroup.Item>
						<ListGroup.Item>Bags</ListGroup.Item>
						<ListGroup.Item>Misc</ListGroup.Item>

						</ListGroup>
					</Card>
					<div className="mt-2 categories">FILTER BY PRICE</div>
					    <div className="root">
						
								
									<RangeBar  
									values={this.state.value} 
									rangeChange={this.onChangeValue} />											
														
															
						</div>

					
				</Col>
				<Col xs={12} md={8} className="m-2">
						<Row>
							<Col>
							<div className="d-flex">
					
								<div className="mr-auto">Showing</div>
								
											<DropdownSorting 
											sorting = {this.state.sortingValue}
											clicked={this.onSortingChange} />		
							</div>
							</Col>
						</Row>
					
					<Row>
					
						{products.map(product => (
						
						<Col xs={6}  md={4} className="mt-3">
								<Item  key={product.id}
										img={product.src}
										name={product.name}
										price={product.price}
								/>
								
						</Col>		
								))}
					
						
					
					

					</Row>
				
				</Col>
			</Row>
		</Container>
	
	
	)
	}
	
	
}


export default Product;
