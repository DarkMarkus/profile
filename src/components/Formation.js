import React, { Component } from 'react';

import FormationList from './FormationList';

class Formation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: 0,
    };
    this.moveForward = this.moveForward.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
  }

  moveForward() {
    this.setState({ element: this.state.element + 1 });
  }

  moveBackward() {
    this.setState({ element: this.state.element - 1 });
  }

  render() {
    const {
      data: { sections },
    } = this.props;


    return (
      <div className="sectionContainer">
        <h1>Mi formación</h1>
        <a href="#" onClick={this.moveBackward} className="left-arrow">
          <div className="flecha_izquierda" />
        </a>
        <div className="slider">
          <FormationList studies={sections[1].studies[this.state.element]} />
        </div>
        <a href="#" onClick={this.moveForward} className="left-arrow">
          <div className="flecha_derecha" />
        </a>
      </div>
    );
  }
}

export default Formation;
