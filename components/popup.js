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
          <img class="fit-picture"
     src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
     alt="Grapefruit slice atop a pile of other slices"></img>
          <a href='https://www.youtube.com/' target='_blank'>youtube link</a>
        </div>
      </div>
    );
  }
}
