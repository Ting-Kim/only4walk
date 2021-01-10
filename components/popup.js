import React from 'react';
import {popup, popup_inner} from './popup_styles.js';
//
//
export default class Popup extends React.Component {
  render() {
    return (
      <div className='popup' style={popup}>
        <div className='popup_inner' style={popup_inner}>
          <h2>{this.props.text}</h2>
          <a href='https://www.youtube.com/' target='_blank'>youtube link</a>
        </div>
      </div>
    );
  }
}
