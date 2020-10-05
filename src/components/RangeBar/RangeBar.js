
import React, { Component } from 'react';
import { Container,  Button } from 'react-bootstrap';
import { RangeSlider } from 'reactrangeslider';
import styles from './RangeBarStyle';

const RangeBar = (props) =>{
	



	
	

	  return(
	  <>
	  <div style={styles.sliderWrapper}>
          <RangeSlider
            value={props.values}
			onChange={props.rangeChange}
            min={ 10 }
            max={ 600 }
			step={3}
           
            wrapperStyle={styles.slider}
            trackStyle={styles.trackStyle}
            highlightedTrackStyle={styles.highlightedTrackStyle}
            handleStyle={styles.handleStyle}
            hoveredHandleStyle={styles.hoveredHandleStyle}
            focusedHandleStyle={styles.focusedHandleStyle}
            activeHandleStyle={styles.activeHandleStyle}
          />
        </div>
         
		<div className="d-flex">
			<div className="mr-auto"><Button  variant="danger" style={{width:"150%"}} onClick={props.clicked}>Filter</Button></div>
			<div>Price:<span style={styles.valueText}>${props.values.start} - ${props.values.end}</span></div>
								
		</div>
		 </>
       
		
	  )
  
	
	
}
			 
export default 	RangeBar;		 
			 
			 
			 
			 
	