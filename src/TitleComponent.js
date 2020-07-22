import React from 'react';
import './Title.css';

class TitleComponent extends React.Component {
  
  render () {

   const title = this.props.title;

   return (
    <div className="Title">
    
      *
      <h4> {title} </h4>
      *

    </div>
    );
  }
}


export default TitleComponent;