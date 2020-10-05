import React from  'react';
import { Dropdown } from 'react-bootstrap';

import  './Dropdon.css';

const DropdownSorting = (props) => (

							<Dropdown >
								<Dropdown.Toggle className="outline" variant="light" id="dropdown-basic">
								{props.sorting}
								</Dropdown.Toggle>

							  <Dropdown.Menu>
								<Dropdown.Item href="#/action-1" onClick={props.clicked}>Price High to low</Dropdown.Item>
								<Dropdown.Item href="#/action-2" onClick={props.clicked}>Price Low to High</Dropdown.Item>
								<Dropdown.Item href="#/action-3" onClick={props.clicked}>Default sorting</Dropdown.Item>
							  </Dropdown.Menu>
							</Dropdown>

   
);
export default DropdownSorting;