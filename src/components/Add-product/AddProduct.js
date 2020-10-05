import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Aux from '../../hoc/Auxiliary/Auxiliary';

import './AddProduct.css';


class AddProduct extends  Component  {
    
    render() {
        
        return(
            <Aux>
                <h3 className="textCenter">Add Product</h3>
                <Form>
					  <Form.Group controlId="exampleForm.ControlSelect1" >
							<Form.Label>Product Category</Form.Label>
							<Form.Control as="select"  
							value={this.props.category} onClick={this.props.categoryChanged} >
							  <option>Books</option>
							  <option>T-Shirts</option>
							  <option>Blog</option>
							  <option>Misc</option>
							 
							</Form.Control>
						</Form.Group>
						
					<Form.Group>
						<Form.Label>Product Title</Form.Label>
					  <Form.Control type="text" placeholder="Enter Product Title" 
					  					 value={this.props.title} 
										 onChange={this.props.titleChanged}
										 />
					  <br />
					  <Form.Label>Product Price</Form.Label>
					  <Form.Control type="number" placeholder="Enter Price"
								value={this.props.price}
								onChange={this.props.priceChanged}

							/>
					  
					  
					</Form.Group>				
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Top Product" 
							checked={this.props.isChecked} onChange={this.props.topChanged} />
					</Form.Group>
											
					  
					 <div> 
						<p>Upload Product Image</p>
						<input type="file"   onChange={this.props.imgChanged} /> 
						 
					</div> 
					  
						<hr />					  
						
					<Button variant="secondary" type="submit" className="space" onClick={this.props.addCancelled}>
						Cancel
					  </Button>	
						
					  <Button variant="danger" type="submit" className="space_two" onClick={this.props.addSaved}>
						Save
					  </Button>
					</Form>
				</Aux>
        );
    }


}

export default AddProduct;