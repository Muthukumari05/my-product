export default {
  root: {
    width: '50%',
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  description: {
    color: '#545252',
  },
  label: {
    marginBottom: 10,
  },
  valueText: {
    color: '#000066',
    fontWeight: '600',
    margin: '5px 5px 0',
  },
  code: {
    margin: '10px 0',
    textAlign: 'left',
  },
  info: {
    fontStyle: 'italic',
    color: '#3131d4',
    fontSize: 15,
    margin: '5px 0',
  },
  sliderWrapper: {
    width: '75%',
  },
  slider: {
    height: 40,
	width:'136%',
	
  },
  trackStyle: {
    height: 5,
    border: '3px solid #6c757d57',
    backgroundColor: 'white',
    top: 14,
  },
  highlightedTrackStyle: {
    height: 5,
    border: 'none',
    backgroundColor: 'none',
    top: 14,
  },
  handleStyle: {
    height: 20,
    width: 20,
    border: 'none',
    backgroundColor: '#6c757dc2',
	top:'16%',
  },
  hoveredHandleStyle: {
    backgroundColor: 'white',
    border: '5px solid #6c757d57',
    boxShadow: '0px 0px 5px 0px #6c757d57',
  },
  activeHandleStyle: {
    backgroundColor: 'white',
    border: '5px solid #6c757d57',
    boxShadow: 'inset 0px 0px 5px 0px #6c757d57',
  },
  focusedHandleStyle: {
    boxShadow: '0px 0px 5px 0px #6c757d57',
    border: '5px solid #6c757d57',
  },
};