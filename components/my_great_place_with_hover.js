import React from 'react';
import Popup from './popup';
import {greatPlaceStyle, greatPlaceStyleHover} from './my_great_place_with_hover_styles.js';

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
       <div style={style}  onClick={this.togglePopup.bind(this)}>
          {this.props.text}
          {' '}
          {123}
          {this.state.showPopup ?  
          <Popup  
            text='Click "Close Button" to hide popup!'  
            closePopup={this.togglePopup.bind(this)}  
            
            
          />  
          : null  
          }  
       </div>

    );
  }
}
