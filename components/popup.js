import React from 'react';
import {popup, popup_inner, popup_button} from './popup_styles.js';
//
//
export default class Popup extends React.Component {
  render() {
    return (
      <div className='popup' style={popup}>
        <div className='popup_inner' style={popup_inner}>
          <button style={popup_button} onClick={this.props.closePopup}>X</button>
          <h2>{this.props.text}</h2>
          <p>123123</p>
          <a href='https://www.youtube.com/' target='_blank'>youtube link</a>
        </div>
      </div>
    );
  }
}
