import React from 'react';
//import './style.css';

export default class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        </div>
      </div>
    );
  }
}
