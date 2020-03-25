import React, {Component} from 'react';
import styling from './Covid.module.css';
import axios from 'axios';

import GlobalCD from '../../components/CD/CD';
import SelectedCovid from '../../components/SelectedCovid/SelectedCovid';
import Spinner from '../../components/UI/Spinner/Spinner';

class Covid extends Component {
  state = {
    globalReport: null
  };

  componentDidMount() {
    axios('https://covid19.mathdro.id/api').then(res => {
      const loadedReport = res.data;
      this.setState({
        globalReport: loadedReport
      });
    });
  }

  render() {
    let global = <Spinner />;
    if (this.state.globalReport) {
      global = (
        <div className={styling.Covid}>
          <h1 style={{marginBottom: '3rem'}} className="title head">
            Covid-19 Information
          </h1>
          <h2 className="subtitle">
            Last Update: {this.state.globalReport.lastUpdate}
          </h2>
          <GlobalCD
            recover={this.state.globalReport.recovered.value}
            dead={this.state.globalReport.deaths.value}
            life={this.state.globalReport.confirmed.value}
          />
          <SelectedCovid />
        </div>
      );
    }
    return <>{global}</>;
  }
}

export default Covid;
