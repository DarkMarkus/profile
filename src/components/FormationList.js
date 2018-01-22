import React, { Component } from 'react';

import FormationItem from './FormationItem';

class FormationList extends Component {
  render() {
    const {
      studies,
    } = this.props;

    return (
      <ul>
        {studies &&
        <FormationItem
          key={studies.key}
          title={studies.title}
          date={studies.date}
          school={studies.school}
          adress={studies.adress}
          description={studies.description}
          image={studies.image}
        />
                }
      </ul>
    );
  }
}

export default FormationList;
