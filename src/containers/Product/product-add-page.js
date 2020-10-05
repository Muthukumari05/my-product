import React,{ useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import {  useHistory } from 'react-router-dom';


import './Product.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

import RangeBar from '../../components/RangeBar/RangeBar';
import DropdownSorting from '../../components/Dropdown/Dropdown';
import Item from '../../components/Item/Item';
import TopList from '../../components/TopList/TopList';

import AddProduct from '../../components/Add-product/AddProduct';

import { useStateValue } from '../../context/StateProvider';


const ProductPageAdd =(props) => {
	
	const [{products}, dispatch ] = useStateValue();
	
	
	const [modalShow,setModalShow] = useState(false);
	const [ category, setCategory ] = useState('');
	const [title,setTitle] = useState('');
	const [price,setPrice] = useState('');
	const [checked, setChecked] = useState(false);
	const [img, setImg] = useState('');
	
	const history = useHistory();

		
	const [sortingValue, setSortingValue] = useState('Default Sorting');
	  
	  const [value, setValue] = useState({
      start: 20,
      end: 550,
	  
    });
		

	

	const onChangeValue = (value) => {
    setValue(value);
		};
	

	const	onSortingChange = event => {
    const sorting = event.target.innerHTML;
		setSortingValue(sorting);
	dispatch({
				type: 'SORT_L_H',
				order:event.target.innerHTML
			});

	}
	
	const onClickFilter = () => {
		alert("clicked")
		console.log(value,{value});
		let min = [];
		 min = {value}
 		console.log(min.value.start,"min")
		dispatch({
				type: 'FILTER_BY_PRICE',
				price: {"min":min.value.start,"max":min.value.end}
			});
	}
		

	const categoryHandler = ( event ) => {
		let category = event.target.value;
		setCategory(category);
	}
	
	const titleHandler = ( event ) => {
		let title = event.target.value;
		setTitle(title);
	}
	
	const priceHandler = ( event ) => {
		let price = event.target.value;
		setPrice(price);
	}
	
	const topHandler =(event) =>{
		let isChecked = event.target.checked;
		setChecked(isChecked);
		
	}
	const imgHandler = ( event ) => {
		let img = event.target.value;
		setImg(img);
	}
	
		const addButtonClicked = () =>{
			setModalShow(true);
	
		}
	
		const addCancelledHandler = () =>{
			setModalShow(false);
		}
		
		const addSavedHandler = (event) =>{
			event.preventDefault();
			
			let newData = {category,title,price,checked,img}
			alert(JSON.stringify(newData));
			let datas = JSON.stringify(newData);
			
			let rate = []
			let rating = newData.checked == true ? rate.push(1,2,3,4):rate.push(1,2);
			
			dispatch({
					type: 'ADD_PRODUCT',
					data:  {"category":newData.category,"name":newData.title,"price":newData.price,
					"src":newData.img,"top":newData.checked,"rating":rate}
				});
			setModalShow(false);
			 history.push('/');
			 
		}
	
		
	const result = products.filter(item => item.top == 1)
	
	    
    

		return(
		<Aux>
			<Modal show={modalShow} modalClosed={addCancelledHandler}>
                    <AddProduct 
						category={category}
						categoryChanged={categoryHandler}
						title={title}
						titleChanged={titleHandler}
						price={price}
						priceChanged={priceHandler}
						isChecked={checked}
						topChanged={topHandler}
						img={img}
						imgChanged={imgHandler}
						addCancelled={addCancelledHandler}
						addSaved={addSavedHandler}
					/>
              </Modal>
                
		
		<Container>
			<Row>
				<Col className="mt-3">
					<div className="d-flex">
						<div className="mr-auto"><h4>Products</h4></div>
						<div className="addProduct"><Button  variant="danger"  onClick={addButtonClicked}>Add product</Button></div>
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
									values={value} 
									rangeChange={onChangeValue}
									clicked={onClickFilter}		/>											
														
															
						</div>
					<div className="mt-2 categories">TOP RATED PRODUCTS</div>
						
						
					<Row>
						<Col className="mt-2">
							{result.map(item =>
						<TopList
								key={item.id}
								img={item.src}
								name={item.name}
								price={item.price}
								rate={item.rating}
						/>
						
						)
							
						}
						
						
						</Col>
						
					</Row>
					
				</Col>
				<Col xs={12} md={8} className="m-2">
						<Row>
							<Col>
							<div className="d-flex">
					
								<div className="mr-auto"> 
								
					
									  

								
								</div>
								
											<DropdownSorting 
											sorting = {sortingValue}
											clicked={onSortingChange} />		
							</div>
							</Col>
						</Row>
					
					<Row>
					
						
						{products.map(product => (
						
						<Col xs={6}  md={4} className="mt-3" key={product.id}>
								<Item  
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
	</Aux>
	
	)
	
	
	
}


export default ProductPageAdd;
