import React from 'react';
import Popup from './popup';
import {greatPlaceStyle, greatPlaceStyleHover, markerStyleHover} from './my_great_place_with_hover_styles.js';

export default class MyGreatPlaceWithHover extends React.PureComponent {
  constructor(props){  
    super(props);  
    this.state = { showPopup: false };  
    }  
    
    togglePopup() {  
      this.setState({  
          showPopup: !this.state.showPopup  
      }); 
    }
  render() {
    const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;
    
    return (
      <div>
        {this.props.$hover ?
        <div style={markerStyleHover}>
          {this.props.text}
          호수공원공원dasdasdasdsadasd
        </div>
        : null
        }
       <div style={style}  onClick={this.togglePopup.bind(this)}>
          
       </div>
      {this.state.showPopup ?  
        <Popup  
          text='popup!'  
          closePopup={this.togglePopup.bind(this)}  
        />  
        : null  
        }  
        </div>
    );
  }
}
