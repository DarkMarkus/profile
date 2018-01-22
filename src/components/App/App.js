import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import Nav from '../Nav';
import BasicInfo from '../BasicInfo';
import Formation from '../Formation';
import getSections from '../sections';
import '../App/App.css';

export class App extends Component {
  render() {
    return [
      <div className="App">
        <div className="App-header">
          <h1>Curriculim Vitae</h1>
        </div>
        <Nav />
        <main key="app-main">
          <Switch>
            <Route path="/personal" render={() => <BasicInfo data={this.props.availableSections} />} />
            <Route path="/academic" render={() => <Formation data={this.props.availableSections} />} />
            {/* <Route exact path="/experience" component={CampaignsView} />
          <Route path="/hobbies" component={CampaignView} /> */}
          </Switch>
        </main>,
      </div>,
    ];
  }
}

function mapStateToProps(state) {
  return {
    availableSections: getSections(state),
  };
}

const mapDispatchToProps = {
  getSections,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
