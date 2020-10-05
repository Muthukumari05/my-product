import React,{ useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';


import './Product.css';
import RangeBar from '../../components/RangeBar/RangeBar';
import DropdownSorting from '../../components/Dropdown/Dropdown';
import Item from '../../components/Item/Item';
import TopList from '../../components/TopList/TopList';
import Pagination from '../../components/Pagination/Pagination';

import { useStateValue } from '../../context/StateProvider';


const ProductPage =(props) => {
	
	const [{products}, dispatch ] = useStateValue();
	
	const [allBooks, setAllBooks] = useState([]);
	const [currentBooks, setCurrentBooks] = useState([]);
	const [currentPage, setCurrentPage] = useState(null);
	const [totalpages, setTotalPages] = useState(null);
	
		
	const [sortingValue, setSortingValue] = useState('Default Sorting');
	  
	  const [value, setValue] = useState({
      start: 20,
      end: 550,
	  
    });
	
	useEffect(() => {
		setAllBooks(products);
		
		},[]);
	

		const onPageChanged = data => {
			
			const { currentPage, totalPages, pageLimit } = data;
			const offset = (currentPage - 1) * pageLimit;
			const currentBooks = allBooks.slice(offset, offset + pageLimit);			
			setCurrentBooks(currentBooks);			
			setCurrentPage(currentPage);			
			setTotalPages(setTotalPages);
  };
		

	

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
			  
	const result = products.filter(item => item.top == 1)
	
	    
    const totalBooks = allBooks.length;

    if (totalBooks === 0) return null;

    const headerClass = [
      "text-dark py-2 pr-4 m-0",
      currentPage ? "border-gray border-right" : ""
    ]
      .join(" ")
      .trim();

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
					
								<div className="mr-auto">Showing
									  <Pagination
										totalRecords={totalBooks}
										pageLimit={9}
										pageNeighbours={1}
										onPageChanged={onPageChanged}
									  />

								
								</div>
								
											<DropdownSorting 
											sorting = {sortingValue}
											clicked={onSortingChange} />		
							</div>
							</Col>
						</Row>
					
					<Row>
					
						
						{currentBooks.map(product => (
						
						<Col xs={6}  md={4} className="mt-3" key={product.id}>
								<Item  
										img={product.src}
										name={product.name}
										price={product.price}
								/>
								
						</Col>		
								))}
					
					
					<Col>
						
						            					</Col>

					</Row>
				
				</Col>
			</Row>
		</Container>
	
	
	)
	
	
	
}


export default ProductPage;
