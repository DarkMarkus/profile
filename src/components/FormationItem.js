import React, { Component } from 'react';

import ites from '../assets/ites.jpg';
// import citm from '../assets/citm.jpg';
// import sarria from '../assets/sarria.jpg';

class FormationItem extends Component {
  render() {
    return (
      <li className="li-nodecoration">
        <div className="item-image"><img src={ites} /></div>
        <div className="item-info">
          <div>{this.props.date}</div>
          <div>{this.props.title}</div>
          <div>{this.props.school}</div>
          <div>{this.props.adress}</div>
          <div>{this.props.description}</div>
        </div>
      </li>
    );
  }
}

export default FormationItem;
